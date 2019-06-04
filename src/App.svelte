<style>
	div.red {
		min-height:32px;
		min-width:32px;
		border: solid 1px black;
		background-color:red;
	}
	div.green {
		min-height:32px;
		min-width:32px;
		border: solid 1px black;
		background-color:green;
	}
	div.green:hover {
		background-color: red;
	}
	div.flex {
		display: flex;
		flex-direction: row;
	}
</style>
<script>
	export let width = 16;
	export let height = 16;
	let arr = [];
	let fieldDifficult = 1;
	
	function step(x,y){
		let off = [[-1,0],[1,0],[0,-1],[0,1],[0,0]];
		for(let [dx,dy] of off){
			let cx = x + dx;
			let cy = y + dy;
			if(cx >= 0 && cy >= 0 && cx<width && cy<height)
				arr[cx][cy] = 1 - arr[cx][cy];
		}
	};
	
	function userStep(x,y){
		step(x,y);
		let wc = arr.reduce(
			(acc,v)=>acc + v.reduce((acc,v)=>acc + v,0),0
		);
		if(wc == 0)alert("you win");
	}
	
	function gc(limit){
		let c = Math.round(Math.random()*limit);
		return Math.min(c,limit - 1);
	};
	
	
	
	function generateField(){
		console.log("GEN");
		for(let x = 0;x<width;++x){
			arr[x] = [];
			for(let y = 0;y<height;++y){
				arr[x][y] = 0;
			}
		}
		
		let st = (gc(20) + 13)*fieldDifficult;
		for(let i = 0;i<st;++i)
			step(gc(width),gc(height));	
	}
	generateField();	
</script>

{#each arr as row,x}
<div class=flex>
{#each row as v,y}
<div class={v?'red':'green'} 
		 on:click={()=>userStep(x,y)}></div>
{/each}
</div>
{/each}
<label>Сложность поля</label>
<input type="number" bind:value={fieldDifficult}/>
<button on:click={generateField}>Пересоздать поле</button>
<label>Размеры поля</label>
<input type='number' bind:value={width}/>
<input type='number' bind:value={height}/>