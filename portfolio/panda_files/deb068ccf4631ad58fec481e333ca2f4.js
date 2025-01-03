/*
Cache: canvas_js
*/
/* canvas_js: (http://w-88555-39530-51731.47100253128.sites.cnfree05.qifeiye.com/FeiEditor/bitSite/js/html5_canvas.js) */

FSS={FRONT:0,BACK:1,DOUBLE:2,SVGNS:"http://www.w3.org/2000/svg"},FSS.Array="function"==typeof Float32Array?Float32Array:Array,FSS.Utils={isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}},function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;e.length>i&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),r=Math.max(0,16-(i-t)),s=window.setTimeout(function(){e(i+r)},r);return t=i+r,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),Math.PIM2=2*Math.PI,Math.PID2=Math.PI/2,Math.randomInRange=function(t,e){return t+(e-t)*Math.random()},Math.clamp=function(t,e,i){return t=Math.max(t,e),t=Math.min(t,i)},FSS.Vector3={create:function(t,e,i){var r=new FSS.Array(3);return this.set(r,t,e,i),r},clone:function(t){var e=this.create();return this.copy(e,t),e},set:function(t,e,i,r){return t[0]=e||0,t[1]=i||0,t[2]=r||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],this},addVectors:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],this},addScalar:function(t,e){return t[0]+=e,t[1]+=e,t[2]+=e,this},subtract:function(t,e){return t[0]-=e[0],t[1]-=e[1],t[2]-=e[2],this},subtractVectors:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],this},subtractScalar:function(t,e){return t[0]-=e,t[1]-=e,t[2]-=e,this},multiply:function(t,e){return t[0]*=e[0],t[1]*=e[1],t[2]*=e[2],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,this},divide:function(t,e){return t[0]/=e[0],t[1]/=e[1],t[2]/=e[2],this},divideVectors:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],this},divideScalar:function(t,e){return 0!==e?(t[0]/=e,t[1]/=e,t[2]/=e):(t[0]=0,t[1]=0,t[2]=0),this},cross:function(t,e){var i=t[0],r=t[1],s=t[2];return t[0]=r*e[2]-s*e[1],t[1]=s*e[0]-i*e[2],t[2]=i*e[1]-r*e[0],this},crossVectors:function(t,e,i){return t[0]=e[1]*i[2]-e[2]*i[1],t[1]=e[2]*i[0]-e[0]*i[2],t[2]=e[0]*i[1]-e[1]*i[0],this},min:function(t,e){return e>t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),e>t[2]&&(t[2]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this},limit:function(t,e,i){var r=this.length(t);return null!==e&&e>r?this.setLength(t,e):null!==i&&r>i&&this.setLength(t,i),this},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},normalise:function(t){return this.divideScalar(t,this.length(t))},negate:function(t){return this.multiplyScalar(t,-1)},distanceSquared:function(t,e){var i=t[0]-e[0],r=t[1]-e[1],s=t[2]-e[2];return i*i+r*r+s*s},distance:function(t,e){return Math.sqrt(this.distanceSquared(t,e))},lengthSquared:function(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]},length:function(t){return Math.sqrt(this.lengthSquared(t))},setLength:function(t,e){var i=this.length(t);return 0!==i&&e!==i&&this.multiplyScalar(t,e/i),this}},FSS.Vector4={create:function(t,e,i){var r=new FSS.Array(4);return this.set(r,t,e,i),r},set:function(t,e,i,r,s){return t[0]=e||0,t[1]=i||0,t[2]=r||0,t[3]=s||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},setW:function(t,e){return t[3]=e||0,this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],t[3]+=e[3],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,this},min:function(t,e){return e>t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),e>t[2]&&(t[2]=e),e>t[3]&&(t[3]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),t[3]>e&&(t[3]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this}},FSS.Color=function(t,e){this.rgba=FSS.Vector4.create(),this.hex=t||"#000000",this.opacity=FSS.Utils.isNumber(e)?e:1,this.set(this.hex,this.opacity)},FSS.Color.prototype={set:function(t,e){t=t.replace("#","");var i=t.length/3;return this.rgba[0]=parseInt(t.substring(0*i,1*i),16)/255,this.rgba[1]=parseInt(t.substring(1*i,2*i),16)/255,this.rgba[2]=parseInt(t.substring(2*i,3*i),16)/255,this.rgba[3]=FSS.Utils.isNumber(e)?e:this.rgba[3],this},hexify:function(t){var e=Math.ceil(255*t).toString(16);return 1===e.length&&(e="0"+e),e},format:function(){var t=this.hexify(this.rgba[0]),e=this.hexify(this.rgba[1]),i=this.hexify(this.rgba[2]);return this.hex="#"+t+e+i,this.hex}},FSS.Object=function(){this.position=FSS.Vector3.create()},FSS.Object.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Light=function(t,e){FSS.Object.call(this),this.ambient=new FSS.Color(t||"#FFFFFF"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.ray=FSS.Vector3.create()},FSS.Light.prototype=Object.create(FSS.Object.prototype),FSS.Vertex=function(t,e,i){this.position=FSS.Vector3.create(t,e,i)},FSS.Vertex.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Triangle=function(t,e,i){this.a=t||new FSS.Vertex,this.b=e||new FSS.Vertex,this.c=i||new FSS.Vertex,this.vertices=[this.a,this.b,this.c],this.u=FSS.Vector3.create(),this.v=FSS.Vector3.create(),this.centroid=FSS.Vector3.create(),this.normal=FSS.Vector3.create(),this.color=new FSS.Color,this.polygon=document.createElementNS(FSS.SVGNS,"polygon"),this.polygon.setAttributeNS(null,"stroke-linejoin","round"),this.polygon.setAttributeNS(null,"stroke-miterlimit","1"),this.polygon.setAttributeNS(null,"stroke-width","1"),this.computeCentroid(),this.computeNormal()},FSS.Triangle.prototype={computeCentroid:function(){return this.centroid[0]=this.a.position[0]+this.b.position[0]+this.c.position[0],this.centroid[1]=this.a.position[1]+this.b.position[1]+this.c.position[1],this.centroid[2]=this.a.position[2]+this.b.position[2]+this.c.position[2],FSS.Vector3.divideScalar(this.centroid,3),this},computeNormal:function(){return FSS.Vector3.subtractVectors(this.u,this.b.position,this.a.position),FSS.Vector3.subtractVectors(this.v,this.c.position,this.a.position),FSS.Vector3.crossVectors(this.normal,this.u,this.v),FSS.Vector3.normalise(this.normal),this}},FSS.Geometry=function(){this.vertices=[],this.triangles=[],this.dirty=!1},FSS.Geometry.prototype={update:function(){if(this.dirty){var t,e;for(t=this.triangles.length-1;t>=0;t--)e=this.triangles[t],e.computeCentroid(),e.computeNormal();this.dirty=!1}return this}},FSS.Plane=function(t,e,i,r){FSS.Geometry.call(this),this.width=t||100,this.height=e||100,this.segments=i||4,this.slices=r||4,this.segmentWidth=this.width/this.segments,this.sliceHeight=this.height/this.slices;var s,n,o,h,a,l,u,c=[],S=this.width*-.5,f=.5*this.height;for(s=0;this.segments>=s;s++)for(c.push([]),n=0;this.slices>=n;n++)u=new FSS.Vertex(S+s*this.segmentWidth,f-n*this.sliceHeight),c[s].push(u),this.vertices.push(u);for(s=0;this.segments>s;s++)for(n=0;this.slices>n;n++)o=c[s+0][n+0],h=c[s+0][n+1],a=c[s+1][n+0],l=c[s+1][n+1],t0=new FSS.Triangle(o,h,a),t1=new FSS.Triangle(a,h,l),this.triangles.push(t0,t1)},FSS.Plane.prototype=Object.create(FSS.Geometry.prototype),FSS.Material=function(t,e){this.ambient=new FSS.Color(t||"#444444"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.slave=new FSS.Color},FSS.Mesh=function(t,e){FSS.Object.call(this),this.geometry=t||new FSS.Geometry,this.material=e||new FSS.Material,this.side=FSS.FRONT,this.visible=!0},FSS.Mesh.prototype=Object.create(FSS.Object.prototype),FSS.Mesh.prototype.update=function(t,e){var i,r,s,n,o;if(this.geometry.update(),e)for(i=this.geometry.triangles.length-1;i>=0;i--){for(r=this.geometry.triangles[i],FSS.Vector4.set(r.color.rgba),s=t.length-1;s>=0;s--)n=t[s],FSS.Vector3.subtractVectors(n.ray,n.position,r.centroid),FSS.Vector3.normalise(n.ray),o=FSS.Vector3.dot(r.normal,n.ray),this.side===FSS.FRONT?o=Math.max(o,0):this.side===FSS.BACK?o=Math.abs(Math.min(o,0)):this.side===FSS.DOUBLE&&(o=Math.max(Math.abs(o),0)),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.ambient.rgba,n.ambient.rgba),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.diffuse.rgba,n.diffuse.rgba),FSS.Vector4.multiplyScalar(this.material.slave.rgba,o),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba);FSS.Vector4.clamp(r.color.rgba,0,1)}return this},FSS.Scene=function(){this.meshes=[],this.lights=[]},FSS.Scene.prototype={add:function(t){return t instanceof FSS.Mesh&&!~this.meshes.indexOf(t)?this.meshes.push(t):t instanceof FSS.Light&&!~this.lights.indexOf(t)&&this.lights.push(t),this},remove:function(t){return t instanceof FSS.Mesh&&~this.meshes.indexOf(t)?this.meshes.splice(this.meshes.indexOf(t),1):t instanceof FSS.Light&&~this.lights.indexOf(t)&&this.lights.splice(this.lights.indexOf(t),1),this}},FSS.Renderer=function(){this.width=0,this.height=0,this.halfWidth=0,this.halfHeight=0},FSS.Renderer.prototype={setSize:function(t,e){return this.width!==t||this.height!==e?(this.width=t,this.height=e,this.halfWidth=.5*this.width,this.halfHeight=.5*this.height,this):void 0},clear:function(){return this},render:function(){return this}},FSS.CanvasRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.context=this.element.getContext("2d"),this.setSize(this.element.width,this.element.height)},FSS.CanvasRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.CanvasRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.width=t,this.element.height=e,this.context.setTransform(1,0,0,-1,this.halfWidth,this.halfHeight),this},FSS.CanvasRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.context.clearRect(-this.halfWidth,-this.halfHeight,this.width,this.height),this},FSS.CanvasRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t);var e,i,r,s,n;for(this.clear(),this.context.lineJoin="round",this.context.lineWidth=1,e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)s=i.geometry.triangles[r],n=s.color.format(),this.context.beginPath(),this.context.moveTo(s.a.position[0],s.a.position[1]),this.context.lineTo(s.b.position[0],s.b.position[1]),this.context.lineTo(s.c.position[0],s.c.position[1]),this.context.closePath(),this.context.strokeStyle=n,this.context.fillStyle=n,this.context.stroke(),this.context.fill();return this},FSS.WebGLRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.vertices=null,this.lights=null;var t={preserveDrawingBuffer:!1,premultipliedAlpha:!0,antialias:!0,stencil:!0,alpha:!0};return this.gl=this.getContext(this.element,t),this.unsupported=!this.gl,this.unsupported?"WebGL is not supported by your browser.":(this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.DEPTH_TEST),this.setSize(this.element.width,this.element.height),void 0)},FSS.WebGLRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.WebGLRenderer.prototype.getContext=function(t,e){var i=!1;try{if(!(i=t.getContext("experimental-webgl",e)))throw"Error creating WebGL context."}catch(r){console.error(r)}return i},FSS.WebGLRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.unsupported?void 0:(this.element.width=t,this.element.height=e,this.gl.viewport(0,0,t,e),this)},FSS.WebGLRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.unsupported?void 0:(this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this)},FSS.WebGLRenderer.prototype.render=function(t){if(FSS.Renderer.prototype.render.call(this,t),!this.unsupported){var e,i,r,s,n,o,h,a,l,u,c,S,f,m,g,d=!1,p=t.lights.length,F=0;if(this.clear(),this.lights!==p){if(this.lights=p,!(this.lights>0))return;this.buildProgram(p)}if(this.program){for(e=t.meshes.length-1;e>=0;e--)i=t.meshes[e],i.geometry.dirty&&(d=!0),i.update(t.lights,!1),F+=3*i.geometry.triangles.length;if(d||this.vertices!==F){this.vertices=F;for(a in this.program.attributes){for(u=this.program.attributes[a],u.data=new FSS.Array(F*u.size),f=0,e=t.meshes.length-1;e>=0;e--)for(i=t.meshes[e],r=0,s=i.geometry.triangles.length;s>r;r++)for(n=i.geometry.triangles[r],m=0,g=n.vertices.length;g>m;m++){switch(vertex=n.vertices[m],a){case"side":this.setBufferData(f,u,i.side);break;case"position":this.setBufferData(f,u,vertex.position);break;case"centroid":this.setBufferData(f,u,n.centroid);break;case"normal":this.setBufferData(f,u,n.normal);break;case"ambient":this.setBufferData(f,u,i.material.ambient.rgba);break;case"diffuse":this.setBufferData(f,u,i.material.diffuse.rgba)}f++}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,u.data,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(u.location),this.gl.vertexAttribPointer(u.location,u.size,this.gl.FLOAT,!1,0,0)}}for(this.setBufferData(0,this.program.uniforms.resolution,[this.width,this.height,this.width]),o=p-1;o>=0;o--)h=t.lights[o],this.setBufferData(o,this.program.uniforms.lightPosition,h.position),this.setBufferData(o,this.program.uniforms.lightAmbient,h.ambient.rgba),this.setBufferData(o,this.program.uniforms.lightDiffuse,h.diffuse.rgba);for(l in this.program.uniforms)switch(u=this.program.uniforms[l],S=u.location,c=u.data,u.structure){case"3f":this.gl.uniform3f(S,c[0],c[1],c[2]);break;case"3fv":this.gl.uniform3fv(S,c);break;case"4fv":this.gl.uniform4fv(S,c)}}return this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertices),this}},FSS.WebGLRenderer.prototype.setBufferData=function(t,e,i){if(FSS.Utils.isNumber(i))e.data[t*e.size]=i;else for(var r=i.length-1;r>=0;r--)e.data[t*e.size+r]=i[r]},FSS.WebGLRenderer.prototype.buildProgram=function(t){if(!this.unsupported){var e=FSS.WebGLRenderer.VS(t),i=FSS.WebGLRenderer.FS(t),r=e+i;if(!this.program||this.program.code!==r){var s=this.gl.createProgram(),n=this.buildShader(this.gl.VERTEX_SHADER,e),o=this.buildShader(this.gl.FRAGMENT_SHADER,i);if(this.gl.attachShader(s,n),this.gl.attachShader(s,o),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS)){var h=this.gl.getError(),a=this.gl.getProgramParameter(s,this.gl.VALIDATE_STATUS);return console.error("Could not initialise shader.\nVALIDATE_STATUS: "+a+"\nERROR: "+h),null}return this.gl.deleteShader(o),this.gl.deleteShader(n),s.code=r,s.attributes={side:this.buildBuffer(s,"attribute","aSide",1,"f"),position:this.buildBuffer(s,"attribute","aPosition",3,"v3"),centroid:this.buildBuffer(s,"attribute","aCentroid",3,"v3"),normal:this.buildBuffer(s,"attribute","aNormal",3,"v3"),ambient:this.buildBuffer(s,"attribute","aAmbient",4,"v4"),diffuse:this.buildBuffer(s,"attribute","aDiffuse",4,"v4")},s.uniforms={resolution:this.buildBuffer(s,"uniform","uResolution",3,"3f",1),lightPosition:this.buildBuffer(s,"uniform","uLightPosition",3,"3fv",t),lightAmbient:this.buildBuffer(s,"uniform","uLightAmbient",4,"4fv",t),lightDiffuse:this.buildBuffer(s,"uniform","uLightDiffuse",4,"4fv",t)},this.program=s,this.gl.useProgram(this.program),s}}},FSS.WebGLRenderer.prototype.buildShader=function(t,e){if(!this.unsupported){var i=this.gl.createShader(t);return this.gl.shaderSource(i,e),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?i:(console.error(this.gl.getShaderInfoLog(i)),null)}},FSS.WebGLRenderer.prototype.buildBuffer=function(t,e,i,r,s,n){var o={buffer:this.gl.createBuffer(),size:r,structure:s,data:null};switch(e){case"attribute":o.location=this.gl.getAttribLocation(t,i);break;case"uniform":o.location=this.gl.getUniformLocation(t,i)}return n&&(o.data=new FSS.Array(n*r)),o},FSS.WebGLRenderer.VS=function(t){var e=["precision mediump float;","#define LIGHTS "+t,"attribute float aSide;","attribute vec3 aPosition;","attribute vec3 aCentroid;","attribute vec3 aNormal;","attribute vec4 aAmbient;","attribute vec4 aDiffuse;","uniform vec3 uResolution;","uniform vec3 uLightPosition[LIGHTS];","uniform vec4 uLightAmbient[LIGHTS];","uniform vec4 uLightDiffuse[LIGHTS];","varying vec4 vColor;","void main() {","vColor = vec4(0.0);","vec3 position = aPosition / uResolution * 2.0;","for (int i = 0; i < LIGHTS; i++) {","vec3 lightPosition = uLightPosition[i];","vec4 lightAmbient = uLightAmbient[i];","vec4 lightDiffuse = uLightDiffuse[i];","vec3 ray = normalize(lightPosition - aCentroid);","float illuminance = dot(aNormal, ray);","if (aSide == 0.0) {","illuminance = max(illuminance, 0.0);","} else if (aSide == 1.0) {","illuminance = abs(min(illuminance, 0.0));","} else if (aSide == 2.0) {","illuminance = max(abs(illuminance), 0.0);","}","vColor += aAmbient * lightAmbient;","vColor += aDiffuse * lightDiffuse * illuminance;","}","vColor = clamp(vColor, 0.0, 1.0);","gl_Position = vec4(position, 1.0);","}"].join("\n");return e},FSS.WebGLRenderer.FS=function(){var t=["precision mediump float;","varying vec4 vColor;","void main() {","gl_FragColor = vColor;","}"].join("\n");return t},FSS.SVGRenderer=function(){FSS.Renderer.call(this),this.element=document.createElementNS(FSS.SVGNS,"svg"),this.element.setAttribute("xmlns",FSS.SVGNS),this.element.setAttribute("version","1.1"),this.element.style.display="block",this.setSize(300,150)},FSS.SVGRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.SVGRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.setAttribute("width",t),this.element.setAttribute("height",e),this},FSS.SVGRenderer.prototype.clear=function(){FSS.Renderer.prototype.clear.call(this);for(var t=this.element.childNodes.length-1;t>=0;t--)this.element.removeChild(this.element.childNodes[t]);return this},FSS.SVGRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t);var e,i,r,s,n,o;for(e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)s=i.geometry.triangles[r],s.polygon.parentNode!==this.element&&this.element.appendChild(s.polygon),n=this.formatPoint(s.a)+" ",n+=this.formatPoint(s.b)+" ",n+=this.formatPoint(s.c),o=this.formatStyle(s.color.format()),s.polygon.setAttributeNS(null,"points",n),s.polygon.setAttributeNS(null,"style",o);return this},FSS.SVGRenderer.prototype.formatPoint=function(t){return this.halfWidth+t.position[0]+","+(this.halfHeight-t.position[1])},FSS.SVGRenderer.prototype.formatStyle=function(t){var e="fill:"+t+";";return e+="stroke:"+t+";"};
/******************1*******************/
(function ($, window) {
	var $ = jQuery;
	$.fn.qfy_bg_canvas_1 = function() {
		var linecolor =  $(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff";
		var bgcolor =  $(this).attr("data-bgcolor")? jQuery(this).attr("data-bgcolor"):'#000000';
		var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="0.01";
		else if(speed=="3") speed="0.005";
		else if(speed=="2") speed="0.001";
		else speed="0.0001";
		var obj = jQuery(this);
		initialise(obj,speed);
		
	};
	//------------------------------
	  // Mesh Properties   0.0001     0.001      0.01
	  //------------------------------
	  var MESH = {
	   width:1.8,height:1.8,depth:10,segments:16,slices:8,xRange:.8,yRange:.1,zRange:1,ambient:"#010101",diffuse:"#ffffff",speed:0.01,opacity:.5
	  };

	  //------------------------------
	  // Light Properties
	  //------------------------------
	  var LIGHT = {
	   count:2,xyScalar:1,zOffset:100,ambient:"#ffffff",diffuse:"#2d2d2d",speed:0.001,gravity:800,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!1,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))
	  };


	  //------------------------------
	  // Render Properties
	  //------------------------------
	  var WEBGL = 'webgl';
	  var CANVAS = 'canvas';
	  var SVG = 'svg';
	  var RENDER = {
	    renderer: CANVAS
	  };

	  //------------------------------
	  // Global Properties
	  //------------------------------
	  var now, start = Date.now();
	  var center = FSS.Vector3.create();
	  var attractor = FSS.Vector3.create();

	  var renderer, scene, mesh, geometry, material;
	  var webglRenderer, canvasRenderer, svgRenderer;
	  var gui, autopilotController;

	  //------------------------------
	  // Methods
	  //------------------------------
	  function initialise(obj,speed) {
		  var container = obj[0];
		 
	    createRenderer(obj);
	    createScene();
	    createMesh();
	    createLights();
	    addEventListeners();
	    //addControls();
	    resize(container.offsetWidth, container.offsetHeight);
	    animate(speed);
	  }

	  function createRenderer(obj) {
	    //webglRenderer = new FSS.WebGLRenderer();
	    canvasRenderer = new FSS.CanvasRenderer();
	    //svgRenderer = new FSS.SVGRenderer();
	    setRenderer(RENDER.renderer,obj);
	  }

	  function setRenderer(index,obj) {
		var container = obj[0];
		 var output = obj.find(">div")[0];
		
	    //if (renderer) {
	     // output.removeChild(renderer.element);
	   // }
	    switch(index) {
	      case WEBGL:
	        renderer = webglRenderer;
	        break;
	      case CANVAS:
	        renderer = canvasRenderer;
	        break;
	      case SVG:
	        renderer = svgRenderer;
	        break;
	    }
	    renderer.setSize(container.offsetWidth, container.offsetHeight);
	    output.appendChild(renderer.element);
	  }

	  function createScene() {
	    scene = new FSS.Scene();
	  }

	  function createMesh() {
	    scene.remove(mesh);
	    renderer.clear();
	    geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
	    material = new FSS.Material(MESH.ambient, MESH.diffuse);
	    mesh = new FSS.Mesh(geometry, material);
	    scene.add(mesh);

	    // Augment vertices for animation
	    var v, vertex;
	    for (v = geometry.vertices.length - 1; v >= 0; v--) {
	      vertex = geometry.vertices[v];
	      vertex.anchor = FSS.Vector3.clone(vertex.position);
	      vertex.step = FSS.Vector3.create(
	        Math.randomInRange(0.2, 1.0),
	        Math.randomInRange(0.2, 1.0),
	        Math.randomInRange(0.2, 1.0)
	      );
	      vertex.time = Math.randomInRange(0, Math.PIM2);
	    }
	  }

	  function createLights() {
	    var l, light;
	    for (l = scene.lights.length - 1; l >= 0; l--) {
	      light = scene.lights[l];
	      scene.remove(light);
	    }
	    renderer.clear();
	    for (l = 0; l < LIGHT.count; l++) {
	      light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
	      light.ambientHex = light.ambient.format();
	      light.diffuseHex = light.diffuse.format();
	      scene.add(light);

	      // Augment light for animation
	      light.mass = Math.randomInRange(0.5, 1);
	      light.velocity = FSS.Vector3.create();
	      light.acceleration = FSS.Vector3.create();
	      light.force = FSS.Vector3.create();

	    }
	  }

	  function resize(width, height) {
	    renderer.setSize(width, height);
	    FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
	    createMesh();
	  }

	  function animate(speed) {
	    now = Date.now() - start;
	    update(speed);
	    render();
	    requestAnimationFrame(function(){animate(speed)});
	  }

	  function update(speed) {
	    var ox, oy, oz, l, light, v, vertex, offset = MESH.depth/2;

	    // Update Bounds
	    FSS.Vector3.copy(LIGHT.bounds, center);
	    FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

	    // Update Attractor
	    FSS.Vector3.setZ(attractor, LIGHT.zOffset);

	    // Overwrite the Attractor position
	    if (LIGHT.autopilot) {
	      ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
	      oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
	      FSS.Vector3.set(attractor,
	        LIGHT.bounds[0]*ox,
	        LIGHT.bounds[1]*oy,
	        LIGHT.zOffset);
	    }

	    // Animate Lights
	    for (l = scene.lights.length - 1; l >= 0; l--) {
	      light = scene.lights[l];

	      // Reset the z position of the light
	      FSS.Vector3.setZ(light.position, LIGHT.zOffset);

	      // Calculate the force Luke!
	      var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
	      var F = LIGHT.gravity * light.mass / D;
	      FSS.Vector3.subtractVectors(light.force, attractor, light.position);
	      FSS.Vector3.normalise(light.force);
	      FSS.Vector3.multiplyScalar(light.force, F);

	      // Update the light position
	      FSS.Vector3.set(light.acceleration);
	      FSS.Vector3.add(light.acceleration, light.force);
	      FSS.Vector3.add(light.velocity, light.acceleration);
	      FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
	      FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
	      FSS.Vector3.add(light.position, light.velocity);
	    }

	    // Animate Vertices
	    for (v = geometry.vertices.length - 1; v >= 0; v--) {
	      vertex = geometry.vertices[v];
	      ox = Math.sin(vertex.time + vertex.step[0] * now * speed);
	      oy = Math.cos(vertex.time + vertex.step[1] * now * speed);
	      oz = Math.sin(vertex.time + vertex.step[2] * now * speed);
	      FSS.Vector3.set(vertex.position,
	        MESH.xRange*geometry.segmentWidth*ox,
	        MESH.yRange*geometry.sliceHeight*oy,
	        MESH.zRange*offset*oz - offset);
	      FSS.Vector3.add(vertex.position, vertex.anchor);
	    }

	    // Set the Geometry to dirty
	    geometry.dirty = true;
	  }

	  function render() {
	    renderer.render(scene);

	    // Draw Lights
	    if (LIGHT.draw) {
	      var l, lx, ly, light;
	      for (l = scene.lights.length - 1; l >= 0; l--) {
	        light = scene.lights[l];
	        lx = light.position[0];
	        ly = light.position[1];
	        switch(RENDER.renderer) {
	          case CANVAS:
	            renderer.context.lineWidth = 0.5;
	            renderer.context.beginPath();
	            renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
	            renderer.context.strokeStyle = light.ambientHex;
	            renderer.context.stroke();
	            renderer.context.beginPath();
	            renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
	            renderer.context.fillStyle = light.diffuseHex;
	            renderer.context.fill();
	            break;
	          case SVG:
	            lx += renderer.halfWidth;
	            ly = renderer.halfHeight - ly;
	            break;
	        }
	      }
	    }
	  }

	  function addEventListeners() {
	    //window.addEventListener('resize', onWindowResize);
	  }

	  //------------------------------
	  // Callbacks
	  //------------------------------

	  function onWindowResize(event) {
	    //resize(container.offsetWidth, container.offsetHeight);
	    //render();
	  }





})($, window);




/********************雨********************/
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground1=function(options){var height;var width;var points=800;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){points=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var snow=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<points;i++){var tempVar;snow[i]={posX:100,posY:100,initialX:100,initialY:100,radius:3,opacity:0.5,initialOpacity:0.5};snow[i].posX=width*Math.random();snow[i].posY=height*Math.random();snow[i].initialX=snow[i].posX;snow[i].initialY=snow[i].posY;snow[i].radius=Math.random()*radius;snow[i].opacity=Math.random();snow[i].initialOpacity=snow[i].opacity}}function createSnow(snowID){ctx.beginPath();ctx.arc(snow[snowID].posX,snow[snowID].posY,snow[snowID].radius,0,2*Math.PI,false);ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", "+snow[snowID].opacity+")";ctx.fill();ctx.closePath();snow[snowID].posX=snow[snowID].posX+(width/2-snow[snowID].posX)/200;snow[snowID].posY=snow[snowID].posY+(height/2-snow[snowID].posY)/200;snow[snowID].radius-=0.02;if(snow[snowID].radius<=0){snow[snowID].posX=snow[snowID].initialX;snow[snowID].posY=snow[snowID].initialY;snow[snowID].radius=2;snow[snowID].opacity=0}if(snow[snowID].opacity<snow[snowID].initialOpacity){snow[snowID].opacity+=0.05}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<points;i++){createSnow(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground2=function(options){var height;var width;var points=800;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){points=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var snow=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<points;i++){var tempVar;snow[i]={posX:100,posY:100,initialX:100,initialY:100,radius:3,opacity:0.5,initialOpacity:0.5};snow[i].posX=width*Math.random();snow[i].posY=height*Math.random();snow[i].initialX=snow[i].posX;snow[i].initialY=snow[i].posY;snow[i].radius=Math.random()*radius;snow[i].opacity=Math.random();snow[i].initialOpacity=snow[i].opacity}}function createSnow(snowID){ctx.beginPath();ctx.arc(snow[snowID].posX,snow[snowID].posY,snow[snowID].radius,0,2*Math.PI,false);ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+","+snow[snowID].opacity+")";ctx.fill();ctx.closePath();snow[snowID].posX=snow[snowID].posX-(width/2-snow[snowID].posX)/200;snow[snowID].posY=snow[snowID].posY-(height/2-snow[snowID].posY)/200;snow[snowID].radius+=0.02;if(snow[snowID].posX<0||snow[snowID].posY<0||snow[snowID].posX>width||snow[snowID].posY>height){snow[snowID].posX=snow[snowID].initialX;snow[snowID].posY=snow[snowID].initialY;snow[snowID].radius=0}if(snow[snowID].radius>2){if(snow[snowID].opacity>=0){snow[snowID].opacity-=0.05}else{snow[snowID].posX=snow[snowID].initialX;snow[snowID].posY=snow[snowID].initialY;snow[snowID].radius=0;snow[snowID].opacity=snow[snowID].initialOpacity}}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<points;i++){createSnow(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground3=function(options){var scroll_count;var scroll_time;var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var velocity=5;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.velocity){velocity=parseInt(config.velocity,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var snow=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){var tempVar;snow[i]={posX:100,posY:100,velocity:3,radius:3,gradAngle:0,gradStart:0,gradEnd:0.4};snow[i].posX=width*Math.random();snow[i].posY=height*Math.random();snow[i].radius=Math.random()*radius;snow[i].gradAngle=Math.random()*360;snow[i].gradStart=Math.random();snow[i].gradEnd=Math.random();tempVar=Math.random()*velocity;snow[i].velocity=(tempVar<velocity*(2/5))?velocity*(2/5):tempVar}}function createSnow(snowID){ctx.beginPath();var grd=ctx.createLinearGradient(snow[snowID].posX-snow[snowID].radius*Math.cos(snow[snowID].gradAngle*Math.PI/180),snow[snowID].posY-snow[snowID].radius*Math.sin(snow[snowID].gradAngle*Math.PI/180),snow[snowID].posX+snow[snowID].radius*Math.cos(snow[snowID].gradAngle*Math.PI/180),snow[snowID].posY+snow[snowID].radius*Math.sin(snow[snowID].gradAngle*Math.PI/180));grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", "+snow[snowID].gradStart+")");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", "+snow[snowID].gradEnd+")");ctx.arc(snow[snowID].posX,snow[snowID].posY,snow[snowID].radius,0,2*Math.PI,false);ctx.fillStyle=grd;ctx.fill();ctx.closePath();snow[snowID].posY+=snow[snowID].velocity;if(snow[snowID].posY>height){snow[snowID].posY=height-snow[snowID].posY}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<numberOfPoints;i++){createSnow(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground4=function(options){var height;var width;var drops=500;var length=40;var interval=50;var color={r:256,g:256,b:256};var angle=30;var opacity=0.2;var stroke=2;var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.drops){drops=parseInt(config.drops,10)}if(config.length){length=parseInt(config.length,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.stroke){stroke=parseInt(config.stroke,10)}if(config.angle){angle=parseInt(config.angle,10)}if(config.opacity){opacity=parseFloat(config.opacity)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var rain=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<drops;i++){rain[i]={posX:100,posY:100,angle:30,length:20,opacity:0.4,stroke:2};rain[i].posX=Math.random()*width;rain[i].posY=Math.random()*height;rain[i].angle=angle;rain[i].length=Math.random()*length;rain[i].opacity=Math.random()*opacity;rain[i].stroke=Math.random()*stroke}}function createRain(rainId){var fposX,fposY,fangle,flength,fopacity,fstroke;fposX=rain[rainId].posX;fposY=rain[rainId].posY;fangle=rain[rainId].angle;fopacity=rain[rainId].opacity;fstroke=rain[rainId].stroke;flength=rain[rainId].length;ctx.beginPath();ctx.moveTo(fposX,fposY);ctx.lineTo(fposX+flength*Math.sin(Math.PI*fangle/180),fposY+flength*Math.cos(Math.PI*fangle/180));ctx.strokeStyle="rgba("+color.r+","+color.g+","+color.b+", "+fopacity+")";ctx.lineWidth=fstroke;ctx.stroke();rain[rainId].posX=Math.random()*width;rain[rainId].posY=Math.random()*height;rain[rainId].angle=angle;rain[rainId].length=Math.random()*length;rain[rainId].opacity=Math.random()*opacity;rain[rainId].stroke=Math.random()*stroke}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<drops;i++){createRain(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground5=function(options){var height;var width;var birds=5;var points=5;var size=15;var interval=50;var color="rgba(0, 0, 0, 1)";var velocity=3;var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.birds){points=parseInt(config.birds,10)}if(config.size){size=parseInt(config.size,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.velocity){velocity=parseInt(config.velocity,10)}if(config.color){color=config.color}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var bird=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<points;i++){bird[i]={posX:100,posY:100,wingUp:0,wingStretch:1,size:15,speed:2,color:"rgba(0, 0, 0, 1)",rest:1};bird[i].posX=width*Math.random();bird[i].posY=(height-50)*Math.random()/2+50;bird[i].size=size-(size/2)*Math.random();bird[i].speed=velocity-(1/3)*velocity*Math.random();bird[i].rest=100*Math.random();bird[i].color=color}}function createBird(birdId){var startX,startY,endX,endY;startX=bird[birdId].posX;startY=bird[birdId].posY;endX=startX+bird[birdId].size;endY=bird[birdId].posY;var wingStartX,wingStartY,wingEndX,wingEndY;var wingStartX2,wingStartY2,wingEndX2,wingEndY2;wingStartX=startX+(endX-startX)/2.5;wingStartY=startY;wingEndX=startX+(endX-startX)/1.5;wingEndY=startY-(endX-startX)*0.8;wingStartX2=startX+(endX-startX)/2.5;wingStartY2=startY;wingEndX2=startX+(endX-startX)/1.4;wingEndY2=startY-(endX-startX)*0.9;wingEndY=startY-((endX-startX)*0.8)*bird[birdId].wingStretch;wingEndY2=startY-((endX-startX)*0.9)*bird[birdId].wingStretch;wingEndX=startX+(endX-startX)/1.5-(endX-startX)*Math.abs(bird[birdId].wingStretch-1)*0.1;wingEndX2=startX+(endX-startX)/1.4+(endX-startX)*Math.abs(bird[birdId].wingStretch-1)*0.05;bird[birdId].rest++;if(bird[birdId].rest>80){bird[birdId].wingStretch=0.6;if(bird[birdId].rest>100){bird[birdId].rest=1}}if(!bird[birdId].wingUp&&bird[birdId].rest<80){bird[birdId].wingStretch-=0.4;if(bird[birdId].wingStretch<=-1){bird[birdId].wingUp=1}}if(bird[birdId].wingUp&&bird[birdId].rest<80){bird[birdId].wingStretch+=0.4;if(bird[birdId].wingStretch>=1){bird[birdId].wingUp=0}}ctx.fillStyle=bird[birdId].color;ctx.beginPath();ctx.moveTo(startX,startY);ctx.bezierCurveTo(startX+(endX-startX)/4,startY+(endX-startX)/4,startX+(endX-startX)/2,startY-(endX-startX)/3,endX,endY);ctx.bezierCurveTo(endX-(endX-startX)/3,endY,endX-(endX-startX)/2.4,startY+(endX-startX)/3,startX+(endX-startX)/5,startY+(endX-startX)/7);ctx.bezierCurveTo(startX+(endX-startX)/5,startY+(endX-startX)/7,startX,startY+(endX-startX)/4,startX,startY);ctx.strokeStyle="rgb(256, 256, 256)";ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(wingStartX,wingStartY);ctx.bezierCurveTo(wingStartX-(wingEndX-wingStartX),wingStartY-(wingStartY-wingEndY)/2,wingStartX+(wingEndX-wingStartX),wingStartY-(wingStartY-wingEndY)/1.5,wingStartX+(wingEndX-wingStartX)/2,wingEndY);ctx.bezierCurveTo(wingStartX+(wingEndX-wingStartX)*1.5,wingStartY-(wingStartY-wingEndY)/2,wingStartX+(wingEndX-wingStartX),wingStartY-(wingStartY-wingEndY)/1.5,wingEndX,wingStartY);ctx.lineTo(wingStartX,wingStartY);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(wingStartX2,wingStartY2);ctx.bezierCurveTo(wingStartX2-(wingEndX2-wingStartX2),wingStartY2-(wingStartY2-wingEndY2)/2,wingStartX2+(wingEndX2-wingStartX2),wingStartY2-(wingStartY2-wingEndY2)/1.5,wingStartX2+(wingEndX2-wingStartX2)/2,wingEndY2);ctx.bezierCurveTo(wingStartX2+(wingEndX2-wingStartX2)*1.5,wingStartY2-(wingStartY2-wingEndY2)/2,wingStartX2+(wingEndX2-wingStartX2),wingStartY2-(wingStartY2-wingEndY2)/1.5,wingEndX2,wingStartY2);ctx.lineTo(wingStartX2,wingStartY2);ctx.closePath();ctx.fill();bird[birdId].posX+=bird[birdId].speed;if(bird[birdId].posX>width){bird[birdId].posX=0}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<points;i++){createBird(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground6=function(options){var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var tempx=60;var tempy=60;var timeOut=1;var starX=new Array();var starY=new Array();var destStarX=new Array();var destStarY=new Array();var starId=new Array();var sparkStar=new Array();function drawStar(posX,posY){ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,radius*0.5,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .1)";ctx.beginPath();ctx.arc(posX,posY,radius*1.5,0,Math.PI*2,true);ctx.closePath();ctx.fill()}function drawSparklingStar(posX,posY,base){if(base<0){return}base=base*1.5;ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,base,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,base*2,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+",.1)";ctx.beginPath();ctx.arc(posX,posY,base*3,0,Math.PI*2,true);ctx.closePath();ctx.fill();var a=7*base/1.5;var grd;ctx.beginPath();ctx.moveTo(posX-a,posY-a);grd=ctx.createLinearGradient(posX-a,posY-a,posX+a,posY+a);grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", 0)");grd.addColorStop(0.5,"rgba("+color.r+","+color.g+","+color.b+", 1)");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", 0)");ctx.strokeStyle=grd;ctx.lineTo(posX+a,posY+a);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.moveTo(posX+a,posY-a);grd=ctx.createLinearGradient(posX-a,posY+a,posX+a,posY-a);grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", 0)");grd.addColorStop(0.5,"rgba("+color.r+","+color.g+","+color.b+", 1)");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", 0)");ctx.strokeStyle=grd;ctx.lineTo(posX-a,posY+a);ctx.closePath();ctx.stroke()}function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){starX[i]=Math.random()*width;starY[i]=Math.random()*height;if(Math.random()*10>=8&&Math.random()*10<=10){starId[i]=1}else{starId[i]=0}sparkStar[i]=1}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}function moveStars(){var tempVar;tempx=200;tempy=200;for(var i=0;i<numberOfPoints;i++){if(starId[i]==0){drawStar(tempx,tempy)}else{if(starId[i]==1){if(sparkStar[i]<0){tempVar=parseInt(Math.random()*1000,10);if(tempVar<=5&&tempVar>=1){sparkStar[i]=1}}else{sparkStar[i]-=0.08;drawSparklingStar(tempx,tempy,sparkStar[i])}}}ctx.beginPath();ctx.moveTo(200,200);var a,b,c,d;a=tempx;b=tempy;c=starX[i]-(starX[i]-destStarX[i])*timeOut/400;d=starY[i]-(starY[i]-destStarY[i])*timeOut/400;var grd=ctx.createLinearGradient(a,b,c,d);grd.addColorStop(0,"rgba(256, 256, 256, .02)");grd.addColorStop(1,"rgba(256, 256, 256, 0)");ctx.strokeStyle=grd;ctx.moveTo(tempx,tempy);tempx=starX[i]-(starX[i]-destStarX[i])*timeOut/400;tempy=starY[i]-(starY[i]-destStarY[i])*timeOut/400;ctx.lineTo(tempx,tempy);ctx.closePath();ctx.lineWidth=1;ctx.stroke()}}function setBackground(){ctx.clearRect(0,0,width,height);moveStars();if(timeOut<400){timeOut++}else{timeOut=1;refreshPosition()}}function refreshPosition(){for(var i=0;i<numberOfPoints;i++){starX[i]=destStarX[i];starY[i]=destStarY[i]}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground7=function(options){var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var tempx=60;var tempy=60;var starX=new Array();var starY=new Array();var destStarX=new Array();var destStarY=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){starX[i]=Math.random()*width;starY[i]=Math.random()*height}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}var timeOut=1;function drawStar(posX,posY){ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,radius*0.5,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .1)";ctx.beginPath();ctx.arc(posX,posY,radius*1.5,0,Math.PI*2,true);ctx.closePath();ctx.fill()}function setBackground(){ctx.clearRect(0,0,width,height);tempx=200;tempy=200;for(var i=0;i<numberOfPoints;i++){drawStar(tempx,tempy);ctx.beginPath();ctx.moveTo(200,200);var a,b,c,d;a=tempx;b=tempy;c=starX[i]-(starX[i]-destStarX[i])*timeOut/400;d=starY[i]-(starY[i]-destStarY[i])*timeOut/400;var grd=ctx.createLinearGradient(a,b,c,d);grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", .02)");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", 0)");ctx.strokeStyle=grd;ctx.moveTo(tempx,tempy);tempx=starX[i]-(starX[i]-destStarX[i])*timeOut/400;tempy=starY[i]-(starY[i]-destStarY[i])*timeOut/400;ctx.lineTo(tempx,tempy);ctx.closePath();ctx.stroke()}if(timeOut<400){timeOut++}else{timeOut=1;refreshPosition()}}function refreshPosition(){for(var i=0;i<numberOfPoints;i++){starX[i]=destStarX[i];starY[i]=destStarY[i]}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground8=function(options){var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var tempx=60;var tempy=60;function drawStar(posX,posY){ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,radius/2,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .1)";ctx.beginPath();ctx.arc(posX,posY,radius*1.5,0,Math.PI*2,true);ctx.closePath();ctx.fill()}var starX=new Array();var starY=new Array();var destStarX=new Array();var destStarY=new Array();var timeOut=1;function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){starX[i]=Math.random()*width;starY[i]=Math.random()*height}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<numberOfPoints;i++){tempx=starX[i]-(starX[i]-destStarX[i])*timeOut/400;tempy=starY[i]-(starY[i]-destStarY[i])*timeOut/400;drawStar(tempx,tempy)}if(timeOut<400){timeOut++}else{timeOut=1;refreshPosition()}}function refreshPosition(){for(var i=0;i<200;i++){starX[i]=destStarX[i];starY[i]=destStarY[i]}for(var i=0;i<200;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);

/********************波浪线********************/
(function ($, window) {
	$ = jQuery;
	$(document).ready(


	),
	function(a, b) {
	    "use strict";
	    "function" == typeof define && "object" == typeof define.amd ? define([],
	    function() {
	        return b(a)
	    }) : a.SineWaves = b(a)
	} (this,
	function() {
	    "use strict";
	    function a(a) {
	    	
	        if (this.options = i.defaults(this.options, a), this.el = this.options.el, delete this.options.el, !this.el) throw "No Canvas Selected";
	        if (this.ctx = this.el.getContext("2d"), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) throw "No waves specified";
	        this.dpr = window.devicePixelRatio || 1,
	        this.updateDimensions(),
	        window.addEventListener("resize", this.updateDimensions.bind(this)),
	        this.setupUserFunctions(),
	        this.easeFn = i.getFn(n, this.options.ease, "linear"),
	        this.rotation = i.degreesToRadians(this.options.rotate),
	        i.isType(this.options.running, "boolean") && (this.running = this.options.running),
	        this.setupWaveFns(),
	        this.loop()
	    }
	    function b(a, b) {
	        return i.isType(a, "number") ? a: (a = a.toString(), a.indexOf("%") > -1 ? (a = parseFloat(a), a > 1 && (a /= 100), b * a) : a.indexOf("px") > -1 ? parseInt(a, 10) : void 0)
	    }
	    Function.prototype.bind || (Function.prototype.bind = function(a) {
	        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	        var b = Array.prototype.slice.call(arguments, 1),
	        c = this,
	        d = function() {},
	        e = function() {
	            return c.apply(this instanceof d && a ? this: a, b.concat(Array.prototype.slice.call(arguments)))
	        };
	        return d.prototype = this.prototype,
	        e.prototype = new d,
	        e
	    });
	    for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"],
	    window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"] || window[c[d] + "CancelRequestAnimationFrame"];
	    if (!window.requestAnimationFrame) {
	        var e = 0;
	        window.requestAnimationFrame = function(a) {
	            var b = (new Date).getTime(),
	            c = Math.max(0, 16 - (b - e)),
	            d = window.setTimeout(function() {
	                a(b + c)
	            },
	            c);
	            return e = b + c,
	            d
	        }
	    }
	    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
	        clearTimeout(a)
	    });
	    var f = Math.PI / 180,
	    g = 2 * Math.PI,
	    h = Math.PI / 2,
	    i = {},
	    j = i.isType = function(a, b) {
	        var c = {}.toString.call(a).toLowerCase();
	        return c === "[object " + b.toLowerCase() + "]"
	    },
	    k = i.isFunction = function(a) {
	        return j(a, "function")
	    },
	    l = i.isString = function(a) {
	        return j(a, "string")
	    },
	    m = (i.isNumber = function(a) {
	        return j(a, "number")
	    },
	    i.shallowClone = function(a) {
	        var b = {};
	        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
	        return b
	    }),
	    n = (i.defaults = function(a, b) {
	        j(b, "object") || (b = {});
	        var c = m(a);
	        for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
	        return c
	    },
	    i.degreesToRadians = function(a) {
	        if (!j(a, "number")) throw new TypeError("Degrees is not a number");
	        return a * f
	    },
	    i.getFn = function(a, b, c) {
	        return k(b) ? b: l(b) && k(a[b.toLowerCase()]) ? a[b.toLowerCase()] : a[c]
	    },
	    {});
	    n.linear = function(a, b) {
	        return b
	    },
	    n.sinein = function(a, b) {
	        return b * (Math.sin(a * Math.PI - h) + 1) * .5
	    },
	    n.sineout = function(a, b) {
	        return b * (Math.sin(a * Math.PI + h) + 1) * .5
	    },
	    n.sineinout = function(a, b) {
	        return b * (Math.sin(a * g - h) + 1) * .5
	    };
	    var o = {};
	    o.sine = function(a) {
	        return Math.sin(a)
	    },
	    o.sin = o.sine,
	    o.sign = function(a) {
	        return a = +a,
	        0 === a || isNaN(a) ? a: a > 0 ? 1 : -1
	    },
	    o.square = function(a) {
	        return o.sign(Math.sin(a * g))
	    },
	    o.sawtooth = function(a) {
	        return 2 * (a - Math.floor(a + .5))
	    },
	    o.triangle = function(a) {
	        return Math.abs(o.sawtooth(a))
	    },
	    a.prototype.options = {
	        speed: 10,
	        rotate: 0,
	        ease: "Linear",
	        wavesWidth: "95%"
	    },
	    a.prototype.setupWaveFns = function() {
	        for (var a = -1,
	        b = this.waves.length; ++a < b;) this.waves[a].waveFn = i.getFn(o, this.waves[a].type, "sine")
	    },
	    a.prototype.setupUserFunctions = function() {
	        i.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener("resize", this.options.resizeEvent.bind(this))),
	        i.isFunction(this.options.initialize) && this.options.initialize.call(this)
	    };
	    var p = {
	        timeModifier: 1,
	        amplitude: 50,
	        wavelength: 50,
	        segmentLength: 10,
	        lineWidth: 1,
	        strokeStyle: "rgba(255, 255, 255, 0.2)",
	        type: "Sine"
	    };
	    return a.prototype.getDimension = function(a) {
	        return i.isNumber(this.options[a]) ? this.options[a] : i.isFunction(this.options[a]) ? this.options[a].call(this, this.el) : "width" === a ? this.el.clientWidth: "height" === a ? this.el.clientHeight: void 0
	    },
	    a.prototype.updateDimensions = function() {
	        var a = this.getDimension("width"),
	        c = this.getDimension("height");
	        this.width = this.el.width = a * this.dpr,
	        this.height = this.el.height = c * this.dpr,
	        this.el.style.width = a + "px",
	        this.el.style.height = c + "px",
	        this.waveWidth = b(this.options.wavesWidth, this.width),
	        this.waveLeft = (this.width - this.waveWidth) / 2,
	        this.yAxis = this.height / 2
	    },
	    a.prototype.clear = function() {
	        this.ctx.clearRect(0, 0, this.width, this.height)
	    },
	    a.prototype.time = 0,
	    a.prototype.update = function(a) {
	        this.time = this.time - .007,
	        "undefined" == typeof a && (a = this.time);
	        var b = -1,
	        c = this.waves.length;
	        for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate( - this.width / 2, -this.height / 2)); ++b < c;) {
	            var d = this.waves[b].timeModifier || 1;
	            this.drawWave(a * d, this.waves[b])
	        }
	        this.ctx.restore(),
	        b = void 0,
	        c = void 0
	    },
	    a.prototype.getPoint = function(a, b, c) {
	        var d = a * this.options.speed + ( - this.yAxis + b) / c.wavelength,
	        e = c.waveFn.call(this, d, o),
	        f = this.easeFn.call(this, b / this.waveWidth, c.amplitude);
	        return d = b + this.waveLeft,
	        e = f * e + this.yAxis,
	        {
	            x: d,
	            y: e
	        }
	    },
	    a.prototype.drawWave = function(a, b) {
	        b = i.defaults(p, b),
	        this.ctx.lineWidth = b.lineWidth * this.dpr,
	        this.ctx.strokeStyle = b.strokeStyle,
	        this.ctx.lineCap = "butt",
	        this.ctx.lineJoin = "round",
	        this.ctx.beginPath(),
	        this.ctx.moveTo(0, this.yAxis),
	        this.ctx.lineTo(this.waveLeft, this.yAxis);
	        var c, d;
	        for (c = 0; c < this.waveWidth; c += b.segmentLength) d = this.getPoint(a, c, b),
	        this.ctx.lineTo(d.x, d.y),
	        d = void 0;
	        c = void 0,
	        b = void 0,
	        this.ctx.lineTo(this.width, this.yAxis),
	        this.ctx.stroke()
	    },
	    a.prototype.running = !0,
	    a.prototype.loop = function() {
	        this.running === !0 && this.update(),
	        window.requestAnimationFrame(this.loop.bind(this))
	    },
	    a.prototype.Waves = o,
	    a.prototype.Ease = n,
	    a
	});
	
		$.fn.qfy_bg_canvas_13 = function() {
				var $el = $(this).find("canvas");
			   var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
			   var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			   if(speed=="4") speed=16;
				else if(speed=="3") speed=8;
				else if(speed=="2") speed=3;
				else speed=1;
				var a = new SineWaves({
					el: $el[0],
					speed: speed,
					width: function() {
						var a = $(document).width();
						return 768 > a ? 3 * $el.parent().width() : 1.4 * $el.parent().width()
					},
					height: function() {
						return $el.parent().height()
					},
					wavesWidth: "100%",
					ease: "SineInOut",
					waves: [{
						timeModifier: .5,
						lineWidth: 2,
						amplitude: 150,
						wavelength: 200,
						segmentLength: 1
					},
					{
						timeModifier: .5,
						lineWidth: 2,
						amplitude: 100,
						wavelength: 150,
						segmentLength: 1
					},
					{
						timeModifier: .5,
						lineWidth: 2,
						amplitude: 50,
						wavelength: 80,
						segmentLength: 1
					}],
					initialize: function() {},
					resizeEvent: function() {
						var a = this.ctx.createLinearGradient(0, 0, this.width, 0);
						if(linecolor.r){
								a.addColorStop(0, "rgba("+linecolor.r+", "+linecolor.g+", "+linecolor.b+", 0)"),
								a.addColorStop(.5, "rgba("+linecolor.r+", "+linecolor.g+", "+linecolor.b+", 0.5)"),
								a.addColorStop(1, "rgba("+linecolor.r+", "+linecolor.g+", "+linecolor.b+", 0)");
						}
						for (var b = -1,
						c = this.waves.length; ++b < c;) this.waves[b].strokeStyle = a;
						b = void 0,
						c = void 0,
						a = void 0
					}
				}),
				b = $el,
				c = $(document).scrollTop(),
				d = $(document).scrollTop() + $(window).height(),
				e = b.offset().top + b.height(),
				f = b.offset().top; (c > e || f > d) && (a.running = !1, a.update()),
				$(window).bind("scroll",
				function() {
					c = $(document).scrollTop(),
					d = $(document).scrollTop() + $(window).height(),
					e = b.offset().top + b.height(),
					f = b.offset().top,
					c > e || f > d ? (a.running = !1, a.update()) : (a.running = !0, a.update())
				})
		}

	
	
})($, window);
/********************气泡********************/
(function(e){e.hexToRgb=function(e){if(e.length=="4"){e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)}var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null};e.componentToHex=function(e){var t=e.toString(16);return t.length==1?"0"+t:t};e.rgbToHex=function(t,n,r){return"#"+e.componentToHex(t)+e.componentToHex(n)+e.componentToHex(r)};e.fn.easyBackgroundParticles=function(t){var n=t;var r=this[0].getContext("2d");var i=this.parent();var s=this[0];var o=[];if(n.shape.substr(0,5)=="image"){var u=n.shape.split(":")[1];n.shape="image";n.image=new Image;n.image.src=u}var a=function(e,t){return Math.random()*(t-e)+e};var f=function(){s.width=i.innerWidth();s.height=i.innerHeight()};var l=function(){for(var e=0;e<n.numParticles;e++){var t=n.colors[~~a(0,n.colors.length)];var r=n.borderColors[~~a(0,n.borderColors.length)];var i=a(n.minBorderOpacity,n.maxBorderOpacity);var u=a(n.minOpacity,n.maxOpacity);o[e]={scale:a(n.minScale,n.maxScale),x:a(0,s.width),y:a(0,s.height),rotation:0,xpeed:a(n.minSpeedX,n.maxSpeedX),yspeed:a(n.minSpeedY,n.maxSpeedY),rotationSpeed:a(n.minRotateSpeed,n.maxRotateSpeed),color:"rgba("+t+","+u+")",opacity:u,borderColor:"rgb("+r+")"}}h()};var c=function(e){r.fillStyle=e.color;if(n.border){r.strokeStyle=e.borderColor;r.stroke()}r.beginPath();e.rotation+=e.rotationSpeed;r.save();r.translate(e.x,e.y);r.rotate(e.rotation*Math.PI/180);var t=n.baseSize*e.scale/2;switch(n.shape){case"circle":r.arc(-t,-t,n.baseSize*e.scale,0,2*Math.PI,false);break;case"square":r.fillRect(-t,-t,n.baseSize*e.scale,n.baseSize*e.scale);break;case"image":r.globalAlpha=e.opacity;r.drawImage(n.image,-(n.image.width/2),-(n.image.height/2),n.image.width*e.scale,n.image.height*e.scale);r.globalAlpha=1;break}r.restore();r.fill()};var h=function(){setInterval(function(){r.clearRect(0,0,s.width,s.height);for(var e=0;e<n.numParticles;e++){var t=o[e];t.x+=t.xpeed;t.y+=t.yspeed;var i=n.baseSize*t.scale;var u=i;if(n.shape=="image"){i=n.image.width*t.scale;u=n.image.height*t.scale}if(t.x>s.width+i||t.y>s.height+u||t.x<-(i*1.5)||t.y<-(u*1.5)){p(t)}else{c(t)}}},17)};var p=function(e){var t=a(0,1);var r=n.baseSize*e.scale;var i=r;if(n.shape=="image"){r=n.image.width*e.scale;i=n.image.height*e.scale}if(t>.5){e.x=e.xpeed>0?-r:s.width+r;e.y=a(0,s.height)}else{e.x=a(0,s.width);e.y=e.yspeed>0?-i:s.height+i}c(e)};f();e(window).on("resize.canvas",f);l()};e.fn.easyBackground=function(t){function u(){var t=e('<canvas class="easy-background-canvas" />');t.css("display","block");i.append(t);return t}function a(t){var r=e('<div id="easy-background-player" />');i.append(r);if(t.substr(0,7)=="youtube"){var s=t.split(":")[1];if(s){var o=document.createElement("script");o.type="text/javascript";o.src="//www.youtube.com/iframe_api";e("body").append(o);window.onYouTubeIframeAPIReady=function(){var e=new YT.Player("easy-background-player",{width:1,height:1,videoId:s,playerVars:{controls:0,showinfo:0,modestbranding:1,iv_load_policy:3,wmode:"transparent"},events:{onReady:function(e){u();if(n.mute){e.target.mute()}e.target.seekTo(0);e.target.playVideo()},onStateChange:function(t){if(t.data===0){e.seekTo(0)}}}})};var u=function(){var t=i.innerWidth();var r=i.innerHeight();if(t/n.ratio<r){var s=Math.ceil(r*n.ratio);e("#easy-background-player").width(s);e("#easy-background-player").height(r);e("#easy-background-player").css({left:(t-s)/2,top:0})}else{var o=Math.ceil(t/n.ratio);e("#easy-background-player").width(t);e("#easy-background-player").height(o);e("#easy-background-player").css({left:0,top:(r-o)/2})}};e(window).on("resize.youtube",u)}}}function f(e,t){switch(n.gradientType){case"horizontal":i.css("background","-moz-linear-gradient(left, "+e+", "+t+" 100%)");i.css("background","-webkit-gradient(linear, left top, right top, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-linear-gradient(left, "+e+" 0%,"+t+" 100%)");i.css("background","-o-linear-gradient(left, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-linear-gradient(left, "+e+" 0%,"+t+" 100%)");i.css("background","linear-gradient(to right, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=1 )");break;case"vertical":i.css("background","-moz-linear-gradient(top, "+e+", "+t+" 100%)");i.css("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-linear-gradient(top, "+e+" 0%,"+t+" 100%)");i.css("background","-o-linear-gradient(top, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-linear-gradient(top, "+e+" 0%,"+t+" 100%)");i.css("background","linear-gradient(to bottom, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=0 )");break;case"diagonal":i.css("background","-moz-linear-gradient(-45deg, "+e+", "+t+" 100%)");i.css("background","-webkit-gradient(linear, left top, right bottom, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-linear-gradient(-45deg, "+e+" 0%,"+t+" 100%)");i.css("background","-o-linear-gradient(-45deg, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-linear-gradient(-45deg, "+e+" 0%,"+t+" 100%)");i.css("background","linear-gradient(135deg, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=1 )");break;case"radial":i.css("background","-moz-radial-gradient(center, ellipse cover, "+e+" 0%, "+t+" 100%)");i.css("background","-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-radial-gradient(center, ellipse cover, "+e+" 0%,"+t+" 100%)");i.css("background","-o-radial-gradient(center, ellipse cover, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-radial-gradient(center, ellipse cover, "+e+" 0%,"+t+" 100%)");i.css("background","radial-gradient(ellipse at center, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=1 )");break}}function l(t,r){var i={colorAR:t[0][0],colorAG:t[0][1],colorAB:t[0][2],colorBR:t[1][0],colorBG:t[1][1],colorBB:t[1][2]};var s={colorAR:r[0][0],colorAG:r[0][1],colorAB:r[0][2],colorBR:r[1][0],colorBG:r[1][1],colorBB:r[1][2]};e(i).animate(s,{duration:n.duration,easing:n.gradientEase,step:function(){var t=e.rgbToHex(Math.round(this.colorAR),Math.round(this.colorAG),Math.round(this.colorAB));var n=e.rgbToHex(Math.round(this.colorBR),Math.round(this.colorBG),Math.round(this.colorBB));f(t,n)},complete:function(){if(n.gradientLoop){l(r,t)}}})}function c(t){if(!t){if(console&&console.log){console.log("No pattern found.")}return false}i.css("background-image","url("+t+")");var n=new Image;n.src=t;e(n).on("load",function(){h(this.width,this.height)})}function h(t,r){i.css("background-position","0 0");var s={x:0,y:0};var o={x:0,y:0};var u="";if(n.patternAnimationX=="left"){o.x=-t}else if(n.patternAnimationX=="right"){o.x=t}if(n.patternAnimationY=="top"){o.y=-r}else if(n.patternAnimationY=="bottom"){o.y=r}e(s).animate(o,{duration:n.duration,easing:"linear",step:function(){var e=Math.round(this.x);var t=Math.round(this.y);i.css("background-position",e+"px "+t+"px")},complete:function(){h(t,r)}})}function p(t){if(!t||t.length==0){if(console&&console.log){console.log("No slides found.")}return false}for(var r=0;r<t.length;r++){var s=new Image;s.src=t[r]}var o=e("<div />");o.css("width","100%");o.css("height","100%");o.css("position","absolute");o.css("top","0");o.css("left","0");o.css("z-index","2");o.css("-webkit-background-size","cover");o.css("-moz-background-size","cover");o.css("-o-background-size","cover");o.css("background-size","cover");o.css("background-repeat","no-repeat");var u=e("<div/>");u.css("width","100%");u.css("height","100%");u.css("position","absolute");u.css("top","0");u.css("left","0");u.css("z-index","1");u.css("-webkit-background-size","cover");u.css("-moz-background-size","cover");u.css("-o-background-size","cover");u.css("background-size","cover");u.css("background-repeat","no-repeat");i.append(o);i.append(u);d(o,t[0]);if(t.length>1){setTimeout(function(){v(o,u,0,t)},n.duration)}}function d(e,t){e.css("background-image","url("+t+")");e.css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='scale')");e.css("-ms-filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='scale')")}function v(e,t,r,i){var s=r+1;if(s==i.length){s=0}d(t,i[s]);var o=n.slideshowEffect=="slide"?"slideUp":"fadeOut";e[o](n.slideshowSpeed,function(){d(e,i[s]);e.show();setTimeout(function(){v(e,t,s,i)},n.duration)})}var n={effect:"particles",duration:5e3,slides:[],slideshowEffect:"fade",slideshowSpeed:2e3,patternImage:null,patternAnimationX:"left",patternAnimationY:"none",gradientType:"radial",gradientColors:["#9CC4E2","#004799"],gradientAnimateColors:["#666666","#333333"],gradientLoop:true,gradientEase:"linear",video:"youtube:3agk-1DohfA",mute:true,ratio:16/9,shape:"circle",colors:["#FFFFFF","255, 99, 71","19, 19, 19"],border:false,borderColors:["#FF0000","#00FF00","#0000FF"],minScale:.5,maxScale:1,baseSize:30,minOpacity:.1,maxOpacity:1,minBorderOpacity:.1,maxBorderOpacity:1,minSpeedX:-1,maxSpeedX:1,minSpeedY:-1,maxSpeedY:1,minRotateSpeed:.05,maxRotateSpeed:.1,numParticles:75,overlay:"dots",baseColor:"#333333",disableMobile:false,wrapNeighbours:false,relativeNeighbours:false};e.extend(true,n,t);if(n&&n.colors){e(n.colors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.colors[t]=i.r+", "+i.g+", "+i.b}})}if(n&&n.borderColors){e(n.borderColors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.borderColors[t]=i.r+", "+i.g+", "+i.b}})}if(n&&n.gradientColors){e(n.gradientColors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.gradientColors[t]=[i.r,i.g,i.b]}})}if(n&&n.gradientAnimateColors){e(n.gradientAnimateColors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.gradientAnimateColors[t]=[i.r,i.g,i.b]}})}var r=false;if(n.disableMobile){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){r=true}}var i=e('<div class="easy-background" /> ');i.css("width","100%");i.css("height","100%");if(this.is("body")){i.css("position","fixed")}else{i.css("position","absolute");this.css("overflow","hidden")}i.css("top","0");i.css("left","0");if(n.baseColor){i.css("background-color",n.baseColor)}i.css("z-index","1");this.append(i);if(n.overlay){var s=e("<div /> ");s.css("width","100%");s.css("height","100%");s.css("position","absolute");s.css("top","0");s.css("left","0");s.css("z-index","10");switch(n.overlay){case"waves":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPklEQVQYV2NkwAT/gUKM6MLoAjBFGIqRFaJLovBhCrFaB7QeLg5SiEsRzJlgeQxHY/EcSOg/sQoxgwGHiQwA+f4KCL3Y/AQAAAAASUVORK5CYII=)");break;case"horizontal-lines":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAFCAYAAACJmvbYAAAAF0lEQVQIW2NcvHjxfwYcgBGXBEicRpIAn+0C7kufXBgAAAAASUVORK5CYII=)");break;case"vertical-lines":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAF0lEQVQIW2NcvHjx/9jYWEYGJMA4oIIAzrccCBIzFHAAAAAASUVORK5CYII=)");break;case"simple-grid":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQIW2NcvHjxfwYcgBEkGRsby4hNftBJAgB4hhrww0B+QQAAAABJRU5ErkJggg==)");break;case"grid":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaklEQVQYV2NkYGAwBuKzQAwC9UA8C4ifQ/n/GaEMkCIfIG6E8iWB9DMgZoQpAOncgmTSfyBbCmQSSAFIEqYTZNIZkE6YSSAGyDi4nUC2CbKb4CphdqK7CaYAbieSb8BuAikASSKblIbsJgCKXBfTNjWx1AAAAABJRU5ErkJggg==)");break;case"dots":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGklEQVQIW2NkYGD4D8SMQAwGcAY2AbBKDBUAVuYCBQPd34sAAAAASUVORK5CYII=)");break;case"diagonal-lines":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAI0lEQVQIW2NkwAT/GdHE/gP5jMiCYAGQIpggXAAmiCIAEgQAAE4FBbECyZcAAAAASUVORK5CYII=)");break}if(n.overlay.substr(0,5)=="image"){var o=n.overlay.split(":")[1];s.css("background-image","url("+o+")")}i.append(s)}if(n.wrapNeighbours){i.siblings(":not(script)").wrap('<div class="easy-background-wrap" style="position:relative; z-index: 2;"></div>')}else if(n.relativeNeighbours){i.siblings(":not(script)").each(function(t,n){n=e(n);if(n.css("position")=="static"){n.css({position:"relative","z-index":"2"})}})}if(!r){switch(n.effect){case"particles":u().easyBackgroundParticles(n);break;case"video":a(n.video);break;case"gradient":if(n.gradientAnimateColors){l(n.gradientColors,n.gradientAnimateColors)}else{var m=e.rgbToHex(n.gradientColors[0][0],n.gradientColors[0][1],n.gradientColors[0][2]);var g=e.rgbToHex(n.gradientColors[1][0],n.gradientColors[1][1],n.gradientColors[1][2]);f(m,g)}break;case"pattern":c(n.patternImage);break;case"slideshow":p(n.slides);break}}}})(jQuery)

/***********************************/
function qfy_canvas_animale_run(){
	var $ = jQuery;
	jQuery( ".qfy_bg_canvas_1:not(.loaded)" ).each(function(){
	    jQuery(this).addClass("loaded");
	    jQuery(this).qfy_bg_canvas_1();
	});

	jQuery( ".qfy_bg_canvas_4:not(.loaded)" ).each(function(){
	    jQuery(this).addClass("loaded");
	    var linecolor =  $(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff";
		var bgcolor =  $(this).attr("data-bgcolor")? jQuery(this).attr("data-bgcolor"):'#000000';
		var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="8";
		else if(speed=="3") speed="3";
		else if(speed=="2") speed="0.5";
		else speed="0.1";
	    jQuery(this).easyBackground({
			wrapNeighbours: true,
			shape: "circle",
			numParticles: 50,
			colors: [linecolor,linecolor,linecolor],
			minSpeedX: -speed,
            maxSpeedX: speed,
            minSpeedY: -speed,
            maxSpeedY: speed,
            overlay:'',
            baseColor: bgcolor,
		});
	});
	jQuery( ".qfy_bg_canvas_5:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";

			if(linecolor){
		  		jQuery(this).flexBackground1({numberOfPoints:'300',
					radius:'3',
					interval :speed,
					color : 'rgb('+linecolor.r+','+linecolor.g+','+linecolor.b+')'
				});
			}
	});
	jQuery( ".qfy_bg_canvas_6:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
	
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		

		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
				if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground2({
				numberOfPoints: '300',
				radius: '3',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_7:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground3({
				numberOfPoints: '100',
				radius: '2',
				interval: speed,
				velocity: '2',
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_8:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground4({
				drops: '500',
				length: '40',
				stroke: '2',
				interval: speed,
				opacity: '1',
				angle: '30',
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_9:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground5({
				birds: '15',
				size: '15',
				interval: speed,
				velocity: '3',
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_10:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground6({
				numberOfPoints: '100',
				radius: '1',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_11:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground7({
				numberOfPoints: '100',
				radius: '1',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_12:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground8({
				numberOfPoints: '100',
				radius: '1',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_13:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  $this = this;
		 
			  jQuery(this).qfy_bg_canvas_13();
		 
		 
	});
};

