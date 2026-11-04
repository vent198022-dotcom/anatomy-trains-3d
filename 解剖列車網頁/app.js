(()=>{var pl="170",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qu=0,tc=1,td=2;var hh=1,ed=2,Tn=3,Xn=0,De=1,An=2,Gn=0,Fi=1,ec=2,nc=3,ic=4,nd=5,ii=100,id=101,sd=102,rd=103,od=104,ad=200,ld=201,cd=202,hd=203,Go=204,Wo=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,_d=212,xd=213,yd=214,Xo=0,qo=1,Yo=2,Vi=3,$o=4,Zo=5,Ko=6,Jo=7,uh=0,vd=1,Md=2,Wn=0,Sd=1,bd=2,Ed=3,wd=4,Td=5,Ad=6,Rd=7;var dh=300,Hi=301,Gi=302,jo=303,Qo=304,Vr=306,ta=1e3,oi=1001,ea=1002,He=1003,Cd=1004;var Fs=1005;var hn=1006,ho=1007;var ai=1008;var In=1009,fh=1010,ph=1011,Ms=1012,ml=1013,li=1014,un=1015,Ps=1016,gl=1017,_l=1018,Wi=1020,mh=35902,gh=1021,_h=1022,sn=1023,xh=1024,yh=1025,Bi=1026,Xi=1027,xl=1028,yl=1029,vh=1030,vl=1031;var Ml=1033,lr=33776,cr=33777,hr=33778,ur=33779,na=35840,ia=35841,sa=35842,ra=35843,oa=36196,aa=37492,la=37496,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,xa=37817,ya=37818,va=37819,Ma=37820,Sa=37821,dr=36492,ba=36494,Ea=36495,Mh=36283,wa=36284,Ta=36285,Aa=36286;var fr=2300,Ra=2301,uo=2302,sc=2400,rc=2401,oc=2402;var Pd=3200,Id=3201;var Sh=0,Ld=1,Hn="",fe="srgb",Ji="srgb-linear",Hr="linear",Kt="srgb";var Mi=7680;var ac=519,Dd=512,Ud=513,Nd=514,bh=515,Od=516,Fd=517,Bd=518,zd=519,Ca=35044,Eh=35048;var lc="300 es",Rn=2e3,pr=2001,Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,gs=Math.PI/180,Ss=180/Math.PI;function Cn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Sl(i,t){return(i%t+t)%t}function kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vd(i,t,e){return i!==t?(e-i)/(t-i):0}function _s(i,t,e){return(1-e)*i+e*t}function Hd(i,t,e,n){return _s(i,t,1-Math.exp(-e*n))}function Gd(i,t=1){return t-Math.abs(Sl(i,t*2)-t)}function Wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yd(i,t){return i+Math.random()*(t-i)}function $d(i){return i*(.5-Math.random())}function Zd(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(i){return i*gs}function Jd(i){return i*Ss}function jd(i){return(i&i-1)===0&&i!==0}function Qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ef(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Gr={DEG2RAD:gs,RAD2DEG:Ss,generateUUID:Cn,clamp:me,euclideanModulo:Sl,mapLinear:kd,inverseLerp:Vd,lerp:_s,damp:Hd,pingpong:Gd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:Yd,randFloatSpread:$d,seededRandom:Zd,degToRad:Kd,radToDeg:Jd,isPowerOfTwo:jd,ceilPowerOfTwo:Qd,floorPowerOfTwo:tf,setQuaternionFromProperEuler:ef,normalize:Zt,denormalize:nn},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],T=s[1],b=s[4],v=s[7],P=s[2],R=s[5],L=s[8];return r[0]=a*x+o*T+l*P,r[3]=a*m+o*b+l*R,r[6]=a*f+o*v+l*L,r[1]=c*x+h*T+u*P,r[4]=c*m+h*b+u*R,r[7]=c*f+h*v+u*L,r[2]=d*x+p*T+g*P,r[5]=d*m+p*b+g*R,r[8]=d*f+p*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fo=new It;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=mr("canvas");return i.style.display="block",i}var hc={};function ps(i){i in hc||(hc[i]=!0,console.warn(i))}function sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function of(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Gt={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Hr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var uc=[.64,.33,.3,.6,.15,.06],dc=[.2126,.7152,.0722],fc=[.3127,.329],pc=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Ji]:{primaries:uc,whitePoint:fc,transfer:Hr,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:dc,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:uc,whitePoint:fc,transfer:Kt,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:dc,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}});var Si,Pa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=mr("canvas")),Si.width=t.width,Si.height=t.height;let n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},af=0,gr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lf=0,Ge=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=hn,a=ai,o=sn,l=In,c=i.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Cn(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=dh;Ge.DEFAULT_ANISOTROPY=1;var Jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(p+1)/2,P=(f+1)/2,R=(h+d)/4,L=(u+x)/4,B=(g+m)/4;return b>v&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=L/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=B/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=L/r,s=B/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ia=class extends Ln{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new gr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_r=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),R=Math.atan2(P,f*T);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}let v=o*T;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new I,gc=new We,Ue=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),zs.subVectors(this.max,ls),bi.subVectors(t.a,ls),Ei.subVectors(t.b,ls),wi.subVectors(t.c,ls),On.subVectors(Ei,bi),Fn.subVectors(wi,Ei),Kn.subVectors(bi,wi);let e=[0,-On.z,On.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,On.z,0,-On.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-On.y,On.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!go(e,bi,Ei,wi,zs)||(e=[1,0,0,0,1,0,0,0,1],!go(e,bi,Ei,wi,zs))?!1:(ks.crossVectors(On,Fn),e=[ks.x,ks.y,ks.z],go(e,bi,Ei,wi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mn=[new I,new I,new I,new I,new I,new I,new I,new I],je=new I,Bs=new Ue,bi=new I,Ei=new I,wi=new I,On=new I,Fn=new I,Kn=new I,ls=new I,zs=new I,ks=new I,Jn=new I;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cf=new Ue,cs=new I,_o=new I,rn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(_o)),this.expandByPoint(cs.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new I,xo=new I,Vs=new I,Bn=new I,yo=new I,Hs=new I,vo=new I,qi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vs),o=Bn.dot(this.direction),l=-Bn.dot(Vs),c=Bn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xo).addScaledVector(Vs,d),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),Hs.subVectors(n,t),vo.crossVectors(yo,Hs);let a=this.direction.dot(vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);let l=o*this.direction.dot(Hs.crossVectors(Bn,Hs));if(l<0)return null;let c=o*this.direction.dot(yo.cross(Bn));if(c<0||l+c>a)return null;let h=-o*Bn.dot(vo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),zn.crossVectors(n,ze),zn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),zn.crossVectors(n,ze)),zn.normalize(),Gs.crossVectors(ze,zn),s[0]=zn.x,s[4]=Gs.x,s[8]=ze.x,s[1]=zn.y,s[5]=Gs.y,s[9]=ze.y,s[2]=zn.z,s[6]=Gs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],T=n[3],b=n[7],v=n[11],P=n[15],R=s[0],L=s[4],B=s[8],E=s[12],M=s[1],S=s[5],N=s[9],C=s[13],U=s[2],V=s[6],k=s[10],J=s[14],X=s[3],st=s[7],ct=s[11],yt=s[15];return r[0]=a*R+o*M+l*U+c*X,r[4]=a*L+o*S+l*V+c*st,r[8]=a*B+o*N+l*k+c*ct,r[12]=a*E+o*C+l*J+c*yt,r[1]=h*R+u*M+d*U+p*X,r[5]=h*L+u*S+d*V+p*st,r[9]=h*B+u*N+d*k+p*ct,r[13]=h*E+u*C+d*J+p*yt,r[2]=g*R+x*M+m*U+f*X,r[6]=g*L+x*S+m*V+f*st,r[10]=g*B+x*N+m*k+f*ct,r[14]=g*E+x*C+m*J+f*yt,r[3]=T*R+b*M+v*U+P*X,r[7]=T*L+b*S+v*V+P*st,r[11]=T*B+b*N+v*k+P*ct,r[15]=T*E+b*C+v*J+P*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],T=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,v=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,P=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,R=e*T+n*b+s*v+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return t[0]=T*L,t[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*L,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*L,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*L,t[4]=b*L,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*L,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*L,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*L,t[8]=v*L,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*L,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*L,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*L,t[12]=P*L,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*L,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*L,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,T=l*c,b=l*h,v=l*u,P=n.x,R=n.y,L=n.z;return s[0]=(1-(x+f))*P,s[1]=(p+v)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(d+f))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+b)*L,s[9]=(m-T)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);let c=1/r,h=1/a,u=1/o;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Rn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===Rn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,g,x;if(o===Rn)g=(a+r)*u,x=-2*u;else if(o===pr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new I,Qe=new Ot,hf=new I(0,0,0),uf=new I(1,1,1),zn=new I,Gs=new I,ze=new I,_c=new Ot,xc=new We,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},df=0,yc=new I,Ai=new We,bn=new Ot,Ws=new I,hs=new I,ff=new I,pf=new We,vc=new I(1,0,0),Mc=new I(0,1,0),Sc=new I(0,0,1),bc={type:"added"},mf={type:"removed"},Ri={type:"childadded",child:null},Mo={type:"childremoved",child:null},Ie=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new dn,n=new We,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new It}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hs,Ws,this.up):bn.lookAt(Ws,hs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(bn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new I,En=new I,So=new I,wn=new I,Ci=new I,Pi=new I,Ec=new I,bo=new I,Eo=new I,wo=new I,To=new Jt,Ao=new Jt,Ro=new Jt,si=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),En.subVectors(n,e),So.subVectors(t,e);let a=tn.dot(tn),o=tn.dot(En),l=tn.dot(So),c=En.dot(En),h=En.dot(So),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return To.setScalar(0),Ao.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Ao,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),En.subVectors(t,e),tn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ci.subVectors(s,n),Pi.subVectors(r,n),bo.subVectors(t,n);let l=Ci.dot(bo),c=Pi.dot(bo);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,s);let h=Ci.dot(Eo),u=Pi.dot(Eo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);wo.subVectors(t,r);let p=Ci.dot(wo),g=Pi.dot(wo);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ec.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ec,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=Sl(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Co(a,r,t+1/3),this.g=Co(a,r,t),this.b=Co(a,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Gt.fromWorkingColorSpace(Te.copy(this),t),Math.round(me(Te.r*255,0,255))*65536+Math.round(me(Te.g*255,0,255))*256+Math.round(me(Te.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=fe){Gt.fromWorkingColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Xs);let n=_s(kn.h,Xs.h,e),s=_s(kn.s,Xs.s,e),r=_s(kn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Ft;Ft.NAMES=Th;var gf=0,ci=class extends Ln{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Cn(),this.name="",this.blending=Fi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qn=class extends ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new I,qs=new dt,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),t}};var xr=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},_f=0,Ze=new Ot,Po=new Ie,Ii=new I,ke=new Ue,us=new Ue,ve=new I,Xe=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?yr:xr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(ke.min,us.min),ke.expandByPoint(ve),ve.addVectors(ke.max,us.max),ke.expandByPoint(ve)):(ke.expandByPoint(us.min),ke.expandByPoint(us.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),ve.add(Ii)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new I,l[B]=new I;let c=new I,h=new I,u=new I,d=new dt,p=new dt,g=new dt,x=new I,m=new I;function f(B,E,M){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(S),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),o[B].add(x),o[E].add(x),o[M].add(x),l[B].add(m),l[E].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,E=T.length;B<E;++B){let M=T[B],S=M.start,N=M.count;for(let C=S,U=S+N;C<U;C+=3)f(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let b=new I,v=new I,P=new I,R=new I;function L(B){P.fromBufferAttribute(s,B),R.copy(P);let E=o[B];b.copy(E),b.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(R,E);let S=v.dot(l[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,S)}for(let B=0,E=T.length;B<E;++B){let M=T[B],S=M.start,N=M.count;for(let C=S,U=S+N;C<U;C+=3)L(t.getX(C+0)),L(t.getX(C+1)),L(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new Ot,jn=new qi,Ys=new rn,Tc=new I,$s=new I,Zs=new I,Ks=new I,Io=new I,Js=new I,Ac=new I,js=new I,he=class extends Ie{constructor(t=new Xe,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Io.fromBufferAttribute(u,t),a?Js.addScaledVector(Io,h):Js.addScaledVector(Io.sub(e),h))}e.add(Js)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Ys.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ys,Tc)===null||jn.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),jn.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,P=b;v<P;v+=3){let R=o.getX(v),L=o.getX(v+1),B=o.getX(v+2);s=Qs(this,f,t,n,c,h,u,R,L,B),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let T=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=Qs(this,a,t,n,c,h,u,T,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,P=b;v<P;v+=3){let R=v,L=v+1,B=v+2;s=Qs(this,f,t,n,c,h,u,R,L,B),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let T=m,b=m+1,v=m+2;s=Qs(this,a,t,n,c,h,u,T,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function xf(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(js);return c<e.near||c>e.far?null:{distance:c,point:js.clone(),object:i}}function Qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$s),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Ks);let h=xf(i,t,e,n,$s,Zs,Ks,Ac);if(h){let u=new I;si.getBarycoord(Ac,$s,Zs,Ks,u),s&&(h.uv=si.getInterpolatedAttribute(s,o,l,c,u,new dt)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,l,c,u,new dt)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};si.getNormal($s,Zs,Ks,d.normal),h.face=d,h.barycoord=u}return h}var Es=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(x,m,f,T,b,v,P,R,L,B,E){let M=v/L,S=P/B,N=v/2,C=P/2,U=R/2,V=L+1,k=B+1,J=0,X=0,st=new I;for(let ct=0;ct<k;ct++){let yt=ct*S-C;for(let Ut=0;Ut<V;Ut++){let Xt=Ut*M-N;st[x]=Xt*T,st[m]=yt*b,st[f]=U,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[f]=R>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ut/L),u.push(1-ct/B),J+=1}}for(let ct=0;ct<B;ct++)for(let yt=0;yt<L;yt++){let Ut=d+yt+V*ct,Xt=d+yt+V*(ct+1),Y=d+(yt+1)+V*(ct+1),Q=d+(yt+1)+V*ct;l.push(Ut,Xt,Q),l.push(Xt,Y,Q),X+=6}o.addGroup(p,X,E),p+=X,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function yf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Wr={clone:Yi,merge:Re},vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},vr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new I,Rc=new dt,Cc=new dt,Ce=class extends vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Cc),e.subVectors(Cc,Rc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Di=1,Da=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(Li,Di,t,e);s.layers=this.layers,this.add(s);let r=new Ce(Li,Di,t,e);r.layers=this.layers,this.add(r);let a=new Ce(Li,Di,t,e);a.layers=this.layers,this.add(a);let o=new Ce(Li,Di,t,e);o.layers=this.layers,this.add(o);let l=new Ce(Li,Di,t,e);l.layers=this.layers,this.add(l);let c=new Ce(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mr=class extends Ge{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ua=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Es(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Gn});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=hn),new Da(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Lo=new I,Sf=new I,bf=new It,en=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Lo.subVectors(n,e).cross(Sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bf.getNormalMatrix(t),s=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qn=new rn,tr=new I,ws=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],T=s[13],b=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+g,v+T).normalize(),n[3].setComponents(l-a,d-h,m-g,v-T).normalize(),n[4].setComponents(l-o,d-u,m-x,v-b).normalize(),e===Rn)n[5].setComponents(l+o,d+u,m+x,v+b).normalize();else if(e===pr)n[5].setComponents(o,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ef(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sr=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let T=f*d-a;for(let b=0;b<c;b++){let v=b*u-r;g.push(v,-T,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){let b=T+c*f,v=T+c*(f+1),P=T+1+c*(f+1),R=T+1+c*f;p.push(b,v,R),p.push(v,P,R)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:wf,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:If,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Of,bsdfs:Ff,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Yf,common:$f,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Jf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:_p,envmap_vertex:ap,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:xp,lights_toon_pars_fragment:yp,lights_phong_fragment:vp,lights_phong_pars_fragment:Mp,lights_physical_fragment:Sp,lights_physical_pars_fragment:bp,lights_fragment_begin:Ep,lights_fragment_maps:wp,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Ip,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Op,morphinstance_vertex:Fp,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:kp,morphtarget_vertex:Vp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Jp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:xm,transmission_pars_fragment:ym,uv_pars_fragment:vm,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:Em,background_frag:wm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Im,distanceRGBA_vert:Lm,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Om,linedashed_frag:Fm,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:km,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:$m,meshphysical_frag:Zm,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:jm,points_frag:Qm,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Pe={basic:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Re([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Re([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Re([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Re([nt.common,nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Re([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Pe.physical={uniforms:Re([Pe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var er={r:0,b:0,g:0},ti=new dn,sg=new Ot;function rg(i,t,e,n,s,r,a){let o=new Ft(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function x(T){let b=!1,v=g(T);v===null?f(o,l):v&&v.isColor&&(f(v,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===Vr)?(h===void 0&&(h=new he(new Es(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Yi(Pe.backgroundCube.uniforms),vertexShader:Pe.backgroundCube.vertexShader,fragmentShader:Pe.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(b.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(ti)),h.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Kt,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new he(new Sr(2,2),new Ne({name:"BackgroundMaterial",uniforms:Yi(Pe.background.uniforms),vertexShader:Pe.background.vertexShader,fragmentShader:Pe.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(v.colorSpace)!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,b){T.getRGB(er,Ah(i)),n.buffers.color.setClear(er.r,er.g,er.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:x,addToRenderList:m}}function og(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,S,N,C,U){let V=!1,k=u(C,N,S);r!==k&&(r=k,c(r.object)),V=p(M,C,N,U),V&&g(M,C,N,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(M,S,N,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,S,N){let C=N.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let V=U[S.id];V===void 0&&(V={},U[S.id]=V);let k=V[C];return k===void 0&&(k=d(l()),V[C]=k),k}function d(M){let S=[],N=[],C=[];for(let U=0;U<e;U++)S[U]=0,N[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:C,object:M,attributes:{},index:null}}function p(M,S,N,C){let U=r.attributes,V=S.attributes,k=0,J=N.getAttributes();for(let X in J)if(J[X].location>=0){let ct=U[X],yt=V[X];if(yt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ct===void 0||ct.attribute!==yt||yt&&ct.data!==yt.data)return!0;k++}return r.attributesNum!==k||r.index!==C}function g(M,S,N,C){let U={},V=S.attributes,k=0,J=N.getAttributes();for(let X in J)if(J[X].location>=0){let ct=V[X];ct===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let yt={};yt.attribute=ct,ct&&ct.data&&(yt.data=ct.data),U[X]=yt,k++}r.attributes=U,r.attributesNum=k,r.index=C}function x(){let M=r.newAttributes;for(let S=0,N=M.length;S<N;S++)M[S]=0}function m(M){f(M,0)}function f(M,S){let N=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;N[M]=1,C[M]===0&&(i.enableVertexAttribArray(M),C[M]=1),U[M]!==S&&(i.vertexAttribDivisor(M,S),U[M]=S)}function T(){let M=r.newAttributes,S=r.enabledAttributes;for(let N=0,C=S.length;N<C;N++)S[N]!==M[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function b(M,S,N,C,U,V,k){k===!0?i.vertexAttribIPointer(M,S,N,U,V):i.vertexAttribPointer(M,S,N,C,U,V)}function v(M,S,N,C){x();let U=C.attributes,V=N.getAttributes(),k=S.defaultAttributeValues;for(let J in V){let X=V[J];if(X.location>=0){let st=U[J];if(st===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){let ct=st.normalized,yt=st.itemSize,Ut=t.get(st);if(Ut===void 0)continue;let Xt=Ut.buffer,Y=Ut.type,Q=Ut.bytesPerElement,mt=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===ml;if(st.isInterleavedBufferAttribute){let it=st.data,bt=it.stride,At=st.offset;if(it.isInstancedInterleavedBuffer){for(let Nt=0;Nt<X.locationSize;Nt++)f(X.location+Nt,it.meshPerAttribute);M.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)m(X.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Nt=0;Nt<X.locationSize;Nt++)b(X.location+Nt,yt/X.locationSize,Y,ct,bt*Q,(At+yt/X.locationSize*Nt)*Q,mt)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)f(X.location+it,st.meshPerAttribute);M.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<X.locationSize;it++)m(X.location+it);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let it=0;it<X.locationSize;it++)b(X.location+it,yt/X.locationSize,Y,ct,yt*Q,yt/X.locationSize*it*Q,mt)}}else if(k!==void 0){let ct=k[J];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(X.location,ct);break;case 3:i.vertexAttrib3fv(X.location,ct);break;case 4:i.vertexAttrib4fv(X.location,ct);break;default:i.vertexAttrib1fv(X.location,ct)}}}}T()}function P(){B();for(let M in n){let S=n[M];for(let N in S){let C=S[N];for(let U in C)h(C[U].object),delete C[U];delete S[N]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let S=n[M.id];for(let N in S){let C=S[N];for(let U in C)h(C[U].object),delete C[U];delete S[N]}delete n[M.id]}function L(M){for(let S in n){let N=n[S];if(N[M.id]===void 0)continue;let C=N[M.id];for(let U in C)h(C[U].object),delete C[U];delete N[M.id]}}function B(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function ag(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==sn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let B=L===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==In&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==un&&!B)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:P,maxSamples:R}}function cg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new en,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,b=T*4,v=f.clippingState||null;l.value=v,v=h(g,d,b,p);for(let P=0;P!==b;++P)v[P]=e[P];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==x;++b,v+=4)a.copy(u[b]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hg(i){let t=new WeakMap;function e(a,o){return o===jo?a.mapping=Hi:o===Qo&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===jo||o===Qo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ua(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var br=class extends vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,Pc=[.125,.215,.35,.446,.526,.582],ri=20,Do=new br,Ic=new Ft,Uo=null,No=0,Oo=0,Fo=!1,ni=(1+Math.sqrt(5))/2,Ui=1/ni,Lc=[new I(-ni,Ui,0),new I(ni,Ui,0),new I(-Ui,0,ni),new I(Ui,0,ni),new I(0,ni,-Ui),new I(0,ni,Ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,Oo),this._renderer.xr.enabled=Fo,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ps,format:sn,colorSpace:Ji,depthBuffer:!1},s=Dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ug(r)),this._blurMaterial=dg(r,t,e)}return s}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,s){let o=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ic),h.toneMapping=Wn,h.autoClear=!1;let p=new qn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new he(new Es,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ic),x=!0);for(let f=0;f<6;f++){let T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let b=this._cubeSize;nr(s,T*b,f>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Hi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Do)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lc[(s-r-1)%Lc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new he(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ri-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);let f=[],T=0;for(let L=0;L<ri;++L){let B=L/x,E=Math.exp(-B*B/2);f.push(E),L===0?T+=E:L<m&&(T+=2*E)}for(let L=0;L<f.length;L++)f[L]=f[L]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let v=this._sizeLods[s],P=3*v*(s>b-Oi?s-b+Oi:0),R=4*(this._cubeSize-v);nr(e,P,R,3*v,2*v),l.setRenderTarget(e),l.render(u,Do)}};function ug(i){let t=[],e=[],n=[],s=i,r=i-Oi+1+Pc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Oi?l=Pc[a-i+Oi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,T=new Float32Array(x*g*p),b=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let R=0;R<p;R++){let L=R%3*2/3-1,B=R>2?0:-1,E=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];T.set(E,x*g*R),b.set(d,m*g*R);let M=[R,R,R,R,R,R];v.set(M,f*g*R)}let P=new Xe;P.setAttribute("position",new pe(T,x)),P.setAttribute("uv",new pe(b,m)),P.setAttribute("faceIndex",new pe(v,f)),t.push(P),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dc(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){let n=new Float32Array(ri),s=new I(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Uc(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Nc(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===jo||l===Qo,h=l===Hi||l===Gi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Er(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Er(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let T=p.array;x=p.version;for(let b=0,v=T.length;b<v;b+=3){let P=T[b+0],R=T[b+1],L=T[b+2];d.push(P,R,R,L,L,P)}}else if(g!==void 0){let T=g.array;x=g.version;for(let b=0,v=T.length/3-1;b<v;b+=3){let P=b+0,R=b+1,L=b+2;d.push(P,R,R,L,L,P)}}else return;let m=new(wh(d)?yr:xr)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*x[T];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _g(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xg(i,t,e){let n=new WeakMap,s=new Jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*P*4*u),L=new _r(R,v,P,u);L.type=un,L.needsUpdate=!0;let B=b*4;for(let M=0;M<u;M++){let S=m[M],N=f[M],C=T[M],U=v*P*4*M;for(let V=0;V<S.count;V++){let k=V*B;p===!0&&(s.fromBufferAttribute(S,V),R[U+k+0]=s.x,R[U+k+1]=s.y,R[U+k+2]=s.z,R[U+k+3]=0),g===!0&&(s.fromBufferAttribute(N,V),R[U+k+4]=s.x,R[U+k+5]=s.y,R[U+k+6]=s.z,R[U+k+7]=0),x===!0&&(s.fromBufferAttribute(C,V),R[U+k+8]=s.x,R[U+k+9]=s.y,R[U+k+10]=s.z,R[U+k+11]=C.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new dt(v,P)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var wr=class extends Ge{constructor(t,e,n,s,r,a,o,l,c,h=Bi){if(h!==Bi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=li),n===void 0&&h===Xi&&(n=Wi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ch=new Ge,Oc=new wr(1,1),Ph=new _r,Ih=new La,Lh=new Mr,Fc=[],Bc=[],zc=new Float32Array(16),kc=new Float32Array(9),Vc=new Float32Array(4);function ji(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),xe(e,n)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;kc.set(n),i.uniformMatrix3fv(this.addr,!1,kc),xe(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),xe(e,n)}}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oc.compareFunction=bh,r=Oc):r=Ch,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lh,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function zg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return wg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){let e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){let e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Wg(i,t){let e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){let e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){let e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function Jg(i,t){i.uniform1uiv(this.addr,t)}function jg(i,t){i.uniform2uiv(this.addr,t)}function Qg(i,t){i.uniform3uiv(this.addr,t)}function t0(i,t){i.uniform4uiv(this.addr,t)}function e0(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ch,r[a])}function n0(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ih,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Lh,r[a])}function s0(i,t,e){let n=this.cache,s=t.length,r=Xr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ph,r[a])}function r0(i){switch(i){case 5126:return kg;case 35664:return Vg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return jg;case 36295:return Qg;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}var Na=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Oa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}},Fa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function o0(i,t,e){let n=i.name,s=n.length;for(Bo.lastIndex=0;;){let r=Bo.exec(n),a=Bo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hc(e,c===void 0?new Na(o,i,t):new Oa(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Fa(o),Hc(e,u)),e=u}}}var ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);o0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Gc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a0=37297,l0=0;function c0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wc=new It;function h0(i){Gt._getMatrix(Wc,Gt.workingColorSpace,i);let t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+c0(i.getShaderSource(t),a)}else return s}function u0(i,t){let e=h0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d0(i,t){let e;switch(t){case Sd:e="Linear";break;case bd:e="Reinhard";break;case Ed:e="Cineon";break;case wd:e="ACESFilmic";break;case Ad:e="AgX";break;case Rd:e="Neutral";break;case Td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ir=new I;function f0(){Gt.getLuminanceCoefficients(ir);let i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function m0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ms(i){return i!==""}function qc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(_0,y0)}var x0=new Map;function y0(i,t){let e=Dt[t];if(e===void 0){let n=x0.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(v0,M0)}function M0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function b0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function w0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case Md:t="ENVMAP_BLENDING_ADD";break}return t}function T0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=S0(e),c=b0(e),h=E0(e),u=w0(e),d=T0(e),p=p0(e),g=m0(r),x=s.createProgram(),m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ms).join(`
`),f.length>0&&(f+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),f=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,u0("linearToOutputTexel",e.outputColorSpace),f0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Ba(a),a=qc(a,e),a=Yc(a,e),o=Ba(o),o=qc(o,e),o=Yc(o,e),a=$c(a),o=$c(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=T+m+a,v=T+f+o,P=Gc(s,s.VERTEX_SHADER,b),R=Gc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(S){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),C=s.getShaderInfoLog(P).trim(),U=s.getShaderInfoLog(R).trim(),V=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,R);else{let J=Xc(s,P,"vertex"),X=Xc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+J+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(C===""||U==="")&&(k=!1);k&&(S.diagnostics={runnable:V,programLog:N,vertexShader:{log:C,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(P),s.deleteShader(R),B=new ki(s,x),E=g0(s,x)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,a0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}var R0=0,za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ka(t),e.set(t,n)),n}},ka=class{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}};function C0(i,t,e,n,s,r,a){let o=new bs,l=new za,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,S,N,C){let U=N.fog,V=C.geometry,k=E.isMeshStandardMaterial?N.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),X=J&&J.mapping===Vr?J.image.height:null,st=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=ct!==void 0?ct.length:0,Ut=0;V.morphAttributes.position!==void 0&&(Ut=1),V.morphAttributes.normal!==void 0&&(Ut=2),V.morphAttributes.color!==void 0&&(Ut=3);let Xt,Y,Q,mt;if(st){let $t=Pe[st];Xt=$t.vertexShader,Y=$t.fragmentShader}else Xt=E.vertexShader,Y=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),mt=l.getFragmentShaderID(E);let it=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),At=C.isInstancedMesh===!0,Nt=C.isBatchedMesh===!0,Qt=!!E.map,Bt=!!E.matcap,re=!!J,O=!!E.aoMap,Ye=!!E.lightMap,zt=!!E.bumpMap,kt=!!E.normalMap,Et=!!E.displacementMap,ne=!!E.emissiveMap,St=!!E.metalnessMap,A=!!E.roughnessMap,_=E.anisotropy>0,H=E.clearcoat>0,Z=E.dispersion>0,j=E.iridescence>0,$=E.sheen>0,vt=E.transmission>0,ot=_&&!!E.anisotropyMap,ut=H&&!!E.clearcoatMap,Ht=H&&!!E.clearcoatNormalMap,tt=H&&!!E.clearcoatRoughnessMap,ft=j&&!!E.iridescenceMap,wt=j&&!!E.iridescenceThicknessMap,Tt=$&&!!E.sheenColorMap,pt=$&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Lt=!!E.specularColorMap,te=!!E.specularIntensityMap,D=vt&&!!E.transmissionMap,rt=vt&&!!E.thicknessMap,q=!!E.gradientMap,K=!!E.alphaMap,ht=E.alphaTest>0,at=!!E.alphaHash,Ct=!!E.extensions,ce=Wn;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Ee={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:Xt,fragmentShader:Y,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&C._colorsTexture!==null,instancing:At,instancingColor:At&&C.instanceColor!==null,instancingMorph:At&&C.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ji,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:Bt,envMap:re,envMapMode:re&&J.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:Ye,bumpMap:zt,normalMap:kt,displacementMap:d&&Et,emissiveMap:ne,normalMapObjectSpace:kt&&E.normalMapType===Ld,normalMapTangentSpace:kt&&E.normalMapType===Sh,metalnessMap:St,roughnessMap:A,anisotropy:_,anisotropyMap:ot,clearcoat:H,clearcoatMap:ut,clearcoatNormalMap:Ht,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:wt,sheen:$,sheenColorMap:Tt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Lt,specularIntensityMap:te,transmission:vt,transmissionMap:D,thicknessMap:rt,gradientMap:q,opaque:E.transparent===!1&&E.blending===Fi&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:at,combine:E.combine,mapUv:Qt&&x(E.map.channel),aoMapUv:O&&x(E.aoMap.channel),lightMapUv:Ye&&x(E.lightMap.channel),bumpMapUv:zt&&x(E.bumpMap.channel),normalMapUv:kt&&x(E.normalMap.channel),displacementMapUv:Et&&x(E.displacementMap.channel),emissiveMapUv:ne&&x(E.emissiveMap.channel),metalnessMapUv:St&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:ot&&x(E.anisotropyMap.channel),clearcoatMapUv:ut&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(E.sheenRoughnessMap.channel),specularMapUv:Vt&&x(E.specularMap.channel),specularColorMapUv:Lt&&x(E.specularColorMap.channel),specularIntensityMapUv:te&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:rt&&x(E.thicknessMap.channel),alphaMapUv:K&&x(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(kt||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!V.attributes.uv&&(Qt||K),fog:!!U,useFog:E.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:C.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&Gt.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===De,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ct&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&E.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let S in E.defines)M.push(S),M.push(E.defines[S]);return E.isRawShaderMaterial===!1&&(T(M,E),b(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function T(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let M=g[E.type],S;if(M){let N=Pe[M];S=Wr.clone(N.uniforms)}else S=E.uniforms;return S}function P(E,M){let S;for(let N=0,C=h.length;N<C;N++){let U=h[N];if(U.cacheKey===M){S=U,++S.usedTimes;break}}return S===void 0&&(S=new A0(i,M,E,r),h.push(S)),S}function R(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function L(E){l.remove(E)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:P,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:B}}function P0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function I0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||I0),n.length>1&&n.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function L0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Jc,i.set(n,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function D0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ft};break;case"SpotLight":e={position:new I,direction:new I,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function U0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var N0=0;function O0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F0(i){let t=new D0,e=U0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ot,a=new Ot;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,T=0,b=0,v=0,P=0,R=0,L=0;c.sort(O0);for(let E=0,M=c.length;E<M;E++){let S=c[E],N=S.color,C=S.intensity,U=S.distance,V=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*C,u+=N.g*C,d+=N.b*C;else if(S.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(S.sh.coefficients[k],C);L++}else if(S.isDirectionalLight){let k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let J=S.shadow,X=e.get(S);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=S.shadow.matrix,T++}n.directional[p]=k,p++}else if(S.isSpotLight){let k=t.get(S);k.position.setFromMatrixPosition(S.matrixWorld),k.color.copy(N).multiplyScalar(C),k.distance=U,k.coneCos=Math.cos(S.angle),k.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),k.decay=S.decay,n.spot[x]=k;let J=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,J.updateMatrices(S),S.castShadow&&R++),n.spotLightMatrix[x]=J.matrix,S.castShadow){let X=e.get(S);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=V,v++}x++}else if(S.isRectAreaLight){let k=t.get(S);k.color.copy(N).multiplyScalar(C),k.halfWidth.set(S.width*.5,0,0),k.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=k,m++}else if(S.isPointLight){let k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),k.distance=S.distance,k.decay=S.decay,S.castShadow){let J=S.shadow,X=e.get(S);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=S.shadow.matrix,b++}n.point[g]=k,g++}else if(S.isHemisphereLight){let k=t.get(S);k.skyColor.copy(S.color).multiplyScalar(C),k.groundColor.copy(S.groundColor).multiplyScalar(C),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let B=n.hash;(B.directionalLength!==p||B.pointLength!==g||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==T||B.numPointShadows!==b||B.numSpotShadows!==v||B.numSpotMaps!==P||B.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,B.directionalLength=p,B.pointLength=g,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=T,B.numPointShadows=b,B.numSpotShadows=v,B.numSpotMaps=P,B.numLightProbes=L,n.version=N0++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){let b=c[f];if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(b.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function jc(i){let t=new F0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function B0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new jc(i),t.set(s,[o])):r>=a.length?(o=new jc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Va=class extends ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V0(i,t,e){let n=new ws,s=new dt,r=new dt,a=new Jt,o=new Va({depthPacking:Id}),l=new Ha,c={},h=e.maxTextureSize,u={[Xn]:De,[De]:Xn,[An]:An},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:z0,fragmentShader:k0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let f=this.type;this.render=function(R,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Gn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let C=f!==Tn&&this.type===Tn,U=f===Tn&&this.type!==Tn;for(let V=0,k=R.length;V<k;V++){let J=R[V],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let st=X.getFrameExtents();if(s.multiply(st),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,X.mapSize.y=r.y)),X.map===null||C===!0||U===!0){let yt=this.type!==Tn?{minFilter:He,magFilter:He}:{};X.map!==null&&X.map.dispose(),X.map=new Dn(s.x,s.y,yt),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ct=X.getViewportCount();for(let yt=0;yt<ct;yt++){let Ut=X.getViewport(yt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),N.viewport(a),X.updateMatrices(J,yt),n=X.getFrustum(),v(L,B,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Tn&&T(X,B),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,S)};function T(R,L){let B=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,B,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,B,p,x,null)}function b(R,L,B,E){let M=null,S=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)M=S;else if(M=B.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let N=M.uuid,C=L.uuid,U=c[N];U===void 0&&(U={},c[N]=U);let V=U[C];V===void 0&&(V=M.clone(),U[C]=V,L.addEventListener("dispose",P)),M=V}if(M.visible=L.visible,M.wireframe=L.wireframe,E===Tn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=i.properties.get(M);N.light=B}return M}function v(R,L,B,E,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Tn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let C=t.update(R),U=R.material;if(Array.isArray(U)){let V=C.groups;for(let k=0,J=V.length;k<J;k++){let X=V[k],st=U[X.materialIndex];if(st&&st.visible){let ct=b(R,st,E,M);R.onBeforeShadow(i,R,L,B,C,ct,X),i.renderBufferDirect(B,null,C,ct,R,X),R.onAfterShadow(i,R,L,B,C,ct,X)}}}else if(U.visible){let V=b(R,U,E,M);R.onBeforeShadow(i,R,L,B,C,V,null),i.renderBufferDirect(B,null,C,V,R,null),R.onAfterShadow(i,R,L,B,C,V,null)}}let N=R.children;for(let C=0,U=N.length;C<U;C++)v(N[C],L,B,E,M)}function P(R){R.target.removeEventListener("dispose",P);for(let B in c){let E=c[B],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var H0={[Xo]:qo,[Yo]:Ko,[$o]:Jo,[Vi]:Zo,[qo]:Xo,[Ko]:Yo,[Jo]:$o,[Zo]:Vi};function G0(i,t){function e(){let D=!1,rt=new Jt,q=null,K=new Jt(0,0,0,0);return{setMask:function(ht){q!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){D=ht},setClear:function(ht,at,Ct,ce,Ee){Ee===!0&&(ht*=ce,at*=ce,Ct*=ce),rt.set(ht,at,Ct,ce),K.equals(rt)===!1&&(i.clearColor(ht,at,Ct,ce),K.copy(rt))},reset:function(){D=!1,q=null,K.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,q=null,K=null,ht=null;return{setReversed:function(at){if(rt!==at){let Ct=t.get("EXT_clip_control");rt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);let ce=ht;ht=null,this.setClear(ce)}rt=at},getReversed:function(){return rt},setTest:function(at){at?it(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){q!==at&&!D&&(i.depthMask(at),q=at)},setFunc:function(at){if(rt&&(at=H0[at]),K!==at){switch(at){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=at}},setLocked:function(at){D=at},setClear:function(at){ht!==at&&(rt&&(at=1-at),i.clearDepth(at),ht=at)},reset:function(){D=!1,q=null,K=null,ht=null,rt=!1}}}function s(){let D=!1,rt=null,q=null,K=null,ht=null,at=null,Ct=null,ce=null,Ee=null;return{setTest:function($t){D||($t?it(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function($t){rt!==$t&&!D&&(i.stencilMask($t),rt=$t)},setFunc:function($t,Ke,yn){(q!==$t||K!==Ke||ht!==yn)&&(i.stencilFunc($t,Ke,yn),q=$t,K=Ke,ht=yn)},setOp:function($t,Ke,yn){(at!==$t||Ct!==Ke||ce!==yn)&&(i.stencilOp($t,Ke,yn),at=$t,Ct=Ke,ce=yn)},setLocked:function($t){D=$t},setClear:function($t){Ee!==$t&&(i.clearStencil($t),Ee=$t)},reset:function(){D=!1,rt=null,q=null,K=null,ht=null,at=null,Ct=null,ce=null,Ee=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,T=null,b=null,v=null,P=null,R=null,L=new Ft(0,0,0),B=0,E=!1,M=null,S=null,N=null,C=null,U=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=J>=2);let st=null,ct={},yt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Xt=new Jt().fromArray(yt),Y=new Jt().fromArray(Ut);function Q(D,rt,q,K){let ht=new Uint8Array(4),at=i.createTexture();i.bindTexture(D,at),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<q;Ct++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(rt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return at}let mt={};mt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(Vi),zt(!1),kt(tc),it(i.CULL_FACE),O(Gn);function it(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function At(D,rt){return u[D]!==rt?(i.bindFramebuffer(D,rt),u[D]=rt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Nt(D,rt){let q=p,K=!1;if(D){q=d.get(rt),q===void 0&&(q=[],d.set(rt,q));let ht=D.textures;if(q.length!==ht.length||q[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ct=ht.length;at<Ct;at++)q[at]=i.COLOR_ATTACHMENT0+at;q.length=ht.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function Qt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Bt={[ii]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};Bt[rd]=i.MIN,Bt[od]=i.MAX;let re={[ad]:i.ZERO,[ld]:i.ONE,[cd]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[gd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(D,rt,q,K,ht,at,Ct,ce,Ee,$t){if(D===Gn){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),D!==nd){if(D!==m||$t!==E){if((f!==ii||v!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,v=ii),$t)switch(D){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,b=null,P=null,R=null,L.set(0,0,0),B=0,m=D,E=$t}return}ht=ht||rt,at=at||q,Ct=Ct||K,(rt!==f||ht!==v)&&(i.blendEquationSeparate(Bt[rt],Bt[ht]),f=rt,v=ht),(q!==T||K!==b||at!==P||Ct!==R)&&(i.blendFuncSeparate(re[q],re[K],re[at],re[Ct]),T=q,b=K,P=at,R=Ct),(ce.equals(L)===!1||Ee!==B)&&(i.blendColor(ce.r,ce.g,ce.b,Ee),L.copy(ce),B=Ee),m=D,E=!1}function Ye(D,rt){D.side===An?bt(i.CULL_FACE):it(i.CULL_FACE);let q=D.side===De;rt&&(q=!q),zt(q),D.blending===Fi&&D.transparent===!1?O(Gn):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function kt(D){D!==Qu?(it(i.CULL_FACE),D!==S&&(D===tc?i.cullFace(i.BACK):D===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),S=D}function Et(D){D!==N&&(k&&i.lineWidth(D),N=D)}function ne(D,rt,q){D?(it(i.POLYGON_OFFSET_FILL),(C!==rt||U!==q)&&(i.polygonOffset(rt,q),C=rt,U=q)):bt(i.POLYGON_OFFSET_FILL)}function St(D){D?it(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+V-1),st!==D&&(i.activeTexture(D),st=D)}function _(D,rt,q){q===void 0&&(st===null?q=i.TEXTURE0+V-1:q=st);let K=ct[q];K===void 0&&(K={type:void 0,texture:void 0},ct[q]=K),(K.type!==D||K.texture!==rt)&&(st!==q&&(i.activeTexture(q),st=q),i.bindTexture(D,rt||mt[D]),K.type=D,K.texture=rt)}function H(){let D=ct[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){Xt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xt.copy(D))}function pt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Vt(D,rt){let q=c.get(rt);q===void 0&&(q=new WeakMap,c.set(rt,q));let K=q.get(D);K===void 0&&(K=i.getUniformBlockIndex(rt,D.name),q.set(D,K))}function Lt(D,rt){let K=c.get(rt).get(D);l.get(rt)!==K&&(i.uniformBlockBinding(rt,K,D.__bindingPointIndex),l.set(rt,K))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ct={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,T=null,b=null,v=null,P=null,R=null,L=new Ft(0,0,0),B=0,E=!1,M=null,S=null,N=null,C=null,U=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:bt,bindFramebuffer:At,drawBuffers:Nt,useProgram:Qt,setBlending:O,setMaterial:Ye,setFlipSided:zt,setCullFace:kt,setLineWidth:Et,setPolygonOffset:ne,setScissorTest:St,activeTexture:A,bindTexture:_,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:ft,texImage3D:wt,updateUBOMapping:Vt,uniformBlockBinding:Lt,texStorage2D:Ht,texStorage3D:tt,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Tt,viewport:pt,reset:te}}function Qc(i,t,e,n){let s=W0(n);switch(e){case gh:return i*t;case xh:return i*t;case yh:return i*t*2;case xl:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case vh:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(t,8)/4;case na:case sa:return Math.max(i,8)*Math.max(t,8)/2;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dr:case ba:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mh:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(i){switch(i){case In:case fh:return{byteLength:1,components:1};case Ms:case ph:case Ps:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case li:case ml:case un:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):mr("canvas")}function x(A,_,H){let Z=1,j=St(A);if((j.width>H||j.height>H)&&(Z=H/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Z*j.width),vt=Math.floor(Z*j.height);u===void 0&&(u=g($,vt));let ot=_?g($,vt):u;return ot.width=$,ot.height=vt,ot.getContext("2d").drawImage(A,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+vt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,_,H,Z,j=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=_;if(_===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),_===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),_===i.RGBA){let vt=j?Hr:Gt.getTransfer(Z);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=vt===Kt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(A,_){let H;return A?_===null||_===li||_===Wi?H=i.DEPTH24_STENCIL8:_===un?H=i.DEPTH32F_STENCIL8:_===Ms&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Wi?H=i.DEPTH_COMPONENT24:_===un?H=i.DEPTH_COMPONENT32F:_===Ms&&(H=i.DEPTH_COMPONENT16),H}function P(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),B(_),_.isVideoTexture&&h.delete(_)}function L(A){let _=A.target;_.removeEventListener("dispose",L),M(_)}function B(A){let _=n.get(A);if(_.__webglInit===void 0)return;let H=A.source,Z=d.get(H);if(Z){let j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(Z).length===0&&d.delete(H)}n.remove(A)}function E(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let H=A.source,Z=d.get(H);delete Z[_.__cacheKey],a.memory.textures--}function M(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let j=0;j<_.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=A.textures;for(let Z=0,j=H.length;Z<j;Z++){let $=n.get(H[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(A)}let S=0;function N(){S=0}function C(){let A=S;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),S+=1,A}function U(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function V(A,_){let H=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,A,_);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function k(A,_){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Y(H,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function J(A,_){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Y(H,A,_);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function X(A,_){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Q(H,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let st={[ta]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},ct={[He]:i.NEAREST,[Cd]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},yt={[Dd]:i.NEVER,[zd]:i.ALWAYS,[Ud]:i.LESS,[bh]:i.LEQUAL,[Nd]:i.EQUAL,[Bd]:i.GEQUAL,[Od]:i.GREATER,[Fd]:i.NOTEQUAL};function Ut(A,_){if(_.type===un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===ho||_.magFilter===Fs||_.magFilter===ai||_.minFilter===hn||_.minFilter===ho||_.minFilter===Fs||_.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,st[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ct[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===He||_.minFilter!==Fs&&_.minFilter!==ai||_.type===un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let Z=_.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let $=U(_);if($!==A.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[$].usedTimes++;let vt=j[A.__cacheKey];vt!==void 0&&(j[A.__cacheKey].usedTimes--,vt.usedTimes===0&&E(_)),A.__cacheKey=$,A.__webglTexture=j[$].texture}return H}function Y(A,_,H){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);let j=Xt(A,_),$=_.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+H);let vt=n.get($);if($.version!==vt.__version||j===!0){e.activeTexture(i.TEXTURE0+H);let ot=Gt.getPrimaries(Gt.workingColorSpace),ut=_.colorSpace===Hn?null:Gt.getPrimaries(_.colorSpace),Ht=_.colorSpace===Hn||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let tt=x(_.image,!1,s.maxTextureSize);tt=ne(_,tt);let ft=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),Tt=b(_.internalFormat,ft,wt,_.colorSpace,_.isVideoTexture);Ut(Z,_);let pt,Vt=_.mipmaps,Lt=_.isVideoTexture!==!0,te=vt.__version===void 0||j===!0,D=$.dataReady,rt=P(_,tt);if(_.isDepthTexture)Tt=v(_.format===Xi,_.type),te&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ft,wt,null));else if(_.isDataTexture)if(Vt.length>0){Lt&&te&&e.texStorage2D(i.TEXTURE_2D,rt,Tt,Vt[0].width,Vt[0].height);for(let q=0,K=Vt.length;q<K;q++)pt=Vt[q],Lt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(i.TEXTURE_2D,q,Tt,pt.width,pt.height,0,ft,wt,pt.data);_.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(i.TEXTURE_2D,rt,Tt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,wt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ft,wt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Tt,Vt[0].width,Vt[0].height,tt.depth);for(let q=0,K=Vt.length;q<K;q++)if(pt=Vt[q],_.format!==sn)if(ft!==null)if(Lt){if(D)if(_.layerUpdates.size>0){let ht=Qc(pt.width,pt.height,_.format,_.type);for(let at of _.layerUpdates){let Ct=pt.data.subarray(at*ht/pt.data.BYTES_PER_ELEMENT,(at+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,at,pt.width,pt.height,1,ft,Ct)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Tt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,pt.width,pt.height,tt.depth,ft,wt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Tt,pt.width,pt.height,tt.depth,0,ft,wt,pt.data)}else{Lt&&te&&e.texStorage2D(i.TEXTURE_2D,rt,Tt,Vt[0].width,Vt[0].height);for(let q=0,K=Vt.length;q<K;q++)pt=Vt[q],_.format!==sn?ft!==null?Lt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(i.TEXTURE_2D,q,Tt,pt.width,pt.height,0,ft,wt,pt.data)}else if(_.isDataArrayTexture)if(Lt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Tt,tt.width,tt.height,tt.depth),D)if(_.layerUpdates.size>0){let q=Qc(tt.width,tt.height,_.format,_.type);for(let K of _.layerUpdates){let ht=tt.data.subarray(K*q/tt.data.BYTES_PER_ELEMENT,(K+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ft,wt,ht)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,wt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,ft,wt,tt.data);else if(_.isData3DTexture)Lt?(te&&e.texStorage3D(i.TEXTURE_3D,rt,Tt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,wt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,ft,wt,tt.data);else if(_.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(i.TEXTURE_2D,rt,Tt,tt.width,tt.height);else{let q=tt.width,K=tt.height;for(let ht=0;ht<rt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Tt,q,K,0,ft,wt,null),q>>=1,K>>=1}}else if(Vt.length>0){if(Lt&&te){let q=St(Vt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Tt,q.width,q.height)}for(let q=0,K=Vt.length;q<K;q++)pt=Vt[q],Lt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ft,wt,pt):e.texImage2D(i.TEXTURE_2D,q,Tt,ft,wt,pt);_.generateMipmaps=!1}else if(Lt){if(te){let q=St(tt);e.texStorage2D(i.TEXTURE_2D,rt,Tt,q.width,q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,wt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ft,wt,tt);m(_)&&f(Z),vt.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,H){if(_.image.length!==6)return;let Z=Xt(A,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let $=n.get(j);if(j.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+H);let vt=Gt.getPrimaries(Gt.workingColorSpace),ot=_.colorSpace===Hn?null:Gt.getPrimaries(_.colorSpace),ut=_.colorSpace===Hn||vt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Ht&&!tt?ft[K]=x(_.image[K],!0,s.maxCubemapSize):ft[K]=tt?_.image[K].image:_.image[K],ft[K]=ne(_,ft[K]);let wt=ft[0],Tt=r.convert(_.format,_.colorSpace),pt=r.convert(_.type),Vt=b(_.internalFormat,Tt,pt,_.colorSpace),Lt=_.isVideoTexture!==!0,te=$.__version===void 0||Z===!0,D=j.dataReady,rt=P(_,wt);Ut(i.TEXTURE_CUBE_MAP,_);let q;if(Ht){Lt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Vt,wt.width,wt.height);for(let K=0;K<6;K++){q=ft[K].mipmaps;for(let ht=0;ht<q.length;ht++){let at=q[ht];_.format!==sn?Tt!==null?Lt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,at.width,at.height,Tt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Vt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,at.width,at.height,Tt,pt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Vt,at.width,at.height,0,Tt,pt,at.data)}}}else{if(q=_.mipmaps,Lt&&te){q.length>0&&rt++;let K=St(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Tt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,ft[K].width,ft[K].height,0,Tt,pt,ft[K].data);for(let ht=0;ht<q.length;ht++){let Ct=q[ht].image[K].image;Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Ct.width,Ct.height,Tt,pt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Vt,Ct.width,Ct.height,0,Tt,pt,Ct.data)}}else{Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Tt,pt,ft[K]);for(let ht=0;ht<q.length;ht++){let at=q[ht];Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Tt,pt,at.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Vt,Tt,pt,at.image[K])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),$.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function mt(A,_,H,Z,j,$){let vt=r.convert(H.format,H.colorSpace),ot=r.convert(H.type),ut=b(H.internalFormat,vt,ot,H.colorSpace),Ht=n.get(_),tt=n.get(H);if(tt.__renderTarget=_,!Ht.__hasExternalTextures){let ft=Math.max(1,_.width>>$),wt=Math.max(1,_.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,ut,ft,wt,_.depth,0,vt,ot,null):e.texImage2D(j,$,ut,ft,wt,0,vt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),kt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,tt.__webglTexture,0,zt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,tt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let Z=_.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=v(_.stencilBuffer,j),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=zt(_);kt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,$,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{let Z=_.textures;for(let j=0;j<Z.length;j++){let $=Z[j],vt=r.convert($.format,$.colorSpace),ot=r.convert($.type),ut=b($.internalFormat,vt,ot,$.colorSpace),Ht=zt(_);H&&kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ut,_.width,_.height):kt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);let j=Z.__webglTexture,$=zt(_);if(_.depthTexture.format===Bi)kt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===Xi)kt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function At(A){let _=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Z}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");bt(_.__webglFramebuffer,A)}else if(H){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),it(_.__webglDepthbuffer[Z],A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),it(_.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(A,_,H){let Z=n.get(A);_!==void 0&&mt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&At(A)}function Qt(A){let _=A.texture,H=n.get(A),Z=n.get(_);A.addEventListener("dispose",L);let j=A.textures,$=A.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let ut=0;ut<_.mipmaps.length;ut++)H.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else H.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)H.__webglFramebuffer[ot]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ot=0,ut=j.length;ot<ut;ot++){let Ht=n.get(j[ot]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&kt(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let ut=j[ot];H.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);let Ht=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),ft=b(ut.internalFormat,Ht,tt,ut.colorSpace,A.isXRRenderTarget===!0),wt=zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),it(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)mt(H.__webglFramebuffer[ot][ut],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else mt(H.__webglFramebuffer[ot],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,ut=j.length;ot<ut;ot++){let Ht=j[ot],tt=n.get(Ht);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ut(i.TEXTURE_2D,Ht),mt(H.__webglFramebuffer,A,Ht,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Ht)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Ut(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)mt(H.__webglFramebuffer[ut],A,_,i.COLOR_ATTACHMENT0,ot,ut);else mt(H.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}A.depthBuffer&&At(A)}function Bt(A){let _=A.textures;for(let H=0,Z=_.length;H<Z;H++){let j=_[H];if(m(j)){let $=T(A),vt=n.get(j).__webglTexture;e.bindTexture($,vt),f($),e.unbindTexture()}}}let re=[],O=[];function Ye(A){if(A.samples>0){if(kt(A)===!1){let _=A.textures,H=A.width,Z=A.height,j=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),ot=_.length>1;if(ot)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Ht=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,j,i.NEAREST),l===!0&&(re.length=0,O.length=0,re.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push($),O.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);let Ht=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function zt(A){return Math.min(s.maxSamples,A.samples)}function kt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Et(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ne(A,_){let H=A.colorSpace,Z=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Ji&&H!==Hn&&(Gt.getTransfer(H)===Kt?(Z!==sn||j!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Nt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=kt}function q0(i,t){function e(n,s=Hn){let r,a=Gt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===sn)return i.RGBA;if(n===xh)return i.LUMINANCE;if(n===yh)return i.LUMINANCE_ALPHA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===vh)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===aa)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===ba||n===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===wa||n===Ta||n===Aa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ga=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ve=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y0={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:$0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xa=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=new Wa,m=e.getContextAttributes(),f=null,T=null,b=[],v=[],P=new dt,R=null,L=new Ce;L.viewport=new Jt;let B=new Ce;B.viewport=new Jt;let E=[L,B],M=new Ga,S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=b[Y];return Q===void 0&&(Q=new xs,b[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=b[Y];return Q===void 0&&(Q=new xs,b[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=b[Y];return Q===void 0&&(Q=new xs,b[Y]=Q),Q.getHandSpace()};function C(Y){let Q=v.indexOf(Y.inputSource);if(Q===-1)return;let mt=b[Q];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<b.length;Y++){let Q=v[Y];Q!==null&&(v[Y]=null,b[Y].disconnect(Q))}S=null,N=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,T=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Dn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,mt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Xi:Bi,mt=m.stencil?Wi:li);let bt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Dn(d.textureWidth,d.textureHeight,{format:sn,type:In,depthTexture:new wr(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(Y){for(let Q=0;Q<Y.removed.length;Q++){let mt=Y.removed[Q],it=v.indexOf(mt);it>=0&&(v[it]=null,b[it].disconnect(mt))}for(let Q=0;Q<Y.added.length;Q++){let mt=Y.added[Q],it=v.indexOf(mt);if(it===-1){for(let At=0;At<b.length;At++)if(At>=v.length){v.push(mt),it=At;break}else if(v[At]===null){v[At]=mt,it=At;break}if(it===-1)break}let bt=b[it];bt&&bt.connect(mt)}}let k=new I,J=new I;function X(Y,Q,mt){k.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(mt.matrixWorld);let it=k.distanceTo(J),bt=Q.projectionMatrix.elements,At=mt.projectionMatrix.elements,Nt=bt[14]/(bt[10]-1),Qt=bt[14]/(bt[10]+1),Bt=(bt[9]+1)/bt[5],re=(bt[9]-1)/bt[5],O=(bt[8]-1)/bt[0],Ye=(At[8]+1)/At[0],zt=Nt*O,kt=Nt*Ye,Et=it/(-O+Ye),ne=Et*-O;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ne),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let St=Nt+Et,A=Qt+Et,_=zt-ne,H=kt+(it-ne),Z=Bt*Qt/A*St,j=re*Qt/A*St;Y.projectionMatrix.makePerspective(_,H,Z,j,St,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,mt=Y.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),M.near=B.near=L.near=Q,M.far=B.far=L.far=mt,(S!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,N=M.far),L.layers.mask=Y.layers.mask|2,B.layers.mask=Y.layers.mask|4,M.layers.mask=L.layers.mask|B.layers.mask;let it=Y.parent,bt=M.cameras;st(M,it);for(let At=0;At<bt.length;At++)st(bt[At],it);bt.length===2?X(M,L,B):M.projectionMatrix.copy(L.projectionMatrix),ct(Y,M,it)};function ct(Y,Q,mt){mt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let yt=null;function Ut(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let it=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let At=0;At<mt.length;At++){let Nt=mt[At],Qt=null;if(p!==null)Qt=p.getViewport(Nt);else{let re=u.getViewSubImage(d,Nt);Qt=re.viewport,At===0&&(t.setRenderTargetTextures(T,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(T))}let Bt=E[At];Bt===void 0&&(Bt=new Ce,Bt.layers.enable(At),Bt.viewport=new Jt,E[At]=Bt),Bt.matrix.fromArray(Nt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Nt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),At===0&&(M.matrix.copy(Bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Bt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let At=u.getDepthInformation(mt[0]);At&&At.isValid&&At.texture&&x.init(t,At,s.renderState)}}for(let mt=0;mt<b.length;mt++){let it=v[mt],bt=b[mt];it!==null&&bt!==void 0&&bt.update(it,Q,c||a)}yt&&yt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Xt=new Rh;Xt.setAnimationLoop(Ut),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}},ei=new dn,K0=new Ot;function J0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=t.get(f),b=T.envMap,v=T.envMapRotation;b&&(m.envMap.value=b,ei.copy(v),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ei)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){let v=b.program;n.uniformBlockBinding(T,v)}function c(T,b){let v=s[T.id];v===void 0&&(g(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",m));let P=b.program;n.updateUBOMapping(T,P);let R=t.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){let b=u();T.__bindingPointIndex=b;let v=i.createBuffer(),P=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=s[T.id],v=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,L=v.length;R<L;R++){let B=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,M=B.length;E<M;E++){let S=B[E];if(p(S,R,E,P)===!0){let N=S.__offset,C=Array.isArray(S.value)?S.value:[S.value],U=0;for(let V=0;V<C.length;V++){let k=C[V],J=x(k);typeof k=="number"||typeof k=="boolean"?(S.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+U,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=0,S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=0,S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=0):(k.toArray(S.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,v,P){let R=T.value,L=b+"_"+v;if(P[L]===void 0)return typeof R=="number"||typeof R=="boolean"?P[L]=R:P[L]=R.clone(),!0;{let B=P[L];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return P[L]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(T){let b=T.uniforms,v=0,P=16;for(let L=0,B=b.length;L<B;L++){let E=Array.isArray(b[L])?b[L]:[b[L]];for(let M=0,S=E.length;M<S;M++){let N=E[M],C=Array.isArray(N.value)?N.value:[N.value];for(let U=0,V=C.length;U<V;U++){let k=C[U],J=x(k),X=v%P,st=X%J.boundary,ct=X+st;v+=st,ct!==0&&P-ct<J.storage&&(v+=P-ct),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=J.storage}}}let R=v%P;return R>0&&(v+=P-R),T.__size=v,T.__cache={},this}function x(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Tr=class{constructor(t={}){let{canvas:e=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this.toneMapping=Wn,this.toneMappingExposure=1;let v=this,P=!1,R=0,L=0,B=null,E=-1,M=null,S=new Jt,N=new Jt,C=null,U=new Ft(0),V=0,k=e.width,J=e.height,X=1,st=null,ct=null,yt=new Jt(0,0,k,J),Ut=new Jt(0,0,k,J),Xt=!1,Y=new ws,Q=!1,mt=!1,it=new Ot,bt=new Ot,At=new I,Nt=new Jt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function re(){return B===null?X:1}let O=n;function Ye(y,F){return e.getContext(y,F)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",at,!1),O===null){let F="webgl2";if(O=Ye(F,y),O===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let zt,kt,Et,ne,St,A,_,H,Z,j,$,vt,ot,ut,Ht,tt,ft,wt,Tt,pt,Vt,Lt,te,D;function rt(){zt=new pg(O),zt.init(),Lt=new q0(O,zt),kt=new lg(O,zt,t,Lt),Et=new G0(O,zt),kt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),ne=new _g(O),St=new P0,A=new X0(O,zt,Et,St,kt,Lt,ne),_=new hg(v),H=new fg(v),Z=new Ef(O),te=new og(O,Z),j=new mg(O,Z,ne,te),$=new yg(O,j,Z,ne),Tt=new xg(O,kt,A),tt=new cg(St),vt=new C0(v,_,H,zt,kt,te,tt),ot=new J0(v,St),ut=new L0,Ht=new B0(zt),wt=new rg(v,_,H,Et,$,p,l),ft=new V0(v,$,kt),D=new j0(O,ne,kt,Et),pt=new ag(O,zt,ne),Vt=new gg(O,zt,ne),ne.programs=vt.programs,v.capabilities=kt,v.extensions=zt,v.properties=St,v.renderLists=ut,v.shadowMap=ft,v.state=Et,v.info=ne}rt();let q=new Xa(v,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(k,J,!1))},this.getSize=function(y){return y.set(k,J)},this.setSize=function(y,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,J=F,e.width=Math.floor(y*X),e.height=Math.floor(F*X),G===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(k*X,J*X).floor()},this.setDrawingBufferSize=function(y,F,G){k=y,J=F,X=G,e.width=Math.floor(y*G),e.height=Math.floor(F*G),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,F,G,W){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,F,G,W),Et.viewport(S.copy(yt).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Ut)},this.setScissor=function(y,F,G,W){y.isVector4?Ut.set(y.x,y.y,y.z,y.w):Ut.set(y,F,G,W),Et.scissor(N.copy(Ut).multiplyScalar(X).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(y){Et.setScissorTest(Xt=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(y=!0,F=!0,G=!0){let W=0;if(y){let z=!1;if(B!==null){let et=B.texture.format;z=et===Ml||et===vl||et===yl}if(z){let et=B.texture.type,lt=et===In||et===li||et===Ms||et===Wi||et===gl||et===_l,gt=wt.getClearColor(),_t=wt.getClearAlpha(),Rt=gt.r,Pt=gt.g,xt=gt.b;lt?(g[0]=Rt,g[1]=Pt,g[2]=xt,g[3]=_t,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Rt,x[1]=Pt,x[2]=xt,x[3]=_t,O.clearBufferiv(O.COLOR,0,x))}else W|=O.COLOR_BUFFER_BIT}F&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Ht.dispose(),St.dispose(),_.dispose(),H.dispose(),$.dispose(),te.dispose(),D.dispose(),vt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ql),q.removeEventListener("sessionend",Yl),Zn.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let y=ne.autoReset,F=ft.enabled,G=ft.autoUpdate,W=ft.needsUpdate,z=ft.type;rt(),ne.autoReset=y,ft.enabled=F,ft.autoUpdate=G,ft.needsUpdate=W,ft.type=z}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ct(y){let F=y.target;F.removeEventListener("dispose",Ct),ce(F)}function ce(y){Ee(y),St.remove(y)}function Ee(y){let F=St.get(y).programs;F!==void 0&&(F.forEach(function(G){vt.releaseProgram(G)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,G,W,z,et){F===null&&(F=Qt);let lt=z.isMesh&&z.matrixWorld.determinant()<0,gt=Ku(y,F,G,W,z);Et.setMaterial(W,lt);let _t=G.index,Rt=1;if(W.wireframe===!0){if(_t=j.getWireframeAttribute(G),_t===void 0)return;Rt=2}let Pt=G.drawRange,xt=G.attributes.position,Wt=Pt.start*Rt,ee=(Pt.start+Pt.count)*Rt;et!==null&&(Wt=Math.max(Wt,et.start*Rt),ee=Math.min(ee,(et.start+et.count)*Rt)),_t!==null?(Wt=Math.max(Wt,0),ee=Math.min(ee,_t.count)):xt!=null&&(Wt=Math.max(Wt,0),ee=Math.min(ee,xt.count));let ie=ee-Wt;if(ie<0||ie===1/0)return;te.setup(z,W,gt,G,_t);let Le,qt=pt;if(_t!==null&&(Le=Z.get(_t),qt=Vt,qt.setIndex(Le)),z.isMesh)W.wireframe===!0?(Et.setLineWidth(W.wireframeLinewidth*re()),qt.setMode(O.LINES)):qt.setMode(O.TRIANGLES);else if(z.isLine){let Mt=W.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*re()),z.isLineSegments?qt.setMode(O.LINES):z.isLineLoop?qt.setMode(O.LINE_LOOP):qt.setMode(O.LINE_STRIP)}else z.isPoints?qt.setMode(O.POINTS):z.isSprite&&qt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Mt=z._multiDrawStarts,vn=z._multiDrawCounts,Yt=z._multiDrawCount,Je=_t?Z.get(_t).bytesPerElement:1,vi=St.get(W).currentProgram.getUniforms();for(let Be=0;Be<Yt;Be++)vi.setValue(O,"_gl_DrawID",Be),qt.render(Mt[Be]/Je,vn[Be])}else if(z.isInstancedMesh)qt.renderInstances(Wt,ie,z.count);else if(G.isInstancedBufferGeometry){let Mt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vn=Math.min(G.instanceCount,Mt);qt.renderInstances(Wt,ie,vn)}else qt.render(Wt,ie)};function $t(y,F,G){y.transparent===!0&&y.side===An&&y.forceSinglePass===!1?(y.side=De,y.needsUpdate=!0,Os(y,F,G),y.side=Xn,y.needsUpdate=!0,Os(y,F,G),y.side=An):Os(y,F,G)}this.compile=function(y,F,G=null){G===null&&(G=y),f=Ht.get(G),f.init(F),b.push(f),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();let W=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let et=z.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){let gt=et[lt];$t(gt,G,z),W.add(gt)}else $t(et,G,z),W.add(et)}),b.pop(),f=null,W},this.compileAsync=function(y,F,G=null){let W=this.compile(y,F,G);return new Promise(z=>{function et(){if(W.forEach(function(lt){St.get(lt).currentProgram.isReady()&&W.delete(lt)}),W.size===0){z(y);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ke=null;function yn(y){Ke&&Ke(y)}function ql(){Zn.stop()}function Yl(){Zn.start()}let Zn=new Rh;Zn.setAnimationLoop(yn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(y){Ke=y,q.setAnimationLoop(y),y===null?Zn.stop():Zn.start()},q.addEventListener("sessionstart",ql),q.addEventListener("sessionend",Yl),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,B),f=Ht.get(y,b.length),f.init(F),b.push(f),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,mt),m=ut.get(y,T.length),m.init(),T.push(m),q.enabled===!0&&q.isPresenting===!0){let et=v.xr.getDepthSensingMesh();et!==null&&co(et,F,-1/0,v.sortObjects)}co(y,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ct),Bt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Bt&&wt.addToRenderList(m,y),this.info.render.frame++,Q===!0&&tt.beginShadows();let G=f.state.shadowsArray;ft.render(G,y,F),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,z=m.transmissive;if(f.setupLights(),F.isArrayCamera){let et=F.cameras;if(z.length>0)for(let lt=0,gt=et.length;lt<gt;lt++){let _t=et[lt];Zl(W,z,y,_t)}Bt&&wt.render(y);for(let lt=0,gt=et.length;lt<gt;lt++){let _t=et[lt];$l(m,y,_t,_t.viewport)}}else z.length>0&&Zl(W,z,y,F),Bt&&wt.render(y),$l(m,y,F);B!==null&&(A.updateMultisampleRenderTarget(B),A.updateRenderTargetMipmap(B)),y.isScene===!0&&y.onAfterRender(v,y,F),te.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],Q===!0&&tt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function co(y,F,G,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){W&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(bt);let lt=$.update(y),gt=y.material;gt.visible&&m.push(y,lt,gt,G,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){let lt=$.update(y),gt=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(bt)),Array.isArray(gt)){let _t=lt.groups;for(let Rt=0,Pt=_t.length;Rt<Pt;Rt++){let xt=_t[Rt],Wt=gt[xt.materialIndex];Wt&&Wt.visible&&m.push(y,lt,Wt,G,Nt.z,xt)}}else gt.visible&&m.push(y,lt,gt,G,Nt.z,null)}}let et=y.children;for(let lt=0,gt=et.length;lt<gt;lt++)co(et[lt],F,G,W)}function $l(y,F,G,W){let z=y.opaque,et=y.transmissive,lt=y.transparent;f.setupLightsView(G),Q===!0&&tt.setGlobalState(v.clippingPlanes,G),W&&Et.viewport(S.copy(W)),z.length>0&&Ns(z,F,G),et.length>0&&Ns(et,F,G),lt.length>0&&Ns(lt,F,G),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Zl(y,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Dn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ps:In,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let et=f.state.transmissionRenderTarget[W.id],lt=W.viewport||S;et.setSize(lt.z,lt.w);let gt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(U),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&wt.render(G);let _t=v.toneMapping;v.toneMapping=Wn;let Rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Q===!0&&tt.setGlobalState(v.clippingPlanes,W),Ns(y,G,W),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let xt=0,Wt=F.length;xt<Wt;xt++){let ee=F[xt],ie=ee.object,Le=ee.geometry,qt=ee.material,Mt=ee.group;if(qt.side===An&&ie.layers.test(W.layers)){let vn=qt.side;qt.side=De,qt.needsUpdate=!0,Kl(ie,G,W,Le,qt,Mt),qt.side=vn,qt.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}v.setRenderTarget(gt),v.setClearColor(U,V),Rt!==void 0&&(W.viewport=Rt),v.toneMapping=_t}function Ns(y,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,et=y.length;z<et;z++){let lt=y[z],gt=lt.object,_t=lt.geometry,Rt=W===null?lt.material:W,Pt=lt.group;gt.layers.test(G.layers)&&Kl(gt,F,G,_t,Rt,Pt)}}function Kl(y,F,G,W,z,et){y.onBeforeRender(v,F,G,W,z,et),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(v,F,G,W,y,et),z.transparent===!0&&z.side===An&&z.forceSinglePass===!1?(z.side=De,z.needsUpdate=!0,v.renderBufferDirect(G,F,W,z,y,et),z.side=Xn,z.needsUpdate=!0,v.renderBufferDirect(G,F,W,z,y,et),z.side=An):v.renderBufferDirect(G,F,W,z,y,et),y.onAfterRender(v,F,G,W,z,et)}function Os(y,F,G){F.isScene!==!0&&(F=Qt);let W=St.get(y),z=f.state.lights,et=f.state.shadowsArray,lt=z.state.version,gt=vt.getParameters(y,z.state,et,F,G),_t=vt.getProgramCacheKey(gt),Rt=W.programs;W.environment=y.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(y.isMeshStandardMaterial?H:_).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Ct),Rt=new Map,W.programs=Rt);let Pt=Rt.get(_t);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===lt)return jl(y,gt),Pt}else gt.uniforms=vt.getUniforms(y),y.onBeforeCompile(gt,v),Pt=vt.acquireProgram(gt,_t),Rt.set(_t,Pt),W.uniforms=gt.uniforms;let xt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(xt.clippingPlanes=tt.uniform),jl(y,gt),W.needsLights=ju(y),W.lightsStateVersion=lt,W.needsLights&&(xt.ambientLightColor.value=z.state.ambient,xt.lightProbe.value=z.state.probe,xt.directionalLights.value=z.state.directional,xt.directionalLightShadows.value=z.state.directionalShadow,xt.spotLights.value=z.state.spot,xt.spotLightShadows.value=z.state.spotShadow,xt.rectAreaLights.value=z.state.rectArea,xt.ltc_1.value=z.state.rectAreaLTC1,xt.ltc_2.value=z.state.rectAreaLTC2,xt.pointLights.value=z.state.point,xt.pointLightShadows.value=z.state.pointShadow,xt.hemisphereLights.value=z.state.hemi,xt.directionalShadowMap.value=z.state.directionalShadowMap,xt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,xt.spotShadowMap.value=z.state.spotShadowMap,xt.spotLightMatrix.value=z.state.spotLightMatrix,xt.spotLightMap.value=z.state.spotLightMap,xt.pointShadowMap.value=z.state.pointShadowMap,xt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Pt,W.uniformsList=null,Pt}function Jl(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=ki.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function jl(y,F){let G=St.get(y);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ku(y,F,G,W,z){F.isScene!==!0&&(F=Qt),A.resetTextureUnits();let et=F.fog,lt=W.isMeshStandardMaterial?F.environment:null,gt=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ji,_t=(W.isMeshStandardMaterial?H:_).get(W.envMap||lt),Rt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),xt=!!G.morphAttributes.position,Wt=!!G.morphAttributes.normal,ee=!!G.morphAttributes.color,ie=Wn;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ie=v.toneMapping);let Le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=Le!==void 0?Le.length:0,Mt=St.get(W),vn=f.state.lights;if(Q===!0&&(mt===!0||y!==M)){let $e=y===M&&W.id===E;tt.setState(W,y,$e)}let Yt=!1;W.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==vn.state.version||Mt.outputColorSpace!==gt||z.isBatchedMesh&&Mt.batching===!1||!z.isBatchedMesh&&Mt.batching===!0||z.isBatchedMesh&&Mt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Mt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Mt.instancing===!1||!z.isInstancedMesh&&Mt.instancing===!0||z.isSkinnedMesh&&Mt.skinning===!1||!z.isSkinnedMesh&&Mt.skinning===!0||z.isInstancedMesh&&Mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Mt.instancingMorph===!1&&z.morphTexture!==null||Mt.envMap!==_t||W.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==Rt||Mt.vertexTangents!==Pt||Mt.morphTargets!==xt||Mt.morphNormals!==Wt||Mt.morphColors!==ee||Mt.toneMapping!==ie||Mt.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,Mt.__version=W.version);let Je=Mt.currentProgram;Yt===!0&&(Je=Os(W,F,z));let vi=!1,Be=!1,os=!1,se=Je.getUniforms(),cn=Mt.uniforms;if(Et.useProgram(Je.program)&&(vi=!0,Be=!0,os=!0),W.id!==E&&(E=W.id,Be=!0),vi||M!==y){Et.buffers.depth.getReversed()?(it.copy(y.projectionMatrix),rf(it),of(it),se.setValue(O,"projectionMatrix",it)):se.setValue(O,"projectionMatrix",y.projectionMatrix),se.setValue(O,"viewMatrix",y.matrixWorldInverse);let Un=se.map.cameraPosition;Un!==void 0&&Un.setValue(O,At.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&se.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&se.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Be=!0,os=!0)}if(z.isSkinnedMesh){se.setOptional(O,z,"bindMatrix"),se.setOptional(O,z,"bindMatrixInverse");let $e=z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),se.setValue(O,"boneTexture",$e.boneTexture,A))}z.isBatchedMesh&&(se.setOptional(O,z,"batchingTexture"),se.setValue(O,"batchingTexture",z._matricesTexture,A),se.setOptional(O,z,"batchingIdTexture"),se.setValue(O,"batchingIdTexture",z._indirectTexture,A),se.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&se.setValue(O,"batchingColorTexture",z._colorsTexture,A));let as=G.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&Tt.update(z,G,Je),(Be||Mt.receiveShadow!==z.receiveShadow)&&(Mt.receiveShadow=z.receiveShadow,se.setValue(O,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(cn.envMap.value=_t,cn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),Be&&(se.setValue(O,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&Ju(cn,os),et&&W.fog===!0&&ot.refreshFogUniforms(cn,et),ot.refreshMaterialUniforms(cn,W,X,J,f.state.transmissionRenderTarget[y.id]),ki.upload(O,Jl(Mt),cn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ki.upload(O,Jl(Mt),cn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&se.setValue(O,"center",z.center),se.setValue(O,"modelViewMatrix",z.modelViewMatrix),se.setValue(O,"normalMatrix",z.normalMatrix),se.setValue(O,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let $e=W.uniformsGroups;for(let Un=0,Nn=$e.length;Un<Nn;Un++){let Ql=$e[Un];D.update(Ql,Je),D.bind(Ql,Je)}}return Je}function Ju(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function ju(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,F,G){St.get(y.texture).__webglTexture=F,St.get(y.depthTexture).__webglTexture=G;let W=St.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){let G=St.get(y);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,G=0){B=y,R=F,L=G;let W=!0,z=null,et=!1,lt=!1;if(y){let _t=St.get(y);if(_t.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(_t.__hasExternalTextures)A.rebindTextures(y,St.get(y.texture).__webglTexture,St.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let xt=y.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&St.has(xt)&&(y.width!==xt.image.width||y.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}let Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);let Pt=St.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[F])?z=Pt[F][G]:z=Pt[F],et=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?z=St.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[G]:z=Pt,S.copy(y.viewport),N.copy(y.scissor),C=y.scissorTest}else S.copy(yt).multiplyScalar(X).floor(),N.copy(Ut).multiplyScalar(X).floor(),C=Xt;if(Et.bindFramebuffer(O.FRAMEBUFFER,z)&&W&&Et.drawBuffers(y,z),Et.viewport(S),Et.scissor(N),Et.setScissorTest(C),et){let _t=St.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,G)}else if(lt){let _t=St.get(y.texture),Rt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Rt)}E=-1},this.readRenderTargetPixels=function(y,F,G,W,z,et,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Et.bindFramebuffer(O.FRAMEBUFFER,gt);try{let _t=y.texture,Rt=_t.format,Pt=_t.type;if(!kt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&G>=0&&G<=y.height-z&&O.readPixels(F,G,W,z,Lt.convert(Rt),Lt.convert(Pt),et)}finally{let _t=B!==null?St.get(B).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(y,F,G,W,z,et,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=St.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){let _t=y.texture,Rt=_t.format,Pt=_t.type;if(!kt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-W&&G>=0&&G<=y.height-z){Et.bindFramebuffer(O.FRAMEBUFFER,gt);let xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,et.byteLength,O.STREAM_READ),O.readPixels(F,G,W,z,Lt.convert(Rt),Lt.convert(Pt),0);let Wt=B!==null?St.get(B).__webglFramebuffer:null;Et.bindFramebuffer(O.FRAMEBUFFER,Wt);let ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await sf(O,ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,et),O.deleteBuffer(xt),O.deleteSync(ee),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,G=0){y.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);let W=Math.pow(2,-G),z=Math.floor(y.image.width*W),et=Math.floor(y.image.height*W),lt=F!==null?F.x:0,gt=F!==null?F.y:0;A.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,lt,gt,z,et),Et.unbindTexture()},this.copyTextureToTexture=function(y,F,G=null,W=null,z=0){y.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let et,lt,gt,_t,Rt,Pt,xt,Wt,ee,ie=y.isCompressedTexture?y.mipmaps[z]:y.image;G!==null?(et=G.max.x-G.min.x,lt=G.max.y-G.min.y,gt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Rt=G.min.y,Pt=G.isBox3?G.min.z:0):(et=ie.width,lt=ie.height,gt=ie.depth||1,_t=0,Rt=0,Pt=0),W!==null?(xt=W.x,Wt=W.y,ee=W.z):(xt=0,Wt=0,ee=0);let Le=Lt.convert(F.format),qt=Lt.convert(F.type),Mt;F.isData3DTexture?(A.setTexture3D(F,0),Mt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Mt=O.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Mt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let vn=O.getParameter(O.UNPACK_ROW_LENGTH),Yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=O.getParameter(O.UNPACK_SKIP_PIXELS),vi=O.getParameter(O.UNPACK_SKIP_ROWS),Be=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_t),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pt);let os=y.isDataArrayTexture||y.isData3DTexture,se=F.isDataArrayTexture||F.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let cn=St.get(y),as=St.get(F),$e=St.get(cn.__renderTarget),Un=St.get(as.__renderTarget);Et.bindFramebuffer(O.READ_FRAMEBUFFER,$e.__webglFramebuffer),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Nn=0;Nn<gt;Nn++)os&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.get(y).__webglTexture,z,Pt+Nn),y.isDepthTexture?(se&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.get(F).__webglTexture,z,ee+Nn),O.blitFramebuffer(_t,Rt,et,lt,xt,Wt,et,lt,O.DEPTH_BUFFER_BIT,O.NEAREST)):se?O.copyTexSubImage3D(Mt,z,xt,Wt,ee+Nn,_t,Rt,et,lt):O.copyTexSubImage2D(Mt,z,xt,Wt,ee+Nn,_t,Rt,et,lt);Et.bindFramebuffer(O.READ_FRAMEBUFFER,null),Et.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else se?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Mt,z,xt,Wt,ee,et,lt,gt,Le,qt,ie.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,z,xt,Wt,ee,et,lt,gt,Le,ie.data):O.texSubImage3D(Mt,z,xt,Wt,ee,et,lt,gt,Le,qt,ie):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,xt,Wt,et,lt,Le,qt,ie.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,xt,Wt,ie.width,ie.height,Le,ie.data):O.texSubImage2D(O.TEXTURE_2D,z,xt,Wt,et,lt,Le,qt,ie);O.pixelStorei(O.UNPACK_ROW_LENGTH,vn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,vi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be),z===0&&F.generateMipmaps&&O.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,F,G=null,W=null,z=0){return y.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,y=arguments[2],F=arguments[3],z=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,G,W,z)},this.initRenderTarget=function(y){St.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){R=0,L=0,B=null,Et.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var Ar=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ca,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ae=new I,fn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ya=class extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=He,h=He,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new Ot,th=new Ot,sr=[],eh=new Ue,Q0=new Ot,ds=new he,fs=new rn,Rr=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),eh.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(eh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),fs.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),th.multiplyMatrices(n,Ni),ds.matrixWorld=th,ds.raycast(t,sr);for(let a=0,o=sr.length;a<o;a++){let l=sr[a];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(s*this.count),s,this.count,xl,un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,l=new Ot;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends Cr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function El(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var rr=new I,zo=new El,ko=new El,Vo=new El,Za=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),zo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),ko.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Vo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ko.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(zo.calc(l),ko.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function t_(i,t){let e=1-i;return e*e*t}function e_(i,t){return 2*(1-i)*i*t}function n_(i,t){return i*i*t}function ys(i,t,e,n){return t_(i,t)+e_(i,e)+n_(i,n)}function i_(i,t){let e=1-i;return e*e*e*t}function s_(i,t){let e=1-i;return 3*e*e*i*t}function r_(i,t){return 3*(1-i)*i*i*t}function o_(i,t){return i*i*i*t}function vs(i,t,e,n,s){return i_(i,t)+s_(i,e)+r_(i,n)+o_(i,s)}var Ka=class extends on{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends on{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,s.x,r.x,a.x,o.x),vs(t,s.y,r.y,a.y,o.y),vs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends on{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ts=class extends on{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends on{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(t,s.x,r.x,a.x),ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends on{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(t,s.x,r.x,a.x),ys(t,s.y,r.y,a.y),ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nh(o,l.x,c.x,h.x,u.x),nh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},a_=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Za,CubicBezierCurve:Ka,CubicBezierCurve3:Ja,EllipseCurve:Cr,LineCurve:ja,LineCurve3:Ts,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:Pr,SplineCurve:tl});var Zi=class i extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let T=[],b=f/n,v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let R=P/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-b),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){let b=h[f][T+1],v=h[f][T],P=h[f+1][T],R=h[f+1][T+1];(f!==0||a>0)&&p.push(b,v,R),(f!==n-1||l<Math.PI)&&p.push(v,P,R)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ir=class i extends Xe{constructor(t=new Pr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new dt,h=new I,u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(p,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),T(),f()}function m(b){h=t.getPointAt(b/e,h);let v=a.normals[b],P=a.binormals[b];for(let R=0;R<=s;R++){let L=R/s*Math.PI*2,B=Math.sin(L),E=-Math.cos(L);l.x=E*v.x+B*P.x,l.y=E*v.y+B*P.y,l.z=E*v.z+B*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let b=1;b<=e;b++)for(let v=1;v<=s;v++){let P=(s+1)*(b-1)+(v-1),R=(s+1)*b+(v-1),L=(s+1)*b+v,B=(s+1)*(b-1)+v;g.push(P,R,B),g.push(R,L,B)}}function T(){for(let b=0;b<=e;b++)for(let v=0;v<=s;v++)c.x=b/e,c.y=v/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new a_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Lr=class extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new I,r=new I;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,x=d+p;g<x;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),T=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,T),ih(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),ih(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ge(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function ih(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var As=class extends ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function or(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function l_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rc:r=t,o=2*e-n;break;case oc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:a=t,l=2*n-e;break;case oc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let P=0;P!==o;++P)r[P]=f*a[h+P]+T*a[c+P]+b*a[l+P]+v*a[u+P];return r}},nl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},il=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case uo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&l_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Ra;var hi=class extends an{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=fr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends an{};sl.prototype.ValueTypeName="color";var rl=class extends an{};rl.prototype.ValueTypeName="number";var ol=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)We.slerpFlat(r,0,a,c-o,a,c,l);return r}},Dr=class extends an{InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends an{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=fr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends an{};al.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},c_=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:c_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Nr=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ho=new Ot,sh=new I,rh=new I,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ul=class extends hl{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Or=class extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function oh(){return performance.now()}var wl="\\[\\]\\.:\\/",h_=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",u_="[^"+wl.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",Tl),f_=/(WCOD+)?/.source.replace("WCOD",u_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),g_=new RegExp("^"+d_+f_+p_+m_+"$"),__=["material","materials","bones","map"],dl=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h_,"")}static parseTrackName(t){let e=g_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=dl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var di=class extends qa{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var ah=new Ot,Br=class{constructor(t,e,n=0,s=1/0){this.ray=new qi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fl(t[s],this,n,e);return n.sort(lh),n}};function lh(i,t){return i.distance-t.distance}function fl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fl(r[a],t,e,!0)}}var Cs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ch=new I,ar=new I,zr=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ch.subVectors(t,this.start),ar.subVectors(this.end,this.start);let n=ar.dot(ar),r=ar.dot(ch)/n;return e&&(r=me(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var kr=class extends Ln{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);var Dh={type:"change"},Rl={type:"start"},Nh={type:"end"},qr=new qi,Uh=new en,x_=Math.cos(70*Gr.DEG2RAD),ye=new I,Oe=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6,Yr=class extends kr{constructor(t,e=null){super(t,e),this.state=jt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new We,this._lastTargetPosition=new I,this._quat=new We().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cs,this._sphericalDelta=new Cs,this._scale=1,this._panOffset=new I,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new I,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v_.bind(this),this._onPointerDown=y_.bind(this),this._onPointerUp=M_.bind(this),this._onContextMenu=R_.bind(this),this._onMouseWheel=E_.bind(this),this._onKeyDown=w_.bind(this),this._onTouchStart=T_.bind(this),this._onTouchMove=A_.bind(this),this._onMouseDown=S_.bind(this),this._onMouseMove=b_.bind(this),this._interceptControlDown=C_.bind(this),this._interceptControlUp=P_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dh),this.update(),this.state=jt.NONE}update(t=null){let e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ye.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qr.origin.copy(this.object.position),qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qr.direction))<x_?this.object.lookAt(this.target):(Uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),qr.intersectPlane(Uh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(Dh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ye.copy(s).sub(this.target);let r=ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Oe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function y_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function v_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function M_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nh),this.state=jt.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function S_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=jt.DOLLY;break;case fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}break;case fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Rl)}function b_(i){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function E_(i){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(i.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nh))}function w_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function T_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=jt.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=jt.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Rl)}function A_(i){switch(this._trackPointer(i),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=jt.NONE}}function R_(i){this.enabled!==!1&&i.preventDefault()}function C_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qi=(i,t)=>i.map((e,n)=>e+t[n]),Cl=(i,t)=>i.map((e,n)=>e-t[n]),Is=(i,t)=>i.map(e=>e*t),$r=i=>Is(i,1/(Math.hypot(...i)||1));function Oh(i,t,e=.12){return 2*i*Math.tan(t*Math.PI/360)*e}function Fh(i,t,e,n,s,r){let a=Qi(Is($r(t),s*n),Is($r(e),r*n));return{target:Qi(i.target,a),position:Qi(i.position,a)}}function Bh(i,t){let e=Math.hypot(...Cl(i.position,i.target));return{target:i.target.slice(),position:Qi(i.target,Is($r(t),e))}}function Pl(i,t){return{target:t.slice(),position:Qi(i.position,Cl(t,i.target))}}function zh(i,t){return Pl(i,[t[0],i.target[1],t[2]])}function kh(i,t,e,n){let s=Cl(i.position,i.target),r=Math.hypot(s[0],s[2]),a=r<.001?n:[s[0]/r,.05,s[2]/r];return{target:t.slice(),position:Qi(t,Is($r(a),e))}}var Zr=new I(0,86,0),Vh=300,I_=95,Il={front:[-.25,.05,1],back:[.25,.05,-1],right:[-1,.05,.05],left:[1,.05,.05]};function Hh(i){let t=new Tr({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(t.domElement);let e=new Ar;e.background=new Ft(921878);let n=new Ce(35,1,1,2e3),s=new Yr(n,t.domElement);s.enableDamping=!0,s.zoomToCursor=!0,s.keyPanSpeed=25,t.domElement.tabIndex=0,s.listenToKeyEvents(t.domElement),e.add(new Nr(16777215,2764602,1.4));let r=new Rs(16777215,1.8);r.position.set(-80,220,160),e.add(r);let a=new Rs(16777215,.9);a.position.set(90,160,-160),e.add(a);function o(C,U,V){s.target.copy(C),n.position.copy(C).add(new I(...U).normalize().multiplyScalar(V)),s.update()}o(Zr,Il.front,Vh);let l=null,c=()=>l?.to??{target:s.target.toArray(),position:n.position.toArray()};function h(C,U=.3){l={from:{target:s.target.toArray(),position:n.position.toArray()},to:C,t:0,duration:U}}s.addEventListener("start",()=>l=null);function u(C){if(!l)return;l.t=Math.min(1,l.t+C/l.duration);let U=l.t*l.t*(3-2*l.t),V=(k,J)=>k.map((X,st)=>X+(J[st]-X)*U);s.target.fromArray(V(l.from.target,l.to.target)),n.position.fromArray(V(l.from.position,l.to.position)),l.t===1&&(l=null)}let d=C=>{l=null,s.target.fromArray(C.target),n.position.fromArray(C.position),s.update()},p=C=>d(Bh(c(),Il[C])),g=()=>d(kh(c(),Zr.toArray(),Vh,Il.front));function x(C,U){let V=c(),k=Math.hypot(...V.position.map((st,ct)=>st-V.target[ct])),J=new I(1,0,0).applyQuaternion(n.quaternion).toArray(),X=new I(0,1,0).applyQuaternion(n.quaternion).toArray();h(Fh(V,J,X,Oh(k,n.fov),C,U),.2)}let m=C=>h(Pl(c(),C),.35),f=()=>h(zh(c(),Zr.toArray()),.35);function T(C){let U=new I(...C),V=new I(U.x,0,U.z-Zr.z);V.length()<3&&V.copy(n.position).sub(s.target).setY(0),V.normalize().setY(.15),l=null,o(U,V.toArray(),I_)}let b=[],v=()=>{let C=i.clientWidth,U=i.clientHeight;t.setSize(C,U),n.aspect=C/U,n.updateProjectionMatrix();for(let V of b)V(C,U)};new ResizeObserver(v).observe(i),v();let P=new Br,R=new dt;function L(C,U,V){let k=t.domElement.getBoundingClientRect();return R.set((C-k.left)/k.width*2-1,-((U-k.top)/k.height)*2+1),P.setFromCamera(R,n),P.intersectObjects(V,!1)[0]??null}let B=(C,U,V)=>L(C,U,V)?.object??null,E=(C,U,V)=>L(C,U,V),M=(C,U,V)=>L(C,U,V)?.point.toArray()??null,S=[],N=new Fr;return t.setAnimationLoop(()=>{let C=N.getDelta();for(let U of S)U(C);u(C),s.update(),t.render(e,n)}),{scene:e,camera:n,controls:s,renderer:t,pick:B,pickHit:E,pickPoint:M,setView:p,showWholeBody:g,pan:x,recenter:m,center:f,lookAt:T,onFrame:C=>S.push(C),onResize(C){b.push(C),C(i.clientWidth,i.clientHeight)}}}function Gh(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Ll(i,t,e){let n=i.byteOffset%4?i.slice():i,s=new Int16Array(n.buffer,n.byteOffset+e.vOffset,e.vCount*3),r=new Float32Array(s.length);for(let c=0;c<s.length;c++){let h=c%3;r[c]=t.min[h]+(s[c]+32768)/65535*(t.max[h]-t.min[h])}let a=e.wide?Uint32Array:Uint16Array,o=new a(n.buffer,n.byteOffset+e.iOffset,e.iCount).slice(),l=e.sOffset===void 0?null:n.slice(e.sOffset,e.sOffset+e.vCount*3);return{positions:r,indices:o,skin:l}}var L_=["pelvis","L5","L4","L3","L2","L1","thoraxLow","thoraxMid","thoraxUp","neckLow","neckUp","head"],Kr=["index","middle","ring","little"],D_=["thumbMeta","thumbProx","thumbDist",...Kr.flatMap(i=>[`${i}Prox`,`${i}Mid`,`${i}Dist`])],Wh=["clavicle","scapula","arm","ulna","radius","hand",...D_,"femur","shank","talus","foot"],Gx=new Set(Wh),Xh=[...L_,...Wh.flatMap(i=>[`${i}.l`,`${i}.r`])],Dl={ulna:"arm",radius:"ulna",hand:"radius",thumbMeta:"hand",thumbProx:"thumbMeta",thumbDist:"thumbProx",...Object.fromEntries(Kr.flatMap(i=>[[`${i}Prox`,"hand"],[`${i}Mid`,`${i}Prox`],[`${i}Dist`,`${i}Mid`]])),shank:"femur",talus:"shank",foot:"talus"};function qh(i){let t=i.lastIndexOf(".");return t<0?[i,null]:[i.slice(0,t),i.slice(t+1)]}function ts(i,t){return[i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14]]}function U_(i){return[i.a,...i.vias.map(t=>t.p),i.b]}function Jr(i,t){return[ts(t.get(i.segA).elements,i.a),...i.vias.map(e=>ts(t.get(e.seg).elements,e.p)),ts(t.get(i.segB).elements,i.b)]}function Ul(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1],i[e][2]-i[e-1][2]);return t}function N_(i,t,e){let n=new I(...e).normalize(),s=i.clone().invert().multiply(t),r=new I(1,0,0).cross(n);r.lengthSq()<1e-6&&r.set(0,1,0).cross(n),r.normalize();let a=r.clone().transformDirection(s);return Math.atan2(n.dot(r.clone().cross(a)),r.dot(a))}function O_(i,t){let e=new Map,n=s=>{if(e.has(s))return e.get(s);let[r,a]=qh(s),o=Dl[r]&&`${Dl[r]}.${a}`,l=i.get(s);if(o){let c=n(o);t.has(s)?l=c:c!==i.get(o)&&(l=c.clone().multiply(i.get(o).clone().invert()).multiply(l))}return e.set(s,l),l};return{get:n}}function $h(i,t){if(!i.altVias)return Yh(i,t);let e=[i.vias,...i.altVias].map(n=>Yh({...i,vias:n},t));return e.reduce((n,s)=>n+s,0)/e.length}function Yh(i,t){let e=Ul(U_(i));if(e<.5)return 0;if(!i.wraps)return Ul(Jr(i,t))/e-1;let n=Ul(Jr(i,O_(t,new Set(i.wraps.map(s=>s.dist)))));for(let s of i.wraps)n-=s.m*N_(t.get(s.prox),t.get(s.dist),s.axis);return n/e-1}function F_(i,t,e){let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function Zh(i,t,e){let n=i.length/3,s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=s[0]**2+s[1]**2+s[2]**2||1,a=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++){let c=((i[l*3]-t[0])*s[0]+(i[l*3+1]-t[1])*s[1]+(i[l*3+2]-t[2])*s[2])/r,h=F_(.1,.9,c);a[l]=h,o[l]=4*h*(1-h)}return{rest:i,a:t,b:e,restLength:Math.sqrt(r),weight:a,belly:o}}function Kh(i,t,e,n){let{rest:s,weight:r,belly:a}=i,o=t.elements,l=e.elements,c=ts(o,i.a),h=ts(l,i.b),u=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])||1,d=[(h[0]-c[0])/u,(h[1]-c[1])/u,(h[2]-c[2])/u],p=1/Math.sqrt(u/i.restLength);for(let g=0,x=r.length;g<x;g++){let m=s[g*3],f=s[g*3+1],T=s[g*3+2],b=r[g],v=1-b,P=v*(o[0]*m+o[4]*f+o[8]*T+o[12])+b*(l[0]*m+l[4]*f+l[8]*T+l[12]),R=v*(o[1]*m+o[5]*f+o[9]*T+o[13])+b*(l[1]*m+l[5]*f+l[9]*T+l[13]),L=v*(o[2]*m+o[6]*f+o[10]*T+o[14])+b*(l[2]*m+l[6]*f+l[10]*T+l[14]),B=1+(p-1)*a[g];if(B!==1){let E=(P-c[0])*d[0]+(R-c[1])*d[1]+(L-c[2])*d[2],M=c[0]+d[0]*E,S=c[1]+d[1]*E,N=c[2]+d[2]*E;P=M+(P-M)*B,R=S+(R-S)*B,L=N+(L-N)*B}n[g*3]=P,n[g*3+1]=R,n[g*3+2]=L}}function Jh(i,t,e,n,s){let r=e.map(a=>n.get(a).elements);for(let a=0,o=i.length/3;a<o;a++){let l=r[t[a*3]],c=r[t[a*3+1]],h=t[a*3+2]/255,u=1-h,d=i[a*3],p=i[a*3+1],g=i[a*3+2];s[a*3]=u*(l[0]*d+l[4]*p+l[8]*g+l[12])+h*(c[0]*d+c[4]*p+c[8]*g+c[12]),s[a*3+1]=u*(l[1]*d+l[5]*p+l[9]*g+l[13])+h*(c[1]*d+c[5]*p+c[9]*g+c[13]),s[a*3+2]=u*(l[2]*d+l[6]*p+l[10]*g+l[14])+h*(c[2]*d+c[6]*p+c[10]*g+c[14])}}var pn={natural:[.62,.25,.22],same:[.7,.68,.66],short:[.86,.16,.12],long:[.14,.4,.88],selected:[.72,.42,1]},Nl={short:"\u9396\u77ED",long:"\u9396\u9577",same:"\u4E0D\u8B8A"};function jh(i){return Math.sign(i)*Math.round(Math.abs(i)*100)}function es(i){let t=jh(i);return t<=-.03*100?"short":t>=.03*100?"long":"same"}function Qh({selected:i,poseActive:t,measure:e,delta:n}){return i?pn.selected.slice():t?e?Ol(n):pn.same.slice():pn.natural.slice()}function Ol(i){let t=es(i);if(t==="same")return pn.same.slice();let e=.35+.65*Math.min(1,Math.max(0,(Math.abs(i)-.03)/(.2-.03)));return pn.same.map((n,s)=>n+(pn[t][s]-n)*e)}function Fl(i){let t=jh(i);return t===0?"0%":`${t>0?"+":"\u2212"}${Math.abs(t)}%`}function tu(i,t){let e=new Xe;return e.setAttribute("position",new pe(i,3)),e.setIndex(new pe(t,1)),e.computeVertexNormals(),e}var B_=new Zi(.7,14,10);function eu(i){let{meta:t}=i,e=Gh(i.bin),n=new Ve,s=new As({color:15327436,roughness:.75}),r=t.bones.map(l=>{let{positions:c,indices:h}=Ll(e,t.quant,l),u=new he(tu(c,h),s);return u.matrixAutoUpdate=!1,n.add(u),{mesh:u,segment:l.segment}}),a=new Ve,o=t.parts.map(l=>{let{positions:c,indices:h,skin:u}=Ll(e,t.quant,l),d=tu(c.slice(),h);d.getAttribute("position").setUsage(Eh);let p=new As({roughness:.55});p.color.setRGB(...pn.natural,fe);let g=new he(d,p);g.userData.partKey=l.key,g.frustumCulled=!1,n.add(g);let x=l.tps.map((m,f)=>{let T=new he(B_,new qn);return T.visible=!1,T.renderOrder=5,T.userData.pain={key:l.key,index:f},a.add(T),{marker:T,vertex:m}});return{info:l,mesh:g,rest:c,skin:u,prep:u?null:Zh(c,l.a,l.b),segments:l.skinSegs??[l.segA,l.segB,...l.vias.map(m=>m.seg)],tps:x,delta:0,target:[0,0,0]}});return n.add(a),{group:n,bones:r,parts:o,joints:t.joints}}var jr=["scapProtraction","scapElevation","shoulderRotation","elbowFlexion","forearmPronation","wristFlexion","fingerFlexion","thumbFlexion","hipFlexion","kneeFlexion","ankleFlexion","footInversion"],z_=["headForward","thoracicFlexion","pelvicTilt","pelvicObliquity","trunkFlexion","trunkSideBend","trunkRotation"],mn=Object.freeze({...Object.fromEntries(jr.flatMap(i=>[[`${i}.l`,0],[`${i}.r`,0]])),...Object.fromEntries(z_.map(i=>[i,0]))});function ln(i){let t={...mn};for(let[e,n]of Object.entries(i))jr.includes(e)?t[`${e}.l`]=t[`${e}.r`]=n:t[e]=n;return t}var Qr={neutral:{label:"\u4E2D\u7ACB",params:mn},roundedShoulders:{label:"\u5713\u80A9",params:ln({scapProtraction:.8,shoulderRotation:.6})},forwardHead:{label:"\u982D\u524D\u50BE",params:ln({headForward:1})},kyphosis:{label:"\u80F8\u690E\u99DD\u80CC",params:ln({thoracicFlexion:1})},anteriorTilt:{label:"\u9AA8\u76C6\u524D\u50BE",params:ln({pelvicTilt:1})},posteriorTilt:{label:"\u9AA8\u76C6\u5F8C\u50BE",params:ln({pelvicTilt:-1})},unevenShoulders:{label:"\u9AD8\u4F4E\u80A9",params:ln({"scapElevation.r":.7,"scapElevation.l":-.3})},legLength:{label:"\u9577\u77ED\u8173",params:ln({pelvicObliquity:1})},phone:{label:"\u6ED1\u624B\u6A5F",params:ln({headForward:.8,scapProtraction:.6,shoulderRotation:.4,elbowFlexion:.7,forearmPronation:.8,wristFlexion:.3,fingerFlexion:.4,thumbFlexion:.5})},kneeHyperextension:{label:"\u819D\u904E\u4F38",params:ln({kneeFlexion:-1})},highHeels:{label:"\u7A7F\u9AD8\u8DDF\u978B",params:ln({ankleFlexion:-.67})},flatFoot:{label:"\u6241\u5E73\u8DB3",params:ln({footInversion:-1})}},Ls=[{key:"headForward",group:"sagittal",sided:!1,label:"\u982D\u9838\u524D\u79FB",minLabel:"\u5F8C\u6536",maxLabel:"\u524D\u79FB"},{key:"thoracicFlexion",group:"sagittal",sided:!1,label:"\u80F8\u690E\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u99DD\u80CC"},{key:"pelvicTilt",group:"sagittal",sided:!1,label:"\u9AA8\u76C6\u5F8C\u50BE\uFF0F\u524D\u50BE",minLabel:"\u5F8C\u50BE",maxLabel:"\u524D\u50BE"},{key:"trunkFlexion",group:"sagittal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5F8C\u4EF0\uFF0F\u524D\u5F4E",minLabel:"\u5F8C\u4EF0",maxLabel:"\u524D\u5F4E"},{key:"pelvicObliquity",group:"frontal",sided:!1,label:"\u9AA8\u76C6\u5074\u50BE\uFF08\u9577\u77ED\u8173\uFF09",minLabel:"\u53F3\u5074\u4F4E",maxLabel:"\u5DE6\u5074\u4F4E"},{key:"trunkSideBend",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5074\u5F4E",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"trunkRotation",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u8F49\u5411",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"scapProtraction",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u524D\u4F38\uFF0F\u5F8C\u7E2E",minLabel:"\u5F8C\u7E2E",maxLabel:"\u524D\u4F38"},{key:"scapElevation",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u4E0A\u63D0\uFF0F\u4E0B\u58D3",minLabel:"\u4E0B\u58D3",maxLabel:"\u4E0A\u63D0"},{key:"shoulderRotation",group:"upperLimb",sided:!0,label:"\u80A9\u95DC\u7BC0\u5167\u65CB\uFF0F\u5916\u65CB",minLabel:"\u5916\u65CB",maxLabel:"\u5167\u65CB"},{key:"elbowFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8098\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"forearmPronation",group:"upperLimb",sided:!0,label:"\u524D\u81C2\u65CB\u5F8C\uFF0F\u65CB\u524D",minLabel:"\u65CB\u5F8C",maxLabel:"\u65CB\u524D"},{key:"wristFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8155\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"fingerFlexion",group:"upperLimb",sided:!0,label:"\u624B\u6307\u4F38\u76F4\uFF0F\u63E1\u62F3",minLabel:"\u904E\u4F38",maxLabel:"\u63E1\u62F3"},{key:"thumbFlexion",group:"upperLimb",sided:!0,label:"\u62C7\u6307\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"hipFlexion",group:"lowerLimb",sided:!0,label:"\u5927\u817F\u653E\u4E0B\uFF0F\u62AC\u8D77",minLabel:"\u5F80\u5F8C",maxLabel:"\u62AC\u8D77"},{key:"kneeFlexion",group:"lowerLimb",sided:!0,label:"\u819D\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"ankleFlexion",group:"lowerLimb",sided:!0,label:"\u8E1D\u8E60\u5C48\uFF0F\u80CC\u5C48",minLabel:"\u8E60\u5C48",maxLabel:"\u80CC\u5C48"},{key:"footInversion",group:"lowerLimb",sided:!0,label:"\u8DB3\u5916\u7FFB\uFF0F\u5167\u7FFB",minLabel:"\u5916\u7FFB",maxLabel:"\u5167\u7FFB"}],nu=[["sagittal","\u524D\u5F8C\u65B9\u5411"],["frontal","\u5DE6\u53F3\u65B9\u5411\uFF08\u5074\u5F4E\u3001\u8F49\u5411\uFF09"],["upperLimb","\u4E0A\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"],["lowerLimb","\u4E0B\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"]],iu=[["both","\u5169\u5074\u4E00\u8D77"],["l","\u53EA\u8ABF\u5DE6\u5074"],["r","\u53EA\u8ABF\u53F3\u5074"]];function su(i,t,e){return jr.includes(t)?e==="both"?(i[`${t}.l`]+i[`${t}.r`])/2:i[`${t}.${e}`]:i[t]}function ru(i,t,e,n){let s={...i};return jr.includes(t)?n==="both"?s[`${t}.l`]=s[`${t}.r`]=e:s[`${t}.${n}`]=e:s[t]=e,s}function ou(i,t,e){return Object.fromEntries(Object.keys(mn).map(n=>[n,i[n]+(t[n]-i[n])*e]))}function au(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}function lu(i){return Math.abs(i)<.05?0:i}function to(i){return Object.keys(mn).every(t=>Math.abs(i[t]??0)<.001)}var ae={clavProtraction:20,clavElevation:15,scapTilt:12,humeralRotation:40,neckFlexion:25,headExtension:22,thoracicFlexion:30,pelvicTilt:18,pelvicObliquity:8,elbowFlexion:140,elbowExtension:10,pronation:150,supination:10,wristFlexion:70,wristExtension:60,hipFlexion:120,hipExtension:20,kneeFlexion:140,kneeExtension:15,dorsiflexion:20,plantarflexion:45,inversion:30,eversion:25},ns={flexion:{hip:50,lumbar:40},extension:{hip:10,lumbar:20},sideBend:{lumbar:18,thoraxLow:6,thoraxMid:6,thoraxUp:0},rotation:{lumbar:10,thoraxLow:12,thoraxMid:13,thoraxUp:10}},cu={fingerFlexion:{flex:[90,100,70],extend:[20,0,0]},thumbFlexion:{flex:[30,50,80],extend:[30,0,20]}},Yn=(i,t,e)=>Fe*(i>=0?t*i:e*i),k_={thoraxLow:.3,thoraxMid:.4,thoraxUp:.3},V_=["L5","L4","L3","L2","L1"],Fe=Math.PI/180,is=new I(1,0,0),hu=new I(0,1,0),eo=new I(0,0,1),le=i=>i.isVector3?i.clone():new I(i[0],i[1],i[2]);function ue(i,t,e){let n=le(i);return new Ot().makeTranslation(n.x,n.y,n.z).multiply(new Ot().makeRotationAxis(t.clone().normalize(),e)).multiply(new Ot().makeTranslation(-n.x,-n.y,-n.z))}function H_(i,t){let e=le(i);return new Ot().makeTranslation(e.x,e.y,e.z).multiply(new Ot().makeRotationFromQuaternion(t)).multiply(new Ot().makeTranslation(-e.x,-e.y,-e.z))}function uu(i,t){let e=le(i),[n,s,r]=t.center,[a,o,l]=t.radii;return Math.hypot((e.x-n)/a,(e.y-s)/o,(e.z-r)/l)}function G_(i,t,e){let n=le(t.center);return i.clone().sub(n).multiplyScalar(e/uu(i,t)).add(n)}function W_(i,t,e){let n=le(i.ac[t]).applyMatrix4(e),s=le(i.scapAnchor[t]),r=s.clone().applyMatrix4(e),a=s.distanceTo(le(i.ac[t])),o=uu(s,i.thorax),l=r.clone();for(let h=0;h<8;h++)l=G_(l,i.thorax,o),l=n.clone().add(l.sub(n).setLength(a));let c=new We().setFromUnitVectors(r.clone().sub(n).normalize(),l.clone().sub(n).normalize());return{glide:H_(n,c),ac:n,anchor:l}}function du(i,t={}){let e={...mn,...t},n=new Map(Xh.map(P=>[P,new Ot])),s=i.pivots,r=ae.pelvicTilt*Fe*e.pelvicTilt,a=ae.pelvicObliquity*Fe*e.pelvicObliquity,o=e.trunkFlexion>=0?ns.flexion:ns.extension,l=o.hip*Fe*e.trunkFlexion,c=o.lumbar*Fe*e.trunkFlexion,h=Fe*e.trunkSideBend,u=Fe*e.trunkRotation,d=le(i.hip.l).add(le(i.hip.r)).multiplyScalar(.5),p=e.pelvicObliquity>=0?i.hip.r:i.hip.l,g=ue(d,is,r+l).multiply(ue(p,eo,-a));n.set("pelvis",g);for(let P of["l","r"]){let R=le(i.hip[P]).applyMatrix4(g).sub(le(i.hip[P])),B=new Ot().makeTranslation(R.x,R.y,R.z).clone().multiply(ue(i.hip[P],is,-Yn(e[`hipFlexion.${P}`],ae.hipFlexion,ae.hipExtension))),{knee:E,ankle:M,subtalar:S}=i,N=B.clone().multiply(ue(E[P].pivot,le(E[P].axis),Yn(e[`kneeFlexion.${P}`],ae.kneeFlexion,ae.kneeExtension))),C=N.clone().multiply(ue(M[P].pivot,le(M[P].axis),Yn(e[`ankleFlexion.${P}`],ae.dorsiflexion,ae.plantarflexion))),U=C.clone().multiply(ue(S[P].pivot,le(S[P].axis),Yn(e[`footInversion.${P}`],ae.inversion,ae.eversion)));n.set(`femur.${P}`,B),n.set(`shank.${P}`,N),n.set(`talus.${P}`,C),n.set(`foot.${P}`,U)}let x=(P,R,L)=>ue(s[P],eo,-h*R).multiply(ue(s[P],hu,u*L)),m=g;for(let P of V_){let R=m.clone().multiply(ue(s[P],is,(c-r)/5)).multiply(ue(s[P],eo,a/5)).multiply(x(P,ns.sideBend.lumbar/5,ns.rotation.lumbar/5));n.set(P,R),m=R}let f=ae.thoracicFlexion*Fe*e.thoracicFlexion;for(let P of["thoraxLow","thoraxMid","thoraxUp"]){let R=m.clone().multiply(ue(s[P],is,f*k_[P])).multiply(x(P,ns.sideBend[P],ns.rotation[P]));n.set(P,R),m=R}let T=m,b=T.clone().multiply(ue(s.neckLow,is,ae.neckFlexion*Fe*e.headForward-f/2)),v=b.clone().multiply(ue(s.head,is,-ae.headExtension*Fe*e.headForward-f/2));n.set("neckLow",b),n.set("neckUp",b.clone()),n.set("head",v);for(let P of["l","r"]){let R=P==="r"?1:-1,L=e[`scapProtraction.${P}`],B=ue(i.sc[P],hu,R*ae.clavProtraction*Fe*L).multiply(ue(i.sc[P],eo,-R*ae.clavElevation*Fe*e[`scapElevation.${P}`])),{glide:E,ac:M,anchor:S}=W_(i,P,B),C=ue(M,S.clone().sub(M),R*ae.scapTilt*Fe*L).multiply(E).multiply(B),U=le(i.gh[P]).sub(le(i.elbow[P])),V=C.clone().multiply(ue(i.gh[P],U,R*ae.humeralRotation*Fe*e[`shoulderRotation.${P}`])),[k,J]=i.elbowAxis[P],X=le(J).sub(le(k)),st=le(k).add(le(J)).multiplyScalar(.5),ct=V.clone().multiply(ue(st,X,R*Yn(e[`elbowFlexion.${P}`],ae.elbowFlexion,ae.elbowExtension))),[yt,Ut]=i.forearmAxis[P],Xt=ct.clone().multiply(ue(yt,le(Ut).sub(le(yt)),-R*Yn(e[`forearmPronation.${P}`],ae.pronation,ae.supination))),Y=Xt.clone().multiply(ue(i.wrist[P],X,R*Yn(e[`wristFlexion.${P}`],ae.wristFlexion,ae.wristExtension)));n.set(`clavicle.${P}`,T.clone().multiply(B)),n.set(`scapula.${P}`,T.clone().multiply(C)),n.set(`arm.${P}`,T.clone().multiply(V)),n.set(`ulna.${P}`,T.clone().multiply(ct)),n.set(`radius.${P}`,T.clone().multiply(Xt)),n.set(`hand.${P}`,T.clone().multiply(Y));let Q=i.fingers[P],mt=(it,bt,At,Nt,Qt)=>{let Bt=it;bt.forEach((re,O)=>{Bt=Bt.clone().multiply(ue(re.pivot,le(re.axis),Yn(e[`${Nt}.${P}`],Qt.flex[O],Qt.extend[O]))),n.set(`${At[O]}.${P}`,T.clone().multiply(Bt))})};for(let it of Kr)mt(Y,Q[it],[`${it}Prox`,`${it}Mid`,`${it}Dist`],"fingerFlexion",cu.fingerFlexion);mt(Y,Q.thumb,["thumbMeta","thumbProx","thumbDist"],"thumbFlexion",cu.thumbFlexion)}return n}var X_={superficial:1,middle:.6,deep:.3},q_=15,Y_=8,$_=.1,Z_=.15,K_=.3;function fu(){return{layers:{superficial:!0,middle:!0,deep:!0,bones:!0},hidden:new Set,ghost:new Set,pulled:new Set,explode:0,selectedKey:null,lineParts:null,painMode:"off",selectedPain:null,overlay:!1}}function Bl(i,t){if(!t.layers[i.layer]||t.hidden.has(i.key))return{visible:!1,opacity:0,glow:0,pickable:!1,selected:!1};let e=t.ghost.has(i.key)?$_:1,n=0;return t.lineParts&&(t.lineParts.has(i.id)?n=.25:e=Math.min(e,Z_)),{visible:!0,opacity:e,glow:n,pickable:e>=K_,selected:t.selectedKey===i.key}}function pu(i,t,e){let n=i.centroid[0]-e[0],s=i.centroid[2]-e[1],r=Math.hypot(n,s)||1,a=t.explode*q_*X_[i.layer]+(t.pulled.has(i.key)?Y_:0);return[n/r*a,0,s/r*a]}function mu(i){i.hidden.clear(),i.ghost.clear()}function gu(i){Object.assign(i.layers,{superficial:!0,middle:!0,deep:!0,bones:!0}),i.hidden.clear(),i.ghost.clear(),i.pulled.clear(),i.explode=0,i.selectedKey=null,i.selectedPain=null}function _u(i,t,e,n){if(t.painMode==="off"||!Bl(i,t).visible)return null;let s=e&&i.measure?es(n):"same";return s!=="same"?s:t.selectedKey===i.key?"focus":t.painMode==="all"?"spot":null}var ss=i=>({ids:i,opp:!0}),J_=i=>Array.isArray(i)?{ids:i,opp:!1}:i,gi=[{id:"sbl",name:"\u6DFA\u80CC\u7DDA",stations:[["plantarAponeurosis"],["calcanealTendon"],["gastrocnemiusMed","gastrocnemiusLat"],["bicepsFemorisLong","semitendinosus","semimembranosus"],["thoracolumbarFascia","iliocostalisLumborum","longissimusThoracis","spinalisThoracis","iliocostalisThoracis"],["rectusCapPostMajor","rectusCapPostMinor","obliquusCapSup","obliquusCapInf"],["epicranialAponeurosis","occipitalis","frontalis"]]},{id:"sfl",name:"\u6DFA\u524D\u7DDA",stations:[["tibialisAnterior","extensorDigitorumLongus","extensorHallucisLongus"],["rectusFemoris","vastusLateralis","vastusMedialis","vastusIntermedius"],["rectusAbdominis"],["sternocleidomastoid"],["epicranialAponeurosis"]]},{id:"ll",name:"\u9AD4\u5074\u7DDA",stations:[["fibularisLongus","fibularisBrevis"],["iliotibialTract","tensorFasciaeLatae","gluteusMaximus"],["externalOblique","internalOblique"],["externalIntercostals","internalIntercostals"],["spleniusCapitis","sternocleidomastoid"]]},{id:"spl",name:"\u87BA\u65CB\u7DDA",stations:[["spleniusCapitis","spleniusColli"],ss(["rhomboidMajor","rhomboidMinor"]),ss(["serratusAnterior"]),ss(["externalOblique"]),["internalOblique"],["tensorFasciaeLatae","iliotibialTract"],["tibialisAnterior"],["fibularisLongus"],["bicepsFemorisLong"],["iliocostalisLumborum","longissimusThoracis"]]},{id:"sfal",name:"\u6DFA\u524D\u81C2\u7DDA",stations:[["pecMajorClav","pecMajorStern","pecMajorAbd","latissimus"],["medialIntermuscularSeptum"],["flexorCarpiRadialis","palmarisLongus","fcuHumeral","fcuUlnar","fdsHumeroUlnar","fdsRadial","flexorDigitorumProfundus"],["flexorRetinaculum"],["palmarAponeurosis"]]},{id:"dfal",name:"\u6DF1\u524D\u81C2\u7DDA",stations:[["pecMinor","clavipectoralFascia"],["bicepsShort","bicepsLong","coracobrachialis"],["abductorPollicisBrevis","flexorPollicisBrevisSup","flexorPollicisBrevisDeep","opponensPollicis"]]},{id:"sbal",name:"\u6DFA\u5F8C\u81C2\u7DDA",stations:[["trapUpper","trapMiddle","trapLower"],["deltoidAnt","deltoidMid","deltoidPost"],["lateralIntermuscularSeptum"],["extensorCarpiRadialisLongus","extensorCarpiRadialisBrevis","extensorDigitorum","extensorDigitiMinimi","ecuHumeral","ecuUlnar"],["extensorRetinaculum"]]},{id:"dbal",name:"\u6DF1\u5F8C\u81C2\u7DDA",stations:[["rhomboidMajor","rhomboidMinor","levatorScapulae"],["supraspinatus","infraspinatus","teresMinor","subscapularis"],["tricepsLong","tricepsLat","tricepsMed"],["abductorDigitiMinimi","flexorDigitiMinimi","opponensDigitiMinimi"]]},{id:"bfl",name:"\u5F8C\u529F\u80FD\u7DDA",stations:[["latissimus"],["thoracolumbarFascia"],ss(["gluteusMaximus"]),ss(["vastusLateralis"])]},{id:"ffl",name:"\u524D\u529F\u80FD\u7DDA",stations:[["pecMajorAbd"],["rectusAbdominis"],ss(["adductorLongus"])]},{id:"ifl",name:"\u540C\u5074\u529F\u80FD\u7DDA",stations:[["latissimus"],["externalOblique"],["sartorius"]]},{id:"dfl",name:"\u6DF1\u524D\u7DDA",stations:[["tibialisPosterior","flexorDigitorumLongus","flexorHallucisLongus"],["popliteus"],["adductorMagnus","adductorMinimus","adductorBrevis","adductorLongus","pectineus"],["pubococcygeus","iliococcygeus","coccygeus"],["psoasMajor","iliacus","quadratusLumborum"],["diaphragm"],["longusColli","longusCapitis","scalenusAnterior","scalenusMedius","scalenusPosterior"],["sternohyoid","omohyoid","thyrohyoid","digastricPost","digastricAnt","mylohyoid","geniohyoid","stylohyoid"]]}].map(i=>({...i,stations:i.stations.map(J_)}));function xu(i){return i.length?new Set(i.flatMap(t=>[...j_(t)??[]])):null}function j_(i){let t=gi.find(e=>e.id===i);return t?new Set(t.stations.flatMap(e=>e.ids)):null}var zl=[.36,.6,.96],Mu=1.5,Q_=.25,tx=.6,ex={l:"r",r:"l"},yu=i=>i.reduce((t,e)=>[t[0]+e[0]/i.length,t[1]+e[1]/i.length,t[2]+e[2]/i.length],[0,0,0]),kl=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function nx(i,t,e,n=Mu){let s=new I(e[0]-t[0],e[1]-t[1],e[2]-t[2]);s.lengthSq()<1e-8&&s.set(0,1,0);let r=s.normalize(),a=new I().crossVectors(r,Math.abs(r.y)<.9?new I(0,1,0):new I(1,0,0)).normalize(),o=new I().crossVectors(r,a),l=new Float32Array(i.length),c=new I;for(let h=0;h<i.length;h+=3)c.set(i[h]-t[0],i[h+1]-t[1],i[h+2]-t[2]),l[h]=c.dot(r)/n,l[h+1]=c.dot(a)/n,l[h+2]=c.dot(o)/n;return l}function ix(i,t,e=Mu){let n=new Float32Array(i.length/2*3);for(let s=0;s<i.length/2;s++)n[s*3]=i[s*2]*t/e,n[s*3+1]=i[s*2+1]*4,n[s*3+2]=.5;return n}var sx=`
attribute vec3 netCoord;
uniform float uLift;
varying vec3 vNet;
void main() {
  vNet = netCoord;
  vec3 p = position + normalize(normal) * uLift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,rx=`
uniform vec3 uColor;
varying vec3 vNet;
void main() {
  vec3 w = max(fwidth(vNet), vec3(1e-4));
  vec3 gap = abs(fract(vNet - 0.5) - 0.5) / w;
  vec3 lines = (1.0 - clamp(gap - 0.5, 0.0, 1.0)) * (1.0 - smoothstep(0.25, 0.5, w));
  float line = max(max(lines.x, lines.y), lines.z);
  gl_FragColor = vec4(uColor, mix(0.3, 0.9, line));
}`;function vu(i,t){return new Ne({uniforms:{uColor:{value:new I(...t)},uLift:{value:i}},vertexShader:sx,fragmentShader:rx,transparent:!0,depthWrite:!1})}function Su(i,t){let e=[i].flat().map(h=>gi.find(u=>u.id===h)),n=[],s=[];for(let h of e)for(let u of["l","r"]){let d=[];for(let p of h.stations){let g=p.opp?ex[u]:u,x=p.ids.map(m=>t.find(f=>f.info.id===m&&(f.info.side===g||f.info.side==="m")));d.push(x);for(let m of x){if(n.some(v=>v.part===m))continue;let f=m.mesh.geometry;f.getAttribute("netCoord")||f.setAttribute("netCoord",new pe(nx(m.rest,m.info.a,m.info.b),3));let T=vu(Q_,zl),b=new he(f,T);b.renderOrder=5,m.mesh.add(b),n.push({part:m,mesh:b,material:T})}}s.push(d)}let r=new Ve,a=vu(0,zl);function o(){for(let h of r.children)h.geometry.dispose();r.clear()}function l(h,u,d){for(let{part:p,material:g}of n){let x=d?p.info.measure?Ol(p.delta):pn.same:zl;g.uniforms.uColor.value.set(...x)}o();for(let p of s){let g=null;for(let x of p){let m=[],f=[];for(let b of x){let v=u(b),P=Jr(b.info,h).map(R=>[R[0]+v[0],R[1]+v[1],R[2]+v[2]]);m.push(P[0]),f.push(P[P.length-1])}let T=[yu(m),yu(f)];if(g){let b=null;for(let P of g)for(let R of T)(!b||kl(P,R)<kl(b[0],b[1]))&&(b=[P,R]);let v=kl(b[0],b[1]);if(v>.01){let P=new Ts(new I(...b[0]),new I(...b[1])),R=new Ir(P,8,tx,8,!1);R.setAttribute("netCoord",new pe(ix(R.getAttribute("uv").array,v),3));let L=new he(R,a);L.renderOrder=5,r.add(L)}}g=T}}}function c(){for(let{part:h,mesh:u,material:d}of n)h.mesh.remove(u),d.dispose();o(),a.dispose()}return{group:r,shells:n,update:l,dispose:c}}var bu=new Ue,no=new I,rs=class extends Or{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ge(t,3)),this.setAttribute("uv",new ge(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new di(e,6,1);return this.setAttribute("instanceStart",new fn(n,3,0)),this.setAttribute("instanceEnd",new fn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new di(e,6,1);return this.setAttribute("instanceColorStart",new fn(n,3,0)),this.setAttribute("instanceColorEnd",new fn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Lr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),bu.setFromBufferAttribute(e),this.boundingBox.union(bu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)no.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(no)),no.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(no));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new dt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Pe.line={uniforms:Wr.merge([nt.common,nt.fog,nt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var $n=class extends Ne{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Wr.clone(Pe.line.uniforms),vertexShader:Pe.line.vertexShader,fragmentShader:Pe.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Vl=new Jt,Eu=new I,wu=new I,Me=new Jt,Se=new Jt,gn=new Jt,Hl=new I,Gl=new Ot,be=new zr,Tu=new I,io=new Ue,so=new rn,_n=new Jt,xn,_i;function Au(i,t,e){return _n.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),_n.multiplyScalar(1/_n.w),_n.x=_i/e.width,_n.y=_i/e.height,_n.applyMatrix4(i.projectionMatrixInverse),_n.multiplyScalar(1/_n.w),Math.abs(Math.max(_n.x,_n.y))}function ox(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){be.start.fromBufferAttribute(s,o),be.end.fromBufferAttribute(r,o),be.applyMatrix4(e);let c=new I,h=new I;xn.distanceSqToSegment(be.start,be.end,h,c),h.distanceTo(c)<_i*.5&&t.push({point:h,pointOnLine:c,distance:xn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function ax(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;xn.at(1,gn),gn.w=1,gn.applyMatrix4(t.matrixWorldInverse),gn.applyMatrix4(n),gn.multiplyScalar(1/gn.w),gn.x*=r.x/2,gn.y*=r.y/2,gn.z=0,Hl.copy(gn),Gl.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(Me.fromBufferAttribute(l,d),Se.fromBufferAttribute(c,d),Me.w=1,Se.w=1,Me.applyMatrix4(Gl),Se.applyMatrix4(Gl),Me.z>u&&Se.z>u)continue;if(Me.z>u){let b=Me.z-Se.z,v=(Me.z-u)/b;Me.lerp(Se,v)}else if(Se.z>u){let b=Se.z-Me.z,v=(Se.z-u)/b;Se.lerp(Me,v)}Me.applyMatrix4(n),Se.applyMatrix4(n),Me.multiplyScalar(1/Me.w),Se.multiplyScalar(1/Se.w),Me.x*=r.x/2,Me.y*=r.y/2,Se.x*=r.x/2,Se.y*=r.y/2,be.start.copy(Me),be.start.z=0,be.end.copy(Se),be.end.z=0;let x=be.closestPointToPointParameter(Hl,!0);be.at(x,Tu);let m=Gr.lerp(Me.z,Se.z,x),f=m>=-1&&m<=1,T=Hl.distanceTo(Tu)<_i*.5;if(f&&T){be.start.fromBufferAttribute(l,d),be.end.fromBufferAttribute(c,d),be.start.applyMatrix4(a),be.end.applyMatrix4(a);let b=new I,v=new I;xn.distanceSqToSegment(be.start,be.end,v,b),e.push({point:v,pointOnLine:b,distance:xn.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var ro=class extends he{constructor(t=new rs,e=new $n({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Eu.fromBufferAttribute(e,a),wu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Eu.distanceTo(wu);let r=new di(s,2,1);return t.setAttribute("instanceDistanceStart",new fn(r,1,0)),t.setAttribute("instanceDistanceEnd",new fn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;xn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;_i=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),so.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=_i*.5;else{let u=Math.max(s.near,so.distanceToPoint(xn.origin));c=Au(s,u,l.resolution)}if(so.radius+=c,xn.intersectsSphere(so)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),io.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=_i*.5;else{let u=Math.max(s.near,io.distanceToPoint(xn.origin));h=Au(s,u,l.resolution)}io.expandByScalar(h),xn.intersectsBox(io)!==!1&&(n?ox(this,e):ax(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Vl),this.material.uniforms.resolution.value.set(Vl.z,Vl.w))}};var xi=class extends rs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var oo=class extends ro{constructor(t=new xi,e=new $n({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var w=(i,t,e,n,s,r,a,o="")=>({code:i,name:t,seg:e,hub:n,p:[s,r,a],note:o}),lx={head:{point:[0,162,-1.5]},neck:{a:[0,143.5,-3],b:[0,153.5,-2]},chest:{a:[0,119,-4],b:[0,142,-4]},belly:{a:[0,97,-3],b:[0,119,-3]},pelvis:{a:[0,80,-3],b:[0,97,-3]},arm:{a:[16.99,138.34,-2.63],b:[20.6,109.08,-3.21]},forearm:{a:[20.6,109.08,-3.21],b:[26.42,85.08,1.98]},hand:{a:[26.42,85.08,1.98],b:[27.7,77.3,4]},thigh:{a:[8.39,86.03,-.5],b:[7.37,45.79,-3.28]},shank:{a:[7.37,45.79,-3.28],b:[7.43,7.41,-4.55]},foot:{a:[7.43,7.41,-4.55],b:[9.8,2,10.5]},none:null},cx={head:.6,neck:1.6,chest:1.4,belly:1.6,pelvis:1.8,arm:1.6,forearm:1,hand:.5,thigh:2,shank:1.2,foot:.5,none:0},Ds=[{id:"lu",code:"LU",name:"\u624B\u592A\u9670\u80BA\u7D93",short:"\u80BA\u7D93",organ:"\u80BA",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u62C7\u6307\uFF09",color:[.96,.94,.82],points:[w("LU1","\u4E2D\u5E9C","thoraxUp","chest",12,135.5,7.2,"\u7B2C\u4E00\u808B\u9593\u3001\u9396\u9AA8\u4E0B\u7AA9\u5916\u4E0B\u65B9"),w("LU2","\u96F2\u9580","clavicle","chest",13.2,139.2,4.6,"\u9396\u9AA8\u4E0B\u7AA9\u51F9\u9677\u8655"),w("LU3","\u5929\u5E9C","arm","arm",17.4,126,2,"\u4E0A\u81C2\u5167\u5074\u3001\u80B1\u4E8C\u982D\u808C\u6A48\u5074\u7DE3"),w("LU4","\u4FE0\u767D","arm","arm",18.4,120,2.4,"\u5929\u5E9C\u4E0B 1 \u5BF8"),w("LU5","\u5C3A\u6FA4","arm","arm",22.6,110.5,2.2,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u6A48\u5074"),w("LU6","\u5B54\u6700","radius","forearm",25,99,2.4,"\u8155\u6A6B\u7D0B\u4E0A 7 \u5BF8\u3001\u6A48\u9AA8\u5167\u7DE3"),w("LU7","\u5217\u7F3A","radius","forearm",27.4,88.2,2.6,"\u6A48\u9AA8\u8396\u7A81\u4E0A\u65B9\u3001\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8"),w("LU8","\u7D93\u6E20","radius","forearm",28,86.6,2.8,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8\u3001\u6A48\u52D5\u8108\u5916\u5074"),w("LU9","\u592A\u6DF5","radius","forearm",28.3,85.3,3,"\u8155\u6A6B\u7D0B\u6A48\u5074\u3001\u6A48\u52D5\u8108\u640F\u52D5\u8655"),w("LU10","\u9B5A\u969B","thumbMeta","hand",30.2,81.4,5,"\u7B2C\u4E00\u638C\u9AA8\u6A48\u5074\u4E2D\u9EDE\u3001\u8D64\u767D\u8089\u969B"),w("LU11","\u5C11\u5546","thumbDist","none",33.3,77.3,6.9,"\u62C7\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"li",code:"LI",name:"\u624B\u967D\u660E\u5927\u8178\u7D93",short:"\u5927\u8178\u7D93",organ:"\u5927\u8178",group:"handYang",flow:"\u624B\uFF08\u98DF\u6307\uFF09\u2192 \u982D\u9762",color:[.98,.78,.45],points:[w("LI1","\u5546\u967D","indexDist","none",32.1,71.3,8.4,"\u98DF\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1"),w("LI2","\u4E8C\u9593","indexProx","none",31.4,74.2,6.2,"\u98DF\u6307\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u524D\u65B9"),w("LI3","\u4E09\u9593","hand","hand",30.4,77.4,4.6,"\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u5F8C\u65B9"),w("LI4","\u5408\u8C37","hand","hand",29.3,80.6,2.4,"\u7B2C\u4E00\u3001\u4E8C\u638C\u9AA8\u4E4B\u9593\uFF08\u864E\u53E3\uFF09"),w("LI5","\u967D\u8C3F","hand","hand",29,84.3,1.4,"\u8155\u80CC\u6A48\u5074\u3001\u9F3B\u7159\u58FA\u51F9\u9677\u4E2D"),w("LI6","\u504F\u6B77","radius","forearm",28,91,.6,"\u967D\u8C3F\u4E0A 3 \u5BF8"),w("LI7","\u6EAB\u6E9C","radius","forearm",27.2,95,.1,"\u967D\u8C3F\u4E0A 5 \u5BF8"),w("LI8","\u4E0B\u5EC9","radius","forearm",26.2,102.5,-.2,"\u66F2\u6C60\u4E0B 4 \u5BF8"),w("LI9","\u4E0A\u5EC9","radius","forearm",26,104.5,-.2,"\u66F2\u6C60\u4E0B 3 \u5BF8"),w("LI10","\u624B\u4E09\u91CC","radius","forearm",25.6,106.5,-.1,"\u66F2\u6C60\u4E0B 2 \u5BF8"),w("LI11","\u66F2\u6C60","arm","arm",24.8,110.5,.5,"\u5C48\u8098\u6642\u8098\u6A6B\u7D0B\u5916\u5074\u7AEF"),w("LI12","\u8098\u9ACE","arm","arm",25,113,-2,"\u80B1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u7DE3"),w("LI13","\u624B\u4E94\u91CC","arm","arm",23,119,-2,"\u66F2\u6C60\u4E0A 3 \u5BF8"),w("LI14","\u81C2\u81D1","arm","arm",21,125,-2,"\u4E09\u89D2\u808C\u6B62\u9EDE\u524D\u7DE3"),w("LI15","\u80A9\u9AC3","scapula","arm",17.8,139.8,.2,"\u80A9\u5CF0\u524D\u4E0B\u65B9\u51F9\u9677"),w("LI16","\u5DE8\u9AA8","scapula","chest",12,142.6,-3.4,"\u9396\u9AA8\u80A9\u5CF0\u7AEF\u8207\u80A9\u80DB\u5CA1\u4E4B\u9593"),w("LI17","\u5929\u9F0E","neckLow","neck",4.6,146.2,.8,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),w("LI18","\u6276\u7A81","neckUp","neck",4.6,150.2,2.4,"\u5589\u7D50\u65C1\u3001\u80F8\u9396\u4E73\u7A81\u808C\u4E2D"),w("LI19","\u53E3\u79BE\u9ACE","head","head",1,155.2,9.2,"\u9F3B\u5B54\u5916\u7DE3\u76F4\u4E0B\u3001\u6C34\u6E9D\u65C1"),w("LI20","\u8FCE\u9999","head","head",1.6,156.4,9.2,"\u9F3B\u7FFC\u5916\u7DE3\u4E2D\u9EDE\u65C1")]},{id:"st",code:"ST",name:"\u8DB3\u967D\u660E\u80C3\u7D93",short:"\u80C3\u7D93",organ:"\u80C3",group:"footYang",flow:"\u982D\u9762 \u2192 \u8DB3\uFF08\u7B2C\u4E8C\u8DBE\uFF09",color:[.99,.86,.3],points:[w("ST1","\u627F\u6CE3","head","head",3,157.4,7.6,"\u77B3\u5B54\u76F4\u4E0B\u3001\u773C\u7736\u4E0B\u7DE3"),w("ST2","\u56DB\u767D","head","head",3,156.4,8,"\u627F\u6CE3\u76F4\u4E0B\u3001\u7736\u4E0B\u5B54\u8655"),w("ST4","\u5730\u5009","head","head",2,153.6,8.4,"\u53E3\u89D2\u65C1"),w("ST5","\u5927\u8FCE","head","head",3.8,151.4,6.4,"\u4E0B\u9837\u89D2\u524D\u65B9\u3001\u54AC\u808C\u524D\u7DE3"),w("ST6","\u9830\u8ECA","head","head",5.2,152.2,3,"\u4E0B\u9837\u89D2\u524D\u4E0A\u65B9\u3001\u54AC\u808C\u9686\u8D77\u8655"),w("ST7","\u4E0B\u95DC","head","head",6,156.4,3.4,"\u9874\u5F13\u4E0B\u7DE3\u51F9\u9677"),w("ST8","\u982D\u7DAD","head","head",5,166.4,4.8,"\u524D\u9AEE\u969B\u984D\u89D2"),w("ST9","\u4EBA\u8FCE","neckUp","neck",2.8,150.4,4.4,"\u5589\u7D50\u65C1\u3001\u9838\u52D5\u8108\u640F\u52D5\u8655"),w("ST10","\u6C34\u7A81","neckLow","neck",3,147.4,4,"\u4EBA\u8FCE\u8207\u6C23\u820D\u4E4B\u9593"),w("ST11","\u6C23\u820D","neckLow","neck",2.6,143.6,4.4,"\u9396\u9AA8\u5167\u5074\u7AEF\u4E0A\u7DE3"),w("ST12","\u7F3A\u76C6","clavicle","chest",8,141.4,2.6,"\u9396\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),w("ST13","\u6C23\u6236","thoraxUp","chest",8,138.4,5.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),w("ST15","\u5C4B\u7FF3","thoraxUp","chest",8.6,133.4,8.4,"\u7B2C\u4E8C\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),w("ST17","\u4E73\u4E2D","thoraxMid","chest",9.6,130,10.8,"\u4E73\u982D\u4E2D\u592E\uFF08\u53EA\u4F5C\u5B9A\u4F4D\uFF0C\u4E0D\u91DD\u4E0D\u7078\uFF09"),w("ST18","\u4E73\u6839","thoraxMid","chest",9,126.4,10,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E94\u808B\u9593"),w("ST21","\u6881\u9580","L1","belly",4,111,10,"\u81CD\u4E0A 4 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),w("ST25","\u5929\u6A1E","L3","belly",4,103,10.2,"\u81CD\u65C1 2 \u5BF8"),w("ST28","\u6C34\u9053","pelvis","pelvis",4,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),w("ST30","\u6C23\u885D","pelvis","pelvis",4,92.6,7,"\u8179\u80A1\u6E9D\u3001\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u65C1 2 \u5BF8"),w("ST31","\u9AC0\u95DC","femur","thigh",9.6,86,4,"\u5927\u817F\u524D\u9762\u3001\u9AC2\u524D\u4E0A\u68D8\u8207\u9AD5\u9AA8\u5916\u7DE3\u9023\u7DDA\u4E0A"),w("ST32","\u4F0F\u5154","femur","thigh",9.6,58,3,"\u9AD5\u5E95\u4E0A 6 \u5BF8"),w("ST34","\u6881\u4E18","femur","thigh",9.6,50,2,"\u9AD5\u5E95\u4E0A 2 \u5BF8"),w("ST35","\u72A2\u9F3B","shank","shank",10.4,42.6,1.6,"\u9AD5\u97CC\u5E36\u5916\u5074\u51F9\u9677\uFF08\u5916\u819D\u773C\uFF09"),w("ST36","\u8DB3\u4E09\u91CC","shank","shank",9.6,36.6,1.6,"\u72A2\u9F3B\u4E0B 3 \u5BF8\u3001\u811B\u9AA8\u524D\u5D74\u5916\u4E00\u6A6B\u6307"),w("ST37","\u4E0A\u5DE8\u865B","shank","shank",9.6,30.6,1.2,"\u72A2\u9F3B\u4E0B 6 \u5BF8"),w("ST38","\u689D\u53E3","shank","shank",9.6,26.6,1,"\u72A2\u9F3B\u4E0B 8 \u5BF8"),w("ST39","\u4E0B\u5DE8\u865B","shank","shank",9.6,24.6,1,"\u72A2\u9F3B\u4E0B 9 \u5BF8"),w("ST40","\u8C50\u9686","shank","shank",11,26.6,-.2,"\u5916\u8E1D\u5C16\u4E0A 8 \u5BF8\u3001\u689D\u53E3\u5916\u4E00\u6A6B\u6307"),w("ST41","\u89E3\u8C3F","talus","foot",7.6,8.6,.6,"\u8E1D\u95DC\u7BC0\u524D\u6A6B\u7D0B\u4E2D\u592E\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("ST42","\u885D\u967D","foot","foot",8.6,5.4,4,"\u8DB3\u80CC\u6700\u9AD8\u8655\u3001\u52D5\u8108\u640F\u52D5\u8655"),w("ST43","\u9677\u8C37","foot","foot",9.3,4.2,6.2,"\u7B2C\u4E8C\u3001\u4E09\u8E60\u9AA8\u4E4B\u9593"),w("ST44","\u5167\u5EAD","foot","foot",10,2.4,8.6,"\u7B2C\u4E8C\u3001\u4E09\u8DBE\u7E2B\u7AEF"),w("ST45","\u53B2\u514C","foot","none",10.8,1.4,13.3,"\u7B2C\u4E8C\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"sp",code:"SP",name:"\u8DB3\u592A\u9670\u813E\u7D93",short:"\u813E\u7D93",organ:"\u813E",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u80F8\u8179",color:[.99,.72,.72],points:[w("SP1","\u96B1\u767D","foot","none",6.6,1.8,12.6,"\u8DB3\u5927\u8DBE\u5167\u5074\u8DBE\u7532\u89D2\u65C1"),w("SP2","\u5927\u90FD","foot","foot",5.9,2.4,9.8,"\u8DB3\u5927\u8DBE\u672C\u7BC0\u524D\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("SP3","\u592A\u767D","foot","foot",5.6,3,6.4,"\u7B2C\u4E00\u8E60\u9AA8\u5C0F\u982D\u5F8C\u4E0B\u65B9"),w("SP4","\u516C\u5B6B","foot","foot",5.6,3.6,3.4,"\u7B2C\u4E00\u8E60\u9AA8\u57FA\u5E95\u524D\u4E0B\u65B9"),w("SP5","\u5546\u4E18","foot","foot",4.9,6,-.4,"\u5167\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),w("SP6","\u4E09\u9670\u4EA4","shank","shank",3.9,14,-3,"\u5167\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u7DE3\u5F8C\u65B9"),w("SP7","\u6F0F\u8C37","shank","shank",4.2,20,-3,"\u5167\u8E1D\u5C16\u4E0A 6 \u5BF8"),w("SP8","\u5730\u6A5F","shank","shank",4.4,31,-2.4,"\u9670\u9675\u6CC9\u4E0B 3 \u5BF8"),w("SP9","\u9670\u9675\u6CC9","shank","shank",4.4,40.4,-1.4,"\u811B\u9AA8\u5167\u5074\u9AC1\u4E0B\u7DE3\u51F9\u9677"),w("SP10","\u8840\u6D77","femur","thigh",6,50,1.6,"\u9AD5\u5E95\u5167\u5074\u7AEF\u4E0A 2 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u9686\u8D77"),w("SP11","\u7B95\u9580","femur","thigh",5.6,62,1,"\u8840\u6D77\u8207\u885D\u9580\u9023\u7DDA\u4E0A"),w(null,null,"femur","thigh",5.6,77,3.5),w("SP12","\u885D\u9580","pelvis","pelvis",5.6,91.4,6,"\u8179\u80A1\u6E9D\u5916\u5074\u3001\u80A1\u52D5\u8108\u5916\u5074"),w("SP15","\u5927\u6A6B","L3","belly",8,103,8.6,"\u81CD\u65C1 4 \u5BF8"),w("SP17","\u98DF\u7AC7","thoraxMid","chest",11,121,7,"\u7B2C\u4E94\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 6 \u5BF8"),w("SP21","\u5927\u5305","thoraxMid","chest",13,122,0,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u7B2C\u516D\u808B\u9593")]},{id:"ht",code:"HT",name:"\u624B\u5C11\u9670\u5FC3\u7D93",short:"\u5FC3\u7D93",organ:"\u5FC3",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u5C0F\u6307\uFF09",color:[.95,.4,.42],points:[w("HT1","\u6975\u6CC9","arm","arm",14.4,133,-1,"\u814B\u7AA9\u9802\u9EDE\u3001\u814B\u52D5\u8108\u640F\u52D5\u8655"),w("HT2","\u9752\u9748","arm","arm",17,117,0,"\u8098\u6A6B\u7D0B\u4E0A 3 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5167\u5074\u6E9D"),w("HT3","\u5C11\u6D77","arm","arm",18.2,110.5,1.4,"\u8098\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u80B1\u9AA8\u5167\u4E0A\u9AC1\u524D\u65B9"),w("HT4","\u9748\u9053","ulna","forearm",23,88,3.2,"\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),w("HT5","\u901A\u91CC","ulna","forearm",23.3,87,3.3,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8"),w("HT6","\u9670\u90C4","ulna","forearm",23.6,86,3.4,"\u8155\u6A6B\u7D0B\u4E0A 0.5 \u5BF8"),w("HT7","\u795E\u9580","hand","hand",24,85,3.6,"\u8155\u6A6B\u7D0B\u5C3A\u5074\u7AEF\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),w("HT8","\u5C11\u5E9C","hand","hand",25,79,5,"\u638C\u5FC3\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593"),w("HT9","\u5C11\u885D","littleDist","none",23.4,72.5,8.2,"\u5C0F\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"si",code:"SI",name:"\u624B\u592A\u967D\u5C0F\u8178\u7D93",short:"\u5C0F\u8178\u7D93",organ:"\u5C0F\u8178",group:"handYang",flow:"\u624B\uFF08\u5C0F\u6307\uFF09\u2192 \u982D\u9762",color:[.98,.6,.3],points:[w("SI1","\u5C11\u6FA4","littleDist","none",22.6,72.6,8,"\u5C0F\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),w("SI2","\u524D\u8C37","littleProx","none",22.4,75.6,5,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u524D\u65B9"),w("SI3","\u5F8C\u8C3F","hand","hand",22.9,78.6,3,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u5F8C\u65B9\u3001\u63E1\u62F3\u6642\u6A6B\u7D0B\u982D"),w("SI4","\u8155\u9AA8","hand","hand",23.4,82.4,1.8,"\u7B2C\u4E94\u638C\u9AA8\u57FA\u5E95\u8207\u9264\u9AA8\u4E4B\u9593"),w("SI5","\u967D\u8C37","hand","hand",23.6,84.8,.8,"\u8155\u80CC\u5C3A\u5074\u3001\u5C3A\u9AA8\u8396\u7A81\u8207\u4E09\u89D2\u9AA8\u4E4B\u9593"),w("SI6","\u990A\u8001","ulna","forearm",23,87,-.6,"\u5C3A\u9AA8\u8396\u7A81\u6A48\u5074\u9AA8\u7E2B\u4E2D"),w("SI7","\u652F\u6B63","ulna","forearm",22.6,95,-1.4,"\u8155\u80CC\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5C3A\u9AA8\u80CC\u5074"),w("SI8","\u5C0F\u6D77","ulna","forearm",19.6,110,-5,"\u5C3A\u9AA8\u9DF9\u5634\u8207\u80B1\u9AA8\u5167\u4E0A\u9AC1\u4E4B\u9593"),w("SI9","\u80A9\u8C9E","scapula","arm",15.2,132,-5.6,"\u814B\u5F8C\u7D0B\u982D\u4E0A 1 \u5BF8"),w("SI10","\u81D1\u4FDE","scapula","chest",15,137,-6,"\u80A9\u80DB\u5CA1\u4E0B\u7DE3\u3001\u814B\u5F8C\u7D0B\u982D\u76F4\u4E0A"),w("SI11","\u5929\u5B97","scapula","chest",11,133,-7.2,"\u80A9\u80DB\u5CA1\u4E0B\u7AA9\u4E2D\u592E"),w("SI12","\u79C9\u98A8","scapula","chest",10.5,139.4,-6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u4E2D\u592E"),w("SI13","\u66F2\u57A3","scapula","chest",7.6,139.4,-6.6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u5167\u5074\u7AEF"),w("SI14","\u80A9\u5916\u4FDE","thoraxUp","chest",6,143.6,-7,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 3 \u5BF8"),w("SI15","\u80A9\u4E2D\u4FDE","neckLow","neck",4.2,145.6,-6.4,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 2 \u5BF8"),w("SI16","\u5929\u7A97","neckUp","neck",5,150,.2,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3\u3001\u5589\u7D50\u65C1"),w("SI17","\u5929\u5BB9","head","head",5,152.2,1.6,"\u4E0B\u9837\u89D2\u5F8C\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u524D\u7DE3"),w("SI18","\u9874\u9ACE","head","head",5,157,5.4,"\u5916\u773C\u89D2\u76F4\u4E0B\u3001\u9874\u9AA8\u4E0B\u7DE3"),w("SI19","\u807D\u5BAE","head","head",6.6,157.6,2.2,"\u8033\u5C4F\u524D\u3001\u5F35\u53E3\u51F9\u9677\u8655")]},{id:"bl",code:"BL",name:"\u8DB3\u592A\u967D\u8180\u80F1\u7D93",short:"\u8180\u80F1\u7D93",organ:"\u8180\u80F1",group:"footYang",flow:"\u982D\u9762 \u2192 \u80CC \u2192 \u8DB3\uFF08\u5C0F\u8DBE\uFF09",color:[.45,.62,.95],points:[w("BL1","\u775B\u660E","head","head",1.4,158.4,7.4,"\u5167\u773C\u89D2\u7A0D\u4E0A\u65B9\u51F9\u9677"),w("BL2","\u6522\u7AF9","head","head",1.9,160.4,7.9,"\u7709\u982D\u51F9\u9677\u4E2D"),w(null,null,"head","head",2.2,164.5,6.5),w("BL7","\u901A\u5929","head","head",2.2,169.6,.8,"\u524D\u9AEE\u969B\u6B63\u4E2D\u76F4\u4E0A 4 \u5BF8\u3001\u65C1\u958B 1.5 \u5BF8"),w(null,null,"head","head",2.6,166,-6),w(null,null,"head","head",2.6,159.5,-9.3),w("BL10","\u5929\u67F1","neckUp","neck",2.6,153.2,-7.4,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u65C1\u958B 1.3 \u5BF8\u3001\u659C\u65B9\u808C\u5916\u7DE3"),w("BL11","\u5927\u677C","thoraxUp","chest",3,143.4,-8,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL13","\u80BA\u4FDE","thoraxUp","chest",3,139.4,-9.4,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL15","\u5FC3\u4FDE","thoraxMid","chest",3,134.4,-9.4,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL17","\u8188\u4FDE","thoraxMid","chest",3,128,-9.4,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL18","\u809D\u4FDE","thoraxLow","chest",3,122.4,-9.2,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL20","\u813E\u4FDE","thoraxLow","belly",3,116.4,-8.2,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL21","\u80C3\u4FDE","thoraxLow","belly",3,113.4,-7.6,"\u7B2C\u5341\u4E8C\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL23","\u814E\u4FDE","L2","belly",3,107,-6.8,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL25","\u5927\u8178\u4FDE","L4","belly",3,100,-6.6,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL27","\u5C0F\u8178\u4FDE","pelvis","pelvis",2.6,95.6,-7.6,"\u7B2C\u4E00\u85A6\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL32","\u6B21\u9ACE","pelvis","pelvis",2.2,92,-8.2,"\u7B2C\u4E8C\u85A6\u5F8C\u5B54\u4E2D"),w("BL36","\u627F\u6276","femur","thigh",7,80,-7.6,"\u81C0\u6A6B\u7D0B\u4E2D\u9EDE"),w("BL37","\u6BB7\u9580","femur","thigh",7.4,65,-6.6,"\u627F\u6276\u8207\u59D4\u4E2D\u9023\u7DDA\u4E0A\u3001\u627F\u6276\u4E0B 6 \u5BF8"),w("BL40","\u59D4\u4E2D","shank","shank",7.4,44.6,-6.8,"\u8195\u6A6B\u7D0B\u4E2D\u9EDE"),w("BL57","\u627F\u5C71","shank","shank",7.4,26,-7.6,"\u5C0F\u817F\u5F8C\u5074\u3001\u8153\u8178\u808C\u5169\u808C\u8179\u4E4B\u9593\u7684\u4EBA\u5B57\u7D0B"),w("BL58","\u98DB\u63DA","shank","shank",9.4,21,-6.8,"\u5D11\u5D19\u76F4\u4E0A 7 \u5BF8\u3001\u627F\u5C71\u5916\u4E0B\u65B9"),w("BL60","\u5D11\u5D19","shank","shank",11,7.6,-5.8,"\u5916\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),w("BL62","\u7533\u8108","foot","foot",12,4.6,-3.8,"\u5916\u8E1D\u5C16\u76F4\u4E0B\u51F9\u9677"),w("BL64","\u4EAC\u9AA8","foot","foot",13.5,2.8,1.4,"\u7B2C\u4E94\u8E60\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("BL65","\u675F\u9AA8","foot","foot",14,2.2,4.4,"\u7B2C\u4E94\u8E60\u8DBE\u95DC\u7BC0\u5F8C\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("BL67","\u81F3\u9670","foot","none",14.6,1.2,9.4,"\u8DB3\u5C0F\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"ki",code:"KI",name:"\u8DB3\u5C11\u9670\u814E\u7D93",short:"\u814E\u7D93",organ:"\u814E",group:"footYin",flow:"\u8DB3\uFF08\u8DB3\u5E95\uFF09\u2192 \u80F8\u8179",color:[.36,.44,.78],points:[w("KI1","\u6E67\u6CC9","foot","foot",7.5,1.1,4.4,"\u8DB3\u5E95\u524D 1/3 \u51F9\u9677\uFF08\u5C48\u8DBE\u6642\u6700\u51F9\u8655\uFF09"),w("KI2","\u7136\u8C37","foot","foot",5.4,3.4,1.4,"\u821F\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("KI3","\u592A\u8C3F","shank","shank",4.8,8,-4.8,"\u5167\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),w("KI5","\u6C34\u6CC9","foot","foot",5,5.4,-5,"\u592A\u8C3F\u76F4\u4E0B 1 \u5BF8"),w("KI6","\u7167\u6D77","foot","foot",4.5,5.6,-2.4,"\u5167\u8E1D\u5C16\u4E0B\u65B9\u51F9\u9677"),w("KI7","\u5FA9\u6E9C","shank","shank",4.5,12,-4.4,"\u592A\u8C3F\u4E0A 2 \u5BF8\u3001\u8DDF\u8171\u524D\u7DE3"),w("KI9","\u7BC9\u8CD3","shank","shank",5,22,-4.8,"\u592A\u8C3F\u4E0A 5 \u5BF8\u3001\u8153\u8178\u808C\u5167\u5074"),w("KI10","\u9670\u8C37","shank","shank",5,44.6,-6,"\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u5169\u808C\u8171\u4E4B\u9593"),w(null,null,"femur","thigh",5.5,58,-4),w(null,null,"femur","thigh",5,72,-2),w(null,null,"pelvis","pelvis",3,82,2),w("KI11","\u6A6B\u9AA8","pelvis","pelvis",1.2,82.6,5.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 0.5 \u5BF8"),w("KI13","\u6C23\u7A74","pelvis","pelvis",1.2,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u65C1\u958B 0.5 \u5BF8"),w("KI16","\u8093\u4FDE","L3","belly",1.2,103,10.4,"\u81CD\u65C1 0.5 \u5BF8"),w("KI21","\u5E7D\u9580","thoraxLow","belly",1.3,117,10.8,"\u81CD\u4E0A 6 \u5BF8\u65C1\u958B 0.5 \u5BF8"),w("KI23","\u795E\u5C01","thoraxMid","chest",2,130,10.8,"\u7B2C\u56DB\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8"),w("KI27","\u4FDE\u5E9C","thoraxUp","chest",4,138.2,6.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8")]},{id:"pc",code:"PC",name:"\u624B\u53A5\u9670\u5FC3\u5305\u7D93",short:"\u5FC3\u5305\u7D93",organ:"\u5FC3\u5305",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u4E2D\u6307\uFF09",color:[.86,.52,.86],points:[w("PC1","\u5929\u6C60","thoraxMid","chest",12,130,8.6,"\u7B2C\u56DB\u808B\u9593\u3001\u4E73\u982D\u5916\u5074 1 \u5BF8"),w("PC2","\u5929\u6CC9","arm","arm",17,128,2.6,"\u814B\u524D\u7D0B\u982D\u4E0B 2 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5169\u982D\u4E4B\u9593"),w("PC3","\u66F2\u6FA4","arm","arm",20.4,110.5,2.8,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u5C3A\u5074"),w("PC4","\u90C4\u9580","radius","forearm",24,95,3,"\u8155\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("PC5","\u9593\u4F7F","radius","forearm",25,91,3.3,"\u8155\u6A6B\u7D0B\u4E0A 3 \u5BF8"),w("PC6","\u5167\u95DC","radius","forearm",25.4,89,3.5,"\u8155\u6A6B\u7D0B\u4E0A 2 \u5BF8\u3001\u638C\u9577\u808C\u8171\u8207\u6A48\u5074\u5C48\u8155\u808C\u8171\u4E4B\u9593"),w("PC7","\u5927\u9675","hand","hand",26.3,85,4,"\u8155\u6A6B\u7D0B\u4E2D\u9EDE\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("PC8","\u52DE\u5BAE","hand","hand",27.4,79,5.4,"\u638C\u5FC3\u7B2C\u4E8C\u3001\u4E09\u638C\u9AA8\u4E4B\u9593\uFF08\u63E1\u62F3\u6642\u4E2D\u6307\u5C16\u6240\u6307\uFF09"),w("PC9","\u4E2D\u885D","middleDist","none",28.5,70,9.6,"\u4E2D\u6307\u5C16\u7AEF\u4E2D\u592E")]},{id:"te",code:"TE",name:"\u624B\u5C11\u967D\u4E09\u7126\u7D93",short:"\u4E09\u7126\u7D93",organ:"\u4E09\u7126",group:"handYang",flow:"\u624B\uFF08\u7121\u540D\u6307\uFF09\u2192 \u982D\u9762",color:[.65,.84,.5],points:[w("TE1","\u95DC\u885D","ringDist","none",25.2,71.4,9.2,"\u7121\u540D\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),w("TE2","\u6DB2\u9580","hand","hand",25,77.4,4.4,"\u7B2C\u56DB\u3001\u4E94\u6307\u7E2B\u7AEF"),w("TE3","\u4E2D\u6E1A","hand","hand",25.3,79.6,2.8,"\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593\u3001\u638C\u6307\u95DC\u7BC0\u5F8C\u65B9"),w("TE4","\u967D\u6C60","hand","hand",25.8,84.5,.8,"\u8155\u80CC\u6A6B\u7D0B\u4E2D\u3001\u4F38\u6307\u808C\u8171\u5C3A\u5074"),w("TE5","\u5916\u95DC","radius","forearm",25,88.6,-1,"\u967D\u6C60\u4E0A 2 \u5BF8\u3001\u6A48\u5C3A\u9AA8\u4E4B\u9593"),w("TE6","\u652F\u6E9D","radius","forearm",24.8,90.6,-1.3,"\u967D\u6C60\u4E0A 3 \u5BF8"),w("TE7","\u6703\u5B97","ulna","forearm",23.5,90.6,-1.5,"\u652F\u6E9D\u5C3A\u5074\u3001\u5C3A\u9AA8\u6A48\u5074\u7DE3"),w("TE8","\u4E09\u967D\u7D61","radius","forearm",24.5,92.6,-1.5,"\u967D\u6C60\u4E0A 4 \u5BF8"),w("TE9","\u56DB\u7006","ulna","forearm",23,99,-3,"\u8098\u5C16\u4E0B 5 \u5BF8"),w("TE10","\u5929\u4E95","arm","arm",21.5,113,-5.4,"\u8098\u5C16\u4E0A 1 \u5BF8\u51F9\u9677"),w("TE11","\u6E05\u51B7\u6DF5","arm","arm",21,116,-5,"\u5929\u4E95\u4E0A 1 \u5BF8"),w("TE12","\u6D88\u6FFC","arm","arm",20,122,-5,"\u6E05\u51B7\u6DF5\u8207\u81D1\u6703\u9023\u7DDA\u4E2D\u9EDE"),w("TE13","\u81D1\u6703","arm","arm",19,128,-5,"\u80A9\u9ACE\u4E0B 3 \u5BF8\u3001\u4E09\u89D2\u808C\u5F8C\u4E0B\u7DE3"),w("TE14","\u80A9\u9ACE","scapula","arm",17.6,139,-5.4,"\u80A9\u5CF0\u5F8C\u4E0B\u65B9\u51F9\u9677"),w("TE15","\u5929\u9ACE","scapula","chest",7.6,143,-6,"\u80A9\u80DB\u9AA8\u4E0A\u89D2\u4E0A\u65B9"),w("TE16","\u5929\u7256","neckUp","neck",5.4,151,-2.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),w("TE17","\u7FF3\u98A8","head","head",6.4,155.4,-.4,"\u8033\u5782\u5F8C\u65B9\u3001\u4E73\u7A81\u8207\u4E0B\u9837\u89D2\u4E4B\u9593"),w("TE19","\u9871\u606F","head","head",7,160.4,-2.4,"\u8033\u5F8C\u9AEE\u969B\u3001\u7FF3\u98A8\u8207\u89D2\u5B6B\u4E4B\u9593"),w("TE20","\u89D2\u5B6B","head","head",7,162.4,-.4,"\u8033\u5C16\u6B63\u4E0A\u65B9\u9AEE\u969B"),w("TE21","\u8033\u9580","head","head",6.6,158.6,2.4,"\u8033\u5C4F\u4E0A\u5207\u8DE1\u524D\u65B9\u51F9\u9677"),w("TE23","\u7D72\u7AF9\u7A7A","head","head",5,160.6,6.4,"\u7709\u68A2\u51F9\u9677\u4E2D")]},{id:"gb",code:"GB",name:"\u8DB3\u5C11\u967D\u81BD\u7D93",short:"\u81BD\u7D93",organ:"\u81BD",group:"footYang",flow:"\u982D\u9762 \u2192 \u9AD4\u5074 \u2192 \u8DB3\uFF08\u7B2C\u56DB\u8DBE\uFF09",color:[.35,.78,.68],points:[w("GB1","\u77B3\u5B50\u9ACE","head","head",5.3,158.4,5.8,"\u5916\u773C\u89D2\u5916\u5074\u51F9\u9677"),w("GB2","\u807D\u6703","head","head",6.6,156.4,2,"\u8033\u5C4F\u9593\u5207\u8DE1\u524D\u65B9\u3001\u5F35\u53E3\u51F9\u9677"),w("GB4","\u9837\u53AD","head","head",6.5,163,4.4,"\u982D\u7DAD\u8207\u66F2\u9B22\u9023\u7DDA\u4E0A 1/4"),w("GB8","\u7387\u8C37","head","head",6.5,165.4,-.4,"\u8033\u5C16\u76F4\u4E0A\u5165\u9AEE\u969B 1.5 \u5BF8"),w("GB12","\u5B8C\u9AA8","head","head",5.5,155.4,-4.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u51F9\u9677"),w(null,null,"head","head",6.5,162,-2),w(null,null,"head","head",5,166,4),w("GB14","\u967D\u767D","head","head",3,162.4,7.4,"\u77B3\u5B54\u76F4\u4E0A\u3001\u7709\u4E0A 1 \u5BF8"),w(null,null,"head","head",3.5,167,5),w(null,null,"head","head",4.5,169,-1),w(null,null,"head","head",5,164,-7),w("GB20","\u98A8\u6C60","head","head",4,155.4,-7.4,"\u6795\u9AA8\u4E0B\u3001\u80F8\u9396\u4E73\u7A81\u808C\u8207\u659C\u65B9\u808C\u4E4B\u9593\u51F9\u9677"),w("GB21","\u80A9\u4E95","clavicle","chest",9,145.8,-3,"\u5927\u690E\u8207\u80A9\u5CF0\u9023\u7DDA\u4E2D\u9EDE\u3001\u659C\u65B9\u808C\u4E0A\u7DE3"),w("GB22","\u6DF5\u814B","thoraxMid","chest",13.5,128.5,.5,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u814B\u4E0B 3 \u5BF8"),w("GB24","\u65E5\u6708","thoraxMid","chest",8.6,119.6,8.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E03\u808B\u9593"),w("GB25","\u4EAC\u9580","thoraxLow","belly",7,112,-5,"\u7B2C\u5341\u4E8C\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),w("GB26","\u5E36\u8108","L3","belly",11,105,1,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u76F4\u4E0B\u3001\u8207\u81CD\u540C\u9AD8"),w("GB29","\u5C45\u9ACE","pelvis","pelvis",12.5,90,-2,"\u9AC2\u524D\u4E0A\u68D8\u8207\u5927\u8F49\u5B50\u9023\u7DDA\u4E2D\u9EDE"),w("GB30","\u74B0\u8DF3","pelvis","pelvis",12,85,-6,"\u80A1\u9AA8\u5927\u8F49\u5B50\u8207\u85A6\u9AA8\u88C2\u5B54\u9023\u7DDA\u5916 1/3"),w("GB31","\u98A8\u5E02","femur","thigh",12.6,62,-2,"\u5927\u817F\u5916\u5074\u3001\u76F4\u7ACB\u5782\u624B\u6642\u4E2D\u6307\u5C16\u6240\u6307"),w("GB33","\u819D\u967D\u95DC","femur","thigh",12,47,-2.4,"\u80A1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u65B9\u51F9\u9677"),w("GB34","\u967D\u9675\u6CC9","shank","shank",11.8,39.4,-1,"\u8153\u9AA8\u5C0F\u982D\u524D\u4E0B\u65B9\u51F9\u9677"),w("GB36","\u5916\u4E18","shank","shank",12,27,-3,"\u5916\u8E1D\u5C16\u4E0A 7 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),w("GB37","\u5149\u660E","shank","shank",12,19,-3,"\u5916\u8E1D\u5C16\u4E0A 5 \u5BF8"),w("GB39","\u61F8\u9418","shank","shank",12,14,-3,"\u5916\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),w("GB40","\u4E18\u589F","foot","foot",11.8,5.4,-.4,"\u5916\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),w("GB41","\u8DB3\u81E8\u6CE3","foot","foot",11.5,4,4,"\u7B2C\u56DB\u3001\u4E94\u8E60\u9AA8\u4E4B\u9593"),w("GB43","\u4FE0\u8C3F","foot","foot",12.8,2,7.4,"\u7B2C\u56DB\u3001\u4E94\u8DBE\u7E2B\u7AEF"),w("GB44","\u8DB3\u7AC5\u9670","foot","none",13.6,1.3,11.3,"\u7B2C\u56DB\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"lr",code:"LR",name:"\u8DB3\u53A5\u9670\u809D\u7D93",short:"\u809D\u7D93",organ:"\u809D",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u8105\u808B",color:[.4,.72,.42],points:[w("LR1","\u5927\u6566","foot","none",8.9,1.8,12.6,"\u8DB3\u5927\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1"),w("LR2","\u884C\u9593","foot","foot",8.5,2.4,9,"\u7B2C\u4E00\u3001\u4E8C\u8DBE\u7E2B\u7AEF"),w("LR3","\u592A\u885D","foot","foot",8,4.4,4.4,"\u7B2C\u4E00\u3001\u4E8C\u8E60\u9AA8\u7D50\u5408\u90E8\u524D\u65B9\u51F9\u9677"),w("LR4","\u4E2D\u5C01","foot","foot",5.6,7,.2,"\u5167\u8E1D\u524D\u65B9\u3001\u811B\u9AA8\u524D\u808C\u8171\u5167\u5074"),w("LR5","\u8821\u6E9D","shank","shank",4.2,18,-1.4,"\u5167\u8E1D\u5C16\u4E0A 5 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u9762\u4E2D\u592E"),w("LR6","\u4E2D\u90FD","shank","shank",4.4,22,-1.4,"\u5167\u8E1D\u5C16\u4E0A 7 \u5BF8"),w("LR7","\u819D\u95DC","shank","shank",5,39,-2,"\u9670\u9675\u6CC9\u5F8C 1 \u5BF8"),w("LR8","\u66F2\u6CC9","shank","shank",4.8,44.6,-4,"\u5C48\u819D\u6642\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u4E0A\u65B9"),w("LR9","\u9670\u5305","femur","thigh",5,55,0,"\u9AD5\u5E95\u4E0A 4 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u8207\u7E2B\u5320\u808C\u4E4B\u9593"),w(null,null,"femur","thigh",5.2,70,2),w("LR11","\u9670\u5EC9","femur","thigh",4.6,85,3,"\u6C23\u885D\u76F4\u4E0B 2 \u5BF8\u3001\u9577\u6536\u808C\u5916\u7DE3"),w("LR12","\u6025\u8108","pelvis","pelvis",2.6,83,5,"\u6065\u9AA8\u806F\u5408\u5916\u5074\u3001\u8179\u80A1\u6E9D\u52D5\u8108\u640F\u52D5\u8655"),w(null,null,"pelvis","pelvis",4.5,92,7),w(null,null,"L3","belly",8,101,7),w("LR13","\u7AE0\u9580","thoraxLow","belly",11,110,2,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),w("LR14","\u671F\u9580","thoraxMid","chest",9,123.4,9.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u516D\u808B\u9593")]},{id:"cv",code:"CV",name:"\u4EFB\u8108",short:"\u4EFB\u8108",organ:"\u524D\u6B63\u4E2D\u7DDA\uFF08\u9670\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u6703\u9670 \u2192 \u4E0B\u9837\uFF08\u524D\u6B63\u4E2D\u7DDA\uFF09",color:[.98,.9,.55],points:[w("CV1","\u6703\u9670","pelvis","pelvis",0,79,-1,"\u524D\u5F8C\u4E8C\u9670\u4E4B\u9593"),w("CV2","\u66F2\u9AA8","pelvis","pelvis",0,81.4,4.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u4E2D\u9EDE"),w("CV3","\u4E2D\u6975","pelvis","pelvis",0,84.6,6.2,"\u81CD\u4E0B 4 \u5BF8"),w("CV4","\u95DC\u5143","pelvis","pelvis",0,97,9.6,"\u81CD\u4E0B 3 \u5BF8"),w("CV6","\u6C23\u6D77","L5","belly",0,100,10,"\u81CD\u4E0B 1.5 \u5BF8"),w("CV8","\u795E\u95D5","L3","belly",0,103,10.6,"\u81CD\u4E2D\u592E\uFF08\u7981\u91DD\uFF0C\u53EF\u7078\uFF09"),w("CV9","\u6C34\u5206","L3","belly",0,105,10.6,"\u81CD\u4E0A 1 \u5BF8"),w("CV12","\u4E2D\u8118","L1","belly",0,112,11,"\u81CD\u8207\u80F8\u9AA8\u4E0B\u7AEF\u9023\u7DDA\u4E2D\u9EDE"),w("CV14","\u5DE8\u95D5","thoraxLow","belly",0,119,11,"\u81CD\u4E0A 6 \u5BF8"),w("CV15","\u9CE9\u5C3E","thoraxMid","chest",0,122.6,11,"\u80F8\u9AA8\u528D\u7A81\u4E0B"),w("CV17","\u81BB\u4E2D","thoraxMid","chest",0,130,11.2,"\u5169\u4E73\u982D\u9023\u7DDA\u4E2D\u9EDE\u3001\u7B2C\u56DB\u808B\u9593"),w("CV18","\u7389\u5802","thoraxMid","chest",0,132.6,11,"\u7B2C\u4E09\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),w("CV20","\u83EF\u84CB","thoraxUp","chest",0,137,8,"\u7B2C\u4E00\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),w("CV21","\u7487\u74A3","thoraxUp","chest",0,139,6.4,"\u5929\u7A81\u4E0B 1 \u5BF8"),w("CV22","\u5929\u7A81","thoraxUp","chest",0,140.8,4.4,"\u80F8\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),w("CV23","\u5EC9\u6CC9","head","neck",0,151,5,"\u820C\u9AA8\u4E0A\u7DE3\u51F9\u9677"),w("CV24","\u627F\u6F3F","head","head",0,152.4,8.6,"\u9826\u5507\u6E9D\u6B63\u4E2D\u51F9\u9677")]},{id:"gv",code:"GV",name:"\u7763\u8108",short:"\u7763\u8108",organ:"\u5F8C\u6B63\u4E2D\u7DDA\uFF08\u967D\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u5C3E\u9AA8 \u2192 \u982D\u9802 \u2192 \u4E0A\u5507\uFF08\u5F8C\u6B63\u4E2D\u7DDA\uFF09",color:[.72,.68,.98],points:[w("GV1","\u9577\u5F37","pelvis","pelvis",0,82.6,-8,"\u5C3E\u9AA8\u7AEF\u8207\u809B\u9580\u9023\u7DDA\u4E2D\u9EDE"),w("GV2","\u8170\u4FDE","pelvis","pelvis",0,88,-8.6,"\u85A6\u7BA1\u88C2\u5B54\u4E2D"),w("GV3","\u8170\u967D\u95DC","L4","belly",0,100,-7,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B"),w("GV4","\u547D\u9580","L2","belly",0,107,-7,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B"),w("GV6","\u810A\u4E2D","thoraxLow","belly",0,117,-8.4,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV8","\u7B4B\u7E2E","thoraxLow","chest",0,122.4,-9.4,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV9","\u81F3\u967D","thoraxMid","chest",0,128,-9.8,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u3001\u5169\u80A9\u80DB\u4E0B\u89D2\u9023\u7DDA"),w("GV11","\u795E\u9053","thoraxMid","chest",0,134.4,-9.8,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV12","\u8EAB\u67F1","thoraxUp","chest",0,139.4,-9.8,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV13","\u9676\u9053","thoraxUp","chest",0,143.4,-8.4,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV14","\u5927\u690E","neckLow","neck",0,145,-7.8,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\uFF08\u4F4E\u982D\u6642\u6700\u7A81\u51FA\u7684\u9AA8\u982D\u4E0B\u65B9\uFF09"),w("GV15","\u555E\u9580","neckUp","neck",0,152,-6.8,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),w("GV16","\u98A8\u5E9C","head","head",0,154.2,-8.4,"\u6795\u5916\u9686\u51F8\u76F4\u4E0B\u51F9\u9677"),w("GV17","\u8166\u6236","head","head",0,157.6,-9.4,"\u6795\u5916\u9686\u51F8\u4E0A\u7DE3\u51F9\u9677"),w("GV19","\u5F8C\u9802","head","head",0,166,-6.4,"\u767E\u6703\u5F8C 1.5 \u5BF8"),w("GV20","\u767E\u6703","head","head",0,170.3,-1.4,"\u982D\u9802\u6B63\u4E2D\u3001\u5169\u8033\u5C16\u9023\u7DDA\u4E2D\u9EDE"),w("GV21","\u524D\u9802","head","head",0,169.4,2,"\u767E\u6703\u524D 1.5 \u5BF8"),w("GV23","\u4E0A\u661F","head","head",0,167,6.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 1 \u5BF8"),w("GV24","\u795E\u5EAD","head","head",0,166,7.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),w("GV26","\u6C34\u6E9D","head","head",0,155,9.2,"\u4EBA\u4E2D\u6E9D\u4E0A 1/3 \u8655"),w("GV28","\u9F66\u4EA4","head","head",0,153.4,8.4,"\u4E0A\u5507\u7E6B\u5E36\u8207\u7259\u9F66\u76F8\u63A5\u8655")]}],Ru=[["handYin","\u624B\u4E09\u9670\uFF08\u80F8\u2192\u624B\uFF09"],["handYang","\u624B\u4E09\u967D\uFF08\u624B\u2192\u982D\uFF09"],["footYang","\u8DB3\u4E09\u967D\uFF08\u982D\u2192\u8DB3\uFF09"],["footYin","\u8DB3\u4E09\u9670\uFF08\u8DB3\u2192\u80F8\u8179\uFF09"],["extra","\u4EFB\u7763\u4E8C\u8108"]];function Cu(i){return Ds.find(t=>t.id===i)??null}var Pu=i=>i.midline?["m"]:["l","r"];var hx=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","indexMid","indexDist","middleProx","middleMid","middleDist","ringProx","ringMid","ringDist","littleProx","littleMid","littleDist"]);function ux(i,t){return hx.has(i.seg)?`${i.seg}.${t==="r"?"r":"l"}`:i.seg}function dx(i,t){let e=t==="r"?[-i.p[0],i.p[1],i.p[2]]:[...i.p],n=lx[i.hub],s=cx[i.hub]??0;if(!n||!s)return e;let r=n.point?t==="r"?[-n.point[0],n.point[1],n.point[2]]:n.point:fx(e,n,t),a=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],o=Math.hypot(a[0],a[1],a[2]);return o<1e-6?e:[e[0]+a[0]/o*s,e[1]+a[1]/o*s,e[2]+a[2]/o*s]}function fx(i,t,e){let n=e==="r"?-1:1,s=[t.a[0]*n,t.a[1],t.a[2]],r=[t.b[0]*n,t.b[1],t.b[2]],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=[i[0]-s[0],i[1]-s[1],i[2]-s[2]],l=a[0]**2+a[1]**2+a[2]**2,c=Math.max(0,Math.min(1,l?(o[0]*a[0]+o[1]*a[1]+o[2]*a[2])/l:0));return[s[0]+a[0]*c,s[1]+a[1]*c,s[2]+a[2]*c]}function Iu(i,t){return i.points.map(e=>({code:e.code,name:e.name,note:e.note,seg:ux(e,t),pos:dx(e,t)}))}var Lu=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function px(i,t){return Math.max(1,Math.min(10,Math.round(Lu(i,t)/2.5)))}function mx(i,t,e,n,s){let r=s*s,a=r*s,o=[0,0,0];for(let l=0;l<3;l++)o[l]=.5*(2*t[l]+(-i[l]+e[l])*s+(2*i[l]-5*t[l]+4*e[l]-n[l])*r+(-i[l]+3*t[l]-3*e[l]+n[l])*a);return o}function ao(i){if(i.length<2)return i.map(e=>[...e]);let t=[];for(let e=0;e<i.length-1;e++){let n=i[Math.max(0,e-1)],s=i[e],r=i[e+1],a=i[Math.min(i.length-1,e+2)],o=px(s,r);for(let l=0;l<o;l++)t.push(mx(n,s,r,a,l/o))}return t.push([...i[i.length-1]]),t}function Du(i,t){let e=1/0;for(let n=0;n<t.length-1;n++){let s=t[n],r=t[n+1],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=a[0]**2+a[1]**2+a[2]**2,l=o?Math.max(0,Math.min(1,((i[0]-s[0])*a[0]+(i[1]-s[1])*a[1]+(i[2]-s[2])*a[2])/o)):0,c=Lu(i,[s[0]+a[0]*l,s[1]+a[1]*l,s[2]+a[2]*l]);c<e&&(e=c)}return e}var gx=.62,_x=3.4,xx=new Zi(gx,12,8),yx=[1,.95,.45];function Uu(){let i=new Ve;i.renderOrder=6;let t=[];for(let o of Ds)for(let l of Pu(o)){let c=Iu(o,l),h=c.map((g,x)=>({...g,index:x})).filter(g=>g.code),u=new $n({linewidth:_x,transparent:!0,opacity:.95,depthWrite:!1});u.color.setRGB(...o.color,fe);let d=new oo(new xi,u);d.raycast=()=>{},d.renderOrder=6,d.frustumCulled=!1,d.visible=!1;let p=new Rr(xx,new qn({toneMapped:!1}),h.length);p.instanceColor=new $i(new Float32Array(h.length*3),3),p.frustumCulled=!1,p.renderOrder=7,p.visible=!1,p.userData.track=t.length,i.add(d,p),t.push({meridian:o,side:l,nodes:c,acu:h,line:d,material:u,dots:p,live:c.map(()=>[0,0,0]),active:!1,stale:!0})}let e=new I,n=new Ot,s=null;function r(o,l){for(let d=0;d<o.nodes.length;d++){let p=o.nodes[d];e.fromArray(p.pos),l&&e.applyMatrix4(l.get(p.seg)??n.identity()),o.live[d]=e.toArray()}let c=ao(o.live),h=new Float32Array(c.length*3);for(let d=0;d<c.length;d++)h.set(c[d],d*3);o.line.geometry.dispose(),o.line.geometry=new xi,o.line.geometry.setPositions(h),o.line.computeLineDistances();let u=new Ft;for(let d=0;d<o.acu.length;d++){n.identity().setPosition(...o.live[o.acu[d].index]),o.dots.setMatrixAt(d,n);let p=s&&s.track===o&&s.acuIndex===d;u.setRGB(...p?yx:o.meridian.color,fe),o.dots.setColorAt(d,u)}o.dots.instanceMatrix.needsUpdate=!0,o.dots.instanceColor&&(o.dots.instanceColor.needsUpdate=!0),o.stale=!1}let a=null;return{group:i,tracks:t,setActive(o){let l=new Set(o);for(let c of t)c.active=l.has(c.meridian.id),c.active&&c.stale&&r(c,a),c.line.visible=c.active,c.dots.visible=c.active},update(o){a=o;for(let l of t)l.active?r(l,o):l.stale=!0},setResolution(o,l){for(let c of t)c.material.resolution.set(o,l)},setOverlay(o){for(let l of t)l.material.depthTest=!o,l.material.needsUpdate=!0,l.dots.material.depthTest=!o,l.dots.material.needsUpdate=!0},select(o){s=o;for(let l of t)l.active&&r(l,a)},get selected(){return s},pickTargets(){return t.filter(o=>o.active).map(o=>o.dots)},resolve(o,l){let c=t[o.userData.track];if(!c||l==null)return null;let h=c.acu[l];return h?{meridian:c.meridian,side:c.side,point:h,track:c,acuIndex:l}:null},livePaths(){return t.map(o=>({meridian:o.meridian,side:o.side,path:o.stale?null:o.live}))},allPaths(o){return t.map(l=>{let c=l.nodes.map(h=>(e.fromArray(h.pos),o&&e.applyMatrix4(o.get(h.seg)??n.identity()),e.toArray()));return{meridian:l.meridian,side:l.side,path:c}})}}}var Nu={focus:[1,.85,.2],short:[1,.4,.2],long:[.4,.65,1],spot:[1,.62,.3]},Wl=.5,vx=[.12,.05,.2],Mx=7;function Ou(i,t){let e=fu(),n=[t.joints.thorax.center[0],t.joints.thorax.center[2]],s=new Map(t.parts.map(S=>[S.info.key,S])),r=[],a={...mn},o=null,l=[],c=null,h=[],u=Uu();i.scene.add(u.group),i.onResize((S,N)=>u.setResolution(S,N));let d=()=>!to(a),p=()=>r.forEach(S=>S()),g=0;function x(){for(let S of t.parts)S.stale&&(S.mesh.geometry.computeVertexNormals(),S.mesh.geometry.computeBoundingSphere(),S.stale=!1)}function m(){let S=du(t.joints,a),N=new Set([...S].filter(([C,U])=>!o||!U.equals(o.get(C))).map(([C])=>C));o=S;for(let C of t.bones)C.mesh.matrix.copy(o.get(C.segment));for(let C of t.parts){if(!C.segments.some(V=>N.has(V)))continue;let U=C.mesh.geometry.getAttribute("position");C.skin?Jh(C.rest,C.skin,C.info.skinSegs,o,U.array):Kh(C.prep,o.get(C.info.segA),o.get(C.info.segB),U.array),U.needsUpdate=!0,C.stale=!0,C.delta=$h(C.info,o)}B=null,clearTimeout(g),g=setTimeout(x,120),f(),b(),P(),u.update(o)}function f(){for(let S of t.parts){let N=Qh({selected:e.selectedKey===S.info.key,poseActive:d(),measure:S.info.measure,delta:S.delta});S.mesh.material.color.setRGB(N[0],N[1],N[2],fe)}}function T(){for(let S of t.bones)S.mesh.visible=e.layers.bones;for(let S of t.parts){let N=Bl(S.info,e),C=S.mesh.material;S.mesh.visible=N.visible,C.opacity=N.opacity;let U=N.opacity<1;C.transparent!==U&&(C.transparent=U,C.needsUpdate=!0),C.depthWrite=!U,N.selected?C.emissive.setRGB(...vx):C.emissive.setRGB(N.glow,N.glow*.85,N.glow*.5),S.pickable=N.pickable,S.target=pu(S.info,e,n)}f(),b(),P()}function b(){for(let S of t.parts){let N=_u(S.info,e,d(),S.delta);for(let C=0;C<S.tps.length;C++){let{marker:U}=S.tps[C];U.visible=!!N,U.material.depthTest=!e.overlay;let V=e.selectedPain&&e.selectedPain.key===S.info.key&&e.selectedPain.index===C;N&&U.material.color.setRGB(...V?Nu.focus:Nu[N],fe),U.scale.setScalar(V?1.6:1)}}}function v(){for(let S of t.parts){if(!S.tps.length||!S.tps[0].marker.visible)continue;let N=S.mesh.geometry.getAttribute("position").array,C=S.mesh.geometry.getAttribute("normal").array,U=S.mesh.position;for(let{marker:V,vertex:k}of S.tps)V.position.set(N[k*3]+C[k*3]*Wl+U.x,N[k*3+1]+C[k*3+1]*Wl+U.y,N[k*3+2]+C[k*3+2]*Wl+U.z)}}function P(){c?.update(o,S=>S.target,d())}function R(S){c&&(i.scene.remove(c.group),c.dispose(),c=null),S.length&&(c=Su(S,t.parts),i.scene.add(c.group))}function L(S){l=S,e.lineParts=xu(S),R(S),T(),p()}let B=null;function E(S,N=3){B??(B=u.allPaths(o).map(V=>({...V,path:ao(V.path)})));let C=[];for(let{meridian:V,side:k,path:J}of B){let X=Du(S,J);X<=Mx&&C.push({meridian:V,side:k,distance:X})}C.sort((V,k)=>V.distance-k.distance);let U=new Set;return C.filter(V=>!U.has(V.meridian.id)&&U.add(V.meridian.id)).slice(0,N)}function M(S,N){let C=s.get(S),U=C?.tps[N];if(!U)return null;let V=C.mesh.geometry.getAttribute("position").array,k=C.mesh.position;return[V[U.vertex*3]+k.x,V[U.vertex*3+1]+k.y,V[U.vertex*3+2]+k.z]}return i.onFrame(S=>{let N=1-Math.exp(-S*10);for(let C of t.parts){let U=C.mesh.position;U.set(U.x+(C.target[0]-U.x)*N,U.y+(C.target[1]-U.y)*N,U.z+(C.target[2]-U.z)*N)}v()}),m(),x(),T(),{state:e,meridians:u,get params(){return{...a}},get poseActive(){return d()},get activeLines(){return[...l]},get activeMeridians(){return[...h]},parts:t.parts,partByKey:S=>s.get(S),nearbyMeridians:E,painPosition:M,setParams(S){a={...a,...S},m(),p()},setLayer(S,N){e.layers[S]=N,T(),p()},setExplode(S){e.explode=S,T(),p()},setPainMode(S){e.painMode=S,S==="off"&&(e.selectedPain=null),b(),p()},setOverlay(S){e.overlay=S,u.setOverlay(S),b(),p()},toggle(S,N){let C=e[S];C.has(N)?C.delete(N):C.add(N),S==="hidden"&&e.selectedKey===N&&(e.selectedKey=null),S==="hidden"&&e.selectedPain?.key===N&&(e.selectedPain=null),T(),p()},select(S){e.selectedKey=S,S&&(e.selectedPain=null),T(),p()},selectPain(S){let N=S&&e.selectedPain?.key===S.key&&e.selectedPain?.index===S.index;e.selectedPain=N?null:S,e.selectedPain&&(e.selectedKey=null,u.select(null)),T(),p()},selectAcupoint(S){let N=u.selected,C=S&&N&&N.track===S.track&&N.acuIndex===S.acuIndex;u.select(C?null:S),!C&&S&&(e.selectedKey=null,e.selectedPain=null),T(),p()},get selectedAcupoint(){return u.selected},focus(S){let N=s.get(S);N&&(e.selectedKey=S,e.selectedPain=null,i.lookAt(N.info.centroid),T(),p())},toggleLine(S){L(l.includes(S)?l.filter(N=>N!==S):[...l,S])},clearLines(){L([])},toggleMeridian(S){h=h.includes(S)?h.filter(N=>N!==S):[...h,S],u.setActive(h),u.update(o),h.length||u.select(null),p()},setMeridians(S){h=[...new Set(S)],u.setActive(h),u.update(o),h.length||u.select(null),p()},clearMeridians(){this.setMeridians([])},reset(){gu(e),u.select(null),T(),p()},restoreParts(){mu(e),T(),p()},pickAt(S,N){x();let C=u.pickTargets(),U=e.painMode==="off"?[]:t.parts.flatMap(J=>J.tps.filter(X=>X.marker.visible).map(X=>X.marker)),V=t.parts.filter(J=>J.pickable).map(J=>J.mesh),k=i.pickHit(S,N,[...C,...U,...V]);if(!k)return{kind:null};if(k.object.isInstancedMesh){let J=u.resolve(k.object,k.instanceId);return J?{kind:"acupoint",hit:J}:{kind:null}}return k.object.userData.pain?{kind:"pain",pain:k.object.userData.pain}:k.object.userData.partKey?{kind:"muscle",key:k.object.userData.partKey}:{kind:null}},pointAt(S,N){x();let C=t.parts.filter(V=>V.pickable).map(V=>V.mesh),U=e.layers.bones?t.bones.map(V=>V.mesh):[];return i.pickPoint(S,N,[...C,...U])},onChange(S){r.push(S)}}}var Sx={l:"\u5DE6",r:"\u53F3",m:"\u4E2D\u7DDA"},Fu=[["superficial","\u6DFA\u5C64"],["middle","\u4E2D\u5C64"],["deep","\u6DF1\u5C64"],["bones","\u9AA8\u9ABC"]],bx=[["off","\u4E0D\u986F\u793A"],["posture","\u53EA\u6A19\u9396\u77ED\uFF0F\u9396\u9577"],["all","\u5168\u8EAB\u75E0\u75DB\u9EDE"]];function Bu(i,t,e){i.innerHTML=`
    <h2>\u62C6\u89E3</h2>
    ${Fu.map(([o,l])=>`<label class="toggle"><input type="checkbox" data-layer="${o}" checked>${l}</label>`).join("")}
    <div class="pain-modes">
      <span class="label">\u75E0\u75DB\u9EDE</span>
      ${bx.map(([o,l])=>`<button type="button" data-pain="${o}">${l}</button>`).join("")}
    </div>
    <label class="toggle"><input type="checkbox" data-overlay>\u7A7F\u900F\u986F\u793A\uFF08\u7D93\u8108\u3001\u75E0\u75DB\u9EDE\u4E0D\u88AB\u808C\u8089\u64CB\u4F4F\uFF09</label>
    <label class="slider">\u7206\u70B8\u5716<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>\u5FA9\u539F</button>
    <div class="hidden-list"></div>
    <p class="hint">\u95DC\u6389\u6DFA\u5C64\u5C31\u80FD\u770B\u5230\u4E2D\u5C64\uFF1B\u9EDE\u9078\u808C\u8089\u5F8C\u53EF\u55AE\u7368\u96B1\u85CF\u3001\u534A\u900F\u660E\u6216\u62C9\u51FA\u3002\u9078\u300C\u5168\u8EAB\u75E0\u75DB\u9EDE\u300D\u5F8C\uFF0C\u9EDE\u6A58\u8272\u5C0F\u7403\u770B\u90A3\u88E1\u53EF\u80FD\u662F\u4EC0\u9EBC\u554F\u984C\u3002</p>`;let n=i.querySelector(".hidden-list");i.addEventListener("change",o=>{let l=o.target.dataset.layer;l&&t.setLayer(l,o.target.checked),"overlay"in o.target.dataset&&t.setOverlay(o.target.checked)}),i.addEventListener("input",o=>{"explode"in o.target.dataset&&t.setExplode(Number(o.target.value))}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.pain?t.setPainMode(l.dataset.pain):"reset"in l.dataset?t.reset():"restoreAll"in l.dataset?t.restoreParts():l.dataset.unset&&t.toggle(l.dataset.unset,l.dataset.key))});let s=o=>{let l=t.partByKey(o);return`${e.muscles[l.info.id].name}\uFF08${Sx[l.info.side]}\uFF09`},r=(o,l,c)=>`<li><span>${s(o)}</span><button type="button" data-unset="${l}" data-key="${o}">${c}</button></li>`,a=()=>{for(let[c]of Fu)i.querySelector(`[data-layer="${c}"]`).checked=t.state.layers[c];i.querySelector("[data-explode]").value=t.state.explode,i.querySelector("[data-overlay]").checked=t.state.overlay;for(let c of i.querySelectorAll("[data-pain]"))c.classList.toggle("active",c.dataset.pain===t.state.painMode);let{hidden:o,ghost:l}=t.state;n.innerHTML=o.size+l.size===0?"":`<h3>\u5DF2\u96B1\u85CF\uFF0F\u534A\u900F\u660E</h3>
           <ul>${[...o].map(c=>r(c,"hidden","\u986F\u793A")).join("")}${[...l].map(c=>r(c,"ghost","\u53D6\u6D88\u534A\u900F\u660E")).join("")}</ul>
           <button type="button" data-restore-all>\u5168\u90E8\u6062\u5FA9</button>`};t.onChange(a),a()}var Ex=[["all","\u5168\u90E8"],["headNeck","\u982D\u9838"],["trunk","\u8EC0\u5E79"],["upperLimb","\u4E0A\u80A2"],["lowerLimb","\u4E0B\u80A2"]];function wx(i,t,e,n){let s=e.trim().toLowerCase(),r=new Map;for(let a of i){let o=t.muscles[a.info.id];n!=="all"&&a.info.region!==n||s&&!`${o.name} ${o.en}`.toLowerCase().includes(s)||(r.has(a.info.id)||r.set(a.info.id,{id:a.info.id,name:o.name,en:o.en,sides:[]}),r.get(a.info.id).sides.push(a.info.side))}return[...r.values()]}var Tx={l:"\u5DE6",r:"\u53F3",m:"\u9078\u53D6"};function zu(i,t,e){let n="",s="all";i.innerHTML=`
    <h2>\u808C\u8089\u6E05\u55AE</h2>
    <input type="search" placeholder="\u641C\u5C0B\uFF1A\u80F8\u5C0F\u808C\u3001trapezius\u2026" data-search>
    <div class="regions">${Ex.map(([o,l])=>`<button type="button" data-region="${o}">${l}</button>`).join("")}</div>
    <ul class="muscle-rows"></ul>`;let r=i.querySelector(".muscle-rows");i.addEventListener("input",o=>{"search"in o.target.dataset&&(n=o.target.value,a())}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.region?(s=l.dataset.region,a()):l.dataset.key&&t.focus(l.dataset.key))});function a(){for(let l of i.querySelectorAll("[data-region]"))l.classList.toggle("active",l.dataset.region===s);let o=wx(t.parts,e,n,s);r.innerHTML=o.length?o.map(l=>`<li title="${l.en}"><span>${l.name}</span>${l.sides.map(c=>`<button type="button" data-key="${l.id}.${c}" class="${t.state.selectedKey===`${l.id}.${c}`?"active":""}">${Tx[c]}</button>`).join("")}</li>`).join(""):'<li class="hint">\u627E\u4E0D\u5230\u7B26\u5408\u7684\u808C\u8089</li>'}t.onChange(a),a()}var Vu={l:"\u5DE6\u5074",r:"\u53F3\u5074",m:"\u4E2D\u7DDA"},ku={l:"\u5DE6",r:"\u53F3",m:""};function Hu(i,t,e){function n(){let s=t.selectedAcupoint;if(s)return void(i.innerHTML=Ax(s,e));if(t.state.selectedPain)return void(i.innerHTML=Rx(t,e));if(t.state.selectedKey)return void(i.innerHTML=Cx(t,e));i.innerHTML=Px(t,e)}i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.act&&t.state.selectedKey?t.toggle(r.dataset.act,t.state.selectedKey):r.dataset.muscle?t.focus(r.dataset.muscle):r.dataset.meridian&&t.toggleMeridian(r.dataset.meridian))}),t.onChange(n),n()}function Ax({meridian:i,side:t,point:e},n){return`
    <h2>${e.name}<span class="side">${e.code}${ku[t]?`\u3000${ku[t]}\u5074`:""}</span></h2>
    <p class="en">${i.name}\uFF08${i.short}\uFF09</p>
    <dl>
      <dt>\u5B9A\u4F4D</dt><dd>${e.note||"\u2014"}</dd>
      <dt>\u6240\u5C6C</dt><dd>${i.organ}</dd>
      <dt>\u8D70\u5411</dt><dd>${i.flow}</dd>
    </dl>
    <p class="notes">${n.meridians[i.id]??""}</p>
    <p class="hint">\u7A74\u4F4D\u5EA7\u6A19\u662F\u4F9D\u6A21\u578B\u9AA8\u67B6\u4F30\u7B97\u7684\u6559\u5B78\u793A\u610F\uFF0C\u5BE6\u969B\u53D6\u7A74\u8ACB\u4F9D\u6A19\u6E96\u5B9A\u4F4D\u8207\u9AD4\u8868\u6A19\u8A8C\u3002</p>`}function Rx(i,t){let{key:e,index:n}=i.state.selectedPain,s=i.partByKey(e);if(!s)return'<p class="hint">\u627E\u4E0D\u5230\u9019\u500B\u75E0\u75DB\u9EDE\u3002</p>';let r=t.muscles[s.info.id],a=es(s.delta),o=i.poseActive&&s.info.measure?`<p class="delta ${a}">\u76EE\u524D\u59FF\u52E2\u4E0B\u9019\u689D\u808C\u8089 ${Fl(s.delta)}\u3000${Nl[a]}</p>${a==="same"?"":`<p class="pain-hint ${a}">${t.painHints[a]}</p>`}`:"",l=i.painPosition(e,n),c=l?i.nearbyMeridians(l):[],h=c.length?c.map(d=>`<button type="button" class="link" data-meridian="${d.meridian.id}">${d.meridian.short}</button>`).join("\u3001"):"\u9644\u8FD1\u6C92\u6709\u7D93\u904E\u7684\u7D93\u8108",u=s.tps.length;return`
    <h2>\u75E0\u75DB\u9EDE<span class="side">${r.name}\u3000${Vu[s.info.side]}${u>1?`\u3000\u7B2C ${n+1} \u9EDE`:""}</span></h2>
    <p class="en">${r.en}</p>
    ${o}
    <dl>
      <dt>\u53EF\u80FD\u7684\u554F\u984C</dt><dd>${t.problems[s.info.id]??"\u2014"}</dd>
      <dt>\u75E0\u75DB\u4F4D\u7F6E</dt><dd>${r.painPoints}</dd>
      <dt>\u8F49\u79FB\u75DB</dt><dd>${r.referredPain}</dd>
      <dt>\u5E38\u898B\u9396\u77ED</dt><dd>${r.lockedShort}</dd>
      <dt>\u5E38\u898B\u9396\u9577</dt><dd>${r.lockedLong}</dd>
      <dt>\u5217\u8ECA\u7DDA</dt><dd>${r.lines.length?r.lines.join("\u3001"):"\u2014"}</dd>
      <dt>\u9130\u8FD1\u7D93\u8108</dt><dd>${h}</dd>
    </dl>
    <div class="actions"><button type="button" data-muscle="${e}">\u770B\u9019\u689D\u808C\u8089\u7684\u5B8C\u6574\u8AAA\u660E</button></div>
    <p class="hint">\u75E0\u75DB\u9EDE\u8207\u8F49\u79FB\u75DB\u662F\u5E38\u898B\u4F4D\u7F6E\u7684\u6574\u7406\uFF0C\u4E0D\u80FD\u53D6\u4EE3\u5C08\u696D\u8A55\u4F30\uFF1B\u75DB\u7684\u5730\u65B9\u4E0D\u4E00\u5B9A\u662F\u554F\u984C\u7684\u6839\u6E90\u3002</p>`}function Cx(i,t){let e=i.state.selectedKey,n=i.partByKey(e),s=t.muscles[n.info.id],r=i.state,a=es(n.delta),o="";i.poseActive&&(o=n.info.measure?`<p class="delta ${a}">\u76EE\u524D ${Fl(n.delta)}\u3000${Nl[a]}</p>`:'<p class="delta same">\u7B4B\u819C\u3001\u808C\u8171\uFF1A\u4E0D\u8A08\u7B97\u9577\u5EA6\u8B8A\u5316</p>');let l=i.poseActive&&n.info.measure&&a!=="same"?`<p class="pain-hint ${a}">${t.painHints[a]}</p>`:"";return`
    <h2>${s.name}<span class="side">${Vu[n.info.side]}</span></h2>
    <p class="en">${s.en}<br><i>${s.latin}</i></p>
    ${o}
    <dl>
      <dt>\u8D77\u9EDE</dt><dd>${s.origin}</dd>
      <dt>\u6B62\u9EDE</dt><dd>${s.insertion}</dd>
      <dt>\u4F5C\u7528</dt><dd>${s.action}</dd>
      <dt>\u795E\u7D93</dt><dd>${s.nerve}</dd>
      <dt>\u5217\u8ECA\u7DDA</dt><dd>${s.lines.length?s.lines.join("\u3001"):"\u2014"}</dd>
      <dt>\u5E38\u898B\u9396\u77ED</dt><dd>${s.lockedShort}</dd>
      <dt>\u5E38\u898B\u9396\u9577</dt><dd>${s.lockedLong}</dd>
      <dt>\u75E0\u75DB\u9EDE</dt><dd>${s.painPoints}</dd>
      <dt>\u8F49\u79FB\u75DB</dt><dd>${s.referredPain}</dd>
      <dt>\u53EF\u80FD\u7684\u554F\u984C</dt><dd>${t.problems[n.info.id]??"\u2014"}</dd>
    </dl>
    ${l}
    ${s.notes?`<p class="notes">\u5BE9\u95B1\u8A3B\u8A18\uFF1A${s.notes}</p>`:""}
    <div class="actions">
      <button type="button" data-act="hidden">\u96B1\u85CF</button>
      <button type="button" data-act="ghost">${r.ghost.has(e)?"\u53D6\u6D88\u534A\u900F\u660E":"\u534A\u900F\u660E"}</button>
      <button type="button" data-act="pulled">${r.pulled.has(e)?"\u653E\u56DE":"\u62C9\u51FA"}</button>
    </div>`}function Px(i,t){let e=i.activeLines.map(s=>gi.find(r=>r.id===s)),n=i.activeMeridians.map(Cu).filter(Boolean);return!e.length&&!n.length?'<p class="hint">\u9EDE\u9078\u808C\u8089\u3001\u75E0\u75DB\u9EDE\u6216\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u4E5F\u53EF\u4EE5\u5F9E\u5DE6\u5074\u6E05\u55AE\u9078\u53D6\u3002</p>':`
    ${e.map(s=>`<h2>${s.name}</h2><p>${t.lines[s.name]}</p>`).join("")}
    ${n.map(s=>`<h2>${s.name}<span class="side">${s.code}</span></h2><p>${t.meridians[s.id]}</p>`).join("")}
    <p class="hint">\u9EDE\u9078\u7DDA\u4E0A\u7684\u808C\u8089\u6216\u7D93\u8108\u4E0A\u7684\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u518D\u9EDE\u4E00\u6B21\u53EF\u53D6\u6D88\u3002</p>`}var Ix=1500,Gu="anatomyTrains3d.jointsOpen";function Lx(){try{return localStorage.getItem(Gu)==="1"}catch{return!1}}function Dx(i){try{localStorage.setItem(Gu,i?"1":"0")}catch{}}function Wu(i,t,e){let n="neutral",s="both",r=0,a=u=>`<label><span>${u.label}</span><small>${u.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${u.key}"><small>${u.maxLabel}</small></label>`;i.innerHTML=`
    <div class="presets">
      <span class="label">\u59FF\u52E2</span>
      ${Object.entries(Qr).map(([u,d])=>`<button type="button" data-preset="${u}">${d.label}</button>`).join("")}
      <button type="button" data-play>\u25B6 \u64AD\u653E</button>
      <button type="button" class="joints-toggle" data-joints aria-expanded="false"></button>
    </div>
    <p class="posture-note"></p>
    <div class="slider-groups">
      ${nu.map(([u,d])=>`
        <fieldset class="slider-group${Ls.filter(p=>p.group===u).length>5?" wide":""}">
          <legend>${d}</legend>
          ${Ls.some(p=>p.group===u&&p.sided)?`<div class="side-modes">${iu.map(([p,g])=>`<button type="button" data-mode="${p}">${g}</button>`).join("")}</div>`:""}
          ${Ls.filter(p=>p.group===u).map(a).join("")}
        </fieldset>`).join("")}
    </div>`;let o=i.querySelector("[data-joints]");function l(u){i.classList.toggle("open",u),o.setAttribute("aria-expanded",String(u)),o.textContent=u?"\u6536\u8D77\u95DC\u7BC0 \u25B4":"\u8ABF\u6574\u95DC\u7BC0 \u25BE"}l(Lx());function c(u,d){cancelAnimationFrame(r);let p=performance.now(),g=x=>{let m=Math.min(1,(x-p)/Ix);t.setParams(ou(u,d,au(m))),m<1&&(r=requestAnimationFrame(g))};r=requestAnimationFrame(g)}i.addEventListener("click",u=>{let d=u.target.closest("button");d&&(d.dataset.preset?(n=d.dataset.preset,c(t.params,Qr[n].params)):"play"in d.dataset?((!n||n==="neutral")&&(n="roundedShoulders"),c(mn,Qr[n].params)):d.dataset.mode?s=d.dataset.mode:"joints"in d.dataset&&(l(!i.classList.contains("open")),Dx(i.classList.contains("open"))),h())}),i.addEventListener("input",u=>{let d=u.target.dataset.param;if(!d)return;cancelAnimationFrame(r);let p=ru(t.params,d,lu(Number(u.target.value)),s);n=to(p)?"neutral":null,t.setParams(p)});function h(){let u=t.params;for(let d of Ls)i.querySelector(`[data-param="${d.key}"]`).value=su(u,d.key,s);for(let d of i.querySelectorAll("[data-preset]"))d.classList.toggle("active",d.dataset.preset===n);for(let d of i.querySelectorAll("[data-mode]"))d.classList.toggle("active",d.dataset.mode===s);i.querySelector(".posture-note").textContent=n?e.postures[n]:"\u81EA\u8A02\u59FF\u52E2\uFF1A\u62D6\u52D5\u6ED1\u687F\u8ABF\u6574\u5404\u95DC\u7BC0\uFF1B\u4E0A\u80A2\u3001\u4E0B\u80A2\u53EF\u5207\u63DB\u300C\u5169\u5074\u4E00\u8D77\u300D\u6216\u53EA\u8ABF\u5DE6\u5074\u3001\u53F3\u5074\u3002"}t.onChange(h),h()}function Xu(i,t){i.innerHTML=`<span class="label">\u5217\u8ECA\u7DDA</span><button type="button" data-line="">\u5168\u90E8</button>${gi.map(n=>`<button type="button" data-line="${n.id}">${n.name}</button>`).join("")}`,i.addEventListener("click",n=>{let s=n.target.closest("button");s&&(s.dataset.line?t.toggleLine(s.dataset.line):t.clearLines())});let e=()=>{let n=t.activeLines;for(let s of i.querySelectorAll("button"))s.classList.toggle("active",s.dataset.line?n.includes(s.dataset.line):!n.length)};t.onChange(e),e()}function qu(i,t){let e=s=>`<button type="button" data-meridian="${s.id}" title="${s.name}\uFF1A${s.flow}"><i style="background:rgb(${s.color.map(r=>Math.round(r*255)).join(",")})"></i>${s.short}</button>`;i.innerHTML=`
    <h2>\u7D93\u8108\uFF08\u9EC3\u5E1D\u5167\u7D93\u5341\u4E8C\u7D93\u8108\uFF0B\u4EFB\u7763\uFF09</h2>
    <div class="meridian-groups">
      ${Ru.map(([s,r])=>`<div class="meridian-group"><h3>${r}</h3><div class="row">${Ds.filter(a=>a.group===s).map(e).join("")}</div></div>`).join("")}
    </div>
    <button type="button" data-clear-meridians>\u5168\u90E8\u6E05\u9664</button>
    <p class="hint">\u9EDE\u7D93\u8108\u540D\u7A31\u986F\u793A\u8D70\u5411\uFF1B\u518D\u9EDE\u4E00\u6B21\u53D6\u6D88\uFF0C\u53EF\u540C\u6642\u986F\u793A\u591A\u689D\u3002\u9EDE\u7DDA\u4E0A\u7684\u5C0F\u7403\u770B\u7A74\u4F4D\u8AAA\u660E\u3002</p>`,i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.meridian?t.toggleMeridian(r.dataset.meridian):"clearMeridians"in r.dataset&&t.clearMeridians())});let n=()=>{let s=t.activeMeridians;for(let r of i.querySelectorAll("[data-meridian]"))r.classList.toggle("active",s.includes(r.dataset.meridian))};t.onChange(n),n()}var Ux=[["front","\u524D"],["back","\u5F8C"],["right","\u53F3\u5074"],["left","\u5DE6\u5074"],["whole","\u5168\u8EAB"]];function Yu(i,t){i.innerHTML=`<span class="label">\u8996\u89D2</span>${Ux.map(([e,n])=>`<button type="button" data-view="${e}">${n}</button>`).join("")}`,i.addEventListener("click",e=>{let n=e.target.closest("button")?.dataset.view;n==="whole"?t.showWholeBody():n&&t.setView(n)})}var $u=[["up","\u25B2","\u756B\u9762\u4E0A\u79FB",0,1],["left","\u25C0","\u756B\u9762\u5DE6\u79FB",-1,0],["center","\u25CF","\u7F6E\u4E2D\uFF08\u56DE\u5230\u8EAB\u9AD4\u4E2D\u7DDA\uFF09"],["right","\u25B6","\u756B\u9762\u53F3\u79FB",1,0],["down","\u25BC","\u756B\u9762\u4E0B\u79FB",0,-1]];function Zu(i,t){i.innerHTML=$u.map(([e,n,s])=>`<button type="button" class="pan-${e}" data-pan="${e}" title="${s}" aria-label="${s}">${n}</button>`).join("")+"<small>\u96D9\u64CA\u6A21\u578B\uFF1A\u8A2D\u70BA\u65CB\u8F49\u4E2D\u5FC3</small>",i.addEventListener("click",e=>{let n=$u.find(s=>s[0]===e.target.closest("button")?.dataset.pan);n&&(n[0]==="center"?t.center():t.pan(n[3],n[4]))})}var yi=Hh(document.getElementById("viewport")),Xl=eu(window.MODEL_DATA);yi.scene.add(Xl.group);var qe=Ou(yi,Xl);Bu(document.getElementById("dissect"),qe,window.CONTENT);zu(document.getElementById("muscleList"),qe,window.CONTENT);Hu(document.getElementById("info"),qe,window.CONTENT);Wu(document.getElementById("postureBar"),qe,window.CONTENT);Xu(document.getElementById("lineBar"),qe);qu(document.getElementById("meridianBar"),qe,window.CONTENT);Yu(document.getElementById("viewBar"),yi);Zu(document.getElementById("panPad"),yi);var lo=yi.renderer.domElement,Us=null;lo.addEventListener("pointerdown",i=>{Us=[i.clientX,i.clientY],lo.focus({preventScroll:!0})});lo.addEventListener("pointerup",i=>{if(Us&&Math.hypot(i.clientX-Us[0],i.clientY-Us[1])<5){let t=qe.pickAt(i.clientX,i.clientY);t.kind==="acupoint"?qe.selectAcupoint(t.hit):t.kind==="pain"?qe.selectPain(t.pain):qe.select(t.key&&t.key===qe.state.selectedKey?null:t.key??null)}Us=null});lo.addEventListener("dblclick",i=>{let t=qe.pointAt(i.clientX,i.clientY);t&&yi.recenter(t)});document.getElementById("loading").remove();window.app={viewer:yi,model:Xl,ctrl:qe};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
