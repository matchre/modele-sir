$(function() {  
  
	$("#slider3").hide();$("#valeur3").hide();$("#valeur6").hide();$("#valeur7").hide();
				$("#slider6").hide();
				$("#slider7").hide();
   var slider1 = $("#slider1"),  
        tooltip1 = $('#valeur1'), 
		slider2 = $("#slider2"),  
        tooltip2 = $('#valeur2'),  
		slider3 = $("#slider3"),  
        tooltip3 = $('#valeur3'),  
		slider4 = $("#slider4"),  
        tooltip4 = $('#valeur4'),  
		slider5 = $("#slider5"),  
        tooltip5 = $('#valeur5'),  
		slider6 = $("#slider6"),  
        tooltip6 = $('#valeur6'),  
		slider7 = $("#slider7"),  
        tooltip7 = $('#valeur7'); 
		  
    slider1.slider({  				//S
        range: "min",  
        min: 0.01,  
        value: 0.01,  
		max : 1,
		step : 0.01,
		
        slide: function(event, ui) { 
			valeur=$("input[name=methode]:radio:checked").val();
             
			if(valeur!="3"){
				var value1 = slider1.slider('value'); 
				var value2 = slider2.slider('value'); 
				value2=slider2.slider('value',1-value1);
				tooltip1.text(ui.value);
				tooltip2.text(Math.floor((1-ui.value)*100)/100);
			}
			else{
				var value1 = slider1.slider('value'); 
				var value2 = slider2.slider('value');
				var value3 = slider3.slider('value');
				if(slider3.slider('value')<=0){
					
					value2=slider2.slider('value',1-value1);
				tooltip1.text(ui.value);
				tooltip2.text(Math.floor((1-ui.value)*100)/100);
				tooltip3.text("0");
				}
				
				else{
				value3=slider3.slider('value',1-value1-value2);
				tooltip1.text(ui.value);
				tooltip2.text(value2);
				tooltip3.text(Math.floor((1-ui.value-value2)*100)/100);
				
				}
			}
			effacer();
			calculer();
          },  
     }); 
	 slider2.slider({  				//I
        range: "min",  
        min: 0.01,  
        value: 0.01,  
		max : 1,
		step : 0.01, 
		
        slide: function(event, ui) {    
            valeur=$("input[name=methode]:radio:checked").val();
             
			if(valeur!="3"){
				var value1 = slider1.slider('value'); 
				var value2 = slider2.slider('value'); 
				value1=slider1.slider('value',1-value2);
				tooltip1.text(Math.floor((1-ui.value)*100)/100);
				tooltip2.text(ui.value);
			}
			else{
				var value1 = slider1.slider('value'); 
				var value2 = slider2.slider('value');
				var value3 = slider3.slider('value');
				
				if(slider1.slider('value')<=0.01){
					slider1.slider('value',0)
					slider3.slider('value',1-ui.value);
					tooltip2.text(ui.value);
					tooltip3.text(Math.floor((1-ui.value)*100)/100);
					tooltip1.text("0");
				}
				else{
				value1=slider1.slider('value',1-value3-value2);
				tooltip1.text(Math.floor((1-ui.value-value3)*100)/100);
				tooltip2.text(ui.value);
				tooltip3.text(value3);
				}
			}
			
			effacer();
			calculer();
          },  
     }); 
	 slider3.slider({  				//C
        range: "min",  
        min: 0,  
        value: 0,
		max : 1,
		step : 0.01,
        slide: function(event, ui) { 
			valeur=$("input[name=methode]:radio:checked").val();
           if(valeur!="3"){
				
			}
			else{
				var value1 = slider1.slider('value'); 
				var value2 = slider2.slider('value');
				var value3 = slider3.slider('value');
				
				if(slider1.slider('value')<=0.01){
					slider1.slider('value',0)
					value2=slider2.slider('value',1-ui.value);
					tooltip3.text(ui.value);
					tooltip2.text(Math.floor((1-ui.value)*100)/100);
					tooltip1.text("0");
				}
				else{
				slider1.slider('value',1-ui.value-value2);
				tooltip3.text(ui.value);
				tooltip2.text(value2);
				tooltip1.text(Math.floor((1-ui.value-value2)*100)/100);
				
				}
			}
			
			effacer();
			calculer();
          },  
     }); 
	 slider4.slider({  
        range: "min",  
        min: 5,  
        value: 20, 
		max : 30,
        slide: function(event, ui) {    
            var value = slider4.slider('value');  
            tooltip4.text(ui.value);  
			effacer();
			calculer();
          },  
     }); 
	 slider5.slider({  
        range: "min",  
        min: 0,  
        value: 0.5, 
		max : 1,
		step : 0.1,
        slide: function(event, ui) {    
            var value = slider5.slider('value');  
            tooltip5.text(ui.value);  
			effacer();
			calculer();
          },  
     }); 
	 slider6.slider({  
        range: "min",  
        min: 1,  
        value: 5, 
		max : 10,
		step : 0.1,
        slide: function(event, ui) {    
            var value = slider6.slider('value');  
            tooltip6.text(ui.value);  
			effacer();
			calculer();
          },  
     }); 
	 slider7.slider({  
        range: "min",  
        min: 0,  
        value: 0.05, 
		max :0.1,
		step : 0.001,
        slide: function(event, ui) {    
            var value = slider7.slider('value');  
            tooltip7.text(ui.value);  
			effacer();
			calculer();
          },  
     }); 
	
			
			
			var objC = {					//C
				  strokeStyle: "green",
				  strokeWidth: 1,
				  rounded: true
				};
				
				var objI = {				//I
				  strokeStyle: "red",
				  strokeWidth: 1,
				  rounded: true
				};
				
				var objS = {				//S
				  strokeStyle: "blue",
				  strokeWidth: 2,
				  rounded: true
				};
				var objP = {				//P
				  strokeStyle: "black",
				  strokeWidth: 2,
				  rounded: true
				};
				var objR = {				//R
				  strokeStyle: "yellow",
				  strokeWidth: 2,
				  rounded: true
				};
	
	function calculer(){
	
		s=slider1.slider("value");		
		i=slider2.slider("value");		
		c=slider3.slider("value");		
		lambda=slider4.slider("value");
		beta=slider5.slider("value");
		nu=slider6.slider("value");
		mu=slider7.slider("value");
		
		
		ptsS = new Array();
			ptsI = new Array();
			ptsC = new Array();
			ptsP = new Array();
			ptsR = new Array();
			pas=0.1;			
			
		valeur=$("input[name=methode]:radio:checked").val();
		
			
			if(valeur=="1"){
				s=slider1.slider("value");		
		i=slider2.slider("value");		
		c=slider3.slider("value");		
		lambda=slider4.slider("value");
		beta=slider5.slider("value");
		nu=slider6.slider("value");
		mu=slider7.slider("value");
		r=0;
		var p=s+i+c;
				$("#slider3").hide();
				$("#slider6").hide();
				$("#slider7").hide();
				for(j=0;j<=500;j+=1){
				ptsC.push([]);
				ptsI.push([]);
				ptsP.push([]);
				ptsR.push([]);
				ptsS.push([]);
				ptsC[j].push(j);
				ptsC[j].push(c);
				ptsI[j].push(j);
				ptsI[j].push(i);
				ptsP[j].push(j);
				ptsP[j].push(p);
				ptsR[j].push(j);
				ptsR[j].push(r);
				ptsS[j].push(j);
				ptsS[j].push(s);		
				s=(-beta*i*s)*pas+s;
				i=((-i/lambda)+beta*s*i)*pas+i;
				r=(i/lambda)*pas+r;	
				p=s+i+r;
				}
				/*
				function maximum(tableau){
					var max=tableau[0][1];
					for (var j=0;j<(tableau.length-1);j+=1){
						if(max<tableau[j+1][1]){
							max= tableau[j+1][1];
							}
						else{
							
							}						
					}
					return max;
				}
		
				maxi_s=maximum(ptsS);
				maxi_p=maximum(ptsP);
				maxi_i=maximum(ptsI);
				maxi_r=maximum(ptsR);
				maxi_c=maximum(ptsC);
				*/
				
				
				for (var p=0; p<ptsS.length; p+=1) {
				
				    objS['x'+(p+1)] = (ptsS[p][0]);
				    
				    objS['y'+(p+1)] = (1-(ptsS[p][1]))*300+30;
				}
				for (var p=0; p<ptsR.length; p+=1) {
				
				    objR['x'+(p+1)] = (ptsR[p][0]);
				    
				    objR['y'+(p+1)] = (1-(ptsR[p][1]))*300+30;
				}
				for (var p=0; p<ptsC.length; p+=1) {
				
				    objC['x'+(p+1)] = (ptsC[p][0]);
				    
				    objC['y'+(p+1)] = (1-(ptsC[p][1]))*300+30;
				}
				for (var p=0; p<ptsP.length; p+=1) {
				
				    objP['x'+(p+1)] = (ptsP[p][0]);
				    
				    objP['y'+(p+1)] = (1-(ptsP[p][1]))*300+30;
				}			
				// Add the points from the array to the object
				
				for (var p=0; p<ptsI.length; p+=1) {
				
					objI['x'+(p+1)] = ptsI[p][0];
					
					objI['y'+(p+1)] = (1-(ptsI[p][1]))*300+30;
					
				}
				$("#canvas1").drawLine(objS);
				$("#canvas1").drawLine(objI);
				$("#canvas1").drawLine(objP);
				$("#canvas1").drawLine(objR);
				
			}
			else if(valeur=="2"){
				s=slider1.slider("value");		
				i=slider2.slider("value");		
				c=slider3.slider("value");		
				lambda=slider4.slider("value");
				beta=slider5.slider("value");
				nu=slider6.slider("value");
				mu=slider7.slider("value");
				r=0;
		var p=s+i+c;
				
				$("#slider3").hide();
				$("#slider6").hide();
				$("#slider7").show();
				for(j=0;j<=500;j+=1){
				ptsC.push([]);
				ptsI.push([]);
				ptsP.push([]);
				ptsR.push([]);
				ptsS.push([]);
				ptsC[j].push(j);
				ptsC[j].push(c);
				ptsI[j].push(j);
				ptsI[j].push(i);
				ptsP[j].push(j);
				ptsP[j].push(p);
				ptsR[j].push(j);
				ptsR[j].push(r);
				ptsS[j].push(j);
				ptsS[j].push(s);		
				s=(-beta*i*s)*pas+s;				
				i=((-i/lambda)-(mu*i)+beta*i*s)*pas+i;
				r=(i/lambda)*pas+r;	
				p=s+i+r;
				}
				/*function maximum(tableau){
					var max=tableau[0][1];
					for (var j=0;j<(tableau.length-1);j+=1){
						if(max<tableau[j+1][1]){
							max= tableau[j+1][1];
							}
						else{
							
							}						
					}
					return max;
				}
		
				maxi_s=maximum(ptsS);
				maxi_p=maximum(ptsP);
				maxi_i=maximum(ptsI);
				maxi_r=maximum(ptsR);
				maxi_c=maximum(ptsC);
				*/
				
				for (var p=0; p<ptsS.length; p+=1) {
				
				    objS['x'+(p+1)] = (ptsS[p][0]);
				    
				    objS['y'+(p+1)] = (1-(ptsS[p][1]))*300+30;
				}
				for (var p=0; p<ptsR.length; p+=1) {
				
				    objR['x'+(p+1)] = (ptsR[p][0]);
				    
				    objR['y'+(p+1)] = (1-(ptsR[p][1]))*300+30;
				}
				for (var p=0; p<ptsC.length; p+=1) {
				
				    objC['x'+(p+1)] = (ptsC[p][0]);
				    
				    objC['y'+(p+1)] = (1-(ptsC[p][1]))*300+30;
				}
				for (var p=0; p<ptsP.length; p+=1) {
				
				    objP['x'+(p+1)] = (ptsP[p][0]);
				    
				    objP['y'+(p+1)] = (1-(ptsP[p][1]))*300+30;
				}			
				// Add the points from the array to the object
				
				for (var p=0; p<ptsI.length; p+=1) {
				
					objI['x'+(p+1)] = ptsI[p][0];
					
					objI['y'+(p+1)] = (1-(ptsI[p][1]))*300+30;
					
				}
				$("#canvas1").drawLine(objS);
				$("#canvas1").drawLine(objI);
				$("#canvas1").drawLine(objP);
				$("#canvas1").drawLine(objR);
				
			}
			else{
				s=slider1.slider("value");		
		i=slider2.slider("value");		
		c=slider3.slider("value");		
		lambda=slider4.slider("value");
		beta=slider5.slider("value");
		nu=slider6.slider("value");
		mu=slider7.slider("value");
		r=0;
		var p=s+i+c;
				$("#slider3").show();
				$("#slider6").show();
				$("#slider7").show();
				for(j=0;j<=500;j+=1){
				ptsC.push([]);
				ptsI.push([]);
				ptsP.push([]);
				ptsR.push([]);
				ptsS.push([]);
				ptsC[j].push(j);
				ptsC[j].push(c);
				ptsI[j].push(j);
				ptsI[j].push(i);
				ptsP[j].push(j);
				ptsP[j].push(p);
				ptsR[j].push(j);
				ptsR[j].push(r);
				ptsS[j].push(j);
				ptsS[j].push(s);		
				s=(-beta*i*s)*pas+s;
				c=(beta*i*s-(c/nu))*pas+c;
				i=((c/nu)-(i/lambda)-(mu*i))*pas+i;
				r=(i/lambda)*pas+r;
				p=s+i+r+c;
				}
				/*function maximum(tableau){
					var max=tableau[0][1];
					for (var j=0;j<(tableau.length-1);j+=1){
						if(max<tableau[j+1][1]){
							max= tableau[j+1][1];
							}
						else{
							
							}						
					}
					return max;
				}
		
				maxi_s=maximum(ptsS);
				maxi_p=maximum(ptsP);
				maxi_i=maximum(ptsI);
				maxi_r=maximum(ptsR);
				maxi_c=maximum(ptsC);
				*/
				
				for (var p=0; p<ptsS.length; p+=1) {
				
				    objS['x'+(p+1)] = (ptsS[p][0]);
				    
				    objS['y'+(p+1)] = (1-(ptsS[p][1]))*300+30;
				}
				for (var p=0; p<ptsR.length; p+=1) {
				
				    objR['x'+(p+1)] = (ptsR[p][0]);
				    
				    objR['y'+(p+1)] = (1-(ptsR[p][1]))*300+30;
				}
				for (var p=0; p<ptsC.length; p+=1) {
				
				    objC['x'+(p+1)] = (ptsC[p][0]);
				    
				    objC['y'+(p+1)] = (1-(ptsC[p][1]))*300+30;
				}
				for (var p=0; p<ptsP.length; p+=1) {
				
				    objP['x'+(p+1)] = (ptsP[p][0]);
				    
				    objP['y'+(p+1)] = (1-(ptsP[p][1]))*300+30;
				}							
				for (var p=0; p<ptsI.length; p+=1) {
				
					objI['x'+(p+1)] = ptsI[p][0];
					
					objI['y'+(p+1)] = (1-(ptsI[p][1]))*300+30;
					
				}
				$("#canvas1").drawLine(objS);
				$("#canvas1").drawLine(objI);
				$("#canvas1").drawLine(objP);
				$("#canvas1").drawLine(objR);
				$("#canvas1").drawLine(objC);
				
				
			}	
			
		
			}	
				
				
			
			
				
	function effacer(){
				
					$("canvas").clearCanvas();
					dessinerAxes();
				}
	
	function dessinerAxes(){
				$("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 1, y1: 30,
				  x2: 10, y2: 30,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 30, y: 10,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "  Population"});
				 
				  $("canvas").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 1, y1: 270,
				  x2: 10, y2: 270,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 10, y: 270,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "0.2"});
				  $("canvas").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 1, y1: 210,
				  x2: 10, y2: 210,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 10, y: 210,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "0.4"});
				  $("canvas").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 1, y1: 150,
				  x2: 10, y2: 150,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 10, y: 150,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "0.6"});
				  $("canvas").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 1, y1: 90,
				  x2: 10, y2: 90,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 10, y: 90,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "0.8"});
				  $("canvas").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 1, y1: 30,
				  x2: 10, y2: 30,});
				  
				  $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 50, y1: 320,
				  x2: 50, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 60, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "50"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 100, y1: 320,
				  x2: 100, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 110, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "100"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 150, y1: 320,
				  x2: 150, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 160, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "150"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 200, y1: 320,
				  x2: 200, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 210, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "200"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 250, y1: 320,
				  x2: 250, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 260, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "250"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 300, y1: 320,
				  x2: 300, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 310, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "300"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 350, y1: 320,
				  x2: 350, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 360, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "350"});
				   $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 400, y1: 320,
				  x2: 400, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 410, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "400"});
				  $("#canvas1").drawLine({
					strokeStyle: "black",
				  strokeWidth: 1,
				  rounded: true,
				  x1: 450, y1: 320,
				  x2: 450, y2: 330,}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 460, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "450"}).drawText({
				   fillStyle: "#9cf",
				  strokeStyle: "black",
				  strokeWidth: 1,
				  x: 490, y: 310,
				  fontSize: "10pt",
				  fontFamily: "sans-serif",
				  text: "t"});
				  $("canvas").drawImage({
				  source: "img/legende.png",
				  x: 350, y: 5,
				  width: 150,
				  height: 60,
				  fromCenter: false
				});
				  }
				  dessinerAxes();
				  
	$("#valid").on('click',function(){effacer();calculer()});
	$("#SIRsansµ").on('click',function(){$("#slider3").hide();$("#valeur3").hide();$("#valeur6").hide();$("#valeur7").hide();
				$("#slider6").hide();
				$("#slider7").hide();});
	$("#SIRavecµ").on('click',function(){$("#slider3").hide();$("#valeur3").hide();$("#valeur6").hide();$("#valeur7").show()
				$("#slider7").show();});
	$("#SIRC").on('click',function(){$("#slider3").show();$("#valeur3").show();$("#valeur6").show();$("#valeur7").show();
				$("#slider6").show();
				$("#slider7").show();});
	
	
});  
