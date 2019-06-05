<script>
    import {settings} from './SettingsStore.js'
    
    let width = $settings.width;
    let height = $settings.height;
    let fieldDifficult = $settings.difficult;
    

	let arr = [];
	let fliped = 0;

	function step(x,y){
		let off = [[-1,0],[1,0],[0,-1],[0,1],[0,0]];
		for(let [dx,dy] of off){
			let cx = x + dx;
			let cy = y + dy;
			if(cx >= 0 && cy >= 0 && cx<width && cy<height){
				arr[cx][cy] = 1 - arr[cx][cy];
				if(arr[cx][cy])++fliped;
				else --fliped;
			}
		}
	};
	
	function userStep(x,y){
		step(x,y);
		if(fliped == 0)alert("you win");
	}
	
	function gc(limit){
		let c = Math.round(Math.random()*limit);
		return Math.min(c,limit - 1);
	};
	
	
	
	function generateField(){
        if(width < 8 || height < 8)return;
		fliped = 0;
		arr = [];
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
    settings.subscribe((new_settings)=>{
        ({width,height,difficult:fieldDifficult} = new_settings);
        generateField()
    });
    
</script>

<style>
	div.tyle {
		min-height:32px;
		min-width:32px;
		border: solid 1px black;
		
	}
	div.tyle:hover{
		border: solid 1px white
	}
	div.flex {
		display: flex;
		flex-direction: row;
	}
</style>

{#each arr as row,x}
<div class=flex>
{#each row as v,y}
<div class='tyle' 
	style="background-color:{v?'red':'green'}" 
	on:click={()=>userStep(x,y)}
	/>
{/each}
</div>
{/each}