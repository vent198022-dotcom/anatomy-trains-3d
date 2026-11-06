(()=>{var wl="170",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,_c=1,Td=2;var Ah=1,Ad=2,Cn=3,$n=0,Fe=1,sn=2,Xn=0,Gi=1,xc=2,yc=3,vc=4,Rd=5,hi=100,Cd=101,Pd=102,Id=103,Ld=104,Dd=200,Ud=201,Nd=202,Fd=203,Qo=204,ta=205,Od=206,Bd=207,kd=208,zd=209,Hd=210,Vd=211,Gd=212,Wd=213,Xd=214,ea=0,na=1,ia=2,$i=3,sa=4,ra=5,oa=6,aa=7,Rh=0,qd=1,$d=2,qn=0,Yd=1,Zd=2,Kd=3,Jd=4,jd=5,Qd=6,tf=7;var Ch=300,Yi=301,Zi=302,la=303,ca=304,Yr=306,ha=1e3,fi=1001,ua=1002,Xe=1003,ef=1004;var Gs=1005;var dn=1006,Mo=1007;var pi=1008;var Dn=1009,Ph=1010,Ih=1011,As=1012,Tl=1013,mi=1014,fn=1015,Fs=1016,Al=1017,Rl=1018,Ki=1020,Lh=35902,Dh=1021,Uh=1022,on=1023,Nh=1024,Fh=1025,Wi=1026,Ji=1027,Cl=1028,Pl=1029,Oh=1030,Il=1031;var Ll=1033,pr=33776,mr=33777,gr=33778,_r=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,xa=37496,ya=37808,va=37809,Ma=37810,ba=37811,Sa=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,Ra=37817,Ca=37818,Pa=37819,Ia=37820,La=37821,xr=36492,Da=36494,Ua=36495,Bh=36283,Na=36284,Fa=36285,Oa=36286;var yr=2300,Ba=2301,bo=2302,Mc=2400,bc=2401,Sc=2402;var nf=3200,sf=3201;var kh=0,rf=1,Wn="",ce="srgb",ns="srgb-linear",Zr="linear",jt="srgb";var Ai=7680;var Ec=519,of=512,af=513,lf=514,zh=515,cf=516,hf=517,uf=518,df=519,ka=35044,Hh=35048;var wc="300 es",Pn=2e3,vr=2001,Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=1234567,bs=Math.PI/180,Rs=180/Math.PI;function In(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Dl(i,t){return(i%t+t)%t}function ff(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ss(i,t,e){return(1-e)*i+e*t}function mf(i,t,e,n){return Ss(i,t,1-Math.exp(-e*n))}function gf(i,t=1){return t-Math.abs(Dl(i,t*2)-t)}function _f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vf(i,t){return i+Math.random()*(t-i)}function Mf(i){return i*(.5-Math.random())}function bf(i){i!==void 0&&(Tc=i);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(i){return i*bs}function Ef(i){return i*Rs}function wf(i){return(i&i-1)===0&&i!==0}function Tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Af(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Kr={DEG2RAD:bs,RAD2DEG:Rs,generateUUID:In,clamp:_e,euclideanModulo:Dl,mapLinear:ff,inverseLerp:pf,lerp:Ss,damp:mf,pingpong:gf,smoothstep:_f,smootherstep:xf,randInt:yf,randFloat:vf,randFloatSpread:Mf,seededRandom:bf,degToRad:Sf,radToDeg:Ef,isPowerOfTwo:wf,ceilPowerOfTwo:Tf,floorPowerOfTwo:Af,setQuaternionFromProperEuler:Rf,normalize:Jt,denormalize:rn},mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],v=s[4],x=s[7],C=s[2],R=s[5],I=s[8];return r[0]=a*_+o*S+l*C,r[3]=a*m+o*v+l*R,r[6]=a*p+o*x+l*I,r[1]=c*_+h*S+u*C,r[4]=c*m+h*v+u*R,r[7]=c*p+h*x+u*I,r[2]=d*_+f*S+g*C,r[5]=d*m+f*v+g*R,r[8]=d*p+f*x+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},So=new Nt;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){let i=Mr("canvas");return i.style.display="block",i}var Ac={};function vs(i){i in Ac||(Ac[i]=!0,console.warn(i))}function Pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function If(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?Zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rc=[.64,.33,.3,.6,.15,.06],Cc=[.2126,.7152,.0722],Pc=[.3127,.329],Ic=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[ns]:{primaries:Rc,whitePoint:Pc,transfer:Zr,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Cc,workingColorSpaceConfig:{unpackColorSpace:ce},outputColorSpaceConfig:{drawingBufferColorSpace:ce}},[ce]:{primaries:Rc,whitePoint:Pc,transfer:jt,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Cc,outputColorSpaceConfig:{drawingBufferColorSpace:ce}}});var Ri,za=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Mr("canvas")),Ri.width=t.width,Ri.height=t.height;let n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Df=0,br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uf=0,qe=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fi,s=fi,r=dn,a=pi,o=on,l=Dn,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=In(),this.name="",this.source=new br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Ch;qe.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,x=(f+1)/2,C=(p+1)/2,R=(h+d)/4,I=(u+_)/4,D=(g+m)/4;return v>x&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=I/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=D/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=I/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),R=Math.atan2(C,p*S);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}let x=o*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new P,Dc=new $e,Oe=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Xs.subVectors(this.max,ps),Ci.subVectors(t.a,ps),Pi.subVectors(t.b,ps),Ii.subVectors(t.c,ps),Bn.subVectors(Pi,Ci),kn.subVectors(Ii,Pi),ii.subVectors(Ci,Ii);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ii.z,ii.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ii.z,0,-ii.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ii.y,ii.x,0];return!To(e,Ci,Pi,Ii,Xs)||(e=[1,0,0,0,1,0,0,0,1],!To(e,Ci,Pi,Ii,Xs))?!1:(qs.crossVectors(Bn,kn),e=[qs.x,qs.y,qs.z],To(e,Ci,Pi,Ii,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},En=[new P,new P,new P,new P,new P,new P,new P,new P],Qe=new P,Ws=new Oe,Ci=new P,Pi=new P,Ii=new P,Bn=new P,kn=new P,ii=new P,ps=new P,Xs=new P,qs=new P,si=new P;function To(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);let o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nf=new Oe,ms=new P,Ao=new P,an=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Ao)),this.expandByPoint(ms.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new P,Ro=new P,$s=new P,zn=new P,Co=new P,Ys=new P,Po=new P,ji=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ro.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Ro);let r=t.distanceTo(e)*.5,a=-this.direction.dot($s),o=zn.dot(this.direction),l=-zn.dot($s),c=zn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ro).addScaledVector($s,d),f}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){Co.subVectors(e,t),Ys.subVectors(n,t),Po.crossVectors(Co,Ys);let a=this.direction.dot(Po),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);let l=o*this.direction.dot(Ys.crossVectors(zn,Ys));if(l<0)return null;let c=o*this.direction.dot(Co.cross(zn));if(c<0||l+c>a)return null;let h=-o*zn.dot(Po);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Of)}lookAt(t,e,n){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Hn.crossVectors(n,Ge),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Hn.crossVectors(n,Ge)),Hn.normalize(),Zs.crossVectors(Ge,Hn),s[0]=Hn.x,s[4]=Zs.x,s[8]=Ge.x,s[1]=Hn.y,s[5]=Zs.y,s[9]=Ge.y,s[2]=Hn.z,s[6]=Zs.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],x=n[11],C=n[15],R=s[0],I=s[4],D=s[8],E=s[12],M=s[1],L=s[5],Y=s[9],N=s[13],G=s[2],J=s[6],Z=s[10],nt=s[14],$=s[3],st=s[7],ht=s[11],yt=s[15];return r[0]=a*R+o*M+l*G+c*$,r[4]=a*I+o*L+l*J+c*st,r[8]=a*D+o*Y+l*Z+c*ht,r[12]=a*E+o*N+l*nt+c*yt,r[1]=h*R+u*M+d*G+f*$,r[5]=h*I+u*L+d*J+f*st,r[9]=h*D+u*Y+d*Z+f*ht,r[13]=h*E+u*N+d*nt+f*yt,r[2]=g*R+_*M+m*G+p*$,r[6]=g*I+_*L+m*J+p*st,r[10]=g*D+_*Y+m*Z+p*ht,r[14]=g*E+_*N+m*nt+p*yt,r[3]=S*R+v*M+x*G+C*$,r[7]=S*I+v*L+x*J+C*st,r[11]=S*D+v*Y+x*Z+C*ht,r[15]=S*E+v*N+x*nt+C*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,R=e*S+n*v+s*x+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=S*I,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*I,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*I,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*I,t[4]=v*I,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*I,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*I,t[8]=x*I,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*I,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*I,t[12]=C*I,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*I,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=l*c,v=l*h,x=l*u,C=n.x,R=n.y,I=n.z;return s[0]=(1-(_+p))*C,s[1]=(f+x)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+v)*I,s[9]=(m-S)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Li.set(s[0],s[1],s[2]).length(),a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Pn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,_;if(o===Pn)g=(a+r)*u,_=-2*u;else if(o===vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Li=new P,tn=new It,Ff=new P(0,0,0),Of=new P(1,1,1),Hn=new P,Zs=new P,Ge=new P,Uc=new It,Nc=new $e,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bf=0,Fc=new P,Di=new $e,Tn=new It,Ks=new P,gs=new P,kf=new P,zf=new $e,Oc=new P(1,0,0),Bc=new P(0,1,0),kc=new P(0,0,1),zc={type:"added"},Hf={type:"removed"},Ui={type:"childadded",child:null},Io={type:"childremoved",child:null},Ue=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new pn,n=new $e,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new Nt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(gs,Ks,this.up):Tn.lookAt(Ks,gs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Tn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new P(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new P,An=new P,Lo=new P,Rn=new P,Ni=new P,Fi=new P,Hc=new P,Do=new P,Uo=new P,No=new P,Fo=new Qt,Oo=new Qt,Bo=new Qt,ui=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),An.subVectors(n,e),Lo.subVectors(t,e);let a=en.dot(en),o=en.dot(An),l=en.dot(Lo),c=An.dot(An),h=An.dot(Lo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(Bo,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),An.subVectors(t,e),en.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),An.subVectors(this.a,this.b),en.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ni.subVectors(s,n),Fi.subVectors(r,n),Do.subVectors(t,n);let l=Ni.dot(Do),c=Fi.dot(Do);if(l<=0&&c<=0)return e.copy(n);Uo.subVectors(t,s);let h=Ni.dot(Uo),u=Fi.dot(Uo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ni,a);No.subVectors(t,r);let f=Ni.dot(No),g=Fi.dot(No);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Hc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Hc,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ko(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=Dl(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ko(a,r,t+1/3),this.g=ko(a,r,t),this.b=ko(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){let n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return Xt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(_e(Ae.r*255,0,255))*65536+Math.round(_e(Ae.g*255,0,255))*256+Math.round(_e(Ae.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ce){Xt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Js);let n=Ss(Vn.h,Js.h,e),s=Ss(Vn.s,Js.s,e),r=Ss(Vn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Bt;Bt.NAMES=Gh;var Vf=0,gi=class extends Un{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=In(),this.name="",this.blending=Gi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ta,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new P,js=new mt,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}};var Er=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gf=0,Ke=new It,zo=new Ue,Oi=new P,We=new Oe,_s=new Oe,Me=new P,Be=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?wr:Er)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(We.min,_s.min),We.expandByPoint(Me),Me.addVectors(We.max,_s.max),We.expandByPoint(Me)):(We.expandByPoint(_s.min),We.expandByPoint(_s.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),Me.add(Oi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;let c=new P,h=new P,u=new P,d=new mt,f=new mt,g=new mt,_=new P,m=new P;function p(D,E,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(_),o[E].add(_),o[M].add(_),l[D].add(m),l[E].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,E=S.length;D<E;++D){let M=S[D],L=M.start,Y=M.count;for(let N=L,G=L+Y;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new P,x=new P,C=new P,R=new P;function I(D){C.fromBufferAttribute(s,D),R.copy(C);let E=o[D];v.copy(E),v.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(R,E);let L=x.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,L)}for(let D=0,E=S.length;D<E;++D){let M=S[D],L=M.start,Y=M.count;for(let N=L,G=L+Y;N<G;N+=3)I(t.getX(N+0)),I(t.getX(N+1)),I(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vc=new It,ri=new ji,Qs=new an,Gc=new P,tr=new P,er=new P,nr=new P,Ho=new P,ir=new P,Wc=new P,sr=new P,ae=class extends Ue{constructor(t=new Be,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ho.fromBufferAttribute(u,t),a?ir.addScaledVector(Ho,h):ir.addScaledVector(Ho.sub(e),h))}e.add(ir)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(Qs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Qs,Gc)===null||ri.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,C=v;x<C;x+=3){let R=o.getX(x),I=o.getX(x+1),D=o.getX(x+2);s=rr(this,p,t,n,c,h,u,R,I,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=rr(this,a,t,n,c,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,C=v;x<C;x+=3){let R=x,I=x+1,D=x+2;s=rr(this,p,t,n,c,h,u,R,I,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,v=m+1,x=m+2;s=rr(this,a,t,n,c,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wf(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);let h=Wf(i,t,e,n,tr,er,nr,Wc);if(h){let u=new P;ui.getBarycoord(Wc,tr,er,nr,u),s&&(h.uv=ui.getInterpolatedAttribute(s,o,l,c,u,new mt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,u,new mt)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};ui.getNormal(tr,er,nr,d.normal),h.face=d,h.barycoord=u}return h}var Ps=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(_,m,p,S,v,x,C,R,I,D,E){let M=x/I,L=C/D,Y=x/2,N=C/2,G=R/2,J=I+1,Z=D+1,nt=0,$=0,st=new P;for(let ht=0;ht<Z;ht++){let yt=ht*L-N;for(let Lt=0;Lt<J;Lt++){let qt=Lt*M-Y;st[_]=qt*S,st[m]=yt*v,st[p]=G,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=R>0?1:-1,h.push(st.x,st.y,st.z),u.push(Lt/I),u.push(1-ht/D),nt+=1}}for(let ht=0;ht<D;ht++)for(let yt=0;yt<I;yt++){let Lt=d+yt+J*ht,qt=d+yt+J*(ht+1),T=d+(yt+1)+J*(ht+1),k=d+(yt+1)+J*ht;l.push(Lt,qt,k),l.push(qt,T,k),$+=6}o.addGroup(f,$,E),f+=$,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=Qi(i[e]);for(let s in n)t[s]=n[s]}return t}function Xf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Jr={clone:Qi,merge:Pe},qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Tr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new P,Xc=new mt,qc=new mt,Ie=class extends Tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bi=-90,ki=1,Ga=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Bi,ki,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Bi,ki,t,e);r.layers=this.layers,this.add(r);let a=new Ie(Bi,ki,t,e);a.layers=this.layers,this.add(a);let o=new Ie(Bi,ki,t,e);o.layers=this.layers,this.add(o);let l=new Ie(Bi,ki,t,e);l.layers=this.layers,this.add(l);let c=new Ie(Bi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ar=class extends qe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wa=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ps(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Xn});r.uniforms.tEquirect.value=e;let a=new ae(s,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=dn),new Ga(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Vo=new P,Yf=new P,Zf=new Nt,nn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vo.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zf.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new an,or=new P,Is=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+S).normalize(),n[3].setComponents(l-a,d-h,m-g,x-S).normalize(),n[4].setComponents(l-o,d-u,m-_,x-v).normalize(),e===Pn)n[5].setComponents(l+o,d+u,m+_,x+v).normalize();else if(e===vr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rr=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let v=0;v<c;v++){let x=v*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let v=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),R=S+1+c*p;f.push(v,x,R),f.push(x,C,R)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,yg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Jf,alphahash_pars_fragment:jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:xp,color_vertex:yp,common:vp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Ep,emissivemap_fragment:wp,emissivemap_pars_fragment:Tp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Ip,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Dp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:kp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:$p,lights_physical_fragment:Yp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:xm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:wm,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:km,specularmap_fragment:zm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:$m,uv_vertex:Ym,worldpos_vertex:Zm,background_vert:Km,background_frag:Jm,backgroundCube_vert:jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:yg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},at={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Le={basic:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Pe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Pe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Pe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Pe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Pe([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Pe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Pe([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Pe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Pe([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Pe([at.common,at.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Pe([at.lights,at.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Le.physical={uniforms:Pe([Le.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var ar={r:0,b:0,g:0},ai=new pn,Pg=new It;function Ig(i,t,e,n,s,r,a){let o=new Bt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1,x=g(S);x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Yr)?(h===void 0&&(h=new ae(new Ps(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Qi(Le.backgroundCube.uniforms),vertexShader:Le.backgroundCube.vertexShader,fragmentShader:Le.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(v.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ai)),h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==jt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ae(new Rr(2,2),new ke({name:"BackgroundMaterial",uniforms:Qi(Le.background.uniforms),vertexShader:Le.background.vertexShader,fragmentShader:Le.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(ar,Wh(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m}}function Lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,L,Y,N,G){let J=!1,Z=u(N,Y,L);r!==Z&&(r=Z,c(r.object)),J=f(M,N,Y,G),J&&g(M,N,Y,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(M,L,Y,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,Y){let N=Y.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let J=G[L.id];J===void 0&&(J={},G[L.id]=J);let Z=J[N];return Z===void 0&&(Z=d(l()),J[N]=Z),Z}function d(M){let L=[],Y=[],N=[];for(let G=0;G<e;G++)L[G]=0,Y[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,L,Y,N){let G=r.attributes,J=L.attributes,Z=0,nt=Y.getAttributes();for(let $ in nt)if(nt[$].location>=0){let ht=G[$],yt=J[$];if(yt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function g(M,L,Y,N){let G={},J=L.attributes,Z=0,nt=Y.getAttributes();for(let $ in nt)if(nt[$].location>=0){let ht=J[$];ht===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));let yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),G[$]=yt,Z++}r.attributes=G,r.attributesNum=Z,r.index=N}function _(){let M=r.newAttributes;for(let L=0,Y=M.length;L<Y;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let Y=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;Y[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),G[M]!==L&&(i.vertexAttribDivisor(M,L),G[M]=L)}function S(){let M=r.newAttributes,L=r.enabledAttributes;for(let Y=0,N=L.length;Y<N;Y++)L[Y]!==M[Y]&&(i.disableVertexAttribArray(Y),L[Y]=0)}function v(M,L,Y,N,G,J,Z){Z===!0?i.vertexAttribIPointer(M,L,Y,G,J):i.vertexAttribPointer(M,L,Y,N,G,J)}function x(M,L,Y,N){_();let G=N.attributes,J=Y.getAttributes(),Z=L.defaultAttributeValues;for(let nt in J){let $=J[nt];if($.location>=0){let st=G[nt];if(st===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){let ht=st.normalized,yt=st.itemSize,Lt=t.get(st);if(Lt===void 0)continue;let qt=Lt.buffer,T=Lt.type,k=Lt.bytesPerElement,z=T===i.INT||T===i.UNSIGNED_INT||st.gpuType===Tl;if(st.isInterleavedBufferAttribute){let H=st.data,it=H.stride,lt=st.offset;if(H.isInstancedInterleavedBuffer){for(let wt=0;wt<$.locationSize;wt++)p($.location+wt,H.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let wt=0;wt<$.locationSize;wt++)m($.location+wt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let wt=0;wt<$.locationSize;wt++)v($.location+wt,yt/$.locationSize,T,ht,it*k,(lt+yt/$.locationSize*wt)*k,z)}else{if(st.isInstancedBufferAttribute){for(let H=0;H<$.locationSize;H++)p($.location+H,st.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let H=0;H<$.locationSize;H++)m($.location+H);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let H=0;H<$.locationSize;H++)v($.location+H,yt/$.locationSize,T,ht,yt*k,yt/$.locationSize*H*k,z)}}else if(Z!==void 0){let ht=Z[nt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv($.location,ht);break;case 3:i.vertexAttrib3fv($.location,ht);break;case 4:i.vertexAttrib4fv($.location,ht);break;default:i.vertexAttrib1fv($.location,ht)}}}}S()}function C(){D();for(let M in n){let L=n[M];for(let Y in L){let N=L[Y];for(let G in N)h(N[G].object),delete N[G];delete L[Y]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let Y in L){let N=L[Y];for(let G in N)h(N[G].object),delete N[G];delete L[Y]}delete n[M.id]}function I(M){for(let L in n){let Y=n[L];if(Y[M.id]===void 0)continue;let N=Y[M.id];for(let G in N)h(N[G].object),delete N[G];delete Y[M.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Dg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let D=I===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:R}}function Ng(i){let t=this,e=null,n=0,s=!1,r=!1,a=new nn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,v=S*4,x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let C=0;C!==v;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Fg(i){let t=new WeakMap;function e(a,o){return o===la?a.mapping=Yi:o===ca&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===la||o===ca)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Wa(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cr=class extends Tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vi=4,$c=[.125,.215,.35,.446,.526,.582],di=20,Go=new Cr,Yc=new Bt,Wo=null,Xo=0,qo=0,$o=!1,ci=(1+Math.sqrt(5))/2,zi=1/ci,Zc=[new P(-ci,zi,0),new P(ci,zi,0),new P(-zi,0,ci),new P(zi,0,ci),new P(0,ci,-zi),new P(0,ci,zi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=$o,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Fs,format:on,colorSpace:ns,depthBuffer:!1},s=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s){let o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yc),h.toneMapping=qn,h.autoClear=!1;let f=new mn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new ae(new Ps,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Yc),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;lr(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zc[(s-r-1)%Zc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ae(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);let p=[],S=0;for(let I=0;I<di;++I){let D=I/_,E=Math.exp(-D*D/2);p.push(E),I===0?S+=E:I<m&&(S+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[s],C=3*x*(s>v-Vi?s-v+Vi:0),R=4*(this._cubeSize-x);lr(e,C,R,3*x,2*x),l.setRenderTarget(e),l.render(u,Go)}};function Og(i){let t=[],e=[],n=[],s=i,r=i-Vi+1+$c.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Vi?l=$c[a-i+Vi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,D=R>2?0:-1,E=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];S.set(E,_*g*R),v.set(d,m*g*R);let M=[R,R,R,R,R,R];x.set(M,p*g*R)}let C=new Be;C.setAttribute("position",new fe(S,_)),C.setAttribute("uv",new fe(v,m)),C.setAttribute("faceIndex",new fe(x,p)),t.push(C),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bg(i,t,e){let n=new Float32Array(di),s=new P(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Jc(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function jc(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function kg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===la||l===ca,h=l===Yi||l===Zi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let v=0,x=S.length;v<x;v+=3){let C=S[v+0],R=S[v+1],I=S[v+2];d.push(C,R,R,I,I,C)}}else if(g!==void 0){let S=g.array;_=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){let C=v+0,R=v+1,I=v+2;d.push(C,R,R,I,I,C)}}else return;let m=new(Vh(d)?wr:Er)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){let n=new WeakMap,s=new Qt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*C*4*u),I=new Sr(R,x,C,u);I.type=fn,I.needsUpdate=!0;let D=v*4;for(let M=0;M<u;M++){let L=m[M],Y=p[M],N=S[M],G=x*C*4*M;for(let J=0;J<L.count;J++){let Z=J*D;f===!0&&(s.fromBufferAttribute(L,J),R[G+Z+0]=s.x,R[G+Z+1]=s.y,R[G+Z+2]=s.z,R[G+Z+3]=0),g===!0&&(s.fromBufferAttribute(Y,J),R[G+Z+4]=s.x,R[G+Z+5]=s.y,R[G+Z+6]=s.z,R[G+Z+7]=0),_===!0&&(s.fromBufferAttribute(N,J),R[G+Z+8]=s.x,R[G+Z+9]=s.y,R[G+Z+10]=s.z,R[G+Z+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new mt(x,C)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Xg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ir=class extends qe{constructor(t,e,n,s,r,a,o,l,c,h=Wi){if(h!==Wi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=mi),n===void 0&&h===Ji&&(n=Ki),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qh=new qe,Qc=new Ir(1,1),$h=new Sr,Yh=new Va,Zh=new Ar,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jr(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),ye(e,n)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),ye(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),ye(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function i0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=zh,r=Qc):r=qh,e.setTexture2D(t||r,s)}function l0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yh,s)}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zh,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function u0(i){switch(i){case 5126:return qg;case 35664:return $g;case 35665:return Yg;case 35666:return Zg;case 35674:return Kg;case 35675:return Jg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(i,t){i.uniform1fv(this.addr,t)}function f0(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function p0(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function m0(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function g0(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _0(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x0(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y0(i,t){i.uniform1iv(this.addr,t)}function v0(i,t){i.uniform2iv(this.addr,t)}function M0(i,t){i.uniform3iv(this.addr,t)}function b0(i,t){i.uniform4iv(this.addr,t)}function S0(i,t){i.uniform1uiv(this.addr,t)}function E0(i,t){i.uniform2uiv(this.addr,t)}function w0(i,t){i.uniform3uiv(this.addr,t)}function T0(i,t){i.uniform4uiv(this.addr,t)}function A0(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qh,r[a])}function R0(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yh,r[a])}function C0(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zh,r[a])}function P0(i,t,e){let n=this.cache,s=t.length,r=jr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$h,r[a])}function I0(i){switch(i){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return b0;case 5125:return S0;case 36294:return E0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}var Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u0(e.type)}},qa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}},$a=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function rh(i,t){i.seq.push(t),i.map[t.id]=t}function L0(i,t,e){let n=i.name,s=n.length;for(Yo.lastIndex=0;;){let r=Yo.exec(n),a=Yo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rh(e,c===void 0?new Xa(o,i,t):new qa(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new $a(o),rh(e,u)),e=u}}}var qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);L0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var D0=37297,U0=0;function N0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ah=new Nt;function F0(i){Xt._getMatrix(ah,Xt.workingColorSpace,i);let t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Zr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+N0(i.getShaderSource(t),a)}else return s}function O0(i,t){let e=F0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B0(i,t){let e;switch(t){case Yd:e="Linear";break;case Zd:e="Reinhard";break;case Kd:e="Cineon";break;case Jd:e="ACESFilmic";break;case Qd:e="AgX";break;case tf:e="Neutral";break;case jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cr=new P;function k0(){Xt.getLuminanceCoefficients(cr);let i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function H0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ms(i){return i!==""}function ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(G0,X0)}var W0=new Map;function X0(i,t){let e=Ot[t];if(e===void 0){let n=W0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(q0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Y0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Z0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case qd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function j0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Y0(e),c=Z0(e),h=K0(e),u=J0(e),d=j0(e),f=z0(e),g=H0(r),_=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==qn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,O0("linearToOutputTexel",e.outputColorSpace),k0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Ya(a),a=ch(a,e),a=hh(a,e),o=Ya(o),o=ch(o,e),o=hh(o,e),a=uh(a),o=uh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+a,x=S+p+o,C=oh(s,s.VERTEX_SHADER,v),R=oh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,C),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(L){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(R).trim(),J=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{let nt=lh(s,C,"vertex"),$=lh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+nt+`
`+$)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(N===""||G==="")&&(Z=!1);Z&&(L.diagnostics={runnable:J,programLog:Y,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(C),s.deleteShader(R),D=new qi(s,_),E=V0(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,D0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}var t_=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ka(t),e.set(t,n)),n}},Ka=class{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}};function e_(i,t,e,n,s,r,a){let o=new Cs,l=new Za,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,Y,N){let G=Y.fog,J=N.geometry,Z=E.isMeshStandardMaterial?Y.environment:null,nt=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),$=nt&&nt.mapping===Yr?nt.image.height:null,st=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=ht!==void 0?ht.length:0,Lt=0;J.morphAttributes.position!==void 0&&(Lt=1),J.morphAttributes.normal!==void 0&&(Lt=2),J.morphAttributes.color!==void 0&&(Lt=3);let qt,T,k,z;if(st){let Kt=Le[st];qt=Kt.vertexShader,T=Kt.fragmentShader}else qt=E.vertexShader,T=E.fragmentShader,l.update(E),k=l.getVertexShaderID(E),z=l.getFragmentShaderID(E);let H=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),lt=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,zt=!!E.map,kt=!!E.matcap,ee=!!nt,F=!!E.aoMap,Ye=!!E.lightMap,Ht=!!E.bumpMap,Vt=!!E.normalMap,At=!!E.displacementMap,se=!!E.emissiveMap,Tt=!!E.metalnessMap,A=!!E.roughnessMap,y=E.anisotropy>0,V=E.clearcoat>0,Q=E.dispersion>0,et=E.iridescence>0,j=E.sheen>0,St=E.transmission>0,ut=y&&!!E.anisotropyMap,gt=V&&!!E.clearcoatMap,Wt=V&&!!E.clearcoatNormalMap,rt=V&&!!E.clearcoatRoughnessMap,_t=et&&!!E.iridescenceMap,Rt=et&&!!E.iridescenceThicknessMap,Ct=j&&!!E.sheenColorMap,xt=j&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,Ft=!!E.specularColorMap,ne=!!E.specularIntensityMap,U=St&&!!E.transmissionMap,ct=St&&!!E.thicknessMap,K=!!E.gradientMap,tt=!!E.alphaMap,pt=E.alphaTest>0,dt=!!E.alphaHash,Dt=!!E.extensions,de=qn;E.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(de=i.toneMapping);let we={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:T,defines:E.defines,customVertexShaderID:k,customFragmentShaderID:z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:lt,instancingColor:lt&&N.instanceColor!==null,instancingMorph:lt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ns,alphaToCoverage:!!E.alphaToCoverage,map:zt,matcap:kt,envMap:ee,envMapMode:ee&&nt.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Ye,bumpMap:Ht,normalMap:Vt,displacementMap:d&&At,emissiveMap:se,normalMapObjectSpace:Vt&&E.normalMapType===rf,normalMapTangentSpace:Vt&&E.normalMapType===kh,metalnessMap:Tt,roughnessMap:A,anisotropy:y,anisotropyMap:ut,clearcoat:V,clearcoatMap:gt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:j,sheenColorMap:Ct,sheenRoughnessMap:xt,specularMap:Gt,specularColorMap:Ft,specularIntensityMap:ne,transmission:St,transmissionMap:U,thicknessMap:ct,gradientMap:K,opaque:E.transparent===!1&&E.blending===Gi&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:dt,combine:E.combine,mapUv:zt&&_(E.map.channel),aoMapUv:F&&_(E.aoMap.channel),lightMapUv:Ye&&_(E.lightMap.channel),bumpMapUv:Ht&&_(E.bumpMap.channel),normalMapUv:Vt&&_(E.normalMap.channel),displacementMapUv:At&&_(E.displacementMap.channel),emissiveMapUv:se&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:gt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(E.sheenRoughnessMap.channel),specularMapUv:Gt&&_(E.specularMap.channel),specularColorMapUv:Ft&&_(E.specularColorMap.channel),specularIntensityMapUv:ne&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:ct&&_(E.thicknessMap.channel),alphaMapUv:tt&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(zt||tt),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:it,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:zt&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===jt,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===Fe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let M=g[E.type],L;if(M){let Y=Le[M];L=Jr.clone(Y.uniforms)}else L=E.uniforms;return L}function C(E,M){let L;for(let Y=0,N=h.length;Y<N;Y++){let G=h[Y];if(G.cacheKey===M){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Q0(i,M,E,r),h.push(L)),L}function R(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:D}}function n_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function i_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||i_),n.length>1&&n.sort(d||fh),s.length>1&&s.sort(d||fh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function s_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ph,i.set(n,[a])):s>=r.length?(a=new ph,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function r_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var a_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function c_(i){let t=new r_,e=o_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new It,a=new It;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,v=0,x=0,C=0,R=0,I=0;c.sort(l_);for(let E=0,M=c.length;E<M;E++){let L=c[E],Y=L.color,N=L.intensity,G=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Y.r*N,u+=Y.g*N,d+=Y.b*N;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],N);I++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,$=e.get(L);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=Z,f++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(Y).multiplyScalar(N),Z.distance=G,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[_]=Z;let nt=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,nt.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=nt.matrix,L.castShadow){let $=e.get(L);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=J,x++}_++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(Y).multiplyScalar(N),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let nt=L.shadow,$=e.get(L);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(N),Z.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=Z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==v||D.numSpotShadows!==x||D.numSpotMaps!==C||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=v,D.numSpotShadows=x,D.numSpotMaps=C,D.numLightProbes=I,n.version=a_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function mh(i){let t=new c_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function h_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new mh(i),t.set(s,[o])):r>=a.length?(o=new mh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ja=class extends gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
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
}`;function f_(i,t,e){let n=new Is,s=new mt,r=new mt,a=new Qt,o=new Ja({depthPacking:sf}),l=new ja,c={},h=e.maxTextureSize,u={[$n]:Fe,[Fe]:$n,[sn]:sn},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:u_,fragmentShader:d_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let p=this.type;this.render=function(R,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Xn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let N=p!==Cn&&this.type===Cn,G=p===Cn&&this.type!==Cn;for(let J=0,Z=R.length;J<Z;J++){let nt=R[J],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let st=$.getFrameExtents();if(s.multiply(st),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,$.mapSize.y=r.y)),$.map===null||N===!0||G===!0){let yt=this.type!==Cn?{minFilter:Xe,magFilter:Xe}:{};$.map!==null&&$.map.dispose(),$.map=new Nn(s.x,s.y,yt),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ht=$.getViewportCount();for(let yt=0;yt<ht;yt++){let Lt=$.getViewport(yt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),Y.viewport(a),$.updateMatrices(nt,yt),n=$.getFrustum(),x(I,D,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===Cn&&S($,D),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,L)};function S(R,I){let D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,D,f,_,null)}function v(R,I,D,E){let M=null,L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let Y=M.uuid,N=I.uuid,G=c[Y];G===void 0&&(G={},c[Y]=G);let J=G[N];J===void 0&&(J=M.clone(),G[N]=J,I.addEventListener("dispose",C)),M=J}if(M.visible=I.visible,M.wireframe=I.wireframe,E===Cn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Y=i.properties.get(M);Y.light=D}return M}function x(R,I,D,E,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let N=t.update(R),G=R.material;if(Array.isArray(G)){let J=N.groups;for(let Z=0,nt=J.length;Z<nt;Z++){let $=J[Z],st=G[$.materialIndex];if(st&&st.visible){let ht=v(R,st,E,M);R.onBeforeShadow(i,R,I,D,N,ht,$),i.renderBufferDirect(D,null,N,ht,R,$),R.onAfterShadow(i,R,I,D,N,ht,$)}}}else if(G.visible){let J=v(R,G,E,M);R.onBeforeShadow(i,R,I,D,N,J,null),i.renderBufferDirect(D,null,N,J,R,null),R.onAfterShadow(i,R,I,D,N,J,null)}}let Y=R.children;for(let N=0,G=Y.length;N<G;N++)x(Y[N],I,D,E,M)}function C(R){R.target.removeEventListener("dispose",C);for(let D in c){let E=c[D],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var p_={[ea]:na,[ia]:oa,[sa]:aa,[$i]:ra,[na]:ea,[oa]:ia,[aa]:sa,[ra]:$i};function m_(i,t){function e(){let U=!1,ct=new Qt,K=null,tt=new Qt(0,0,0,0);return{setMask:function(pt){K!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),K=pt)},setLocked:function(pt){U=pt},setClear:function(pt,dt,Dt,de,we){we===!0&&(pt*=de,dt*=de,Dt*=de),ct.set(pt,dt,Dt,de),tt.equals(ct)===!1&&(i.clearColor(pt,dt,Dt,de),tt.copy(ct))},reset:function(){U=!1,K=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,K=null,tt=null,pt=null;return{setReversed:function(dt){if(ct!==dt){let Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let de=pt;pt=null,this.setClear(de)}ct=dt},getReversed:function(){return ct},setTest:function(dt){dt?H(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(dt){K!==dt&&!U&&(i.depthMask(dt),K=dt)},setFunc:function(dt){if(ct&&(dt=p_[dt]),tt!==dt){switch(dt){case ea:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=dt}},setLocked:function(dt){U=dt},setClear:function(dt){pt!==dt&&(ct&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){U=!1,K=null,tt=null,pt=null,ct=!1}}}function s(){let U=!1,ct=null,K=null,tt=null,pt=null,dt=null,Dt=null,de=null,we=null;return{setTest:function(Kt){U||(Kt?H(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(Kt){ct!==Kt&&!U&&(i.stencilMask(Kt),ct=Kt)},setFunc:function(Kt,Je,bn){(K!==Kt||tt!==Je||pt!==bn)&&(i.stencilFunc(Kt,Je,bn),K=Kt,tt=Je,pt=bn)},setOp:function(Kt,Je,bn){(dt!==Kt||Dt!==Je||de!==bn)&&(i.stencilOp(Kt,Je,bn),dt=Kt,Dt=Je,de=bn)},setLocked:function(Kt){U=Kt},setClear:function(Kt){we!==Kt&&(i.clearStencil(Kt),we=Kt)},reset:function(){U=!1,ct=null,K=null,tt=null,pt=null,dt=null,Dt=null,de=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,C=null,R=null,I=new Bt(0,0,0),D=0,E=!1,M=null,L=null,Y=null,N=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,nt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=nt>=2);let st=null,ht={},yt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),qt=new Qt().fromArray(yt),T=new Qt().fromArray(Lt);function k(U,ct,K,tt){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(U,dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<K;Dt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let z={};z[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(i.DEPTH_TEST),a.setFunc($i),Ht(!1),Vt(_c),H(i.CULL_FACE),F(Xn);function H(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function it(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function lt(U,ct){return u[U]!==ct?(i.bindFramebuffer(U,ct),u[U]=ct,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function wt(U,ct){let K=f,tt=!1;if(U){K=d.get(ct),K===void 0&&(K=[],d.set(ct,K));let pt=U.textures;if(K.length!==pt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Dt=pt.length;dt<Dt;dt++)K[dt]=i.COLOR_ATTACHMENT0+dt;K.length=pt.length,tt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,tt=!0);tt&&i.drawBuffers(K)}function zt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let kt={[hi]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};kt[Id]=i.MIN,kt[Ld]=i.MAX;let ee={[Dd]:i.ZERO,[Ud]:i.ONE,[Nd]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(U,ct,K,tt,pt,dt,Dt,de,we,Kt){if(U===Xn){_===!0&&(it(i.BLEND),_=!1);return}if(_===!1&&(H(i.BLEND),_=!0),U!==Rd){if(U!==m||Kt!==E){if((p!==hi||x!==hi)&&(i.blendEquation(i.FUNC_ADD),p=hi,x=hi),Kt)switch(U){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,v=null,C=null,R=null,I.set(0,0,0),D=0,m=U,E=Kt}return}pt=pt||ct,dt=dt||K,Dt=Dt||tt,(ct!==p||pt!==x)&&(i.blendEquationSeparate(kt[ct],kt[pt]),p=ct,x=pt),(K!==S||tt!==v||dt!==C||Dt!==R)&&(i.blendFuncSeparate(ee[K],ee[tt],ee[dt],ee[Dt]),S=K,v=tt,C=dt,R=Dt),(de.equals(I)===!1||we!==D)&&(i.blendColor(de.r,de.g,de.b,we),I.copy(de),D=we),m=U,E=!1}function Ye(U,ct){U.side===sn?it(i.CULL_FACE):H(i.CULL_FACE);let K=U.side===Fe;ct&&(K=!K),Ht(K),U.blending===Gi&&U.transparent===!1?F(Xn):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let tt=U.stencilWrite;o.setTest(tt),tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Vt(U){U!==wd?(H(i.CULL_FACE),U!==L&&(U===_c?i.cullFace(i.BACK):U===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),L=U}function At(U){U!==Y&&(Z&&i.lineWidth(U),Y=U)}function se(U,ct,K){U?(H(i.POLYGON_OFFSET_FILL),(N!==ct||G!==K)&&(i.polygonOffset(ct,K),N=ct,G=K)):it(i.POLYGON_OFFSET_FILL)}function Tt(U){U?H(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+J-1),st!==U&&(i.activeTexture(U),st=U)}function y(U,ct,K){K===void 0&&(st===null?K=i.TEXTURE0+J-1:K=st);let tt=ht[K];tt===void 0&&(tt={type:void 0,texture:void 0},ht[K]=tt),(tt.type!==U||tt.texture!==ct)&&(st!==K&&(i.activeTexture(K),st=K),i.bindTexture(U,ct||z[U]),tt.type=U,tt.texture=ct)}function V(){let U=ht[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(U){qt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),qt.copy(U))}function xt(U){T.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),T.copy(U))}function Gt(U,ct){let K=c.get(ct);K===void 0&&(K=new WeakMap,c.set(ct,K));let tt=K.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(ct,U.name),K.set(U,tt))}function Ft(U,ct){let tt=c.get(ct).get(U);l.get(ct)!==tt&&(i.uniformBlockBinding(ct,tt,U.__bindingPointIndex),l.set(ct,tt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,C=null,R=null,I=new Bt(0,0,0),D=0,E=!1,M=null,L=null,Y=null,N=null,G=null,qt.set(0,0,i.canvas.width,i.canvas.height),T.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:it,bindFramebuffer:lt,drawBuffers:wt,useProgram:zt,setBlending:F,setMaterial:Ye,setFlipSided:Ht,setCullFace:Vt,setLineWidth:At,setPolygonOffset:se,setScissorTest:Tt,activeTexture:A,bindTexture:y,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:_t,texImage3D:Rt,updateUBOMapping:Gt,uniformBlockBinding:Ft,texStorage2D:Wt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Ct,viewport:xt,reset:ne}}function gh(i,t,e,n){let s=g_(n);switch(e){case Dh:return i*t;case Nh:return i*t;case Fh:return i*t*2;case Cl:return i*t/s.components*s.byteLength;case Pl:return i*t/s.components*s.byteLength;case Oh:return i*t*2/s.components*s.byteLength;case Il:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Ll:return i*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(t,8)/4;case da:case pa:return Math.max(i,8)*Math.max(t,8)/2;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xr:case Da:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bh:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g_(i){switch(i){case Dn:case Ph:return{byteLength:1,components:1};case As:case Ih:case Fs:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case mi:case Tl:case fn:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function __(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):Mr("canvas")}function _(A,y,V){let Q=1,et=Tt(A);if((et.width>V||et.height>V)&&(Q=V/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let j=Math.floor(Q*et.width),St=Math.floor(Q*et.height);u===void 0&&(u=g(j,St));let ut=y?g(j,St):u;return ut.width=j,ut.height=St,ut.getContext("2d").drawImage(A,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+St+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,y,V,Q,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),y===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){let St=et?Zr:Xt.getTransfer(Q);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=St===jt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(A,y){let V;return A?y===null||y===mi||y===Ki?V=i.DEPTH24_STENCIL8:y===fn?V=i.DEPTH32F_STENCIL8:y===As&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===Ki?V=i.DEPTH_COMPONENT24:y===fn?V=i.DEPTH_COMPONENT32F:y===As&&(V=i.DEPTH_COMPONENT16),V}function C(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){let y=A.target;y.removeEventListener("dispose",R),D(y),y.isVideoTexture&&h.delete(y)}function I(A){let y=A.target;y.removeEventListener("dispose",I),M(y)}function D(A){let y=n.get(A);if(y.__webglInit===void 0)return;let V=A.source,Q=d.get(V);if(Q){let et=Q[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(A),Object.keys(Q).length===0&&d.delete(V)}n.remove(A)}function E(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let V=A.source,Q=d.get(V);delete Q[y.__cacheKey],a.memory.textures--}function M(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let et=0;et<y.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=A.textures;for(let Q=0,et=V.length;Q<et;Q++){let j=n.get(V[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[Q])}n.remove(A)}let L=0;function Y(){L=0}function N(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function G(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function J(A,y){let V=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T(V,A,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function Z(A,y){let V=n.get(A);if(A.version>0&&V.__version!==A.version){T(V,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function nt(A,y){let V=n.get(A);if(A.version>0&&V.__version!==A.version){T(V,A,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function $(A,y){let V=n.get(A);if(A.version>0&&V.__version!==A.version){k(V,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let st={[ha]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},ht={[Xe]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},yt={[of]:i.NEVER,[df]:i.ALWAYS,[af]:i.LESS,[zh]:i.LEQUAL,[lf]:i.EQUAL,[uf]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function Lt(A,y){if(y.type===fn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===Mo||y.magFilter===Gs||y.magFilter===pi||y.minFilter===dn||y.minFilter===Mo||y.minFilter===Gs||y.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,st[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,st[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,st[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xe||y.minFilter!==Gs&&y.minFilter!==pi||y.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qt(A,y){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));let Q=y.source,et=d.get(Q);et===void 0&&(et={},d.set(Q,et));let j=G(y);if(j!==A.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[j].usedTimes++;let St=et[A.__cacheKey];St!==void 0&&(et[A.__cacheKey].usedTimes--,St.usedTimes===0&&E(y)),A.__cacheKey=j,A.__webglTexture=et[j].texture}return V}function T(A,y,V){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let et=qt(A,y),j=y.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+V);let St=n.get(j);if(j.version!==St.__version||et===!0){e.activeTexture(i.TEXTURE0+V);let ut=Xt.getPrimaries(Xt.workingColorSpace),gt=y.colorSpace===Wn?null:Xt.getPrimaries(y.colorSpace),Wt=y.colorSpace===Wn||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let rt=_(y.image,!1,s.maxTextureSize);rt=se(y,rt);let _t=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),Ct=v(y.internalFormat,_t,Rt,y.colorSpace,y.isVideoTexture);Lt(Q,y);let xt,Gt=y.mipmaps,Ft=y.isVideoTexture!==!0,ne=St.__version===void 0||et===!0,U=j.dataReady,ct=C(y,rt);if(y.isDepthTexture)Ct=x(y.format===Ji,y.type),ne&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,_t,Rt,null));else if(y.isDataTexture)if(Gt.length>0){Ft&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,Ct,Gt[0].width,Gt[0].height);for(let K=0,tt=Gt.length;K<tt;K++)xt=Gt[K],Ft?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,K,Ct,xt.width,xt.height,0,_t,Rt,xt.data);y.generateMipmaps=!1}else Ft?(ne&&e.texStorage2D(i.TEXTURE_2D,ct,Ct,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Rt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,_t,Rt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ct,Gt[0].width,Gt[0].height,rt.depth);for(let K=0,tt=Gt.length;K<tt;K++)if(xt=Gt[K],y.format!==on)if(_t!==null)if(Ft){if(U)if(y.layerUpdates.size>0){let pt=gh(xt.width,xt.height,y.format,y.type);for(let dt of y.layerUpdates){let Dt=xt.data.subarray(dt*pt/xt.data.BYTES_PER_ELEMENT,(dt+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,dt,xt.width,xt.height,1,_t,Dt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,rt.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ct,xt.width,xt.height,rt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,rt.depth,_t,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ct,xt.width,xt.height,rt.depth,0,_t,Rt,xt.data)}else{Ft&&ne&&e.texStorage2D(i.TEXTURE_2D,ct,Ct,Gt[0].width,Gt[0].height);for(let K=0,tt=Gt.length;K<tt;K++)xt=Gt[K],y.format!==on?_t!==null?Ft?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ct,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,_t,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,K,Ct,xt.width,xt.height,0,_t,Rt,xt.data)}else if(y.isDataArrayTexture)if(Ft){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ct,rt.width,rt.height,rt.depth),U)if(y.layerUpdates.size>0){let K=gh(rt.width,rt.height,y.format,y.type);for(let tt of y.layerUpdates){let pt=rt.data.subarray(tt*K/rt.data.BYTES_PER_ELEMENT,(tt+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,_t,Rt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Rt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,_t,Rt,rt.data);else if(y.isData3DTexture)Ft?(ne&&e.texStorage3D(i.TEXTURE_3D,ct,Ct,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Rt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,_t,Rt,rt.data);else if(y.isFramebufferTexture){if(ne)if(Ft)e.texStorage2D(i.TEXTURE_2D,ct,Ct,rt.width,rt.height);else{let K=rt.width,tt=rt.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ct,K,tt,0,_t,Rt,null),K>>=1,tt>>=1}}else if(Gt.length>0){if(Ft&&ne){let K=Tt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Ct,K.width,K.height)}for(let K=0,tt=Gt.length;K<tt;K++)xt=Gt[K],Ft?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,_t,Rt,xt):e.texImage2D(i.TEXTURE_2D,K,Ct,_t,Rt,xt);y.generateMipmaps=!1}else if(Ft){if(ne){let K=Tt(rt);e.texStorage2D(i.TEXTURE_2D,ct,Ct,K.width,K.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Rt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,_t,Rt,rt);m(y)&&p(Q),St.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function k(A,y,V){if(y.image.length!==6)return;let Q=qt(A,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let j=n.get(et);if(et.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);let St=Xt.getPrimaries(Xt.workingColorSpace),ut=y.colorSpace===Wn?null:Xt.getPrimaries(y.colorSpace),gt=y.colorSpace===Wn||St===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Wt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!Wt&&!rt?_t[tt]=_(y.image[tt],!0,s.maxCubemapSize):_t[tt]=rt?y.image[tt].image:y.image[tt],_t[tt]=se(y,_t[tt]);let Rt=_t[0],Ct=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Gt=v(y.internalFormat,Ct,xt,y.colorSpace),Ft=y.isVideoTexture!==!0,ne=j.__version===void 0||Q===!0,U=et.dataReady,ct=C(y,Rt);Lt(i.TEXTURE_CUBE_MAP,y);let K;if(Wt){Ft&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Gt,Rt.width,Rt.height);for(let tt=0;tt<6;tt++){K=_t[tt].mipmaps;for(let pt=0;pt<K.length;pt++){let dt=K[pt];y.format!==on?Ct!==null?Ft?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,dt.width,dt.height,Ct,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,dt.width,dt.height,Ct,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Gt,dt.width,dt.height,0,Ct,xt,dt.data)}}}else{if(K=y.mipmaps,Ft&&ne){K.length>0&&ct++;let tt=Tt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Gt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Ct,xt,_t[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,_t[tt].width,_t[tt].height,0,Ct,xt,_t[tt].data);for(let pt=0;pt<K.length;pt++){let Dt=K[pt].image[tt].image;Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Dt.width,Dt.height,Ct,xt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Gt,Dt.width,Dt.height,0,Ct,xt,Dt.data)}}else{Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct,xt,_t[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,Ct,xt,_t[tt]);for(let pt=0;pt<K.length;pt++){let dt=K[pt];Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Ct,xt,dt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Gt,Ct,xt,dt.image[tt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=et.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function z(A,y,V,Q,et,j){let St=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),gt=v(V.internalFormat,St,ut,V.colorSpace),Wt=n.get(y),rt=n.get(V);if(rt.__renderTarget=y,!Wt.__hasExternalTextures){let _t=Math.max(1,y.width>>j),Rt=Math.max(1,y.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,gt,_t,Rt,y.depth,0,St,ut,null):e.texImage2D(et,j,gt,_t,Rt,0,St,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,rt.__webglTexture,0,Ht(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,rt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(A,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let Q=y.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,j=x(y.stencilBuffer,et),St=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ht(y);Vt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,j,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,A)}else{let Q=y.textures;for(let et=0;et<Q.length;et++){let j=Q[et],St=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),gt=v(j.internalFormat,St,ut,j.colorSpace),Wt=Ht(y);V&&Vt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,gt,y.width,y.height):Vt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,gt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,gt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);let et=Q.__webglTexture,j=Ht(y);if(y.depthTexture.format===Wi)Vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Ji)Vt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function lt(A){let y=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");it(y.__webglFramebuffer,A)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),H(y.__webglDepthbuffer[Q],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),H(y.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,y,V){let Q=n.get(A);y!==void 0&&z(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&lt(A)}function zt(A){let y=A.texture,V=n.get(A),Q=n.get(y);A.addEventListener("dispose",I);let et=A.textures,j=A.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let gt=0;gt<y.mipmaps.length;gt++)V.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else V.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)V.__webglFramebuffer[ut]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(St)for(let ut=0,gt=et.length;ut<gt;ut++){let Wt=n.get(et[ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Vt(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){let gt=et[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);let Wt=r.convert(gt.format,gt.colorSpace),rt=r.convert(gt.type),_t=v(gt.internalFormat,Wt,rt,gt.colorSpace,A.isXRRenderTarget===!0),Rt=Ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,_t,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),H(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)z(V.__webglFramebuffer[ut][gt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else z(V.__webglFramebuffer[ut],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ut=0,gt=et.length;ut<gt;ut++){let Wt=et[ut],rt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Lt(i.TEXTURE_2D,Wt),z(V.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),Lt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)z(V.__webglFramebuffer[gt],A,y,i.COLOR_ATTACHMENT0,ut,gt);else z(V.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ut,0);m(y)&&p(ut),e.unbindTexture()}A.depthBuffer&&lt(A)}function kt(A){let y=A.textures;for(let V=0,Q=y.length;V<Q;V++){let et=y[V];if(m(et)){let j=S(A),St=n.get(et).__webglTexture;e.bindTexture(j,St),p(j),e.unbindTexture()}}}let ee=[],F=[];function Ye(A){if(A.samples>0){if(Vt(A)===!1){let y=A.textures,V=A.width,Q=A.height,et=i.COLOR_BUFFER_BIT,j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(A),ut=y.length>1;if(ut)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);let Wt=n.get(y[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,et,i.NEAREST),l===!0&&(ee.length=0,F.length=0,ee.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ee.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);let Wt=n.get(y[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ht(A){return Math.min(s.maxSamples,A.samples)}function Vt(A){let y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function se(A,y){let V=A.colorSpace,Q=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==ns&&V!==Wn&&(Xt.getTransfer(V)===jt?(Q!==on||et!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=$,this.rebindTextures=wt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Vt}function x_(i,t){function e(n,s=Wn){let r,a=Xt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===on)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Fh)return i.LUMINANCE_ALPHA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Oh)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===_a)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===va||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===Na||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qa=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},y_={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:v_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},el=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=new tl,m=e.getContextAttributes(),p=null,S=null,v=[],x=[],C=new mt,R=null,I=new Ie;I.viewport=new Qt;let D=new Ie;D.viewport=new Qt;let E=[I,D],M=new Qa,L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let k=v[T];return k===void 0&&(k=new Es,v[T]=k),k.getTargetRaySpace()},this.getControllerGrip=function(T){let k=v[T];return k===void 0&&(k=new Es,v[T]=k),k.getGripSpace()},this.getHand=function(T){let k=v[T];return k===void 0&&(k=new Es,v[T]=k),k.getHandSpace()};function N(T){let k=x.indexOf(T.inputSource);if(k===-1)return;let z=v[k];z!==void 0&&(z.update(T.inputSource,T.frame,c||a),z.dispatchEvent({type:T.type,data:T.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let T=0;T<v.length;T++){let k=x[T];k!==null&&(x[T]=null,v[T].disconnect(k))}L=null,Y=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(T){c=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Nn(f.framebufferWidth,f.framebufferHeight,{format:on,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,z=null,H=null;m.depth&&(H=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?Ji:Wi,z=m.stencil?Ki:mi);let it={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Nn(d.textureWidth,d.textureHeight,{format:on,type:Dn,depthTexture:new Ir(d.textureWidth,d.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(T){for(let k=0;k<T.removed.length;k++){let z=T.removed[k],H=x.indexOf(z);H>=0&&(x[H]=null,v[H].disconnect(z))}for(let k=0;k<T.added.length;k++){let z=T.added[k],H=x.indexOf(z);if(H===-1){for(let lt=0;lt<v.length;lt++)if(lt>=x.length){x.push(z),H=lt;break}else if(x[lt]===null){x[lt]=z,H=lt;break}if(H===-1)break}let it=v[H];it&&it.connect(z)}}let Z=new P,nt=new P;function $(T,k,z){Z.setFromMatrixPosition(k.matrixWorld),nt.setFromMatrixPosition(z.matrixWorld);let H=Z.distanceTo(nt),it=k.projectionMatrix.elements,lt=z.projectionMatrix.elements,wt=it[14]/(it[10]-1),zt=it[14]/(it[10]+1),kt=(it[9]+1)/it[5],ee=(it[9]-1)/it[5],F=(it[8]-1)/it[0],Ye=(lt[8]+1)/lt[0],Ht=wt*F,Vt=wt*Ye,At=H/(-F+Ye),se=At*-F;if(k.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(se),T.translateZ(At),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),it[10]===-1)T.projectionMatrix.copy(k.projectionMatrix),T.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let Tt=wt+At,A=zt+At,y=Ht-se,V=Vt+(H-se),Q=kt*zt/A*Tt,et=ee*zt/A*Tt;T.projectionMatrix.makePerspective(y,V,Q,et,Tt,A),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function st(T,k){k===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(k.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;let k=T.near,z=T.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(z=_.depthFar)),M.near=D.near=I.near=k,M.far=D.far=I.far=z,(L!==M.near||Y!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,Y=M.far),I.layers.mask=T.layers.mask|2,D.layers.mask=T.layers.mask|4,M.layers.mask=I.layers.mask|D.layers.mask;let H=T.parent,it=M.cameras;st(M,H);for(let lt=0;lt<it.length;lt++)st(it[lt],H);it.length===2?$(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),ht(T,M,H)};function ht(T,k,z){z===null?T.matrix.copy(k.matrixWorld):(T.matrix.copy(z.matrixWorld),T.matrix.invert(),T.matrix.multiply(k.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(k.projectionMatrix),T.projectionMatrixInverse.copy(k.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Rs*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(T){l=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function Lt(T,k){if(h=k.getViewerPose(c||a),g=k,h!==null){let z=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let H=!1;z.length!==M.cameras.length&&(M.cameras.length=0,H=!0);for(let lt=0;lt<z.length;lt++){let wt=z[lt],zt=null;if(f!==null)zt=f.getViewport(wt);else{let ee=u.getViewSubImage(d,wt);zt=ee.viewport,lt===0&&(t.setRenderTargetTextures(S,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(S))}let kt=E[lt];kt===void 0&&(kt=new Ie,kt.layers.enable(lt),kt.viewport=new Qt,E[lt]=kt),kt.matrix.fromArray(wt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(wt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(zt.x,zt.y,zt.width,zt.height),lt===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),H===!0&&M.cameras.push(kt)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){let lt=u.getDepthInformation(z[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,s.renderState)}}for(let z=0;z<v.length;z++){let H=x[z],it=v[z];H!==null&&it!==void 0&&it.update(H,k,c||a)}yt&&yt(T,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let qt=new Xh;qt.setAnimationLoop(Lt),this.setAnimationLoop=function(T){yt=T},this.dispose=function(){}}},li=new pn,b_=new It;function S_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,li.copy(x),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(li)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let x=v.program;n.uniformBlockBinding(S,x)}function c(S,v){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(S,C);let R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){let v=u();S.__bindingPointIndex=v;let x=i.createBuffer(),C=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=s[S.id],x=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,I=x.length;R<I;R++){let D=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,M=D.length;E<M;E++){let L=D[E];if(f(L,R,E,C)===!0){let Y=L.__offset,N=Array.isArray(L.value)?L.value:[L.value],G=0;for(let J=0;J<N.length;J++){let Z=N[J],nt=_(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+G,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,G),G+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,v,x,C){let R=S.value,I=v+"_"+x;if(C[I]===void 0)return typeof R=="number"||typeof R=="boolean"?C[I]=R:C[I]=R.clone(),!0;{let D=C[I];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[I]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(S){let v=S.uniforms,x=0,C=16;for(let I=0,D=v.length;I<D;I++){let E=Array.isArray(v[I])?v[I]:[v[I]];for(let M=0,L=E.length;M<L;M++){let Y=E[M],N=Array.isArray(Y.value)?Y.value:[Y.value];for(let G=0,J=N.length;G<J;G++){let Z=N[G],nt=_(Z),$=x%C,st=$%nt.boundary,ht=$+st;x+=st,ht!==0&&C-ht<nt.storage&&(x+=C-ht),Y.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=nt.storage}}}let R=x%C;return R>0&&(x+=C-R),S.__size=x,S.__cache={},this}function _(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Lr=class{constructor(t={}){let{canvas:e=Cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this.toneMapping=qn,this.toneMappingExposure=1;let x=this,C=!1,R=0,I=0,D=null,E=-1,M=null,L=new Qt,Y=new Qt,N=null,G=new Bt(0),J=0,Z=e.width,nt=e.height,$=1,st=null,ht=null,yt=new Qt(0,0,Z,nt),Lt=new Qt(0,0,Z,nt),qt=!1,T=new Is,k=!1,z=!1,H=new It,it=new It,lt=new P,wt=new Qt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ee(){return D===null?$:1}let F=n;function Ye(b,O){return e.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){let O="webgl2";if(F=Ye(O,b),F===null)throw Ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ht,Vt,At,se,Tt,A,y,V,Q,et,j,St,ut,gt,Wt,rt,_t,Rt,Ct,xt,Gt,Ft,ne,U;function ct(){Ht=new zg(F),Ht.init(),Ft=new x_(F,Ht),Vt=new Ug(F,Ht,t,Ft),At=new m_(F,Ht),Vt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),se=new Gg(F),Tt=new n_,A=new __(F,Ht,At,Tt,Vt,Ft,se),y=new Fg(x),V=new kg(x),Q=new Kf(F),ne=new Lg(F,Q),et=new Hg(F,Q,se,ne),j=new Xg(F,et,Q,se),Ct=new Wg(F,Vt,A),rt=new Ng(Tt),St=new e_(x,y,V,Ht,Vt,ne,rt),ut=new S_(x,Tt),gt=new s_,Wt=new h_(Ht),Rt=new Ig(x,y,V,At,j,f,l),_t=new f_(x,j,Vt),U=new E_(F,se,Vt,At),xt=new Dg(F,Ht,se),Gt=new Vg(F,Ht,se),se.programs=St.programs,x.capabilities=Vt,x.extensions=Ht,x.properties=Tt,x.renderLists=gt,x.shadowMap=_t,x.state=At,x.info=se}ct();let K=new el(x,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(Z,nt,!1))},this.getSize=function(b){return b.set(Z,nt)},this.setSize=function(b,O,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,nt=O,e.width=Math.floor(b*$),e.height=Math.floor(O*$),W===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Z*$,nt*$).floor()},this.setDrawingBufferSize=function(b,O,W){Z=b,nt=O,$=W,e.width=Math.floor(b*W),e.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(yt)},this.setViewport=function(b,O,W,X){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,O,W,X),At.viewport(L.copy(yt).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,O,W,X){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,O,W,X),At.scissor(Y.copy(Lt).multiplyScalar($).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){At.setScissorTest(qt=b)},this.setOpaqueSort=function(b){st=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(b=!0,O=!0,W=!0){let X=0;if(b){let B=!1;if(D!==null){let ot=D.texture.format;B=ot===Ll||ot===Il||ot===Pl}if(B){let ot=D.texture.type,ft=ot===Dn||ot===mi||ot===As||ot===Ki||ot===Al||ot===Rl,vt=Rt.getClearColor(),Mt=Rt.getClearAlpha(),Pt=vt.r,Ut=vt.g,bt=vt.b;ft?(g[0]=Pt,g[1]=Ut,g[2]=bt,g[3]=Mt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Pt,_[1]=Ut,_[2]=bt,_[3]=Mt,F.clearBufferiv(F.COLOR,0,_))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Wt.dispose(),Tt.dispose(),y.dispose(),V.dispose(),j.dispose(),ne.dispose(),U.dispose(),St.dispose(),K.dispose(),K.removeEventListener("sessionstart",cc),K.removeEventListener("sessionend",hc),ni.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=se.autoReset,O=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,B=_t.type;ct(),se.autoReset=b,_t.enabled=O,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=B}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dt(b){let O=b.target;O.removeEventListener("dispose",Dt),de(O)}function de(b){we(b),Tt.remove(b)}function we(b){let O=Tt.get(b).programs;O!==void 0&&(O.forEach(function(W){St.releaseProgram(W)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,X,B,ot){O===null&&(O=zt);let ft=B.isMesh&&B.matrixWorld.determinant()<0,vt=bd(b,O,W,X,B);At.setMaterial(X,ft);let Mt=W.index,Pt=1;if(X.wireframe===!0){if(Mt=et.getWireframeAttribute(W),Mt===void 0)return;Pt=2}let Ut=W.drawRange,bt=W.attributes.position,$t=Ut.start*Pt,ie=(Ut.start+Ut.count)*Pt;ot!==null&&($t=Math.max($t,ot.start*Pt),ie=Math.min(ie,(ot.start+ot.count)*Pt)),Mt!==null?($t=Math.max($t,0),ie=Math.min(ie,Mt.count)):bt!=null&&($t=Math.max($t,0),ie=Math.min(ie,bt.count));let re=ie-$t;if(re<0||re===1/0)return;ne.setup(B,X,vt,W,Mt);let Ne,Yt=xt;if(Mt!==null&&(Ne=Q.get(Mt),Yt=Gt,Yt.setIndex(Ne)),B.isMesh)X.wireframe===!0?(At.setLineWidth(X.wireframeLinewidth*ee()),Yt.setMode(F.LINES)):Yt.setMode(F.TRIANGLES);else if(B.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),At.setLineWidth(Et*ee()),B.isLineSegments?Yt.setMode(F.LINES):B.isLineLoop?Yt.setMode(F.LINE_LOOP):Yt.setMode(F.LINE_STRIP)}else B.isPoints?Yt.setMode(F.POINTS):B.isSprite&&Yt.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Et=B._multiDrawStarts,Sn=B._multiDrawCounts,Zt=B._multiDrawCount,je=Mt?Q.get(Mt).bytesPerElement:1,Ti=Tt.get(X).currentProgram.getUniforms();for(let Ve=0;Ve<Zt;Ve++)Ti.setValue(F,"_gl_DrawID",Ve),Yt.render(Et[Ve]/je,Sn[Ve])}else if(B.isInstancedMesh)Yt.renderInstances($t,re,B.count);else if(W.isInstancedBufferGeometry){let Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Sn=Math.min(W.instanceCount,Et);Yt.renderInstances($t,re,Sn)}else Yt.render($t,re)};function Kt(b,O,W){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Vs(b,O,W),b.side=$n,b.needsUpdate=!0,Vs(b,O,W),b.side=sn):Vs(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),p=Wt.get(W),p.init(O),v.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let X=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ot=B.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){let vt=ot[ft];Kt(vt,W,B),X.add(vt)}else Kt(ot,W,B),X.add(ot)}),v.pop(),p=null,X},this.compileAsync=function(b,O,W=null){let X=this.compile(b,O,W);return new Promise(B=>{function ot(){if(X.forEach(function(ft){Tt.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){B(b);return}setTimeout(ot,10)}Ht.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Je=null;function bn(b){Je&&Je(b)}function cc(){ni.stop()}function hc(){ni.start()}let ni=new Xh;ni.setAnimationLoop(bn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(b){Je=b,K.setAnimationLoop(b),b===null?ni.stop():ni.start()},K.addEventListener("sessionstart",cc),K.addEventListener("sessionend",hc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,D),p=Wt.get(b,v.length),p.init(O),v.push(p),it.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),T.setFromProjectionMatrix(it),z=this.localClippingEnabled,k=rt.init(this.clippingPlanes,z),m=gt.get(b,S.length),m.init(),S.push(m),K.enabled===!0&&K.isPresenting===!0){let ot=x.xr.getDepthSensingMesh();ot!==null&&vo(ot,O,-1/0,x.sortObjects)}vo(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ht),kt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,kt&&Rt.addToRenderList(m,b),this.info.render.frame++,k===!0&&rt.beginShadows();let W=p.state.shadowsArray;_t.render(W,b,O),k===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ot=O.cameras;if(B.length>0)for(let ft=0,vt=ot.length;ft<vt;ft++){let Mt=ot[ft];dc(X,B,b,Mt)}kt&&Rt.render(b);for(let ft=0,vt=ot.length;ft<vt;ft++){let Mt=ot[ft];uc(m,b,Mt,Mt.viewport)}}else B.length>0&&dc(X,B,b,O),kt&&Rt.render(b),uc(m,b,O);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,O),ne.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function vo(b,O,W,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||T.intersectsSprite(b)){X&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(it);let ft=j.update(b),vt=b.material;vt.visible&&m.push(b,ft,vt,W,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||T.intersectsObject(b))){let ft=j.update(b),vt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),wt.copy(ft.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(it)),Array.isArray(vt)){let Mt=ft.groups;for(let Pt=0,Ut=Mt.length;Pt<Ut;Pt++){let bt=Mt[Pt],$t=vt[bt.materialIndex];$t&&$t.visible&&m.push(b,ft,$t,W,wt.z,bt)}}else vt.visible&&m.push(b,ft,vt,W,wt.z,null)}}let ot=b.children;for(let ft=0,vt=ot.length;ft<vt;ft++)vo(ot[ft],O,W,X)}function uc(b,O,W,X){let B=b.opaque,ot=b.transmissive,ft=b.transparent;p.setupLightsView(W),k===!0&&rt.setGlobalState(x.clippingPlanes,W),X&&At.viewport(L.copy(X)),B.length>0&&Hs(B,O,W),ot.length>0&&Hs(ot,O,W),ft.length>0&&Hs(ft,O,W),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function dc(b,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Nn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Fs:Dn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[X.id],ft=X.viewport||L;ot.setSize(ft.z,ft.w);let vt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),kt&&Rt.render(W);let Mt=x.toneMapping;x.toneMapping=qn;let Pt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),k===!0&&rt.setGlobalState(x.clippingPlanes,X),Hs(b,W,X),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let bt=0,$t=O.length;bt<$t;bt++){let ie=O[bt],re=ie.object,Ne=ie.geometry,Yt=ie.material,Et=ie.group;if(Yt.side===sn&&re.layers.test(X.layers)){let Sn=Yt.side;Yt.side=Fe,Yt.needsUpdate=!0,fc(re,W,X,Ne,Yt,Et),Yt.side=Sn,Yt.needsUpdate=!0,Ut=!0}}Ut===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}x.setRenderTarget(vt),x.setClearColor(G,J),Pt!==void 0&&(X.viewport=Pt),x.toneMapping=Mt}function Hs(b,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ot=b.length;B<ot;B++){let ft=b[B],vt=ft.object,Mt=ft.geometry,Pt=X===null?ft.material:X,Ut=ft.group;vt.layers.test(W.layers)&&fc(vt,O,W,Mt,Pt,Ut)}}function fc(b,O,W,X,B,ot){b.onBeforeRender(x,O,W,X,B,ot),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,O,W,X,b,ot),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,b,ot),B.side=$n,B.needsUpdate=!0,x.renderBufferDirect(W,O,X,B,b,ot),B.side=sn):x.renderBufferDirect(W,O,X,B,b,ot),b.onAfterRender(x,O,W,X,B,ot)}function Vs(b,O,W){O.isScene!==!0&&(O=zt);let X=Tt.get(b),B=p.state.lights,ot=p.state.shadowsArray,ft=B.state.version,vt=St.getParameters(b,B.state,ot,O,W),Mt=St.getProgramCacheKey(vt),Pt=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?V:y).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",Dt),Pt=new Map,X.programs=Pt);let Ut=Pt.get(Mt);if(Ut!==void 0){if(X.currentProgram===Ut&&X.lightsStateVersion===ft)return mc(b,vt),Ut}else vt.uniforms=St.getUniforms(b),b.onBeforeCompile(vt,x),Ut=St.acquireProgram(vt,Mt),Pt.set(Mt,Ut),X.uniforms=vt.uniforms;let bt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=rt.uniform),mc(b,vt),X.needsLights=Ed(b),X.lightsStateVersion=ft,X.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ut,X.uniformsList=null,Ut}function pc(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=qi.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function mc(b,O){let W=Tt.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function bd(b,O,W,X,B){O.isScene!==!0&&(O=zt),A.resetTextureUnits();let ot=O.fog,ft=X.isMeshStandardMaterial?O.environment:null,vt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ns,Mt=(X.isMeshStandardMaterial?V:y).get(X.envMap||ft),Pt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ut=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),bt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,ie=!!W.morphAttributes.color,re=qn;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(re=x.toneMapping);let Ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=Ne!==void 0?Ne.length:0,Et=Tt.get(X),Sn=p.state.lights;if(k===!0&&(z===!0||b!==M)){let Ze=b===M&&X.id===E;rt.setState(X,b,Ze)}let Zt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Sn.state.version||Et.outputColorSpace!==vt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==Mt||X.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==rt.numPlanes||Et.numIntersection!==rt.numIntersection)||Et.vertexAlphas!==Pt||Et.vertexTangents!==Ut||Et.morphTargets!==bt||Et.morphNormals!==$t||Et.morphColors!==ie||Et.toneMapping!==re||Et.morphTargetsCount!==Yt)&&(Zt=!0):(Zt=!0,Et.__version=X.version);let je=Et.currentProgram;Zt===!0&&(je=Vs(X,O,B));let Ti=!1,Ve=!1,ds=!1,oe=je.getUniforms(),un=Et.uniforms;if(At.useProgram(je.program)&&(Ti=!0,Ve=!0,ds=!0),X.id!==E&&(E=X.id,Ve=!0),Ti||M!==b){At.buffers.depth.getReversed()?(H.copy(b.projectionMatrix),If(H),Lf(H),oe.setValue(F,"projectionMatrix",H)):oe.setValue(F,"projectionMatrix",b.projectionMatrix),oe.setValue(F,"viewMatrix",b.matrixWorldInverse);let Fn=oe.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,lt.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&oe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ve=!0,ds=!0)}if(B.isSkinnedMesh){oe.setOptional(F,B,"bindMatrix"),oe.setOptional(F,B,"bindMatrixInverse");let Ze=B.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),oe.setValue(F,"boneTexture",Ze.boneTexture,A))}B.isBatchedMesh&&(oe.setOptional(F,B,"batchingTexture"),oe.setValue(F,"batchingTexture",B._matricesTexture,A),oe.setOptional(F,B,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",B._indirectTexture,A),oe.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",B._colorsTexture,A));let fs=W.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&Ct.update(B,W,je),(Ve||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,oe.setValue(F,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=Mt,un.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(un.envMapIntensity.value=O.environmentIntensity),Ve&&(oe.setValue(F,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Sd(un,ds),ot&&X.fog===!0&&ut.refreshFogUniforms(un,ot),ut.refreshMaterialUniforms(un,X,$,nt,p.state.transmissionRenderTarget[b.id]),qi.upload(F,pc(Et),un,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qi.upload(F,pc(Et),un,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&oe.setValue(F,"center",B.center),oe.setValue(F,"modelViewMatrix",B.modelViewMatrix),oe.setValue(F,"normalMatrix",B.normalMatrix),oe.setValue(F,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ze=X.uniformsGroups;for(let Fn=0,On=Ze.length;Fn<On;Fn++){let gc=Ze[Fn];U.update(gc,je),U.bind(gc,je)}}return je}function Sd(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ed(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,O,W){Tt.get(b.texture).__webglTexture=O,Tt.get(b.depthTexture).__webglTexture=W;let X=Tt.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let W=Tt.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){D=b,R=O,I=W;let X=!0,B=null,ot=!1,ft=!1;if(b){let Mt=Tt.get(b);if(Mt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Mt.__hasExternalTextures)A.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let bt=b.depthTexture;if(Mt.__boundDepthTexture!==bt){if(bt!==null&&Tt.has(bt)&&(b.width!==bt.image.width||b.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ft=!0);let Ut=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?B=Ut[O][W]:B=Ut[O],ot=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?B=Tt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[W]:B=Ut,L.copy(b.viewport),Y.copy(b.scissor),N=b.scissorTest}else L.copy(yt).multiplyScalar($).floor(),Y.copy(Lt).multiplyScalar($).floor(),N=qt;if(At.bindFramebuffer(F.FRAMEBUFFER,B)&&X&&At.drawBuffers(b,B),At.viewport(L),At.scissor(Y),At.setScissorTest(N),ot){let Mt=Tt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,W)}else if(ft){let Mt=Tt.get(b.texture),Pt=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,Pt)}E=-1},this.readRenderTargetPixels=function(b,O,W,X,B,ot,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){At.bindFramebuffer(F.FRAMEBUFFER,vt);try{let Mt=b.texture,Pt=Mt.format,Ut=Mt.type;if(!Vt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&W>=0&&W<=b.height-B&&F.readPixels(O,W,X,B,Ft.convert(Pt),Ft.convert(Ut),ot)}finally{let Mt=D!==null?Tt.get(D).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,X,B,ot,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){let Mt=b.texture,Pt=Mt.format,Ut=Mt.type;if(!Vt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-X&&W>=0&&W<=b.height-B){At.bindFramebuffer(F.FRAMEBUFFER,vt);let bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(O,W,X,B,Ft.convert(Pt),Ft.convert(Ut),0);let $t=D!==null?Tt.get(D).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,$t);let ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Pf(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(bt),F.deleteSync(ie),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,W=0){b.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let X=Math.pow(2,-W),B=Math.floor(b.image.width*X),ot=Math.floor(b.image.height*X),ft=O!==null?O.x:0,vt=O!==null?O.y:0;A.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,ft,vt,B,ot),At.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,X=null,B=0){b.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let ot,ft,vt,Mt,Pt,Ut,bt,$t,ie,re=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(ot=W.max.x-W.min.x,ft=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,Pt=W.min.y,Ut=W.isBox3?W.min.z:0):(ot=re.width,ft=re.height,vt=re.depth||1,Mt=0,Pt=0,Ut=0),X!==null?(bt=X.x,$t=X.y,ie=X.z):(bt=0,$t=0,ie=0);let Ne=Ft.convert(O.format),Yt=Ft.convert(O.type),Et;O.isData3DTexture?(A.setTexture3D(O,0),Et=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Et=F.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Sn=F.getParameter(F.UNPACK_ROW_LENGTH),Zt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),je=F.getParameter(F.UNPACK_SKIP_PIXELS),Ti=F.getParameter(F.UNPACK_SKIP_ROWS),Ve=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);let ds=b.isDataArrayTexture||b.isData3DTexture,oe=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let un=Tt.get(b),fs=Tt.get(O),Ze=Tt.get(un.__renderTarget),Fn=Tt.get(fs.__renderTarget);At.bindFramebuffer(F.READ_FRAMEBUFFER,Ze.__webglFramebuffer),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<vt;On++)ds&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(b).__webglTexture,B,Ut+On),b.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,B,ie+On),F.blitFramebuffer(Mt,Pt,ot,ft,bt,$t,ot,ft,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(Et,B,bt,$t,ie+On,Mt,Pt,ot,ft):F.copyTexSubImage2D(Et,B,bt,$t,ie+On,Mt,Pt,ot,ft);At.bindFramebuffer(F.READ_FRAMEBUFFER,null),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Et,B,bt,$t,ie,ot,ft,vt,Ne,Yt,re.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,B,bt,$t,ie,ot,ft,vt,Ne,re.data):F.texSubImage3D(Et,B,bt,$t,ie,ot,ft,vt,Ne,Yt,re):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,bt,$t,ot,ft,Ne,Yt,re.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,bt,$t,re.width,re.height,Ne,re.data):F.texSubImage2D(F.TEXTURE_2D,B,bt,$t,ot,ft,Ne,Yt,re);F.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ti),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve),B===0&&O.generateMipmaps&&F.generateMipmap(Et),At.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W=null,X=null,B=0){return b.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,W,X,B)},this.initRenderTarget=function(b){Tt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){R=0,I=0,D=null,At.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Dr=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ka,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ce=new P,gn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var il=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Xe,h=Xe,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hi=new It,_h=new It,hr=[],xh=new Oe,w_=new It,xs=new ae,ys=new an,Ur=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,w_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),xh.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),ys.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),_h.multiplyMatrices(n,Hi),xs.matrixWorld=_h,xs.raycast(t,hr);for(let a=0,o=hr.length;a<o;a++){let l=hr[a];l.instanceId=r,l.object=this,e.push(l)}hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new il(new Float32Array(s*this.count),s,this.count,Cl,fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new mt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new It;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends Nr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ur=new P,Zo=new Nl,Ko=new Nl,Jo=new Nl,rl=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),c=ur);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Zo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ko.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Jo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ko.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Jo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Zo.calc(l),Ko.calc(l),Jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function T_(i,t){let e=1-i;return e*e*t}function A_(i,t){return 2*(1-i)*i*t}function R_(i,t){return i*i*t}function ws(i,t,e,n){return T_(i,t)+A_(i,e)+R_(i,n)}function C_(i,t){let e=1-i;return e*e*e*t}function P_(i,t){let e=1-i;return 3*e*e*i*t}function I_(i,t){return 3*(1-i)*i*i*t}function L_(i,t){return i*i*i*t}function Ts(i,t,e,n,s){return C_(i,t)+P_(i,e)+I_(i,n)+L_(i,s)}var ol=class extends ln{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y),Ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ll=class extends ln{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ls=class extends ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cl=class extends ln{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y),ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yh(o,l.x,c.x,h.x,u.x),yh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},D_=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:ol,CubicBezierCurve3:al,EllipseCurve:Nr,LineCurve:ll,LineCurve3:Ls,QuadraticBezierCurve:cl,QuadraticBezierCurve3:Fr,SplineCurve:hl});var ul=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new P,x=new P,C=new P;for(let R=0;R<e.length;R+=3)f(e[R+0],v),f(e[R+1],x),f(e[R+2],C),l(v,x,C,S)}function l(S,v,x,C){let R=C+1,I=[];for(let D=0;D<=R;D++){I[D]=[];let E=S.clone().lerp(x,D/R),M=v.clone().lerp(x,D/R),L=R-D;for(let Y=0;Y<=L;Y++)Y===0&&D===R?I[D][Y]=E:I[D][Y]=E.clone().lerp(M,Y/L)}for(let D=0;D<R;D++)for(let E=0;E<2*(R-D)-1;E++){let M=Math.floor(E/2);E%2===0?(d(I[D][M+1]),d(I[D+1][M]),d(I[D][M])):(d(I[D][M+1]),d(I[D+1][M+1]),d(I[D+1][M]))}}function c(S){let v=new P;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(S),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let S=new P;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let x=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;a.push(x,1-C)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let v=a[S+0],x=a[S+2],C=a[S+4],R=Math.max(v,x,C),I=Math.min(v,x,C);R>.9&&I<.1&&(v<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){let x=S*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let S=new P,v=new P,x=new P,C=new P,R=new mt,I=new mt,D=new mt;for(let E=0,M=0;E<r.length;E+=9,M+=6){S.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),R.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),C.copy(S).add(v).add(x).divideScalar(3);let L=m(C);_(R,M+0,S,L),_(I,M+2,v,L),_(D,M+4,x,L)}}function _(S,v,x,C){C<0&&S.x===1&&(a[v]=S.x-1),x.x===0&&x.z===0&&(a[v]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Or=class i extends ul{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var _i=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let R=C/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-v),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],x=h[p][S],C=h[p+1][S],R=h[p+1][S+1];(p!==0||a>0)&&f.push(v,x,R),(p!==n-1||l<Math.PI)&&f.push(x,C,R)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Br=class i extends Be{constructor(t=new Fr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new mt,h=new P,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);let x=a.normals[v],C=a.binormals[v];for(let R=0;R<=s;R++){let I=R/s*Math.PI*2,D=Math.sin(I),E=-Math.cos(I);l.x=E*x.x+D*C.x,l.y=E*x.y+D*C.y,l.z=E*x.z+D*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){let C=(s+1)*(v-1)+(x-1),R=(s+1)*v+(x-1),I=(s+1)*v+x,D=(s+1)*(v-1)+x;g.push(C,R,D),g.push(R,I,D)}}function S(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new D_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},kr=class extends Be{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new P,r=new P;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){let p=o.getX(g+m),S=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,S),vh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),vh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new pe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function vh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Ds=class extends gi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function U_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dl=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=t,o=2*e-n;break;case Sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=t,l=2*n-e;break;case Sc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+S*a[c+C]+v*a[l+C]+x*a[u+C];return r}},fl=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},pl=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&U_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Ba;var xi=class extends cn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=yr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends cn{};ml.prototype.ValueTypeName="color";var gl=class extends cn{};gl.prototype.ValueTypeName="number";var _l=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(r,0,a,c-o,a,c,l);return r}},zr=class extends cn{InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends cn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=yr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends cn{};xl.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},N_=new yl,vl=class{constructor(t){this.manager=t!==void 0?t:N_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Vr=class extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},jo=new It,Mh=new P,bh=new P,Ml=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bl=class extends Ml{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new bl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Gr=class extends Be{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Wr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Sh(){return performance.now()}var Fl="\\[\\]\\.:\\/",F_=new RegExp("["+Fl+"]","g"),Ol="[^"+Fl+"]",O_="[^"+Fl.replace("\\.","")+"]",B_=/((?:WC+[\/:])*)/.source.replace("WC",Ol),k_=/(WCOD+)?/.source.replace("WCOD",O_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),H_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),V_=new RegExp("^"+B_+k_+z_+H_+"$"),G_=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(F_,"")}static parseTrackName(t){let e=V_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);G_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Sl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);var vi=class extends nl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Eh=new It,Xr=class{constructor(t,e,n=0,s=1/0){this.ray=new ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(t,e=!0,n=[]){return El(t,this,n,e),n.sort(wh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)El(t[s],this,n,e);return n.sort(wh),n}};function wh(i,t){return i.distance-t.distance}function El(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)El(r[a],t,e,!0)}}var Ns=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Th=new P,fr=new P,qr=class{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Th.subVectors(t,this.start),fr.subVectors(this.end,this.start);let n=fr.dot(fr),r=fr.dot(Th)/n;return e&&(r=_e(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var $r=class extends Un{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);var Kh={type:"change"},kl={type:"start"},jh={type:"end"},Qr=new ji,Jh=new nn,W_=Math.cos(70*Kr.DEG2RAD),ve=new P,ze=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6,to=class extends $r{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new $e,this._lastTargetPosition=new P,this._quat=new $e().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ns,this._sphericalDelta=new Ns,this._scale=1,this._panOffset=new P,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new P,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=$_.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=K_.bind(this),this._onKeyDown=J_.bind(this),this._onTouchStart=j_.bind(this),this._onTouchMove=Q_.bind(this),this._onMouseDown=Y_.bind(this),this._onMouseMove=Z_.bind(this),this._interceptControlDown=ex.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kh),this.update(),this.state=te.NONE}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ze:n>Math.PI&&(n-=ze),s<-Math.PI?s+=ze:s>Math.PI&&(s-=ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<W_?this.object.lookAt(this.target):(Jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(Jh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Kh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function X_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function q_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jh),this.state=te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Y_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case Mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case Mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(kl)}function Z_(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function K_(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(kl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(jh))}function J_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function j_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(kl)}function Q_(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function tx(i){this.enabled!==!1&&i.preventDefault()}function ex(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ss=(i,t)=>i.map((e,n)=>e+t[n]),zl=(i,t)=>i.map((e,n)=>e-t[n]),Os=(i,t)=>i.map(e=>e*t),eo=i=>Os(i,1/(Math.hypot(...i)||1));function Qh(i,t,e=.12){return 2*i*Math.tan(t*Math.PI/360)*e}function tu(i,t,e,n,s,r){let a=ss(Os(eo(t),s*n),Os(eo(e),r*n));return{target:ss(i.target,a),position:ss(i.position,a)}}function eu(i,t){let e=Math.hypot(...zl(i.position,i.target));return{target:i.target.slice(),position:ss(i.target,Os(eo(t),e))}}function Hl(i,t){return{target:t.slice(),position:ss(i.position,zl(t,i.target))}}function nu(i,t){return Hl(i,[t[0],i.target[1],t[2]])}function iu(i,t,e,n){let s=zl(i.position,i.target),r=Math.hypot(s[0],s[2]),a=r<.001?n:[s[0]/r,.05,s[2]/r];return{target:t.slice(),position:ss(t,Os(eo(a),e))}}var no=new P(0,86,0),su=300,ix=95,Vl={front:[-.25,.05,1],back:[.25,.05,-1],right:[-1,.05,.05],left:[1,.05,.05]};function ru(i){let t=new Lr({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(t.domElement);let e=new Dr;e.background=new Bt(921878);let n=new Ie(35,1,1,2e3),s=new to(n,t.domElement);s.enableDamping=!0,s.zoomToCursor=!0,s.keyPanSpeed=25,t.domElement.tabIndex=0,s.listenToKeyEvents(t.domElement),e.add(new Vr(16777215,2764602,1.4));let r=new Us(16777215,1.8);r.position.set(-80,220,160),e.add(r);let a=new Us(16777215,.9);a.position.set(90,160,-160),e.add(a);function o(N,G,J){s.target.copy(N),n.position.copy(N).add(new P(...G).normalize().multiplyScalar(J)),s.update()}o(no,Vl.front,su);let l=null,c=()=>l?.to??{target:s.target.toArray(),position:n.position.toArray()};function h(N,G=.3){l={from:{target:s.target.toArray(),position:n.position.toArray()},to:N,t:0,duration:G}}s.addEventListener("start",()=>l=null);function u(N){if(!l)return;l.t=Math.min(1,l.t+N/l.duration);let G=l.t*l.t*(3-2*l.t),J=(Z,nt)=>Z.map(($,st)=>$+(nt[st]-$)*G);s.target.fromArray(J(l.from.target,l.to.target)),n.position.fromArray(J(l.from.position,l.to.position)),l.t===1&&(l=null)}let d=N=>{l=null,s.target.fromArray(N.target),n.position.fromArray(N.position),s.update()},f=N=>d(eu(c(),Vl[N])),g=()=>d(iu(c(),no.toArray(),su,Vl.front));function _(N,G){let J=c(),Z=Math.hypot(...J.position.map((st,ht)=>st-J.target[ht])),nt=new P(1,0,0).applyQuaternion(n.quaternion).toArray(),$=new P(0,1,0).applyQuaternion(n.quaternion).toArray();h(tu(J,nt,$,Qh(Z,n.fov),N,G),.2)}let m=N=>h(Hl(c(),N),.35),p=()=>h(nu(c(),no.toArray()),.35);function S(N){let G=new P(...N),J=new P(G.x,0,G.z-no.z);J.length()<3&&J.copy(n.position).sub(s.target).setY(0),J.normalize().setY(.15),l=null,o(G,J.toArray(),ix)}let v=[],x=()=>{let N=i.clientWidth,G=i.clientHeight;t.setSize(N,G),n.aspect=N/G,n.updateProjectionMatrix();for(let J of v)J(N,G)};new ResizeObserver(x).observe(i),x();let C=new Xr,R=new mt;function I(N,G,J){let Z=t.domElement.getBoundingClientRect();return R.set((N-Z.left)/Z.width*2-1,-((G-Z.top)/Z.height)*2+1),C.setFromCamera(R,n),C.intersectObjects(J,!1)[0]??null}let D=(N,G,J)=>I(N,G,J)?.object??null,E=(N,G,J)=>I(N,G,J),M=(N,G,J)=>I(N,G,J)?.point.toArray()??null,L=[],Y=new Wr;return t.setAnimationLoop(()=>{let N=Y.getDelta();for(let G of L)G(N);u(N),s.update(),t.render(e,n)}),{scene:e,camera:n,controls:s,renderer:t,pick:D,pickHit:E,pickPoint:M,setView:f,showWholeBody:g,pan:_,recenter:m,center:p,lookAt:S,resize:x,onFrame:N=>L.push(N),onResize(N){v.push(N),N(i.clientWidth,i.clientHeight)}}}function ou(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Gl(i,t,e){let n=i.byteOffset%4?i.slice():i,s=new Int16Array(n.buffer,n.byteOffset+e.vOffset,e.vCount*3),r=new Float32Array(s.length);for(let c=0;c<s.length;c++){let h=c%3;r[c]=t.min[h]+(s[c]+32768)/65535*(t.max[h]-t.min[h])}let a=e.wide?Uint32Array:Uint16Array,o=new a(n.buffer,n.byteOffset+e.iOffset,e.iCount).slice(),l=e.sOffset===void 0?null:n.slice(e.sOffset,e.sOffset+e.vCount*3);return{positions:r,indices:o,skin:l}}var sx=["pelvis","L5","L4","L3","L2","L1","thoraxLow","thoraxMid","thoraxUp","neckLow","neckUp","head"],io=["index","middle","ring","little"],rx=["thumbMeta","thumbProx","thumbDist",...io.flatMap(i=>[`${i}Prox`,`${i}Mid`,`${i}Dist`])],au=["clavicle","scapula","arm","ulna","radius","hand",...rx,"femur","shank","talus","foot"],Ny=new Set(au),lu=[...sx,...au.flatMap(i=>[`${i}.l`,`${i}.r`])],Wl={ulna:"arm",radius:"ulna",hand:"radius",thumbMeta:"hand",thumbProx:"thumbMeta",thumbDist:"thumbProx",...Object.fromEntries(io.flatMap(i=>[[`${i}Prox`,"hand"],[`${i}Mid`,`${i}Prox`],[`${i}Dist`,`${i}Mid`]])),shank:"femur",talus:"shank",foot:"talus"};function cu(i){let t=i.lastIndexOf(".");return t<0?[i,null]:[i.slice(0,t),i.slice(t+1)]}function rs(i,t){return[i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14]]}function ox(i){return[i.a,...i.vias.map(t=>t.p),i.b]}function so(i,t){return[rs(t.get(i.segA).elements,i.a),...i.vias.map(e=>rs(t.get(e.seg).elements,e.p)),rs(t.get(i.segB).elements,i.b)]}function Xl(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1],i[e][2]-i[e-1][2]);return t}function ax(i,t,e){let n=new P(...e).normalize(),s=i.clone().invert().multiply(t),r=new P(1,0,0).cross(n);r.lengthSq()<1e-6&&r.set(0,1,0).cross(n),r.normalize();let a=r.clone().transformDirection(s);return Math.atan2(n.dot(r.clone().cross(a)),r.dot(a))}function lx(i,t){let e=new Map,n=s=>{if(e.has(s))return e.get(s);let[r,a]=cu(s),o=Wl[r]&&`${Wl[r]}.${a}`,l=i.get(s);if(o){let c=n(o);t.has(s)?l=c:c!==i.get(o)&&(l=c.clone().multiply(i.get(o).clone().invert()).multiply(l))}return e.set(s,l),l};return{get:n}}function uu(i,t){if(!i.altVias)return hu(i,t);let e=[i.vias,...i.altVias].map(n=>hu({...i,vias:n},t));return e.reduce((n,s)=>n+s,0)/e.length}function hu(i,t){let e=Xl(ox(i));if(e<.5)return 0;if(!i.wraps)return Xl(so(i,t))/e-1;let n=Xl(so(i,lx(t,new Set(i.wraps.map(s=>s.dist)))));for(let s of i.wraps)n-=s.m*ax(t.get(s.prox),t.get(s.dist),s.axis);return n/e-1}function cx(i,t,e){let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function du(i,t,e){let n=i.length/3,s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=s[0]**2+s[1]**2+s[2]**2||1,a=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++){let c=((i[l*3]-t[0])*s[0]+(i[l*3+1]-t[1])*s[1]+(i[l*3+2]-t[2])*s[2])/r,h=cx(.1,.9,c);a[l]=h,o[l]=4*h*(1-h)}return{rest:i,a:t,b:e,restLength:Math.sqrt(r),weight:a,belly:o}}function fu(i,t,e,n){let{rest:s,weight:r,belly:a}=i,o=t.elements,l=e.elements,c=rs(o,i.a),h=rs(l,i.b),u=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])||1,d=[(h[0]-c[0])/u,(h[1]-c[1])/u,(h[2]-c[2])/u],f=1/Math.sqrt(u/i.restLength);for(let g=0,_=r.length;g<_;g++){let m=s[g*3],p=s[g*3+1],S=s[g*3+2],v=r[g],x=1-v,C=x*(o[0]*m+o[4]*p+o[8]*S+o[12])+v*(l[0]*m+l[4]*p+l[8]*S+l[12]),R=x*(o[1]*m+o[5]*p+o[9]*S+o[13])+v*(l[1]*m+l[5]*p+l[9]*S+l[13]),I=x*(o[2]*m+o[6]*p+o[10]*S+o[14])+v*(l[2]*m+l[6]*p+l[10]*S+l[14]),D=1+(f-1)*a[g];if(D!==1){let E=(C-c[0])*d[0]+(R-c[1])*d[1]+(I-c[2])*d[2],M=c[0]+d[0]*E,L=c[1]+d[1]*E,Y=c[2]+d[2]*E;C=M+(C-M)*D,R=L+(R-L)*D,I=Y+(I-Y)*D}n[g*3]=C,n[g*3+1]=R,n[g*3+2]=I}}function pu(i,t,e,n,s){let r=e.map(a=>n.get(a).elements);for(let a=0,o=i.length/3;a<o;a++){let l=r[t[a*3]],c=r[t[a*3+1]],h=t[a*3+2]/255,u=1-h,d=i[a*3],f=i[a*3+1],g=i[a*3+2];s[a*3]=u*(l[0]*d+l[4]*f+l[8]*g+l[12])+h*(c[0]*d+c[4]*f+c[8]*g+c[12]),s[a*3+1]=u*(l[1]*d+l[5]*f+l[9]*g+l[13])+h*(c[1]*d+c[5]*f+c[9]*g+c[13]),s[a*3+2]=u*(l[2]*d+l[6]*f+l[10]*g+l[14])+h*(c[2]*d+c[6]*f+c[10]*g+c[14])}}var _n={natural:[.62,.25,.22],same:[.7,.68,.66],short:[.86,.16,.12],long:[.14,.4,.88],selected:[.72,.42,1]},Bs={short:"\u9396\u77ED",long:"\u9396\u9577",same:"\u4E0D\u8B8A"};function mu(i){return Math.sign(i)*Math.round(Math.abs(i)*100)}function Zn(i){let t=mu(i);return t<=-.03*100?"short":t>=.03*100?"long":"same"}function gu({selected:i,poseActive:t,measure:e,delta:n}){return i?_n.selected.slice():t?e?ql(n):_n.same.slice():_n.natural.slice()}function ql(i){let t=Zn(i);if(t==="same")return _n.same.slice();let e=.35+.65*Math.min(1,Math.max(0,(Math.abs(i)-.03)/(.2-.03)));return _n.same.map((n,s)=>n+(_n[t][s]-n)*e)}function ro(i){let t=mu(i);return t===0?"0%":`${t>0?"+":"\u2212"}${Math.abs(t)}%`}var hx=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function $l(i){let t=i.length/3;if(!t)return{center:[0,0,0],radius:0};let e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let a=0;a<i.length;a++){let o=a%3;i[a]<e[o]&&(e[o]=i[a]),i[a]>n[o]&&(n[o]=i[a])}let s=e.map((a,o)=>(a+n[o])/2),r=0;for(let a=0;a<t;a++){let o=(i[a*3]-s[0])**2+(i[a*3+1]-s[1])**2+(i[a*3+2]-s[2])**2;o>r&&(r=o)}return{center:s,radius:Math.sqrt(r)}}function Yl(i,t){return 1-hx(.45,1,i/(t*1.15))}function ux(i,t){return t.some(e=>Math.hypot(i.center[0]-e.pos[0],i.center[1]-e.pos[1],i.center[2]-e.pos[2])<i.radius+e.radius*1.15)}function _u(i,t,e){if(!ux(t,e))return null;let n=i.length/3,s=new Float32Array(n),r=new Set,a=!1;for(let o=0;o<e.length;o++){let l=e[o],c=l.radius*1.15,[h,u,d]=l.pos;if(!(Math.hypot(t.center[0]-h,t.center[1]-u,t.center[2]-d)>=t.radius+c))for(let f=0;f<n;f++){let g=Math.hypot(i[f*3]-h,i[f*3+1]-u,i[f*3+2]-d);if(g>=c)continue;let _=Yl(g,l.radius);_<=s[f]||(s[f]=_,_>.05&&(r.add(o),a=!0))}}return a?{weights:s,hit:r}:null}function xu(i,t,e){let n=null;for(let s of e){let r=t[s],a=Math.hypot(i.center[0]-r.pos[0],i.center[1]-r.pos[1],i.center[2]-r.pos[2]);(!n||a<n.d)&&(n={d:a,zone:r})}return n?.zone??null}function yu(i,t){let e=new Be;return e.setAttribute("position",new fe(i,3)),e.setIndex(new fe(t,1)),e.computeVertexNormals(),e}var px=new Or(.8);function vu(i){return i.userData.referredColor={value:new Bt(1,1,1)},i.onBeforeCompile=t=>{t.uniforms.uReferredColor=i.userData.referredColor,t.vertexShader=`attribute float aReferred;
varying float vReferred;
${t.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
  vReferred = aReferred;`),t.fragmentShader=`uniform vec3 uReferredColor;
varying float vReferred;
${t.fragmentShader}`.replace("#include <color_fragment>",`#include <color_fragment>
  float referred = clamp(vReferred, 0.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, uReferredColor, referred * ${.9.toFixed(2)});`).replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive + uReferredColor * clamp(vReferred, 0.0, 1.0) * ${.4.toFixed(2)};`)},i.customProgramCacheKey=()=>"referred",i}function Mu(i){let{meta:t}=i,e=ou(i.bin),n=new De,s=vu(new Ds({color:15327436,roughness:.75})),r=t.bones.map(l=>{let{positions:c,indices:h}=Gl(e,t.quant,l),u=new ae(yu(c,h),s);return u.matrixAutoUpdate=!1,n.add(u),{mesh:u,segment:l.segment}}),a=new De,o=t.parts.map(l=>{let{positions:c,indices:h,skin:u}=Gl(e,t.quant,l),d=yu(c.slice(),h);d.getAttribute("position").setUsage(Hh);let f=vu(new Ds({roughness:.55}));f.color.setRGB(..._n.natural,ce);let g=new ae(d,f);g.userData.partKey=l.key,g.frustumCulled=!1,n.add(g);let _=l.tps.map((m,p)=>{let S=new ae(px,new mn);return S.visible=!1,S.renderOrder=5,S.userData.pain={key:l.key,index:p},a.add(S),{marker:S,vertex:m}});return{info:l,mesh:g,rest:c,skin:u,prep:u?null:du(c,l.a,l.b),segments:l.skinSegs??[l.segA,l.segB,...l.vias.map(m=>m.seg)],tps:_,delta:0,target:[0,0,0]}});return n.add(a),{group:n,bones:r,parts:o,boneMaterial:s,joints:t.joints}}var oo=["scapProtraction","scapElevation","shoulderRotation","elbowFlexion","forearmPronation","wristFlexion","fingerFlexion","thumbFlexion","hipFlexion","kneeFlexion","ankleFlexion","footInversion"],mx=["headForward","thoracicFlexion","pelvicTilt","pelvicObliquity","trunkFlexion","trunkSideBend","trunkRotation"],xn=Object.freeze({...Object.fromEntries(oo.flatMap(i=>[[`${i}.l`,0],[`${i}.r`,0]])),...Object.fromEntries(mx.map(i=>[i,0]))});function hn(i){let t={...xn};for(let[e,n]of Object.entries(i))oo.includes(e)?t[`${e}.l`]=t[`${e}.r`]=n:t[e]=n;return t}var ao={neutral:{label:"\u4E2D\u7ACB",params:xn},roundedShoulders:{label:"\u5713\u80A9",params:hn({scapProtraction:.8,shoulderRotation:.6})},forwardHead:{label:"\u982D\u524D\u50BE",params:hn({headForward:1})},kyphosis:{label:"\u80F8\u690E\u99DD\u80CC",params:hn({thoracicFlexion:1})},anteriorTilt:{label:"\u9AA8\u76C6\u524D\u50BE",params:hn({pelvicTilt:1})},posteriorTilt:{label:"\u9AA8\u76C6\u5F8C\u50BE",params:hn({pelvicTilt:-1})},unevenShoulders:{label:"\u9AD8\u4F4E\u80A9",params:hn({"scapElevation.r":.7,"scapElevation.l":-.3})},legLength:{label:"\u9577\u77ED\u8173",params:hn({pelvicObliquity:1})},phone:{label:"\u6ED1\u624B\u6A5F",params:hn({headForward:.8,scapProtraction:.6,shoulderRotation:.4,elbowFlexion:.7,forearmPronation:.8,wristFlexion:.3,fingerFlexion:.4,thumbFlexion:.5})},kneeHyperextension:{label:"\u819D\u904E\u4F38",params:hn({kneeFlexion:-1})},highHeels:{label:"\u7A7F\u9AD8\u8DDF\u978B",params:hn({ankleFlexion:-.67})},flatFoot:{label:"\u6241\u5E73\u8DB3",params:hn({footInversion:-1})}},ks=[{key:"headForward",group:"sagittal",sided:!1,label:"\u982D\u9838\u524D\u79FB",minLabel:"\u5F8C\u6536",maxLabel:"\u524D\u79FB"},{key:"thoracicFlexion",group:"sagittal",sided:!1,label:"\u80F8\u690E\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u99DD\u80CC"},{key:"pelvicTilt",group:"sagittal",sided:!1,label:"\u9AA8\u76C6\u5F8C\u50BE\uFF0F\u524D\u50BE",minLabel:"\u5F8C\u50BE",maxLabel:"\u524D\u50BE"},{key:"trunkFlexion",group:"sagittal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5F8C\u4EF0\uFF0F\u524D\u5F4E",minLabel:"\u5F8C\u4EF0",maxLabel:"\u524D\u5F4E"},{key:"pelvicObliquity",group:"frontal",sided:!1,label:"\u9AA8\u76C6\u5074\u50BE\uFF08\u9577\u77ED\u8173\uFF09",minLabel:"\u53F3\u5074\u4F4E",maxLabel:"\u5DE6\u5074\u4F4E"},{key:"trunkSideBend",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5074\u5F4E",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"trunkRotation",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u8F49\u5411",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"scapProtraction",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u524D\u4F38\uFF0F\u5F8C\u7E2E",minLabel:"\u5F8C\u7E2E",maxLabel:"\u524D\u4F38"},{key:"scapElevation",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u4E0A\u63D0\uFF0F\u4E0B\u58D3",minLabel:"\u4E0B\u58D3",maxLabel:"\u4E0A\u63D0"},{key:"shoulderRotation",group:"upperLimb",sided:!0,label:"\u80A9\u95DC\u7BC0\u5167\u65CB\uFF0F\u5916\u65CB",minLabel:"\u5916\u65CB",maxLabel:"\u5167\u65CB"},{key:"elbowFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8098\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"forearmPronation",group:"upperLimb",sided:!0,label:"\u524D\u81C2\u65CB\u5F8C\uFF0F\u65CB\u524D",minLabel:"\u65CB\u5F8C",maxLabel:"\u65CB\u524D"},{key:"wristFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8155\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"fingerFlexion",group:"upperLimb",sided:!0,label:"\u624B\u6307\u4F38\u76F4\uFF0F\u63E1\u62F3",minLabel:"\u904E\u4F38",maxLabel:"\u63E1\u62F3"},{key:"thumbFlexion",group:"upperLimb",sided:!0,label:"\u62C7\u6307\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"hipFlexion",group:"lowerLimb",sided:!0,label:"\u5927\u817F\u653E\u4E0B\uFF0F\u62AC\u8D77",minLabel:"\u5F80\u5F8C",maxLabel:"\u62AC\u8D77"},{key:"kneeFlexion",group:"lowerLimb",sided:!0,label:"\u819D\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"ankleFlexion",group:"lowerLimb",sided:!0,label:"\u8E1D\u8E60\u5C48\uFF0F\u80CC\u5C48",minLabel:"\u8E60\u5C48",maxLabel:"\u80CC\u5C48"},{key:"footInversion",group:"lowerLimb",sided:!0,label:"\u8DB3\u5916\u7FFB\uFF0F\u5167\u7FFB",minLabel:"\u5916\u7FFB",maxLabel:"\u5167\u7FFB"}],bu=[["sagittal","\u524D\u5F8C\u65B9\u5411"],["frontal","\u5DE6\u53F3\u65B9\u5411\uFF08\u5074\u5F4E\u3001\u8F49\u5411\uFF09"],["upperLimb","\u4E0A\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"],["lowerLimb","\u4E0B\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"]],Su=[["both","\u5169\u5074\u4E00\u8D77"],["l","\u53EA\u8ABF\u5DE6\u5074"],["r","\u53EA\u8ABF\u53F3\u5074"]];function Eu(i,t,e){return oo.includes(t)?e==="both"?(i[`${t}.l`]+i[`${t}.r`])/2:i[`${t}.${e}`]:i[t]}function wu(i,t,e,n){let s={...i};return oo.includes(t)?n==="both"?s[`${t}.l`]=s[`${t}.r`]=e:s[`${t}.${n}`]=e:s[t]=e,s}function Tu(i,t,e){return Object.fromEntries(Object.keys(xn).map(n=>[n,i[n]+(t[n]-i[n])*e]))}function Au(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}function Ru(i){return Math.abs(i)<.05?0:i}function lo(i){return Object.keys(xn).every(t=>Math.abs(i[t]??0)<.001)}var he={clavProtraction:20,clavElevation:15,scapTilt:12,humeralRotation:40,neckFlexion:25,headExtension:22,thoracicFlexion:30,pelvicTilt:18,pelvicObliquity:8,elbowFlexion:140,elbowExtension:10,pronation:150,supination:10,wristFlexion:70,wristExtension:60,hipFlexion:120,hipExtension:20,kneeFlexion:140,kneeExtension:15,dorsiflexion:20,plantarflexion:45,inversion:30,eversion:25},os={flexion:{hip:50,lumbar:40},extension:{hip:10,lumbar:20},sideBend:{lumbar:18,thoraxLow:6,thoraxMid:6,thoraxUp:0},rotation:{lumbar:10,thoraxLow:12,thoraxMid:13,thoraxUp:10}},Cu={fingerFlexion:{flex:[90,100,70],extend:[20,0,0]},thumbFlexion:{flex:[30,50,80],extend:[30,0,20]}},Kn=(i,t,e)=>He*(i>=0?t*i:e*i),gx={thoraxLow:.3,thoraxMid:.4,thoraxUp:.3},_x=["L5","L4","L3","L2","L1"],He=Math.PI/180,as=new P(1,0,0),Pu=new P(0,1,0),co=new P(0,0,1),ue=i=>i.isVector3?i.clone():new P(i[0],i[1],i[2]);function me(i,t,e){let n=ue(i);return new It().makeTranslation(n.x,n.y,n.z).multiply(new It().makeRotationAxis(t.clone().normalize(),e)).multiply(new It().makeTranslation(-n.x,-n.y,-n.z))}function xx(i,t){let e=ue(i);return new It().makeTranslation(e.x,e.y,e.z).multiply(new It().makeRotationFromQuaternion(t)).multiply(new It().makeTranslation(-e.x,-e.y,-e.z))}function Iu(i,t){let e=ue(i),[n,s,r]=t.center,[a,o,l]=t.radii;return Math.hypot((e.x-n)/a,(e.y-s)/o,(e.z-r)/l)}function yx(i,t,e){let n=ue(t.center);return i.clone().sub(n).multiplyScalar(e/Iu(i,t)).add(n)}function vx(i,t,e){let n=ue(i.ac[t]).applyMatrix4(e),s=ue(i.scapAnchor[t]),r=s.clone().applyMatrix4(e),a=s.distanceTo(ue(i.ac[t])),o=Iu(s,i.thorax),l=r.clone();for(let h=0;h<8;h++)l=yx(l,i.thorax,o),l=n.clone().add(l.sub(n).setLength(a));let c=new $e().setFromUnitVectors(r.clone().sub(n).normalize(),l.clone().sub(n).normalize());return{glide:xx(n,c),ac:n,anchor:l}}function Lu(i,t={}){let e={...xn,...t},n=new Map(lu.map(C=>[C,new It])),s=i.pivots,r=he.pelvicTilt*He*e.pelvicTilt,a=he.pelvicObliquity*He*e.pelvicObliquity,o=e.trunkFlexion>=0?os.flexion:os.extension,l=o.hip*He*e.trunkFlexion,c=o.lumbar*He*e.trunkFlexion,h=He*e.trunkSideBend,u=He*e.trunkRotation,d=ue(i.hip.l).add(ue(i.hip.r)).multiplyScalar(.5),f=e.pelvicObliquity>=0?i.hip.r:i.hip.l,g=me(d,as,r+l).multiply(me(f,co,-a));n.set("pelvis",g);for(let C of["l","r"]){let R=ue(i.hip[C]).applyMatrix4(g).sub(ue(i.hip[C])),D=new It().makeTranslation(R.x,R.y,R.z).clone().multiply(me(i.hip[C],as,-Kn(e[`hipFlexion.${C}`],he.hipFlexion,he.hipExtension))),{knee:E,ankle:M,subtalar:L}=i,Y=D.clone().multiply(me(E[C].pivot,ue(E[C].axis),Kn(e[`kneeFlexion.${C}`],he.kneeFlexion,he.kneeExtension))),N=Y.clone().multiply(me(M[C].pivot,ue(M[C].axis),Kn(e[`ankleFlexion.${C}`],he.dorsiflexion,he.plantarflexion))),G=N.clone().multiply(me(L[C].pivot,ue(L[C].axis),Kn(e[`footInversion.${C}`],he.inversion,he.eversion)));n.set(`femur.${C}`,D),n.set(`shank.${C}`,Y),n.set(`talus.${C}`,N),n.set(`foot.${C}`,G)}let _=(C,R,I)=>me(s[C],co,-h*R).multiply(me(s[C],Pu,u*I)),m=g;for(let C of _x){let R=m.clone().multiply(me(s[C],as,(c-r)/5)).multiply(me(s[C],co,a/5)).multiply(_(C,os.sideBend.lumbar/5,os.rotation.lumbar/5));n.set(C,R),m=R}let p=he.thoracicFlexion*He*e.thoracicFlexion;for(let C of["thoraxLow","thoraxMid","thoraxUp"]){let R=m.clone().multiply(me(s[C],as,p*gx[C])).multiply(_(C,os.sideBend[C],os.rotation[C]));n.set(C,R),m=R}let S=m,v=S.clone().multiply(me(s.neckLow,as,he.neckFlexion*He*e.headForward-p/2)),x=v.clone().multiply(me(s.head,as,-he.headExtension*He*e.headForward-p/2));n.set("neckLow",v),n.set("neckUp",v.clone()),n.set("head",x);for(let C of["l","r"]){let R=C==="r"?1:-1,I=e[`scapProtraction.${C}`],D=me(i.sc[C],Pu,R*he.clavProtraction*He*I).multiply(me(i.sc[C],co,-R*he.clavElevation*He*e[`scapElevation.${C}`])),{glide:E,ac:M,anchor:L}=vx(i,C,D),N=me(M,L.clone().sub(M),R*he.scapTilt*He*I).multiply(E).multiply(D),G=ue(i.gh[C]).sub(ue(i.elbow[C])),J=N.clone().multiply(me(i.gh[C],G,R*he.humeralRotation*He*e[`shoulderRotation.${C}`])),[Z,nt]=i.elbowAxis[C],$=ue(nt).sub(ue(Z)),st=ue(Z).add(ue(nt)).multiplyScalar(.5),ht=J.clone().multiply(me(st,$,R*Kn(e[`elbowFlexion.${C}`],he.elbowFlexion,he.elbowExtension))),[yt,Lt]=i.forearmAxis[C],qt=ht.clone().multiply(me(yt,ue(Lt).sub(ue(yt)),-R*Kn(e[`forearmPronation.${C}`],he.pronation,he.supination))),T=qt.clone().multiply(me(i.wrist[C],$,R*Kn(e[`wristFlexion.${C}`],he.wristFlexion,he.wristExtension)));n.set(`clavicle.${C}`,S.clone().multiply(D)),n.set(`scapula.${C}`,S.clone().multiply(N)),n.set(`arm.${C}`,S.clone().multiply(J)),n.set(`ulna.${C}`,S.clone().multiply(ht)),n.set(`radius.${C}`,S.clone().multiply(qt)),n.set(`hand.${C}`,S.clone().multiply(T));let k=i.fingers[C],z=(H,it,lt,wt,zt)=>{let kt=H;it.forEach((ee,F)=>{kt=kt.clone().multiply(me(ee.pivot,ue(ee.axis),Kn(e[`${wt}.${C}`],zt.flex[F],zt.extend[F]))),n.set(`${lt[F]}.${C}`,S.clone().multiply(kt))})};for(let H of io)z(T,k[H],[`${H}Prox`,`${H}Mid`,`${H}Dist`],"fingerFlexion",Cu.fingerFlexion);z(T,k.thumb,["thumbMeta","thumbProx","thumbDist"],"thumbFlexion",Cu.thumbFlexion)}return n}var Mx={superficial:1,middle:.6,deep:.3},bx=15,Sx=8,Ex=.1,wx=.15,Tx=.3;function Du(){return{layers:{superficial:!0,middle:!0,deep:!0,bones:!0},hidden:new Set,ghost:new Set,pulled:new Set,explode:0,selectedKey:null,lineParts:null,painMode:"off",selectedPain:null,overlay:!1,lookupMode:!1,lookup:null,postureZones:!1}}function Zl(i,t){if(!t.layers[i.layer]||t.hidden.has(i.key))return{visible:!1,opacity:0,glow:0,pickable:!1,selected:!1};let e=t.ghost.has(i.key)?Ex:1,n=0;return t.lineParts&&(t.lineParts.has(i.id)?n=.25:e=Math.min(e,wx)),{visible:!0,opacity:e,glow:n,pickable:e>=Tx,selected:t.selectedKey===i.key}}function Uu(i,t,e){let n=i.centroid[0]-e[0],s=i.centroid[2]-e[1],r=Math.hypot(n,s)||1,a=t.explode*bx*Mx[i.layer]+(t.pulled.has(i.key)?Sx:0);return[n/r*a,0,s/r*a]}function Nu(i){i.hidden.clear(),i.ghost.clear()}function Fu(i){Object.assign(i.layers,{superficial:!0,middle:!0,deep:!0,bones:!0}),i.hidden.clear(),i.ghost.clear(),i.pulled.clear(),i.explode=0,i.selectedKey=null,i.selectedPain=null,i.lookup=null}function Ou(i,t,e,n){if(t.painMode==="off"||!Zl(i,t).visible)return null;let s=e&&i.measure?Zn(n):"same";return s!=="same"?s:t.selectedKey===i.key?"focus":t.painMode==="all"?"spot":null}var ls=i=>({ids:i,opp:!0}),Ax=i=>Array.isArray(i)?{ids:i,opp:!1}:i,Si=[{id:"sbl",name:"\u6DFA\u80CC\u7DDA",stations:[["plantarAponeurosis"],["calcanealTendon"],["gastrocnemiusMed","gastrocnemiusLat"],["bicepsFemorisLong","semitendinosus","semimembranosus"],["thoracolumbarFascia","iliocostalisLumborum","longissimusThoracis","spinalisThoracis","iliocostalisThoracis"],["rectusCapPostMajor","rectusCapPostMinor","obliquusCapSup","obliquusCapInf"],["epicranialAponeurosis","occipitalis","frontalis"]]},{id:"sfl",name:"\u6DFA\u524D\u7DDA",stations:[["tibialisAnterior","extensorDigitorumLongus","extensorHallucisLongus"],["rectusFemoris","vastusLateralis","vastusMedialis","vastusIntermedius"],["rectusAbdominis"],["sternocleidomastoid"],["epicranialAponeurosis"]]},{id:"ll",name:"\u9AD4\u5074\u7DDA",stations:[["fibularisLongus","fibularisBrevis"],["iliotibialTract","tensorFasciaeLatae","gluteusMaximus"],["externalOblique","internalOblique"],["externalIntercostals","internalIntercostals"],["spleniusCapitis","sternocleidomastoid"]]},{id:"spl",name:"\u87BA\u65CB\u7DDA",stations:[["spleniusCapitis","spleniusColli"],ls(["rhomboidMajor","rhomboidMinor"]),ls(["serratusAnterior"]),ls(["externalOblique"]),["internalOblique"],["tensorFasciaeLatae","iliotibialTract"],["tibialisAnterior"],["fibularisLongus"],["bicepsFemorisLong"],["iliocostalisLumborum","longissimusThoracis"]]},{id:"sfal",name:"\u6DFA\u524D\u81C2\u7DDA",stations:[["pecMajorClav","pecMajorStern","pecMajorAbd","latissimus"],["medialIntermuscularSeptum"],["flexorCarpiRadialis","palmarisLongus","fcuHumeral","fcuUlnar","fdsHumeroUlnar","fdsRadial","flexorDigitorumProfundus"],["flexorRetinaculum"],["palmarAponeurosis"]]},{id:"dfal",name:"\u6DF1\u524D\u81C2\u7DDA",stations:[["pecMinor","clavipectoralFascia"],["bicepsShort","bicepsLong","coracobrachialis"],["abductorPollicisBrevis","flexorPollicisBrevisSup","flexorPollicisBrevisDeep","opponensPollicis"]]},{id:"sbal",name:"\u6DFA\u5F8C\u81C2\u7DDA",stations:[["trapUpper","trapMiddle","trapLower"],["deltoidAnt","deltoidMid","deltoidPost"],["lateralIntermuscularSeptum"],["extensorCarpiRadialisLongus","extensorCarpiRadialisBrevis","extensorDigitorum","extensorDigitiMinimi","ecuHumeral","ecuUlnar"],["extensorRetinaculum"]]},{id:"dbal",name:"\u6DF1\u5F8C\u81C2\u7DDA",stations:[["rhomboidMajor","rhomboidMinor","levatorScapulae"],["supraspinatus","infraspinatus","teresMinor","subscapularis"],["tricepsLong","tricepsLat","tricepsMed"],["abductorDigitiMinimi","flexorDigitiMinimi","opponensDigitiMinimi"]]},{id:"bfl",name:"\u5F8C\u529F\u80FD\u7DDA",stations:[["latissimus"],["thoracolumbarFascia"],ls(["gluteusMaximus"]),ls(["vastusLateralis"])]},{id:"ffl",name:"\u524D\u529F\u80FD\u7DDA",stations:[["pecMajorAbd"],["rectusAbdominis"],ls(["adductorLongus"])]},{id:"ifl",name:"\u540C\u5074\u529F\u80FD\u7DDA",stations:[["latissimus"],["externalOblique"],["sartorius"]]},{id:"dfl",name:"\u6DF1\u524D\u7DDA",stations:[["tibialisPosterior","flexorDigitorumLongus","flexorHallucisLongus"],["popliteus"],["adductorMagnus","adductorMinimus","adductorBrevis","adductorLongus","pectineus"],["pubococcygeus","iliococcygeus","coccygeus"],["psoasMajor","iliacus","quadratusLumborum"],["diaphragm"],["longusColli","longusCapitis","scalenusAnterior","scalenusMedius","scalenusPosterior"],["sternohyoid","omohyoid","thyrohyoid","digastricPost","digastricAnt","mylohyoid","geniohyoid","stylohyoid"]]}].map(i=>({...i,stations:i.stations.map(Ax)}));function Bu(i){return i.length?new Set(i.flatMap(t=>[...Rx(t)??[]])):null}function Rx(i){let t=Si.find(e=>e.id===i);return t?new Set(t.stations.flatMap(e=>e.ids)):null}var Kl=[.36,.6,.96],Hu=1.5,Cx=.25,Px=.6,Ix={l:"r",r:"l"},ku=i=>i.reduce((t,e)=>[t[0]+e[0]/i.length,t[1]+e[1]/i.length,t[2]+e[2]/i.length],[0,0,0]),Jl=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function Lx(i,t,e,n=Hu){let s=new P(e[0]-t[0],e[1]-t[1],e[2]-t[2]);s.lengthSq()<1e-8&&s.set(0,1,0);let r=s.normalize(),a=new P().crossVectors(r,Math.abs(r.y)<.9?new P(0,1,0):new P(1,0,0)).normalize(),o=new P().crossVectors(r,a),l=new Float32Array(i.length),c=new P;for(let h=0;h<i.length;h+=3)c.set(i[h]-t[0],i[h+1]-t[1],i[h+2]-t[2]),l[h]=c.dot(r)/n,l[h+1]=c.dot(a)/n,l[h+2]=c.dot(o)/n;return l}function Dx(i,t,e=Hu){let n=new Float32Array(i.length/2*3);for(let s=0;s<i.length/2;s++)n[s*3]=i[s*2]*t/e,n[s*3+1]=i[s*2+1]*4,n[s*3+2]=.5;return n}var Ux=`
attribute vec3 netCoord;
uniform float uLift;
varying vec3 vNet;
void main() {
  vNet = netCoord;
  vec3 p = position + normalize(normal) * uLift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,Nx=`
uniform vec3 uColor;
varying vec3 vNet;
void main() {
  vec3 w = max(fwidth(vNet), vec3(1e-4));
  vec3 gap = abs(fract(vNet - 0.5) - 0.5) / w;
  vec3 lines = (1.0 - clamp(gap - 0.5, 0.0, 1.0)) * (1.0 - smoothstep(0.25, 0.5, w));
  float line = max(max(lines.x, lines.y), lines.z);
  gl_FragColor = vec4(uColor, mix(0.3, 0.9, line));
}`;function zu(i,t){return new ke({uniforms:{uColor:{value:new P(...t)},uLift:{value:i}},vertexShader:Ux,fragmentShader:Nx,transparent:!0,depthWrite:!1})}function Vu(i,t){let e=[i].flat().map(h=>Si.find(u=>u.id===h)),n=[],s=[];for(let h of e)for(let u of["l","r"]){let d=[];for(let f of h.stations){let g=f.opp?Ix[u]:u,_=f.ids.map(m=>t.find(p=>p.info.id===m&&(p.info.side===g||p.info.side==="m")));d.push(_);for(let m of _){if(n.some(x=>x.part===m))continue;let p=m.mesh.geometry;p.getAttribute("netCoord")||p.setAttribute("netCoord",new fe(Lx(m.rest,m.info.a,m.info.b),3));let S=zu(Cx,Kl),v=new ae(p,S);v.renderOrder=5,m.mesh.add(v),n.push({part:m,mesh:v,material:S})}}s.push(d)}let r=new De,a=zu(0,Kl);function o(){for(let h of r.children)h.geometry.dispose();r.clear()}function l(h,u,d){for(let{part:f,material:g}of n){let _=d?f.info.measure?ql(f.delta):_n.same:Kl;g.uniforms.uColor.value.set(..._)}o();for(let f of s){let g=null;for(let _ of f){let m=[],p=[];for(let v of _){let x=u(v),C=so(v.info,h).map(R=>[R[0]+x[0],R[1]+x[1],R[2]+x[2]]);m.push(C[0]),p.push(C[C.length-1])}let S=[ku(m),ku(p)];if(g){let v=null;for(let C of g)for(let R of S)(!v||Jl(C,R)<Jl(v[0],v[1]))&&(v=[C,R]);let x=Jl(v[0],v[1]);if(x>.01){let C=new Ls(new P(...v[0]),new P(...v[1])),R=new Br(C,8,Px,8,!1);R.setAttribute("netCoord",new fe(Dx(R.getAttribute("uv").array,x),3));let I=new ae(R,a);I.renderOrder=5,r.add(I)}}g=S}}}function c(){for(let{part:h,mesh:u,material:d}of n)h.mesh.remove(u),d.dispose();o(),a.dispose()}return{group:r,shells:n,update:l,dispose:c}}var Gu=new Oe,ho=new P,cs=class extends Gr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pe(t,3)),this.setAttribute("uv",new pe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new vi(e,6,1);return this.setAttribute("instanceStart",new gn(n,3,0)),this.setAttribute("instanceEnd",new gn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new vi(e,6,1);return this.setAttribute("instanceColorStart",new gn(n,3,0)),this.setAttribute("instanceColorEnd",new gn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new kr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Gu.setFromBufferAttribute(e),this.boundingBox.union(Gu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ho.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ho)),ho.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ho));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};at.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new mt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Le.line={uniforms:Jr.merge([at.common,at.fog,at.line]),vertexShader:`
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
		`};var Jn=class extends ke{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Jr.clone(Le.line.uniforms),vertexShader:Le.line.vertexShader,fragmentShader:Le.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var jl=new Qt,Wu=new P,Xu=new P,be=new Qt,Se=new Qt,yn=new Qt,Ql=new P,tc=new It,Ee=new qr,qu=new P,uo=new Oe,fo=new an,vn=new Qt,Mn,Ei;function $u(i,t,e){return vn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),vn.multiplyScalar(1/vn.w),vn.x=Ei/e.width,vn.y=Ei/e.height,vn.applyMatrix4(i.projectionMatrixInverse),vn.multiplyScalar(1/vn.w),Math.abs(Math.max(vn.x,vn.y))}function Fx(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ee.start.fromBufferAttribute(s,o),Ee.end.fromBufferAttribute(r,o),Ee.applyMatrix4(e);let c=new P,h=new P;Mn.distanceSqToSegment(Ee.start,Ee.end,h,c),h.distanceTo(c)<Ei*.5&&t.push({point:h,pointOnLine:c,distance:Mn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Ox(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Mn.at(1,yn),yn.w=1,yn.applyMatrix4(t.matrixWorldInverse),yn.applyMatrix4(n),yn.multiplyScalar(1/yn.w),yn.x*=r.x/2,yn.y*=r.y/2,yn.z=0,Ql.copy(yn),tc.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=h;d<f;d++){if(be.fromBufferAttribute(l,d),Se.fromBufferAttribute(c,d),be.w=1,Se.w=1,be.applyMatrix4(tc),Se.applyMatrix4(tc),be.z>u&&Se.z>u)continue;if(be.z>u){let v=be.z-Se.z,x=(be.z-u)/v;be.lerp(Se,x)}else if(Se.z>u){let v=Se.z-be.z,x=(Se.z-u)/v;Se.lerp(be,x)}be.applyMatrix4(n),Se.applyMatrix4(n),be.multiplyScalar(1/be.w),Se.multiplyScalar(1/Se.w),be.x*=r.x/2,be.y*=r.y/2,Se.x*=r.x/2,Se.y*=r.y/2,Ee.start.copy(be),Ee.start.z=0,Ee.end.copy(Se),Ee.end.z=0;let _=Ee.closestPointToPointParameter(Ql,!0);Ee.at(_,qu);let m=Kr.lerp(be.z,Se.z,_),p=m>=-1&&m<=1,S=Ql.distanceTo(qu)<Ei*.5;if(p&&S){Ee.start.fromBufferAttribute(l,d),Ee.end.fromBufferAttribute(c,d),Ee.start.applyMatrix4(a),Ee.end.applyMatrix4(a);let v=new P,x=new P;Mn.distanceSqToSegment(Ee.start,Ee.end,x,v),e.push({point:x,pointOnLine:v,distance:Mn.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var po=class extends ae{constructor(t=new cs,e=new Jn({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Wu.fromBufferAttribute(e,a),Xu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Wu.distanceTo(Xu);let r=new vi(s,2,1);return t.setAttribute("instanceDistanceStart",new gn(r,1,0)),t.setAttribute("instanceDistanceEnd",new gn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Mn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ei=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),fo.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ei*.5;else{let u=Math.max(s.near,fo.distanceToPoint(Mn.origin));c=$u(s,u,l.resolution)}if(fo.radius+=c,Mn.intersectsSphere(fo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),uo.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ei*.5;else{let u=Math.max(s.near,uo.distanceToPoint(Mn.origin));h=$u(s,u,l.resolution)}uo.expandByScalar(h),Mn.intersectsBox(uo)!==!1&&(n?Fx(this,e):Ox(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(jl),this.material.uniforms.resolution.value.set(jl.z,jl.w))}};var wi=class extends cs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var mo=class extends po{constructor(t=new wi,e=new Jn({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var w=(i,t,e,n,s,r,a,o="")=>({code:i,name:t,seg:e,hub:n,p:[s,r,a],note:o}),Bx={head:{point:[0,162,-1.5]},neck:{a:[0,143.5,-3],b:[0,153.5,-2]},chest:{a:[0,119,-4],b:[0,142,-4]},belly:{a:[0,97,-3],b:[0,119,-3]},pelvis:{a:[0,80,-3],b:[0,97,-3]},arm:{a:[16.99,138.34,-2.63],b:[20.6,109.08,-3.21]},forearm:{a:[20.6,109.08,-3.21],b:[26.42,85.08,1.98]},hand:{a:[26.42,85.08,1.98],b:[27.7,77.3,4]},thigh:{a:[8.39,86.03,-.5],b:[7.37,45.79,-3.28]},shank:{a:[7.37,45.79,-3.28],b:[7.43,7.41,-4.55]},foot:{a:[7.43,7.41,-4.55],b:[9.8,2,10.5]},none:null},kx={head:.6,neck:1.6,chest:1.4,belly:1.6,pelvis:1.8,arm:1.6,forearm:1,hand:.5,thigh:2,shank:1.2,foot:.5,none:0},zs=[{id:"lu",code:"LU",name:"\u624B\u592A\u9670\u80BA\u7D93",short:"\u80BA\u7D93",organ:"\u80BA",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u62C7\u6307\uFF09",color:[.88,.92,.92],points:[w("LU1","\u4E2D\u5E9C","thoraxUp","chest",12,135.5,7.2,"\u7B2C\u4E00\u808B\u9593\u3001\u9396\u9AA8\u4E0B\u7AA9\u5916\u4E0B\u65B9"),w("LU2","\u96F2\u9580","clavicle","chest",13.2,139.2,4.6,"\u9396\u9AA8\u4E0B\u7AA9\u51F9\u9677\u8655"),w("LU3","\u5929\u5E9C","arm","arm",17.4,126,2,"\u4E0A\u81C2\u5167\u5074\u3001\u80B1\u4E8C\u982D\u808C\u6A48\u5074\u7DE3"),w("LU4","\u4FE0\u767D","arm","arm",18.4,120,2.4,"\u5929\u5E9C\u4E0B 1 \u5BF8"),w("LU5","\u5C3A\u6FA4","arm","arm",22.6,110.5,2.2,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u6A48\u5074"),w("LU6","\u5B54\u6700","radius","forearm",25,99,2.4,"\u8155\u6A6B\u7D0B\u4E0A 7 \u5BF8\u3001\u6A48\u9AA8\u5167\u7DE3"),w("LU7","\u5217\u7F3A","radius","forearm",27.4,88.2,2.6,"\u6A48\u9AA8\u8396\u7A81\u4E0A\u65B9\u3001\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8"),w("LU8","\u7D93\u6E20","radius","forearm",28,86.6,2.8,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8\u3001\u6A48\u52D5\u8108\u5916\u5074"),w("LU9","\u592A\u6DF5","radius","forearm",28.3,85.3,3,"\u8155\u6A6B\u7D0B\u6A48\u5074\u3001\u6A48\u52D5\u8108\u640F\u52D5\u8655"),w("LU10","\u9B5A\u969B","thumbMeta","hand",30.2,81.4,5,"\u7B2C\u4E00\u638C\u9AA8\u6A48\u5074\u4E2D\u9EDE\u3001\u8D64\u767D\u8089\u969B"),w("LU11","\u5C11\u5546","thumbDist","none",33.3,77.3,6.9,"\u62C7\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"li",code:"LI",name:"\u624B\u967D\u660E\u5927\u8178\u7D93",short:"\u5927\u8178\u7D93",organ:"\u5927\u8178",group:"handYang",flow:"\u624B\uFF08\u98DF\u6307\uFF09\u2192 \u982D\u9762",color:[.97,.52,.12],points:[w("LI1","\u5546\u967D","indexDist","none",32.1,71.3,8.4,"\u98DF\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1"),w("LI2","\u4E8C\u9593","indexProx","none",31.4,74.2,6.2,"\u98DF\u6307\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u524D\u65B9"),w("LI3","\u4E09\u9593","hand","hand",30.4,77.4,4.6,"\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u5F8C\u65B9"),w("LI4","\u5408\u8C37","hand","hand",29.3,80.6,2.4,"\u7B2C\u4E00\u3001\u4E8C\u638C\u9AA8\u4E4B\u9593\uFF08\u864E\u53E3\uFF09"),w("LI5","\u967D\u8C3F","hand","hand",29,84.3,1.4,"\u8155\u80CC\u6A48\u5074\u3001\u9F3B\u7159\u58FA\u51F9\u9677\u4E2D"),w("LI6","\u504F\u6B77","radius","forearm",28,91,.6,"\u967D\u8C3F\u4E0A 3 \u5BF8"),w("LI7","\u6EAB\u6E9C","radius","forearm",27.2,95,.1,"\u967D\u8C3F\u4E0A 5 \u5BF8"),w("LI8","\u4E0B\u5EC9","radius","forearm",26.2,102.5,-.2,"\u66F2\u6C60\u4E0B 4 \u5BF8"),w("LI9","\u4E0A\u5EC9","radius","forearm",26,104.5,-.2,"\u66F2\u6C60\u4E0B 3 \u5BF8"),w("LI10","\u624B\u4E09\u91CC","radius","forearm",25.6,106.5,-.1,"\u66F2\u6C60\u4E0B 2 \u5BF8"),w("LI11","\u66F2\u6C60","arm","arm",24.8,110.5,.5,"\u5C48\u8098\u6642\u8098\u6A6B\u7D0B\u5916\u5074\u7AEF"),w("LI12","\u8098\u9ACE","arm","arm",25,113,-2,"\u80B1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u7DE3"),w("LI13","\u624B\u4E94\u91CC","arm","arm",23,119,-2,"\u66F2\u6C60\u4E0A 3 \u5BF8"),w("LI14","\u81C2\u81D1","arm","arm",21,125,-2,"\u4E09\u89D2\u808C\u6B62\u9EDE\u524D\u7DE3"),w("LI15","\u80A9\u9AC3","scapula","arm",17.8,139.8,.2,"\u80A9\u5CF0\u524D\u4E0B\u65B9\u51F9\u9677"),w("LI16","\u5DE8\u9AA8","scapula","chest",12,142.6,-3.4,"\u9396\u9AA8\u80A9\u5CF0\u7AEF\u8207\u80A9\u80DB\u5CA1\u4E4B\u9593"),w("LI17","\u5929\u9F0E","neckLow","neck",4.6,146.2,.8,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),w("LI18","\u6276\u7A81","neckUp","neck",4.6,150.2,2.4,"\u5589\u7D50\u65C1\u3001\u80F8\u9396\u4E73\u7A81\u808C\u4E2D"),w("LI19","\u53E3\u79BE\u9ACE","head","head",1,155.2,9.2,"\u9F3B\u5B54\u5916\u7DE3\u76F4\u4E0B\u3001\u6C34\u6E9D\u65C1"),w("LI20","\u8FCE\u9999","head","head",1.6,156.4,9.2,"\u9F3B\u7FFC\u5916\u7DE3\u4E2D\u9EDE\u65C1")]},{id:"st",code:"ST",name:"\u8DB3\u967D\u660E\u80C3\u7D93",short:"\u80C3\u7D93",organ:"\u80C3",group:"footYang",flow:"\u982D\u9762 \u2192 \u8DB3\uFF08\u7B2C\u4E8C\u8DBE\uFF09",color:[.88,.82,.22],points:[w("ST1","\u627F\u6CE3","head","head",3,157.4,7.6,"\u77B3\u5B54\u76F4\u4E0B\u3001\u773C\u7736\u4E0B\u7DE3"),w("ST2","\u56DB\u767D","head","head",3,156.4,8,"\u627F\u6CE3\u76F4\u4E0B\u3001\u7736\u4E0B\u5B54\u8655"),w("ST4","\u5730\u5009","head","head",2,153.6,8.4,"\u53E3\u89D2\u65C1"),w("ST5","\u5927\u8FCE","head","head",3.8,151.4,6.4,"\u4E0B\u9837\u89D2\u524D\u65B9\u3001\u54AC\u808C\u524D\u7DE3"),w("ST6","\u9830\u8ECA","head","head",5.2,152.2,3,"\u4E0B\u9837\u89D2\u524D\u4E0A\u65B9\u3001\u54AC\u808C\u9686\u8D77\u8655"),w("ST7","\u4E0B\u95DC","head","head",6,156.4,3.4,"\u9874\u5F13\u4E0B\u7DE3\u51F9\u9677"),w("ST8","\u982D\u7DAD","head","head",5,166.4,4.8,"\u524D\u9AEE\u969B\u984D\u89D2"),w("ST9","\u4EBA\u8FCE","neckUp","neck",2.8,150.4,4.4,"\u5589\u7D50\u65C1\u3001\u9838\u52D5\u8108\u640F\u52D5\u8655"),w("ST10","\u6C34\u7A81","neckLow","neck",3,147.4,4,"\u4EBA\u8FCE\u8207\u6C23\u820D\u4E4B\u9593"),w("ST11","\u6C23\u820D","neckLow","neck",2.6,143.6,4.4,"\u9396\u9AA8\u5167\u5074\u7AEF\u4E0A\u7DE3"),w("ST12","\u7F3A\u76C6","clavicle","chest",8,141.4,2.6,"\u9396\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),w("ST13","\u6C23\u6236","thoraxUp","chest",8,138.4,5.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),w("ST15","\u5C4B\u7FF3","thoraxUp","chest",8.6,133.4,8.4,"\u7B2C\u4E8C\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),w("ST17","\u4E73\u4E2D","thoraxMid","chest",9.6,130,10.8,"\u4E73\u982D\u4E2D\u592E\uFF08\u53EA\u4F5C\u5B9A\u4F4D\uFF0C\u4E0D\u91DD\u4E0D\u7078\uFF09"),w("ST18","\u4E73\u6839","thoraxMid","chest",9,126.4,10,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E94\u808B\u9593"),w("ST21","\u6881\u9580","L1","belly",4,111,10,"\u81CD\u4E0A 4 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),w("ST25","\u5929\u6A1E","L3","belly",4,103,10.2,"\u81CD\u65C1 2 \u5BF8"),w("ST28","\u6C34\u9053","pelvis","pelvis",4,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),w("ST30","\u6C23\u885D","pelvis","pelvis",4,92.6,7,"\u8179\u80A1\u6E9D\u3001\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u65C1 2 \u5BF8"),w("ST31","\u9AC0\u95DC","femur","thigh",9.6,86,4,"\u5927\u817F\u524D\u9762\u3001\u9AC2\u524D\u4E0A\u68D8\u8207\u9AD5\u9AA8\u5916\u7DE3\u9023\u7DDA\u4E0A"),w("ST32","\u4F0F\u5154","femur","thigh",9.6,58,3,"\u9AD5\u5E95\u4E0A 6 \u5BF8"),w("ST34","\u6881\u4E18","femur","thigh",9.6,50,2,"\u9AD5\u5E95\u4E0A 2 \u5BF8"),w("ST35","\u72A2\u9F3B","shank","shank",10.4,42.6,1.6,"\u9AD5\u97CC\u5E36\u5916\u5074\u51F9\u9677\uFF08\u5916\u819D\u773C\uFF09"),w("ST36","\u8DB3\u4E09\u91CC","shank","shank",9.6,36.6,1.6,"\u72A2\u9F3B\u4E0B 3 \u5BF8\u3001\u811B\u9AA8\u524D\u5D74\u5916\u4E00\u6A6B\u6307"),w("ST37","\u4E0A\u5DE8\u865B","shank","shank",9.6,30.6,1.2,"\u72A2\u9F3B\u4E0B 6 \u5BF8"),w("ST38","\u689D\u53E3","shank","shank",9.6,26.6,1,"\u72A2\u9F3B\u4E0B 8 \u5BF8"),w("ST39","\u4E0B\u5DE8\u865B","shank","shank",9.6,24.6,1,"\u72A2\u9F3B\u4E0B 9 \u5BF8"),w("ST40","\u8C50\u9686","shank","shank",11,26.6,-.2,"\u5916\u8E1D\u5C16\u4E0A 8 \u5BF8\u3001\u689D\u53E3\u5916\u4E00\u6A6B\u6307"),w("ST41","\u89E3\u8C3F","talus","foot",7.6,8.6,.6,"\u8E1D\u95DC\u7BC0\u524D\u6A6B\u7D0B\u4E2D\u592E\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("ST42","\u885D\u967D","foot","foot",8.6,5.4,4,"\u8DB3\u80CC\u6700\u9AD8\u8655\u3001\u52D5\u8108\u640F\u52D5\u8655"),w("ST43","\u9677\u8C37","foot","foot",9.3,4.2,6.2,"\u7B2C\u4E8C\u3001\u4E09\u8E60\u9AA8\u4E4B\u9593"),w("ST44","\u5167\u5EAD","foot","foot",10,2.4,8.6,"\u7B2C\u4E8C\u3001\u4E09\u8DBE\u7E2B\u7AEF"),w("ST45","\u53B2\u514C","foot","none",10.8,1.4,13.3,"\u7B2C\u4E8C\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"sp",code:"SP",name:"\u8DB3\u592A\u9670\u813E\u7D93",short:"\u813E\u7D93",organ:"\u813E",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u80F8\u8179",color:[.7,.45,.2],points:[w("SP1","\u96B1\u767D","foot","none",6.6,1.8,12.6,"\u8DB3\u5927\u8DBE\u5167\u5074\u8DBE\u7532\u89D2\u65C1"),w("SP2","\u5927\u90FD","foot","foot",5.9,2.4,9.8,"\u8DB3\u5927\u8DBE\u672C\u7BC0\u524D\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("SP3","\u592A\u767D","foot","foot",5.6,3,6.4,"\u7B2C\u4E00\u8E60\u9AA8\u5C0F\u982D\u5F8C\u4E0B\u65B9"),w("SP4","\u516C\u5B6B","foot","foot",5.6,3.6,3.4,"\u7B2C\u4E00\u8E60\u9AA8\u57FA\u5E95\u524D\u4E0B\u65B9"),w("SP5","\u5546\u4E18","foot","foot",4.9,6,-.4,"\u5167\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),w("SP6","\u4E09\u9670\u4EA4","shank","shank",3.9,14,-3,"\u5167\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u7DE3\u5F8C\u65B9"),w("SP7","\u6F0F\u8C37","shank","shank",4.2,20,-3,"\u5167\u8E1D\u5C16\u4E0A 6 \u5BF8"),w("SP8","\u5730\u6A5F","shank","shank",4.4,31,-2.4,"\u9670\u9675\u6CC9\u4E0B 3 \u5BF8"),w("SP9","\u9670\u9675\u6CC9","shank","shank",4.4,40.4,-1.4,"\u811B\u9AA8\u5167\u5074\u9AC1\u4E0B\u7DE3\u51F9\u9677"),w("SP10","\u8840\u6D77","femur","thigh",6,50,1.6,"\u9AD5\u5E95\u5167\u5074\u7AEF\u4E0A 2 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u9686\u8D77"),w("SP11","\u7B95\u9580","femur","thigh",5.6,62,1,"\u8840\u6D77\u8207\u885D\u9580\u9023\u7DDA\u4E0A"),w(null,null,"femur","thigh",5.6,77,3.5),w("SP12","\u885D\u9580","pelvis","pelvis",5.6,91.4,6,"\u8179\u80A1\u6E9D\u5916\u5074\u3001\u80A1\u52D5\u8108\u5916\u5074"),w("SP15","\u5927\u6A6B","L3","belly",8,103,8.6,"\u81CD\u65C1 4 \u5BF8"),w("SP17","\u98DF\u7AC7","thoraxMid","chest",11,121,7,"\u7B2C\u4E94\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 6 \u5BF8"),w("SP21","\u5927\u5305","thoraxMid","chest",13,122,0,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u7B2C\u516D\u808B\u9593")]},{id:"ht",code:"HT",name:"\u624B\u5C11\u9670\u5FC3\u7D93",short:"\u5FC3\u7D93",organ:"\u5FC3",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u5C0F\u6307\uFF09",color:[.78,.16,.26],points:[w("HT1","\u6975\u6CC9","arm","arm",14.4,133,-1,"\u814B\u7AA9\u9802\u9EDE\u3001\u814B\u52D5\u8108\u640F\u52D5\u8655"),w("HT2","\u9752\u9748","arm","arm",17,117,0,"\u8098\u6A6B\u7D0B\u4E0A 3 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5167\u5074\u6E9D"),w("HT3","\u5C11\u6D77","arm","arm",18.2,110.5,1.4,"\u8098\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u80B1\u9AA8\u5167\u4E0A\u9AC1\u524D\u65B9"),w("HT4","\u9748\u9053","ulna","forearm",23,88,3.2,"\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),w("HT5","\u901A\u91CC","ulna","forearm",23.3,87,3.3,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8"),w("HT6","\u9670\u90C4","ulna","forearm",23.6,86,3.4,"\u8155\u6A6B\u7D0B\u4E0A 0.5 \u5BF8"),w("HT7","\u795E\u9580","hand","hand",24,85,3.6,"\u8155\u6A6B\u7D0B\u5C3A\u5074\u7AEF\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),w("HT8","\u5C11\u5E9C","hand","hand",25,79,5,"\u638C\u5FC3\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593"),w("HT9","\u5C11\u885D","littleDist","none",23.4,72.5,8.2,"\u5C0F\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"si",code:"SI",name:"\u624B\u592A\u967D\u5C0F\u8178\u7D93",short:"\u5C0F\u8178\u7D93",organ:"\u5C0F\u8178",group:"handYang",flow:"\u624B\uFF08\u5C0F\u6307\uFF09\u2192 \u982D\u9762",color:[.95,.52,.45],points:[w("SI1","\u5C11\u6FA4","littleDist","none",22.6,72.6,8,"\u5C0F\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),w("SI2","\u524D\u8C37","littleProx","none",22.4,75.6,5,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u524D\u65B9"),w("SI3","\u5F8C\u8C3F","hand","hand",22.9,78.6,3,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u5F8C\u65B9\u3001\u63E1\u62F3\u6642\u6A6B\u7D0B\u982D"),w("SI4","\u8155\u9AA8","hand","hand",23.4,82.4,1.8,"\u7B2C\u4E94\u638C\u9AA8\u57FA\u5E95\u8207\u9264\u9AA8\u4E4B\u9593"),w("SI5","\u967D\u8C37","hand","hand",23.6,84.8,.8,"\u8155\u80CC\u5C3A\u5074\u3001\u5C3A\u9AA8\u8396\u7A81\u8207\u4E09\u89D2\u9AA8\u4E4B\u9593"),w("SI6","\u990A\u8001","ulna","forearm",23,87,-.6,"\u5C3A\u9AA8\u8396\u7A81\u6A48\u5074\u9AA8\u7E2B\u4E2D"),w("SI7","\u652F\u6B63","ulna","forearm",22.6,95,-1.4,"\u8155\u80CC\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5C3A\u9AA8\u80CC\u5074"),w("SI8","\u5C0F\u6D77","ulna","forearm",19.6,110,-5,"\u5C3A\u9AA8\u9DF9\u5634\u8207\u80B1\u9AA8\u5167\u4E0A\u9AC1\u4E4B\u9593"),w("SI9","\u80A9\u8C9E","scapula","arm",15.2,132,-5.6,"\u814B\u5F8C\u7D0B\u982D\u4E0A 1 \u5BF8"),w("SI10","\u81D1\u4FDE","scapula","chest",15,137,-6,"\u80A9\u80DB\u5CA1\u4E0B\u7DE3\u3001\u814B\u5F8C\u7D0B\u982D\u76F4\u4E0A"),w("SI11","\u5929\u5B97","scapula","chest",11,133,-7.2,"\u80A9\u80DB\u5CA1\u4E0B\u7AA9\u4E2D\u592E"),w("SI12","\u79C9\u98A8","scapula","chest",10.5,139.4,-6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u4E2D\u592E"),w("SI13","\u66F2\u57A3","scapula","chest",7.6,139.4,-6.6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u5167\u5074\u7AEF"),w("SI14","\u80A9\u5916\u4FDE","thoraxUp","chest",6,143.6,-7,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 3 \u5BF8"),w("SI15","\u80A9\u4E2D\u4FDE","neckLow","neck",4.2,145.6,-6.4,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 2 \u5BF8"),w("SI16","\u5929\u7A97","neckUp","neck",5,150,.2,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3\u3001\u5589\u7D50\u65C1"),w("SI17","\u5929\u5BB9","head","head",5,152.2,1.6,"\u4E0B\u9837\u89D2\u5F8C\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u524D\u7DE3"),w("SI18","\u9874\u9ACE","head","head",5,157,5.4,"\u5916\u773C\u89D2\u76F4\u4E0B\u3001\u9874\u9AA8\u4E0B\u7DE3"),w("SI19","\u807D\u5BAE","head","head",6.6,157.6,2.2,"\u8033\u5C4F\u524D\u3001\u5F35\u53E3\u51F9\u9677\u8655")]},{id:"bl",code:"BL",name:"\u8DB3\u592A\u967D\u8180\u80F1\u7D93",short:"\u8180\u80F1\u7D93",organ:"\u8180\u80F1",group:"footYang",flow:"\u982D\u9762 \u2192 \u80CC \u2192 \u8DB3\uFF08\u5C0F\u8DBE\uFF09",color:[.3,.7,.98],points:[w("BL1","\u775B\u660E","head","head",1.4,158.4,7.4,"\u5167\u773C\u89D2\u7A0D\u4E0A\u65B9\u51F9\u9677"),w("BL2","\u6522\u7AF9","head","head",1.9,160.4,7.9,"\u7709\u982D\u51F9\u9677\u4E2D"),w(null,null,"head","head",2.2,164.5,6.5),w("BL7","\u901A\u5929","head","head",2.2,169.6,.8,"\u524D\u9AEE\u969B\u6B63\u4E2D\u76F4\u4E0A 4 \u5BF8\u3001\u65C1\u958B 1.5 \u5BF8"),w(null,null,"head","head",2.6,166,-6),w(null,null,"head","head",2.6,159.5,-9.3),w("BL10","\u5929\u67F1","neckUp","neck",2.6,153.2,-7.4,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u65C1\u958B 1.3 \u5BF8\u3001\u659C\u65B9\u808C\u5916\u7DE3"),w("BL11","\u5927\u677C","thoraxUp","chest",3,143.4,-8,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL13","\u80BA\u4FDE","thoraxUp","chest",3,139.4,-9.4,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL15","\u5FC3\u4FDE","thoraxMid","chest",3,134.4,-9.4,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL17","\u8188\u4FDE","thoraxMid","chest",3,128,-9.4,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL18","\u809D\u4FDE","thoraxLow","chest",3,122.4,-9.2,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL20","\u813E\u4FDE","thoraxLow","belly",3,116.4,-8.2,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL21","\u80C3\u4FDE","thoraxLow","belly",3,113.4,-7.6,"\u7B2C\u5341\u4E8C\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL23","\u814E\u4FDE","L2","belly",3,107,-6.8,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL25","\u5927\u8178\u4FDE","L4","belly",3,100,-6.6,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL27","\u5C0F\u8178\u4FDE","pelvis","pelvis",2.6,95.6,-7.6,"\u7B2C\u4E00\u85A6\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL32","\u6B21\u9ACE","pelvis","pelvis",2.2,92,-8.2,"\u7B2C\u4E8C\u85A6\u5F8C\u5B54\u4E2D"),w("BL36","\u627F\u6276","femur","thigh",7,80,-7.6,"\u81C0\u6A6B\u7D0B\u4E2D\u9EDE"),w("BL37","\u6BB7\u9580","femur","thigh",7.4,65,-6.6,"\u627F\u6276\u8207\u59D4\u4E2D\u9023\u7DDA\u4E0A\u3001\u627F\u6276\u4E0B 6 \u5BF8"),w("BL40","\u59D4\u4E2D","shank","shank",7.4,44.6,-6.8,"\u8195\u6A6B\u7D0B\u4E2D\u9EDE"),w("BL57","\u627F\u5C71","shank","shank",7.4,26,-7.6,"\u5C0F\u817F\u5F8C\u5074\u3001\u8153\u8178\u808C\u5169\u808C\u8179\u4E4B\u9593\u7684\u4EBA\u5B57\u7D0B"),w("BL58","\u98DB\u63DA","shank","shank",9.4,21,-6.8,"\u5D11\u5D19\u76F4\u4E0A 7 \u5BF8\u3001\u627F\u5C71\u5916\u4E0B\u65B9"),w("BL60","\u5D11\u5D19","shank","shank",11,7.6,-5.8,"\u5916\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),w("BL62","\u7533\u8108","foot","foot",12,4.6,-3.8,"\u5916\u8E1D\u5C16\u76F4\u4E0B\u51F9\u9677"),w("BL64","\u4EAC\u9AA8","foot","foot",13.5,2.8,1.4,"\u7B2C\u4E94\u8E60\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("BL65","\u675F\u9AA8","foot","foot",14,2.2,4.4,"\u7B2C\u4E94\u8E60\u8DBE\u95DC\u7BC0\u5F8C\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("BL67","\u81F3\u9670","foot","none",14.6,1.2,9.4,"\u8DB3\u5C0F\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"ki",code:"KI",name:"\u8DB3\u5C11\u9670\u814E\u7D93",short:"\u814E\u7D93",organ:"\u814E",group:"footYin",flow:"\u8DB3\uFF08\u8DB3\u5E95\uFF09\u2192 \u80F8\u8179",color:[.25,.32,.78],points:[w("KI1","\u6E67\u6CC9","foot","foot",7.5,1.1,4.4,"\u8DB3\u5E95\u524D 1/3 \u51F9\u9677\uFF08\u5C48\u8DBE\u6642\u6700\u51F9\u8655\uFF09"),w("KI2","\u7136\u8C37","foot","foot",5.4,3.4,1.4,"\u821F\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("KI3","\u592A\u8C3F","shank","shank",4.8,8,-4.8,"\u5167\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),w("KI5","\u6C34\u6CC9","foot","foot",5,5.4,-5,"\u592A\u8C3F\u76F4\u4E0B 1 \u5BF8"),w("KI6","\u7167\u6D77","foot","foot",4.5,5.6,-2.4,"\u5167\u8E1D\u5C16\u4E0B\u65B9\u51F9\u9677"),w("KI7","\u5FA9\u6E9C","shank","shank",4.5,12,-4.4,"\u592A\u8C3F\u4E0A 2 \u5BF8\u3001\u8DDF\u8171\u524D\u7DE3"),w("KI9","\u7BC9\u8CD3","shank","shank",5,22,-4.8,"\u592A\u8C3F\u4E0A 5 \u5BF8\u3001\u8153\u8178\u808C\u5167\u5074"),w("KI10","\u9670\u8C37","shank","shank",5,44.6,-6,"\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u5169\u808C\u8171\u4E4B\u9593"),w(null,null,"femur","thigh",5.5,58,-4),w(null,null,"femur","thigh",5,72,-2),w(null,null,"pelvis","pelvis",3,82,2),w("KI11","\u6A6B\u9AA8","pelvis","pelvis",1.2,82.6,5.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 0.5 \u5BF8"),w("KI13","\u6C23\u7A74","pelvis","pelvis",1.2,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u65C1\u958B 0.5 \u5BF8"),w("KI16","\u8093\u4FDE","L3","belly",1.2,103,10.4,"\u81CD\u65C1 0.5 \u5BF8"),w("KI21","\u5E7D\u9580","thoraxLow","belly",1.3,117,10.8,"\u81CD\u4E0A 6 \u5BF8\u65C1\u958B 0.5 \u5BF8"),w("KI23","\u795E\u5C01","thoraxMid","chest",2,130,10.8,"\u7B2C\u56DB\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8"),w("KI27","\u4FDE\u5E9C","thoraxUp","chest",4,138.2,6.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8")]},{id:"pc",code:"PC",name:"\u624B\u53A5\u9670\u5FC3\u5305\u7D93",short:"\u5FC3\u5305\u7D93",organ:"\u5FC3\u5305",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u4E2D\u6307\uFF09",color:[.48,.34,.92],points:[w("PC1","\u5929\u6C60","thoraxMid","chest",12,130,8.6,"\u7B2C\u56DB\u808B\u9593\u3001\u4E73\u982D\u5916\u5074 1 \u5BF8"),w("PC2","\u5929\u6CC9","arm","arm",17,128,2.6,"\u814B\u524D\u7D0B\u982D\u4E0B 2 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5169\u982D\u4E4B\u9593"),w("PC3","\u66F2\u6FA4","arm","arm",20.4,110.5,2.8,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u5C3A\u5074"),w("PC4","\u90C4\u9580","radius","forearm",24,95,3,"\u8155\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("PC5","\u9593\u4F7F","radius","forearm",25,91,3.3,"\u8155\u6A6B\u7D0B\u4E0A 3 \u5BF8"),w("PC6","\u5167\u95DC","radius","forearm",25.4,89,3.5,"\u8155\u6A6B\u7D0B\u4E0A 2 \u5BF8\u3001\u638C\u9577\u808C\u8171\u8207\u6A48\u5074\u5C48\u8155\u808C\u8171\u4E4B\u9593"),w("PC7","\u5927\u9675","hand","hand",26.3,85,4,"\u8155\u6A6B\u7D0B\u4E2D\u9EDE\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("PC8","\u52DE\u5BAE","hand","hand",27.4,79,5.4,"\u638C\u5FC3\u7B2C\u4E8C\u3001\u4E09\u638C\u9AA8\u4E4B\u9593\uFF08\u63E1\u62F3\u6642\u4E2D\u6307\u5C16\u6240\u6307\uFF09"),w("PC9","\u4E2D\u885D","middleDist","none",28.5,70,9.6,"\u4E2D\u6307\u5C16\u7AEF\u4E2D\u592E")]},{id:"te",code:"TE",name:"\u624B\u5C11\u967D\u4E09\u7126\u7D93",short:"\u4E09\u7126\u7D93",organ:"\u4E09\u7126",group:"handYang",flow:"\u624B\uFF08\u7121\u540D\u6307\uFF09\u2192 \u982D\u9762",color:[.62,.86,.25],points:[w("TE1","\u95DC\u885D","ringDist","none",25.2,71.4,9.2,"\u7121\u540D\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),w("TE2","\u6DB2\u9580","hand","hand",25,77.4,4.4,"\u7B2C\u56DB\u3001\u4E94\u6307\u7E2B\u7AEF"),w("TE3","\u4E2D\u6E1A","hand","hand",25.3,79.6,2.8,"\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593\u3001\u638C\u6307\u95DC\u7BC0\u5F8C\u65B9"),w("TE4","\u967D\u6C60","hand","hand",25.8,84.5,.8,"\u8155\u80CC\u6A6B\u7D0B\u4E2D\u3001\u4F38\u6307\u808C\u8171\u5C3A\u5074"),w("TE5","\u5916\u95DC","radius","forearm",25,88.6,-1,"\u967D\u6C60\u4E0A 2 \u5BF8\u3001\u6A48\u5C3A\u9AA8\u4E4B\u9593"),w("TE6","\u652F\u6E9D","radius","forearm",24.8,90.6,-1.3,"\u967D\u6C60\u4E0A 3 \u5BF8"),w("TE7","\u6703\u5B97","ulna","forearm",23.5,90.6,-1.5,"\u652F\u6E9D\u5C3A\u5074\u3001\u5C3A\u9AA8\u6A48\u5074\u7DE3"),w("TE8","\u4E09\u967D\u7D61","radius","forearm",24.5,92.6,-1.5,"\u967D\u6C60\u4E0A 4 \u5BF8"),w("TE9","\u56DB\u7006","ulna","forearm",23,99,-3,"\u8098\u5C16\u4E0B 5 \u5BF8"),w("TE10","\u5929\u4E95","arm","arm",21.5,113,-5.4,"\u8098\u5C16\u4E0A 1 \u5BF8\u51F9\u9677"),w("TE11","\u6E05\u51B7\u6DF5","arm","arm",21,116,-5,"\u5929\u4E95\u4E0A 1 \u5BF8"),w("TE12","\u6D88\u6FFC","arm","arm",20,122,-5,"\u6E05\u51B7\u6DF5\u8207\u81D1\u6703\u9023\u7DDA\u4E2D\u9EDE"),w("TE13","\u81D1\u6703","arm","arm",19,128,-5,"\u80A9\u9ACE\u4E0B 3 \u5BF8\u3001\u4E09\u89D2\u808C\u5F8C\u4E0B\u7DE3"),w("TE14","\u80A9\u9ACE","scapula","arm",17.6,139,-5.4,"\u80A9\u5CF0\u5F8C\u4E0B\u65B9\u51F9\u9677"),w("TE15","\u5929\u9ACE","scapula","chest",7.6,143,-6,"\u80A9\u80DB\u9AA8\u4E0A\u89D2\u4E0A\u65B9"),w("TE16","\u5929\u7256","neckUp","neck",5.4,151,-2.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),w("TE17","\u7FF3\u98A8","head","head",6.4,155.4,-.4,"\u8033\u5782\u5F8C\u65B9\u3001\u4E73\u7A81\u8207\u4E0B\u9837\u89D2\u4E4B\u9593"),w("TE19","\u9871\u606F","head","head",7,160.4,-2.4,"\u8033\u5F8C\u9AEE\u969B\u3001\u7FF3\u98A8\u8207\u89D2\u5B6B\u4E4B\u9593"),w("TE20","\u89D2\u5B6B","head","head",7,162.4,-.4,"\u8033\u5C16\u6B63\u4E0A\u65B9\u9AEE\u969B"),w("TE21","\u8033\u9580","head","head",6.6,158.6,2.4,"\u8033\u5C4F\u4E0A\u5207\u8DE1\u524D\u65B9\u51F9\u9677"),w("TE23","\u7D72\u7AF9\u7A7A","head","head",5,160.6,6.4,"\u7709\u68A2\u51F9\u9677\u4E2D")]},{id:"gb",code:"GB",name:"\u8DB3\u5C11\u967D\u81BD\u7D93",short:"\u81BD\u7D93",organ:"\u81BD",group:"footYang",flow:"\u982D\u9762 \u2192 \u9AD4\u5074 \u2192 \u8DB3\uFF08\u7B2C\u56DB\u8DBE\uFF09",color:[.2,.82,.7],points:[w("GB1","\u77B3\u5B50\u9ACE","head","head",5.3,158.4,5.8,"\u5916\u773C\u89D2\u5916\u5074\u51F9\u9677"),w("GB2","\u807D\u6703","head","head",6.6,156.4,2,"\u8033\u5C4F\u9593\u5207\u8DE1\u524D\u65B9\u3001\u5F35\u53E3\u51F9\u9677"),w("GB4","\u9837\u53AD","head","head",6.5,163,4.4,"\u982D\u7DAD\u8207\u66F2\u9B22\u9023\u7DDA\u4E0A 1/4"),w("GB8","\u7387\u8C37","head","head",6.5,165.4,-.4,"\u8033\u5C16\u76F4\u4E0A\u5165\u9AEE\u969B 1.5 \u5BF8"),w("GB12","\u5B8C\u9AA8","head","head",5.5,155.4,-4.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u51F9\u9677"),w(null,null,"head","head",6.5,162,-2),w(null,null,"head","head",5,166,4),w("GB14","\u967D\u767D","head","head",3,162.4,7.4,"\u77B3\u5B54\u76F4\u4E0A\u3001\u7709\u4E0A 1 \u5BF8"),w(null,null,"head","head",3.5,167,5),w(null,null,"head","head",4.5,169,-1),w(null,null,"head","head",5,164,-7),w("GB20","\u98A8\u6C60","head","head",4,155.4,-7.4,"\u6795\u9AA8\u4E0B\u3001\u80F8\u9396\u4E73\u7A81\u808C\u8207\u659C\u65B9\u808C\u4E4B\u9593\u51F9\u9677"),w("GB21","\u80A9\u4E95","clavicle","chest",9,145.8,-3,"\u5927\u690E\u8207\u80A9\u5CF0\u9023\u7DDA\u4E2D\u9EDE\u3001\u659C\u65B9\u808C\u4E0A\u7DE3"),w("GB22","\u6DF5\u814B","thoraxMid","chest",13.5,128.5,.5,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u814B\u4E0B 3 \u5BF8"),w("GB24","\u65E5\u6708","thoraxMid","chest",8.6,119.6,8.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E03\u808B\u9593"),w("GB25","\u4EAC\u9580","thoraxLow","belly",7,112,-5,"\u7B2C\u5341\u4E8C\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),w("GB26","\u5E36\u8108","L3","belly",11,105,1,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u76F4\u4E0B\u3001\u8207\u81CD\u540C\u9AD8"),w("GB29","\u5C45\u9ACE","pelvis","pelvis",12.5,90,-2,"\u9AC2\u524D\u4E0A\u68D8\u8207\u5927\u8F49\u5B50\u9023\u7DDA\u4E2D\u9EDE"),w("GB30","\u74B0\u8DF3","pelvis","pelvis",12,85,-6,"\u80A1\u9AA8\u5927\u8F49\u5B50\u8207\u85A6\u9AA8\u88C2\u5B54\u9023\u7DDA\u5916 1/3"),w("GB31","\u98A8\u5E02","femur","thigh",12.6,62,-2,"\u5927\u817F\u5916\u5074\u3001\u76F4\u7ACB\u5782\u624B\u6642\u4E2D\u6307\u5C16\u6240\u6307"),w("GB33","\u819D\u967D\u95DC","femur","thigh",12,47,-2.4,"\u80A1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u65B9\u51F9\u9677"),w("GB34","\u967D\u9675\u6CC9","shank","shank",11.8,39.4,-1,"\u8153\u9AA8\u5C0F\u982D\u524D\u4E0B\u65B9\u51F9\u9677"),w("GB36","\u5916\u4E18","shank","shank",12,27,-3,"\u5916\u8E1D\u5C16\u4E0A 7 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),w("GB37","\u5149\u660E","shank","shank",12,19,-3,"\u5916\u8E1D\u5C16\u4E0A 5 \u5BF8"),w("GB39","\u61F8\u9418","shank","shank",12,14,-3,"\u5916\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),w("GB40","\u4E18\u589F","foot","foot",11.8,5.4,-.4,"\u5916\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),w("GB41","\u8DB3\u81E8\u6CE3","foot","foot",11.5,4,4,"\u7B2C\u56DB\u3001\u4E94\u8E60\u9AA8\u4E4B\u9593"),w("GB43","\u4FE0\u8C3F","foot","foot",12.8,2,7.4,"\u7B2C\u56DB\u3001\u4E94\u8DBE\u7E2B\u7AEF"),w("GB44","\u8DB3\u7AC5\u9670","foot","none",13.6,1.3,11.3,"\u7B2C\u56DB\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"lr",code:"LR",name:"\u8DB3\u53A5\u9670\u809D\u7D93",short:"\u809D\u7D93",organ:"\u809D",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u8105\u808B",color:[.2,.6,.3],points:[w("LR1","\u5927\u6566","foot","none",8.9,1.8,12.6,"\u8DB3\u5927\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1"),w("LR2","\u884C\u9593","foot","foot",8.5,2.4,9,"\u7B2C\u4E00\u3001\u4E8C\u8DBE\u7E2B\u7AEF"),w("LR3","\u592A\u885D","foot","foot",8,4.4,4.4,"\u7B2C\u4E00\u3001\u4E8C\u8E60\u9AA8\u7D50\u5408\u90E8\u524D\u65B9\u51F9\u9677"),w("LR4","\u4E2D\u5C01","foot","foot",5.6,7,.2,"\u5167\u8E1D\u524D\u65B9\u3001\u811B\u9AA8\u524D\u808C\u8171\u5167\u5074"),w("LR5","\u8821\u6E9D","shank","shank",4.2,18,-1.4,"\u5167\u8E1D\u5C16\u4E0A 5 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u9762\u4E2D\u592E"),w("LR6","\u4E2D\u90FD","shank","shank",4.4,22,-1.4,"\u5167\u8E1D\u5C16\u4E0A 7 \u5BF8"),w("LR7","\u819D\u95DC","shank","shank",5,39,-2,"\u9670\u9675\u6CC9\u5F8C 1 \u5BF8"),w("LR8","\u66F2\u6CC9","shank","shank",4.8,44.6,-4,"\u5C48\u819D\u6642\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u4E0A\u65B9"),w("LR9","\u9670\u5305","femur","thigh",5,55,0,"\u9AD5\u5E95\u4E0A 4 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u8207\u7E2B\u5320\u808C\u4E4B\u9593"),w(null,null,"femur","thigh",5.2,70,2),w("LR11","\u9670\u5EC9","femur","thigh",4.6,85,3,"\u6C23\u885D\u76F4\u4E0B 2 \u5BF8\u3001\u9577\u6536\u808C\u5916\u7DE3"),w("LR12","\u6025\u8108","pelvis","pelvis",2.6,83,5,"\u6065\u9AA8\u806F\u5408\u5916\u5074\u3001\u8179\u80A1\u6E9D\u52D5\u8108\u640F\u52D5\u8655"),w(null,null,"pelvis","pelvis",4.5,92,7),w(null,null,"L3","belly",8,101,7),w("LR13","\u7AE0\u9580","thoraxLow","belly",11,110,2,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),w("LR14","\u671F\u9580","thoraxMid","chest",9,123.4,9.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u516D\u808B\u9593")]},{id:"cv",code:"CV",name:"\u4EFB\u8108",short:"\u4EFB\u8108",organ:"\u524D\u6B63\u4E2D\u7DDA\uFF08\u9670\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u6703\u9670 \u2192 \u4E0B\u9837\uFF08\u524D\u6B63\u4E2D\u7DDA\uFF09",color:[.96,.87,.6],points:[w("CV1","\u6703\u9670","pelvis","pelvis",0,79,-1,"\u524D\u5F8C\u4E8C\u9670\u4E4B\u9593"),w("CV2","\u66F2\u9AA8","pelvis","pelvis",0,81.4,4.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u4E2D\u9EDE"),w("CV3","\u4E2D\u6975","pelvis","pelvis",0,84.6,6.2,"\u81CD\u4E0B 4 \u5BF8"),w("CV4","\u95DC\u5143","pelvis","pelvis",0,97,9.6,"\u81CD\u4E0B 3 \u5BF8"),w("CV6","\u6C23\u6D77","L5","belly",0,100,10,"\u81CD\u4E0B 1.5 \u5BF8"),w("CV8","\u795E\u95D5","L3","belly",0,103,10.6,"\u81CD\u4E2D\u592E\uFF08\u7981\u91DD\uFF0C\u53EF\u7078\uFF09"),w("CV9","\u6C34\u5206","L3","belly",0,105,10.6,"\u81CD\u4E0A 1 \u5BF8"),w("CV12","\u4E2D\u8118","L1","belly",0,112,11,"\u81CD\u8207\u80F8\u9AA8\u4E0B\u7AEF\u9023\u7DDA\u4E2D\u9EDE"),w("CV14","\u5DE8\u95D5","thoraxLow","belly",0,119,11,"\u81CD\u4E0A 6 \u5BF8"),w("CV15","\u9CE9\u5C3E","thoraxMid","chest",0,122.6,11,"\u80F8\u9AA8\u528D\u7A81\u4E0B"),w("CV17","\u81BB\u4E2D","thoraxMid","chest",0,130,11.2,"\u5169\u4E73\u982D\u9023\u7DDA\u4E2D\u9EDE\u3001\u7B2C\u56DB\u808B\u9593"),w("CV18","\u7389\u5802","thoraxMid","chest",0,132.6,11,"\u7B2C\u4E09\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),w("CV20","\u83EF\u84CB","thoraxUp","chest",0,137,8,"\u7B2C\u4E00\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),w("CV21","\u7487\u74A3","thoraxUp","chest",0,139,6.4,"\u5929\u7A81\u4E0B 1 \u5BF8"),w("CV22","\u5929\u7A81","thoraxUp","chest",0,140.8,4.4,"\u80F8\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),w("CV23","\u5EC9\u6CC9","head","neck",0,151,5,"\u820C\u9AA8\u4E0A\u7DE3\u51F9\u9677"),w("CV24","\u627F\u6F3F","head","head",0,152.4,8.6,"\u9826\u5507\u6E9D\u6B63\u4E2D\u51F9\u9677")]},{id:"gv",code:"GV",name:"\u7763\u8108",short:"\u7763\u8108",organ:"\u5F8C\u6B63\u4E2D\u7DDA\uFF08\u967D\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u5C3E\u9AA8 \u2192 \u982D\u9802 \u2192 \u4E0A\u5507\uFF08\u5F8C\u6B63\u4E2D\u7DDA\uFF09",color:[.66,.7,.95],points:[w("GV1","\u9577\u5F37","pelvis","pelvis",0,82.6,-8,"\u5C3E\u9AA8\u7AEF\u8207\u809B\u9580\u9023\u7DDA\u4E2D\u9EDE"),w("GV2","\u8170\u4FDE","pelvis","pelvis",0,88,-8.6,"\u85A6\u7BA1\u88C2\u5B54\u4E2D"),w("GV3","\u8170\u967D\u95DC","L4","belly",0,100,-7,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B"),w("GV4","\u547D\u9580","L2","belly",0,107,-7,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B"),w("GV6","\u810A\u4E2D","thoraxLow","belly",0,117,-8.4,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV8","\u7B4B\u7E2E","thoraxLow","chest",0,122.4,-9.4,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV9","\u81F3\u967D","thoraxMid","chest",0,128,-9.8,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u3001\u5169\u80A9\u80DB\u4E0B\u89D2\u9023\u7DDA"),w("GV11","\u795E\u9053","thoraxMid","chest",0,134.4,-9.8,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV12","\u8EAB\u67F1","thoraxUp","chest",0,139.4,-9.8,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV13","\u9676\u9053","thoraxUp","chest",0,143.4,-8.4,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV14","\u5927\u690E","neckLow","neck",0,145,-7.8,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\uFF08\u4F4E\u982D\u6642\u6700\u7A81\u51FA\u7684\u9AA8\u982D\u4E0B\u65B9\uFF09"),w("GV15","\u555E\u9580","neckUp","neck",0,152,-6.8,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),w("GV16","\u98A8\u5E9C","head","head",0,154.2,-8.4,"\u6795\u5916\u9686\u51F8\u76F4\u4E0B\u51F9\u9677"),w("GV17","\u8166\u6236","head","head",0,157.6,-9.4,"\u6795\u5916\u9686\u51F8\u4E0A\u7DE3\u51F9\u9677"),w("GV19","\u5F8C\u9802","head","head",0,166,-6.4,"\u767E\u6703\u5F8C 1.5 \u5BF8"),w("GV20","\u767E\u6703","head","head",0,170.3,-1.4,"\u982D\u9802\u6B63\u4E2D\u3001\u5169\u8033\u5C16\u9023\u7DDA\u4E2D\u9EDE"),w("GV21","\u524D\u9802","head","head",0,169.4,2,"\u767E\u6703\u524D 1.5 \u5BF8"),w("GV23","\u4E0A\u661F","head","head",0,167,6.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 1 \u5BF8"),w("GV24","\u795E\u5EAD","head","head",0,166,7.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),w("GV26","\u6C34\u6E9D","head","head",0,155,9.2,"\u4EBA\u4E2D\u6E9D\u4E0A 1/3 \u8655"),w("GV28","\u9F66\u4EA4","head","head",0,153.4,8.4,"\u4E0A\u5507\u7E6B\u5E36\u8207\u7259\u9F66\u76F8\u63A5\u8655")]}],ec=[["handYin","\u624B\u4E09\u9670\uFF08\u80F8\u2192\u624B\uFF09"],["handYang","\u624B\u4E09\u967D\uFF08\u624B\u2192\u982D\uFF09"],["footYang","\u8DB3\u4E09\u967D\uFF08\u982D\u2192\u8DB3\uFF09"],["footYin","\u8DB3\u4E09\u9670\uFF08\u8DB3\u2192\u80F8\u8179\uFF09"],["extra","\u4EFB\u7763\u4E8C\u8108"]];function Yu(i){return zs.find(t=>t.id===i)??null}var Zu=i=>i.midline?["m"]:["l","r"];var zx=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","indexMid","indexDist","middleProx","middleMid","middleDist","ringProx","ringMid","ringDist","littleProx","littleMid","littleDist"]);function Hx(i,t){return zx.has(i.seg)?`${i.seg}.${t==="r"?"r":"l"}`:i.seg}function Vx(i,t){let e=t==="r"?[-i.p[0],i.p[1],i.p[2]]:[...i.p],n=Bx[i.hub],s=kx[i.hub]??0;if(!n||!s)return e;let r=n.point?t==="r"?[-n.point[0],n.point[1],n.point[2]]:n.point:Gx(e,n,t),a=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],o=Math.hypot(a[0],a[1],a[2]);return o<1e-6?e:[e[0]+a[0]/o*s,e[1]+a[1]/o*s,e[2]+a[2]/o*s]}function Gx(i,t,e){let n=e==="r"?-1:1,s=[t.a[0]*n,t.a[1],t.a[2]],r=[t.b[0]*n,t.b[1],t.b[2]],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=[i[0]-s[0],i[1]-s[1],i[2]-s[2]],l=a[0]**2+a[1]**2+a[2]**2,c=Math.max(0,Math.min(1,l?(o[0]*a[0]+o[1]*a[1]+o[2]*a[2])/l:0));return[s[0]+a[0]*c,s[1]+a[1]*c,s[2]+a[2]*c]}function Ku(i,t){return i.points.map(e=>({code:e.code,name:e.name,note:e.note,seg:Hx(e,t),pos:Vx(e,t)}))}var Ju=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function Wx(i,t){return Math.max(1,Math.min(10,Math.round(Ju(i,t)/2.5)))}function Xx(i,t,e,n,s){let r=s*s,a=r*s,o=[0,0,0];for(let l=0;l<3;l++)o[l]=.5*(2*t[l]+(-i[l]+e[l])*s+(2*i[l]-5*t[l]+4*e[l]-n[l])*r+(-i[l]+3*t[l]-3*e[l]+n[l])*a);return o}function go(i){if(i.length<2)return i.map(e=>[...e]);let t=[];for(let e=0;e<i.length-1;e++){let n=i[Math.max(0,e-1)],s=i[e],r=i[e+1],a=i[Math.min(i.length-1,e+2)],o=Wx(s,r);for(let l=0;l<o;l++)t.push(Xx(n,s,r,a,l/o))}return t.push([...i[i.length-1]]),t}function ju(i,t){let e=1/0;for(let n=0;n<t.length-1;n++){let s=t[n],r=t[n+1],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=a[0]**2+a[1]**2+a[2]**2,l=o?Math.max(0,Math.min(1,((i[0]-s[0])*a[0]+(i[1]-s[1])*a[1]+(i[2]-s[2])*a[2])/o)):0,c=Ju(i,[s[0]+a[0]*l,s[1]+a[1]*l,s[2]+a[2]*l]);c<e&&(e=c)}return e}var qx=.5,$x=3.4,Yx=new _i(qx,12,8),Zx=[1,1,1];function Qu(){let i=new De;i.renderOrder=6;let t=[];for(let o of zs)for(let l of Zu(o)){let c=Ku(o,l),h=c.map((g,_)=>({...g,index:_})).filter(g=>g.code),u=new Jn({linewidth:$x,transparent:!0,opacity:.95,depthWrite:!1});u.color.setRGB(...o.color,ce);let d=new mo(new wi,u);d.raycast=()=>{},d.renderOrder=6,d.frustumCulled=!1,d.visible=!1;let f=new Ur(Yx,new mn({toneMapped:!1}),h.length);f.instanceColor=new ts(new Float32Array(h.length*3),3),f.frustumCulled=!1,f.renderOrder=7,f.visible=!1,f.userData.track=t.length,i.add(d,f),t.push({meridian:o,side:l,nodes:c,acu:h,line:d,material:u,dots:f,live:c.map(()=>[0,0,0]),active:!1,stale:!0})}let e=new P,n=new It,s=null;function r(o,l){for(let d=0;d<o.nodes.length;d++){let f=o.nodes[d];e.fromArray(f.pos),l&&e.applyMatrix4(l.get(f.seg)??n.identity()),o.live[d]=e.toArray()}let c=go(o.live),h=new Float32Array(c.length*3);for(let d=0;d<c.length;d++)h.set(c[d],d*3);o.line.geometry.dispose(),o.line.geometry=new wi,o.line.geometry.setPositions(h),o.line.computeLineDistances();let u=new Bt;for(let d=0;d<o.acu.length;d++){n.identity().setPosition(...o.live[o.acu[d].index]),o.dots.setMatrixAt(d,n);let f=s&&s.track===o&&s.acuIndex===d;u.setRGB(...f?Zx:o.meridian.color,ce),o.dots.setColorAt(d,u)}o.dots.instanceMatrix.needsUpdate=!0,o.dots.instanceColor&&(o.dots.instanceColor.needsUpdate=!0),o.stale=!1}let a=null;return{group:i,tracks:t,setActive(o){let l=new Set(o);for(let c of t)c.active=l.has(c.meridian.id),c.active&&c.stale&&r(c,a),c.line.visible=c.active,c.dots.visible=c.active},update(o){a=o;for(let l of t)l.active?r(l,o):l.stale=!0},setResolution(o,l){for(let c of t)c.material.resolution.set(o,l)},setOverlay(o){for(let l of t)l.material.depthTest=!o,l.material.needsUpdate=!0,l.dots.material.depthTest=!o,l.dots.material.needsUpdate=!0},select(o){s=o;for(let l of t)l.active&&r(l,a)},get selected(){return s},pickTargets(){return t.filter(o=>o.active).map(o=>o.dots)},resolve(o,l){let c=t[o.userData.track];if(!c||l==null)return null;let h=c.acu[l];return h?{meridian:c.meridian,side:c.side,point:h,track:c,acuIndex:l}:null},livePaths(){return t.map(o=>({meridian:o.meridian,side:o.side,path:o.stale?null:o.live}))},allAcupoints(o){let l=[];for(let c of t)for(let h of c.acu)e.fromArray(c.nodes[h.index].pos),o&&e.applyMatrix4(o.get(h.seg)??n.identity()),l.push({meridian:c.meridian,side:c.side,point:h,pos:e.toArray()});return l},allPaths(o){return t.map(l=>{let c=l.nodes.map(h=>(e.fromArray(h.pos),o&&e.applyMatrix4(o.get(h.seg)??n.identity()),e.toArray()));return{meridian:l.meridian,side:l.side,path:c}})}}}var q=(i,t,e,n,s,r,a,o)=>[i,{id:i,label:t,seg:e,p:[n,s,r],radius:a,depth:o}],_o=Object.fromEntries([q("forehead","\u524D\u984D","head",2.5,165,7.6,3.6,"surface"),q("temple","\u592A\u967D\u7A74","head",6.2,161.5,3.4,3.2,"surface"),q("eyeOrbit","\u773C\u7736","head",3,158.6,7.4,2.6,"deep"),q("vertex","\u982D\u9802","head",2,169,-1,4.2,"surface"),q("occiput","\u5F8C\u8166","head",3,158,-9,4,"mid"),q("behindEar","\u8033\u5F8C","head",6.4,157,-2.6,2.6,"surface"),q("aboveEar","\u8033\u4E0A","head",6.8,162.5,-.6,2.6,"surface"),q("mastoid","\u4E73\u7A81","head",6,155.2,-3.2,2.6,"mid"),q("cheek","\u81C9\u9830","head",4.6,155,6,3,"surface"),q("jaw","\u4E0B\u9837","head",4.2,151.6,5.4,3,"surface"),q("chin","\u4E0B\u5DF4","head",0,151.6,8.2,2.6,"surface"),q("teethLower","\u4E0B\u6392\u7259\u9F52","head",1.6,153.6,8.2,2,"deep"),q("tongue","\u820C\u982D\u3001\u820C\u6839","head",0,152,4.6,2.2,"deep"),q("glabella","\u7709\u9593","head",0,161.4,8.6,2,"surface"),q("nose","\u9F3B\u6A11\u8207\u9F3B\u7FFC","head",0,158,9.4,2.2,"surface"),q("upperLip","\u4E0A\u5507","head",0,154,8.8,2,"surface"),q("lowerLip","\u4E0B\u5507","head",0,152,8.6,2,"surface"),q("teethUpper","\u4E0A\u6392\u7259\u9F52","head",1.8,154.4,8,2,"deep"),q("earInner","\u8033\u6735\u6DF1\u8655","head",6,157.4,.6,2.2,"deep"),q("tmj","\u9873\u984E\u95DC\u7BC0","head",6.3,157.4,2.4,2.2,"deep"),q("throatFront","\u5589\u56A8\u524D\u9762","neckUp",0,149.5,5,2.8,"mid"),q("throatDeep","\u5589\u56A8\u6DF1\u8655","neckUp",0,149,1.8,2.8,"deep"),q("neckFrontUp","\u9838\u90E8\u524D\u4E0A\u65B9","neckUp",0,152,3,2.6,"deep"),q("neckSide","\u9838\u90E8\u5074\u9762","neckUp",4.6,149,1.2,3,"mid"),q("neckBack","\u9838\u5F8C","neckUp",0,150,-7,3.4,"mid"),q("neckShoulderAngle","\u9838\u80A9\u4EA4\u89D2","neckLow",5,145,-5,3.6,"mid"),q("supraclavicular","\u9396\u9AA8\u4E0A\u65B9","clavicle",6,142.5,1.6,3,"mid"),q("shoulderFront","\u80A9\u8180\u524D\u5074","scapula",15,137,2,4,"mid"),q("shoulderLat","\u80A9\u8180\u5916\u5074","arm",18.6,134,-2,4,"mid"),q("shoulderBack","\u80A9\u8180\u5F8C\u5074","scapula",15,135,-6.4,4,"mid"),q("shoulderDeep","\u80A9\u95DC\u7BC0\u6DF1\u8655","arm",16,136,-1,3.6,"deep"),q("deltoid","\u4E09\u89D2\u808C\u5340\u57DF","arm",18,132.5,-1,4.6,"mid"),q("scapulaMedial","\u80A9\u80DB\u9AA8\u5167\u7DE3","scapula",7.6,134,-8,4,"mid"),q("scapulaMedialUp","\u80A9\u80DB\u9AA8\u5167\u7DE3\u4E0A\u6BB5","scapula",7.6,139,-7,3,"mid"),q("scapulaInferior","\u80A9\u80DB\u9AA8\u4E0B\u89D2","scapula",8.6,127,-8.4,3.2,"mid"),q("scapulaAbove","\u80A9\u80DB\u9AA8\u4E0A\u65B9","scapula",9,142,-5,3.6,"mid"),q("scapulaDeep","\u80A9\u80DB\u9AA8\u6DF1\u8655","scapula",11,133,-6.4,4,"deep"),q("interscapular","\u80A9\u80DB\u9AA8\u4E4B\u9593","thoraxMid",3.6,133,-9.4,4,"surface"),q("upperBackMid","\u4E0A\u80CC\u6B63\u4E2D","thoraxUp",0,138,-9.6,3.6,"mid"),q("thoracicMid","\u80F8\u690E\u6B63\u4E2D","thoraxMid",0,129,-10,3.6,"mid"),q("thoracicSide","\u80F8\u690E\u65C1","thoraxMid",3,128,-9.4,3.2,"mid"),q("backRibs","\u80CC\u90E8\u808B\u9AA8\u65C1","thoraxLow",6,117,-7.6,3.6,"mid"),q("lowerBack","\u4E0B\u80CC","L3",4,104,-7,4.4,"mid"),q("lowerBackMid","\u4E0B\u80CC\u6B63\u4E2D","L4",0,101,-7,3,"mid"),q("lowerBackSide","\u4E0B\u80CC\u5074\u9762","L2",7,108,-5,3.4,"mid"),q("lumbarParaspinal","\u8170\u690E\u65C1","L3",3.2,104,-6.4,3.4,"deep"),q("sacrum","\u85A6\u9AA8","pelvis",0,92,-8.4,3.6,"mid"),q("si","\u85A6\u9AC2\u95DC\u7BC0","pelvis",3.2,94,-8.4,3,"deep"),q("coccyx","\u5C3E\u9AA8","pelvis",0,84,-8,2.6,"mid"),q("anus","\u809B\u9580","pelvis",0,80,-4,2.6,"deep"),q("perineum","\u6703\u9670","pelvis",0,79,-1,2.6,"deep"),q("chestFront","\u524D\u80F8","thoraxMid",6,130,10,4.4,"mid"),q("chestSide","\u80F8\u5ED3\u5074\u9762","thoraxMid",12.5,124,1.5,4.2,"mid"),q("breast","\u4E73\u623F\u5340","thoraxMid",9.6,129,10.6,4,"surface"),q("breastLower","\u4E0B\u80F8\u3001\u4E73\u623F\u4E0B\u7DE3","thoraxMid",9,122.5,9.4,3.6,"surface"),q("sternum","\u80F8\u9AA8\u65C1","thoraxMid",2.6,129,10.6,3,"mid"),q("intercostal","\u808B\u9593","thoraxMid",10,122,5.5,3.6,"mid"),q("subcostal","\u808B\u5F13\u4E0B","thoraxLow",7,113,8.4,3.6,"deep"),q("upperAbdomen","\u4E0A\u8179","L1",2.6,110,10.4,4,"deep"),q("abdomen","\u8179\u90E8","L3",4,104,10,4.4,"deep"),q("lowerAbdomen","\u4E0B\u8179","pelvis",2.6,97,9.4,4,"deep"),q("pubic","\u6065\u9AA8\u4E0A\u65B9","pelvis",0,83.5,5.6,3,"mid"),q("groin","\u8179\u80A1\u6E9D","pelvis",5,90,6,3.6,"deep"),q("pelvisDeep","\u9AA8\u76C6\u5167\u6DF1\u8655","pelvis",3,88,-1,4,"deep"),q("buttock","\u81C0\u90E8","pelvis",8,88,-8,5,"mid"),q("buttockUpLat","\u81C0\u90E8\u4E0A\u5916\u5074","pelvis",10,93,-6,4,"mid"),q("buttockDeep","\u81C0\u90E8\u6DF1\u8655","pelvis",8,87,-6,4,"deep"),q("buttockLower","\u81C0\u90E8\u4E0B\u7DE3","femur",7,80,-7.4,3.6,"mid"),q("greaterTroch","\u9AD6\u90E8\u5916\u5074\uFF08\u5927\u8F49\u5B50\uFF09","femur",12.5,85,-3,3.6,"mid"),q("hipFrontLat","\u9AD6\u90E8\u524D\u5916\u5074","femur",10.5,84,3,3.6,"mid"),q("thighFront","\u5927\u817F\u524D\u9762","femur",8.5,62,4,4.6,"mid"),q("thighFrontUp","\u5927\u817F\u524D\u4E0A\u65B9","femur",9,78,4,4.2,"mid"),q("thighLat","\u5927\u817F\u5916\u5074","femur",12.5,62,-1,4.6,"mid"),q("thighMed","\u5927\u817F\u5167\u5074","femur",4.5,62,1,4.6,"mid"),q("thighMedUp","\u5927\u817F\u5167\u5074\u4E0A\u6BB5","femur",4.5,78,2,4.2,"deep"),q("thighBack","\u5927\u817F\u5F8C\u5074","femur",7.5,62,-6,4.6,"mid"),q("thighBackUp","\u5927\u817F\u5F8C\u5074\u4E0A\u6BB5","femur",7.5,76,-7,4.2,"mid"),q("thighLatBack","\u5927\u817F\u5916\u5F8C\u5074","femur",11,62,-4,4.2,"mid"),q("kneeFront","\u819D\u84CB\u524D\u9762","shank",8.5,44,2.4,3.6,"mid"),q("kneeMed","\u819D\u84CB\u5167\u5074","shank",4.5,44,0,3,"mid"),q("kneeLat","\u819D\u84CB\u5916\u5074","shank",11.5,44,0,3,"mid"),q("kneeBack","\u819D\u84CB\u5F8C\u9762\uFF08\u8195\u7AA9\uFF09","shank",7.5,44.5,-7,3.6,"deep"),q("kneeBackLat","\u819D\u84CB\u5F8C\u5916\u5074","shank",10.5,44,-6,3,"deep"),q("kneeBackMed","\u819D\u84CB\u5F8C\u5167\u5074","shank",4.8,44,-6,3,"mid"),q("kneeAbove","\u819D\u84CB\u4E0A\u65B9","femur",8.5,50,2,3.6,"mid"),q("calfBack","\u5C0F\u817F\u5F8C\u9762","shank",7.5,26,-7,4,"mid"),q("calfUpper","\u5C0F\u817F\u4E0A\u6BB5","shank",7.5,36,-6,3.6,"mid"),q("calfLat","\u5C0F\u817F\u5916\u5074","shank",11.5,26,-3,3.6,"mid"),q("shinMed","\u811B\u9AA8\u5167\u5074","shank",4.5,28,-1,3.6,"surface"),q("achilles","\u8DDF\u8171","shank",7.5,12,-6,2.6,"surface"),q("heel","\u8173\u8DDF","foot",7.9,3,-6.5,3,"mid"),q("heelLat","\u8173\u8DDF\u5916\u5074","foot",10.5,2.8,-5.5,2.6,"surface"),q("ankleFrontMed","\u8E1D\u95DC\u7BC0\u524D\u5167\u5074","talus",5,8,0,2.6,"surface"),q("ankleFrontLat","\u8E1D\u524D\u5916\u5074","foot",11,6,-1,2.6,"surface"),q("ankleLat","\u5916\u8E1D\u5468\u570D","shank",11.8,7,-3,3,"surface"),q("footLatBorder","\u8173\u7684\u5916\u5074\u7DE3","foot",13.5,2.5,2.5,3,"surface"),q("footDorsum","\u8173\u80CC","foot",9.5,5.2,4.5,3.4,"surface"),q("footDorsumMed","\u8173\u80CC\u5167\u5074","foot",7,5.2,5.5,3,"surface"),q("arch","\u8173\u5E95\u5167\u5074\u8DB3\u5F13","foot",6.2,1.5,1.5,3,"mid"),q("soleFront","\u8173\u5E95\u524D\u534A","foot",8.5,1,6,3.4,"mid"),q("toesPlantar","\u8173\u8DBE\u5E95\u9762","foot",11,1.1,10.5,3,"surface"),q("toesDorsal","\u8173\u8DBE\u80CC\u9762","foot",11,2.2,10.5,3,"surface"),q("halluxPlantar","\u62C7\u8DBE\u5E95\u9762","foot",8,1.1,11.8,2.2,"surface"),q("halluxDorsal","\u62C7\u8DBE\u80CC\u9762","foot",8,2.4,11.5,2.2,"surface"),q("mt1Head","\u7B2C\u4E00\u8E60\u9AA8\u982D","foot",7,3.2,7.5,2.4,"mid"),q("upperArmFront","\u4E0A\u81C2\u524D\u9762","arm",17.5,124,1.5,4,"mid"),q("upperArmBack","\u4E0A\u81C2\u5F8C\u9762","arm",19.5,122,-6,4,"mid"),q("upperArmLat","\u4E0A\u81C2\u5916\u5074","arm",21,124,-3,4,"mid"),q("armInner","\u624B\u81C2\u5167\u5074","arm",15.5,122,-2,4.4,"mid"),q("elbowFront","\u624B\u8098\u524D\u9762","arm",20.5,110,1.5,3,"mid"),q("elbowLat","\u80B1\u9AA8\u5916\u4E0A\u9AC1\uFF08\u624B\u8098\u5916\u5074\uFF09","arm",24.5,110.5,-1.5,2.8,"surface"),q("forearmFlexor","\u524D\u81C2\u638C\u5074","radius",24.5,96,3,3.8,"mid"),q("forearmFlexorLow","\u524D\u81C2\u638C\u5074\u4E0B\u6BB5","radius",25.5,90,3.4,3.2,"surface"),q("forearmExt","\u524D\u81C2\u80CC\u5074","radius",25,97,-1.5,3.8,"mid"),q("forearmUlnar","\u524D\u81C2\u5C3A\u5074\uFF08\u5C0F\u6307\u5074\uFF09","ulna",22,96,.5,3.6,"mid"),q("forearmRadial","\u524D\u81C2\u6A48\u5074\uFF08\u62C7\u6307\u5074\uFF09","radius",26.5,96,1,3.6,"mid"),q("wristPalmar","\u624B\u8155\u638C\u5074","hand",26,85,4,2.6,"mid"),q("wristPalmarRadial","\u624B\u8155\u638C\u5074\u62C7\u6307\u5074","hand",27.8,85,3.6,2.2,"deep"),q("wristPalmarUlnar","\u624B\u8155\u638C\u5074\u5C0F\u6307\u5074","hand",24.2,85,3.8,2.2,"surface"),q("wristDorsal","\u624B\u8155\u80CC\u5074","hand",26,84.5,.8,2.6,"surface"),q("wristDorsalRadial","\u624B\u8155\u80CC\u5074\u62C7\u6307\u5074","hand",28.3,84.3,1.2,2.2,"surface"),q("wristDorsalUlnar","\u624B\u8155\u80CC\u5074\u5C0F\u6307\u5074","hand",23.8,84.6,.9,2.2,"surface"),q("handDorsum","\u624B\u80CC","hand",27,80,1.4,3,"surface"),q("webSpace","\u864E\u53E3","hand",29.3,80.5,2.6,2.2,"surface"),q("palm","\u638C\u5FC3","hand",27,80,4.8,3,"surface"),q("thenar","\u5927\u9B5A\u969B","thumbMeta",29.8,82,4.8,2.4,"surface"),q("thumbBase","\u62C7\u6307\u6839\u90E8","thumbMeta",30.4,81,4.2,2.2,"surface"),q("thumb","\u62C7\u6307","thumbProx",31.9,80,5.4,2,"surface"),q("thumbTip","\u62C7\u6307\u638C\u9762\u5230\u6307\u5C16","thumbDist",32.8,77.9,6.6,1.8,"surface"),q("indexFinger","\u98DF\u6307","indexProx",30.1,75.2,4.5,1.8,"surface"),q("middleFinger","\u4E2D\u6307","middleProx",27.7,75.2,5,1.8,"surface"),q("ringFinger","\u7121\u540D\u6307","ringProx",25.5,75.7,4.9,1.8,"surface"),q("littleFinger","\u5C0F\u6307","littleProx",23.7,76.7,4.9,1.8,"surface"),q("fingersPalmar","\u624B\u6307\u638C\u9762","hand",27,74,6.4,3.4,"surface"),q("fingerTips","\u6307\u5C16","middleDist",28.5,70.6,8.8,2.4,"surface")]),nc={pecMajorClav:["shoulderFront","deltoid"],pecMajorStern:["chestFront","breast","armInner","forearmUlnar"],pecMajorAbd:["breastLower"],pecMinor:["shoulderFront","chestFront","armInner","littleFinger"],subclavius:["shoulderFront","upperArmFront","forearmRadial","thumb","indexFinger"],serratusAnterior:["chestSide","scapulaInferior"],trapUpper:["neckSide","behindEar","temple","eyeOrbit"],trapMiddle:["interscapular"],trapLower:["neckBack","mastoid","scapulaAbove"],rhomboidMajor:["scapulaMedial","interscapular"],rhomboidMinor:["scapulaMedialUp"],levatorScapulae:["neckShoulderAngle","scapulaMedial"],deltoidAnt:["shoulderFront","deltoid"],deltoidMid:["shoulderLat"],deltoidPost:["shoulderBack","upperArmBack"],bicepsLong:["shoulderFront","elbowFront"],bicepsShort:["shoulderFront","elbowFront"],coracobrachialis:["shoulderFront","upperArmBack","forearmExt","handDorsum"],tricepsLong:["shoulderBack","upperArmBack","neckShoulderAngle"],tricepsLat:["upperArmBack","forearmExt"],tricepsMed:["elbowLat","forearmUlnar"],latissimus:["scapulaInferior","armInner","ringFinger","littleFinger"],teresMajor:["shoulderBack","upperArmBack"],supraspinatus:["shoulderLat","elbowLat"],infraspinatus:["shoulderDeep","upperArmFront"],teresMinor:["shoulderBack","deltoid"],subscapularis:["shoulderBack","scapulaDeep","wristDorsal"],temporalis:["temple","forehead","eyeOrbit","teethUpper"],masseterSup:["jaw","teethUpper","teethLower","earInner"],masseterDeep:["earInner","tmj"],pterygoidMed:["throatFront","tmj","earInner"],pterygoidLatInf:["tmj","cheek"],orbicularisOculiOrb:["forehead","nose","cheek"],corrugatorSupercilii:["glabella","forehead"],levatorLabiiSuperioris:["nose","cheek"],zygomaticusMajor:["nose","glabella","forehead"],mentalis:["chin","lowerLip"],orbicularisOris:["upperLip","lowerLip","nose"],rectusCapPostMajor:["occiput","temple","eyeOrbit"],rectusCapPostMinor:["occiput","vertex","eyeOrbit"],obliquusCapSup:["occiput","temple"],obliquusCapInf:["occiput","behindEar"],rectusCapAnt:["neckFrontUp"],rectusCapLat:["occiput"],longusColli:["throatFront","throatDeep"],longusCapitis:["throatFront","throatDeep"],scalenusAnterior:["chestFront","scapulaMedial","upperArmFront","upperArmBack","thumb","indexFinger"],scalenusMedius:["shoulderLat","upperArmLat","scapulaMedial","handDorsum"],scalenusPosterior:["scapulaMedialUp"],sternocleidomastoid:["forehead","eyeOrbit","cheek","vertex","behindEar"],platysma:["jaw","cheek"],digastricPost:["mastoid","behindEar","throatFront"],digastricAnt:["teethLower","chin"],stylohyoid:["throatFront","mastoid"],geniohyoid:["chin","tongue"],mylohyoid:["tongue","teethLower"],sternohyoid:["throatFront"],sternothyroid:["throatFront"],thyrohyoid:["throatFront"],omohyoid:["neckSide","supraclavicular"],occipitalis:["occiput","eyeOrbit"],frontalis:["forehead"],temporoparietalis:["temple","aboveEar"],spleniusCapitis:["vertex"],spleniusColli:["eyeOrbit","occiput","neckShoulderAngle"],iliocostalisLumborum:["lowerBack","buttockUpLat","lowerAbdomen"],iliocostalisThoracis:["scapulaMedial","chestSide","abdomen"],iliocostalisColli:["neckShoulderAngle","scapulaAbove"],longissimusThoracis:["lowerBack","buttock"],longissimusColli:["neckBack","scapulaAbove"],longissimusCapitis:["behindEar","eyeOrbit"],spinalisThoracis:["thoracicMid"],spinalisColli:["neckBack"],spinalisCapitis:["occiput"],semispinalisThoracis:["upperBackMid"],semispinalisColli:["occiput","neckBack"],multifidusLumborum:["lowerBackMid","sacrum","abdomen"],multifidusThoracis:["thoracicSide","chestFront","abdomen"],multifidusColli:["occiput","neckBack","scapulaMedialUp"],rotatores:["thoracicMid"],interspinalesColli:["neckBack"],interspinalesThoracis:["thoracicMid"],interspinalesLumborum:["lowerBackMid"],intertransversariiVentral:["lowerBackSide"],intertransversariiDorsal:["lowerBackSide"],serratusPostSup:["scapulaDeep","upperArmBack","littleFinger","chestFront"],serratusPostInf:["backRibs"],levatoresCostarumLongi:["backRibs"],levatoresCostarumBreves:["backRibs"],externalIntercostals:["intercostal"],internalIntercostals:["intercostal"],innermostIntercostals:["intercostal"],transversusThoracis:["sternum"],diaphragm:["subcostal","chestSide","shoulderLat"],rectusAbdominis:["upperAbdomen","thoracicMid","lowerAbdomen","lowerBack"],externalOblique:["upperAbdomen","lowerAbdomen","groin"],internalOblique:["lowerAbdomen","groin","pubic"],transversusAbdominis:["subcostal","upperAbdomen"],pyramidalis:["pubic","lowerAbdomen"],quadratusLumborum:["si","buttockUpLat","greaterTroch","lowerBack"],externalAnalSphincter:["anus","coccyx"],puboanalis:["anus","perineum"],pubococcygeus:["coccyx","sacrum","perineum","lowerAbdomen"],iliococcygeus:["coccyx","sacrum"],coccygeus:["coccyx","sacrum","buttock"],gluteusMaximus:["buttock","sacrum","coccyx"],gluteusMedius:["lowerBack","si","buttockUpLat","thighLatBack"],gluteusMinimus:["buttock","thighLat","thighBack","calfLat","ankleLat"],tensorFasciaeLatae:["hipFrontLat","thighLat","kneeLat"],piriformis:["si","buttock","thighBack"],gemellusSup:["buttockDeep"],gemellusInf:["buttockDeep"],obturatorInternus:["coccyx","anus","thighBackUp","pelvisDeep"],obturatorExternus:["groin","thighMedUp"],quadratusFemoris:["buttockLower","thighBackUp"],psoasMajor:["lumbarParaspinal","thighFrontUp"],iliacus:["lowerBack","si","thighFrontUp"],sartorius:["thighMed","thighFront"],rectusFemoris:["kneeFront"],vastusLateralis:["thighLat","kneeLat"],vastusMedialis:["kneeMed","kneeFront"],vastusIntermedius:["thighFront","kneeAbove"],adductorLongus:["groin","thighMed","kneeMed","shinMed"],adductorBrevis:["groin","thighMed"],adductorMagnus:["groin","thighMed","pelvisDeep"],adductorMinimus:["thighMedUp"],gracilis:["thighMed"],pectineus:["groin","thighMedUp"],bicepsFemorisLong:["kneeBack","thighBack"],bicepsFemorisShort:["kneeBackLat"],semitendinosus:["buttockLower","thighBack","kneeBackMed","calfUpper"],semimembranosus:["buttockLower","thighBack","kneeBack"],gastrocnemiusMed:["arch","calfBack"],gastrocnemiusLat:["kneeBack","calfBack","calfLat"],soleus:["heel","si"],plantaris:["kneeBack","calfUpper"],popliteus:["kneeBack"],tibialisPosterior:["achilles","heel","soleFront"],flexorDigitorumLongus:["soleFront","toesPlantar"],flexorHallucisLongus:["halluxPlantar","mt1Head"],tibialisAnterior:["ankleFrontMed","halluxDorsal"],extensorDigitorumLongus:["footDorsum","toesDorsal"],extensorHallucisLongus:["footDorsumMed","halluxDorsal"],fibularisTertius:["ankleFrontLat","heelLat"],fibularisLongus:["ankleLat","footLatBorder"],fibularisBrevis:["ankleLat","footLatBorder"],brachialis:["thumbBase","elbowFront","shoulderFront"],pronatorTeresHum:["wristPalmarRadial","forearmFlexor"],flexorCarpiRadialis:["wristPalmar","palm"],palmarisLongus:["palm","forearmFlexorLow"],fcuHumeral:["wristPalmarUlnar"],fdsHumeroUlnar:["middleFinger","ringFinger","littleFinger"],flexorDigitorumProfundus:["fingersPalmar","fingerTips"],flexorPollicisLongus:["thumbTip"],pronatorQuadratus:["wristPalmar"],anconeus:["elbowLat"],brachioradialis:["elbowLat","wristDorsalRadial","webSpace"],extensorCarpiRadialisLongus:["elbowLat","webSpace"],extensorCarpiRadialisBrevis:["wristDorsal","handDorsum"],extensorDigitorum:["forearmExt","handDorsum","middleFinger","ringFinger"],extensorDigitiMinimi:["littleFinger"],ecuHumeral:["wristDorsalUlnar"],supinator:["elbowLat","webSpace"],abductorPollicisLongus:["wristDorsalRadial","thumbBase"],abductorPollicisBrevis:["thumb","wristPalmarRadial"],opponensPollicis:["thumbTip","wristPalmarRadial"],adductorPollicisObl:["thumbBase","thenar"],abductorDigitiMinimi:["littleFinger"],dorsalInterosseiHand:["handDorsum","fingerTips"]},Kx=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","middleProx","ringProx","littleProx","middleDist"]),td=["surface","mid","deep"],ic={surface:"\u8868\u6DFA",mid:"\u808C\u8089\u5C64",deep:"\u6DF1\u8655"},sc=i=>_o[i].p[0]===0;function jn(i,t){let e=_o[i],n=t==="r";return{id:e.id,label:e.label,seg:Kx.has(e.seg)?`${e.seg}.${n?"r":"l"}`:e.seg,pos:[n?-e.p[0]:e.p[0],e.p[1],e.p[2]],radius:e.radius,depth:e.depth}}function xo(i,t){let e=nc[i]??[],n=[];for(let s of e)sc(s)?n.push(jn(s,"l")):t==="m"?n.push(jn(s,"l"),jn(s,"r")):n.push(jn(s,t));return n}var hs={surface:[1,.92,.25],mid:[1,.52,.08],deep:[.85,.12,.72]},Rv=hs.mid,Jx=.22,jx=.55,Qx=new _i(1,20,14),ty=new _i(1,12,8);function ed(i,t){return new mn({transparent:!0,opacity:i,wireframe:t,depthTest:!1,depthWrite:!1,side:sn,toneMapped:!1})}function nd(){let i=new De;i.renderOrder=8;let t=[],e=[];function n(l){if(!t[l]){let c=new ae(Qx,ed(Jx,!1)),h=new ae(ty,ed(jx,!0));for(let u of[c,h])u.renderOrder=8,u.frustumCulled=!1,u.raycast=()=>{},i.add(u);t[l]=[c,h]}return t[l]}let s=new P,r=new It,a=null;function o(l){for(let c=0;c<e.length;c++){let h=e[c];s.fromArray(h.pos),l&&s.applyMatrix4(l.get(h.seg)??r);let u=hs[h.depth]??hs.mid;for(let d of n(c))d.position.copy(s),d.scale.setScalar(h.radius),d.material.color.setRGB(...u,ce),d.visible=!0}for(let c=e.length;c<t.length;c++)for(let h of t[c])h.visible=!1}return{group:i,show(l,c=a){e=l??[],a=c,o(c)},update(l){a=l,e.length&&o(l)},get count(){return e.length}}}var id=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]),ey=(()=>{let i={};for(let[t,e]of Object.entries(nc))for(let n of e)(i[n]??(i[n]=[])).push(t);return i})();function sd(){let i=[];for(let t of Object.keys(_o))sc(t)?i.push({...jn(t,"l"),side:"m"}):i.push({...jn(t,"l"),side:"l"},{...jn(t,"r"),side:"r"});return i}function ny(i,t){return t.map(e=>({zone:e,distance:id(i,e.pos),weight:Yl(id(i,e.pos),e.radius)})).filter(e=>e.weight>0).sort((e,n)=>n.weight-e.weight)}function rd(i,t,e=12){let n=new Map;for(let s of ny(i,t)){let r=s.zone.side==="m"?["l","r"]:[s.zone.side];for(let a of ey[s.zone.id]??[])for(let o of r){let l=`${a}.${o}`,c=n.get(l);(!c||c.weight<s.weight)&&n.set(l,{id:a,side:o,zone:s.zone,weight:s.weight,distance:s.distance})}}return[...n.values()].sort((s,r)=>r.weight-s.weight||s.distance-r.distance).slice(0,e)}var od={focus:[1,.55,.78],short:[1,.23,.13],long:[.12,.42,1],spot:[1,.12,.48]},iy={superficial:1,middle:.74,deep:.54},rc=.5,sy=[.12,.05,.2],ry=7,oy=6,ay=10;function ad(i,t){let e=Du(),n=[t.joints.thorax.center[0],t.joints.thorax.center[2]],s=new Map(t.parts.map(T=>[T.info.key,T])),r=[],a={...xn},o=null,l=[],c=null,h=[],u=Qu();i.scene.add(u.group);let d=nd();i.scene.add(d.group),i.onResize((T,k)=>u.setResolution(T,k));let f=()=>!lo(a),g=()=>r.forEach(T=>T()),_=0;function m(){for(let T of t.parts)T.stale&&(T.mesh.geometry.computeVertexNormals(),T.mesh.geometry.computeBoundingSphere(),T.stale=!1)}function p(){let T=Lu(t.joints,a),k=new Set([...T].filter(([z,H])=>!o||!H.equals(o.get(z))).map(([z])=>z));o=T;for(let z of t.bones)z.mesh.matrix.copy(o.get(z.segment));for(let z of t.parts){if(!z.segments.some(it=>k.has(it)))continue;let H=z.mesh.geometry.getAttribute("position");z.skin?pu(z.rest,z.skin,z.info.skinSegs,o,H.array):fu(z.prep,o.get(z.info.segA),o.get(z.info.segB),H.array),H.needsUpdate=!0,z.stale=!0,z.delta=uu(z.info,o)}G=null,Y=null,M=null,clearTimeout(_),_=setTimeout(m,120),S(),x(),R(),u.update(o),d.update(o)}function S(){for(let T of t.parts){let k=gu({selected:e.selectedKey===T.info.key,poseActive:f(),measure:T.info.measure,delta:T.delta});T.mesh.material.color.setRGB(k[0],k[1],k[2],ce)}}function v(){for(let T of t.bones)T.mesh.visible=e.layers.bones;for(let T of t.parts){let k=Zl(T.info,e),z=T.mesh.material;T.mesh.visible=k.visible,z.opacity=k.opacity;let H=k.opacity<1;z.transparent!==H&&(z.transparent=H,z.needsUpdate=!0),z.depthWrite=!H,k.selected?z.emissive.setRGB(...sy):z.emissive.setRGB(k.glow,k.glow*.85,k.glow*.5),T.pickable=k.pickable,T.target=Uu(T.info,e,n)}S(),x(),R()}function x(){for(let T of t.parts){let k=Ou(T.info,e,f(),T.delta);for(let z=0;z<T.tps.length;z++){let{marker:H}=T.tps[z];H.visible=!!k,H.material.depthTest=!e.overlay;let it=e.selectedPain&&e.selectedPain.key===T.info.key&&e.selectedPain.index===z;k&&H.material.color.setRGB(...it?od.focus:od[k],ce),H.scale.setScalar(iy[T.info.layer]*(it?1.8:1))}}}function C(){for(let T of t.parts){if(!T.tps.length||!T.tps[0].marker.visible)continue;let k=T.mesh.geometry.getAttribute("position").array,z=T.mesh.geometry.getAttribute("normal").array,H=T.mesh.position;for(let{marker:it,vertex:lt}of T.tps)it.position.set(k[lt*3]+z[lt*3]*rc+H.x,k[lt*3+1]+z[lt*3+1]*rc+H.y,k[lt*3+2]+z[lt*3+2]*rc+H.z)}}function R(){c?.update(o,T=>T.target,f())}function I(T){c&&(i.scene.remove(c.group),c.dispose(),c=null),T.length&&(c=Vu(T,t.parts),i.scene.add(c.group))}function D(T){l=T,e.lineParts=Bu(T),I(T),v(),g()}let E=sd(),M=null;function L(){if(M)return M;let T=new P,k=new It;return M=E.map(z=>(T.fromArray(z.pos),o&&T.applyMatrix4(o.get(z.seg)??k),{...z,pos:T.toArray()})),M}let Y=null;function N(T,k=4){return Y??(Y=u.allAcupoints(o)),Y.map(z=>({...z,distance:Math.hypot(T[0]-z.pos[0],T[1]-z.pos[1],T[2]-z.pos[2])})).filter(z=>z.distance<=oy).sort((z,H)=>z.distance-H.distance).slice(0,k)}let G=null;function J(T,k=3){G??(G=u.allPaths(o).map(it=>({...it,path:go(it.path)})));let z=[];for(let{meridian:it,side:lt,path:wt}of G){let zt=ju(T,wt);zt<=ry&&z.push({meridian:it,side:lt,distance:zt})}z.sort((it,lt)=>it.distance-lt.distance);let H=new Set;return z.filter(it=>!H.has(it.meridian.id)&&H.add(it.meridian.id)).slice(0,k)}let Z=[],nt=[];function $(){for(let T of Z)T.deleteAttribute("aReferred");Z.length=0;for(let T of nt)T.userData.referredColor.value.setRGB(1,1,1);nt.length=0}function st(){$();let T=ht();if(!T.length){d.show([],o);return}let k=new Set,z=(H,it,lt,wt)=>{let zt=_u(it,lt,T);if(!zt)return;H.setAttribute("aReferred",new fe(zt.weights,1)),Z.push(H);let kt=xu(lt,T,zt.hit);wt.userData.referredColor.value.setRGB(...hs[kt.depth]??hs.mid,ce),nt.includes(wt)||nt.push(wt);for(let ee of zt.hit)k.add(ee)};for(let H of t.parts)H.mesh.visible&&(H.restBounds??(H.restBounds=$l(H.rest)),z(H.mesh.geometry,H.rest,H.restBounds,H.mesh.material));if(e.layers.bones)for(let H of t.bones){let it=H.mesh.geometry.getAttribute("position").array;H.restBounds??(H.restBounds=$l(it)),z(H.mesh.geometry,it,H.restBounds,t.boneMaterial)}d.show(T.filter((H,it)=>!k.has(it)),o)}function ht(){let T=e.selectedPain,k=T&&s.get(T.key);if(k)return xo(k.info.id,k.info.side);if(e.lookup){let z=new Set;return e.lookup.sources.map(H=>H.zone).filter(H=>!z.has(H.id+H.side)&&z.add(H.id+H.side))}return e.postureZones&&f()?Lt():[]}function yt(T=ay){if(!f())return[];let k=new Map;for(let z of t.parts){if(!z.info.measure)continue;let H=Zn(z.delta);if(H==="same")continue;let it=k.get(z.info.id);(!it||Math.abs(it.delta)<Math.abs(z.delta))&&k.set(z.info.id,{id:z.info.id,key:z.info.key,side:z.info.side,delta:z.delta,state:H})}return[...k.values()].sort((z,H)=>Math.abs(H.delta)-Math.abs(z.delta)).slice(0,T)}function Lt(){let T=new Set,k=[];for(let z of yt()){let H=s.get(z.key);if(H)for(let it of xo(H.info.id,H.info.side)){let lt=`${it.id}.${it.seg}`;T.has(lt)||(T.add(lt),k.push(it))}}return k}function qt(T,k){let z=s.get(T),H=z?.tps[k];if(!H)return null;let it=z.mesh.geometry.getAttribute("position").array,lt=z.mesh.position;return[it[H.vertex*3]+lt.x,it[H.vertex*3+1]+lt.y,it[H.vertex*3+2]+lt.z]}return i.onFrame(T=>{let k=1-Math.exp(-T*10);for(let z of t.parts){let H=z.mesh.position;H.set(H.x+(z.target[0]-H.x)*k,H.y+(z.target[1]-H.y)*k,H.z+(z.target[2]-H.z)*k)}C()}),p(),m(),v(),{state:e,meridians:u,get params(){return{...a}},get poseActive(){return f()},get activeLines(){return[...l]},get activeMeridians(){return[...h]},parts:t.parts,referred:d,partByKey:T=>s.get(T),referredZonesOfSelection(){let T=e.selectedPain,k=T&&s.get(T.key);return k?xo(k.info.id,k.info.side):[]},nearbyMeridians:J,nearbyAcupoints:N,postureMuscles:yt,lookupAt(T){let k=T?rd(T,L()):[];e.lookup=T?{position:T,sources:k}:null,e.selectedKey=null,e.selectedPain=null,u.select(null),v(),st(),g()},setLookupMode(T){e.lookupMode=T,T||(e.lookup=null),g()},setPostureZones(T){e.postureZones=T,st(),g()},visiblePainCount(){return t.parts.reduce((T,k)=>T+k.tps.filter(z=>z.marker.visible).length,0)},painPosition:qt,setParams(T){a={...a,...T},p(),g()},setLayer(T,k){e.layers[T]=k,v(),st(),g()},setExplode(T){e.explode=T,v(),g()},setPainMode(T){e.painMode=T,T==="off"&&(e.selectedPain=null),x(),st(),g()},setOverlay(T){e.overlay=T,u.setOverlay(T),x(),g()},toggle(T,k){let z=e[T];z.has(k)?z.delete(k):z.add(k),T==="hidden"&&e.selectedKey===k&&(e.selectedKey=null),T==="hidden"&&e.selectedPain?.key===k&&(e.selectedPain=null),v(),st(),g()},select(T){e.selectedKey=T,T&&(e.selectedPain=null),v(),st(),g()},selectPain(T){let k=T&&e.selectedPain?.key===T.key&&e.selectedPain?.index===T.index;e.selectedPain=k?null:T,e.selectedPain&&(e.selectedKey=null,u.select(null)),v(),st(),g()},selectAcupoint(T){let k=u.selected,z=T&&k&&k.track===T.track&&k.acuIndex===T.acuIndex;u.select(z?null:T),!z&&T&&(e.selectedKey=null,e.selectedPain=null),v(),st(),g()},get selectedAcupoint(){return u.selected},focus(T){let k=s.get(T);k&&(e.selectedKey=T,e.selectedPain=null,i.lookAt(k.info.centroid),v(),st(),g())},toggleLine(T){D(l.includes(T)?l.filter(k=>k!==T):[...l,T])},clearLines(){D([])},toggleMeridian(T){h=h.includes(T)?h.filter(k=>k!==T):[...h,T],u.setActive(h),u.update(o),h.length||u.select(null),g()},setMeridians(T){h=[...new Set(T)],u.setActive(h),u.update(o),h.length||u.select(null),g()},clearMeridians(){this.setMeridians([])},reset(){Fu(e),u.select(null),v(),st(),g()},restoreParts(){Nu(e),v(),st(),g()},pickAt(T,k){m();let z=u.pickTargets(),H=e.painMode==="off"?[]:t.parts.flatMap(wt=>wt.tps.filter(zt=>zt.marker.visible).map(zt=>zt.marker)),it=t.parts.filter(wt=>wt.pickable).map(wt=>wt.mesh),lt=i.pickHit(T,k,[...z,...H,...it]);if(!lt)return{kind:null};if(lt.object.isInstancedMesh){let wt=u.resolve(lt.object,lt.instanceId);return wt?{kind:"acupoint",hit:wt}:{kind:null}}return lt.object.userData.pain?{kind:"pain",pain:lt.object.userData.pain}:lt.object.userData.partKey?{kind:"muscle",key:lt.object.userData.partKey}:{kind:null}},pointAt(T,k){m();let z=t.parts.filter(it=>it.pickable).map(it=>it.mesh),H=e.layers.bones?t.bones.map(it=>it.mesh):[];return i.pickPoint(T,k,[...z,...H])},onChange(T){r.push(T)}}}var ly={l:"\u5DE6",r:"\u53F3",m:"\u4E2D\u7DDA"},ld=[["superficial","\u6DFA\u5C64"],["middle","\u4E2D\u5C64"],["deep","\u6DF1\u5C64"],["bones","\u9AA8\u9ABC"]],cy=[["off","\u4E0D\u986F\u793A"],["posture","\u59FF\u52E2\u9020\u6210\u7684"],["all","\u5168\u8EAB"]];function hy(i,t,e){return i==="off"?"\u9078\u300C\u59FF\u52E2\u9020\u6210\u7684\u300D\uFF0C\u4E0B\u65B9\u63DB\u59FF\u52E2\u6642\u5C31\u6703\u6A19\u51FA\u88AB\u5B83\u9396\u77ED\u3001\u9396\u9577\u7684\u808C\u8089\u75E0\u75DB\u9EDE\u3002":i==="all"?`\u5168\u8EAB ${e} \u500B\u75E0\u75DB\u9EDE\u3002\u83F1\u5F62\u6108\u5927\u4EE3\u8868\u808C\u8089\u6108\u6DFA\u5C64\uFF1B\u9EDE\u5B83\u770B\u53EF\u80FD\u7684\u554F\u984C\u8207\u8F49\u79FB\u75DB\u7BC4\u570D\u3002`:t?`\u9019\u500B\u59FF\u52E2\u6A19\u51FA ${e} \u500B\u75E0\u75DB\u9EDE\uFF1A\u7D05\uFF1D\u9396\u77ED\u3001\u85CD\uFF1D\u9396\u9577\u3002\u9EDE\u5B83\u770B\u53EF\u80FD\u7684\u554F\u984C\u8207\u8F49\u79FB\u75DB\u7BC4\u570D\u3002`:"\u76EE\u524D\u662F\u4E2D\u7ACB\u59FF\u52E2\uFF0C\u6240\u4EE5\u6C92\u6709\u75E0\u75DB\u9EDE\u3002\u5230\u4E0B\u65B9\u9078\u4E00\u500B\u59FF\u52E2\uFF08\u5713\u80A9\u3001\u982D\u524D\u50BE\u3001\u6ED1\u624B\u6A5F\u2026\uFF09\uFF0C\u88AB\u5B83\u9396\u77ED\u3001\u9396\u9577\u7684\u808C\u8089\u5C31\u6703\u6A19\u51FA\u4F86\u3002"}function cd(i,t,e){i.innerHTML=`
    <h2>\u62C6\u89E3</h2>
    <div class="layers">${ld.map(([o,l])=>`<label class="toggle"><input type="checkbox" data-layer="${o}" checked>${l}</label>`).join("")}</div>
    <div class="pain-modes">
      <span class="label">\u75E0\u75DB\u9EDE</span>
      ${cy.map(([o,l])=>`<button type="button" data-pain="${o}">${l}</button>`).join("")}
    </div>
    <p class="hint pain-hint-line"></p>
    <button type="button" class="lookup-toggle" data-lookup></button>
    <p class="hint lookup-hint-line"></p>
    <label class="toggle" title="\u7D93\u8108\u8207\u75E0\u75DB\u9EDE\u4E0D\u6703\u88AB\u808C\u8089\u64CB\u4F4F\uFF0C\u80CC\u9762\u7684\u4E5F\u770B\u5F97\u5230"><input type="checkbox" data-overlay>\u7A7F\u900F\u986F\u793A</label>
    <label class="slider">\u7206\u70B8\u5716<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>\u5FA9\u539F</button>
    <div class="hidden-list"></div>
    <p class="hint">\u95DC\u6389\u6DFA\u5C64\u770B\u4E2D\u5C64\uFF1B\u9EDE\u9078\u808C\u8089\u53EF\u96B1\u85CF\u3001\u534A\u900F\u660E\u6216\u62C9\u51FA\u3002</p>`;let n=i.querySelector(".hidden-list");i.addEventListener("change",o=>{let l=o.target.dataset.layer;l&&t.setLayer(l,o.target.checked),"overlay"in o.target.dataset&&t.setOverlay(o.target.checked)}),i.addEventListener("input",o=>{"explode"in o.target.dataset&&t.setExplode(Number(o.target.value))}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.pain?t.setPainMode(l.dataset.pain):"lookup"in l.dataset?t.setLookupMode(!t.state.lookupMode):"reset"in l.dataset?t.reset():"restoreAll"in l.dataset?t.restoreParts():l.dataset.unset&&t.toggle(l.dataset.unset,l.dataset.key))});let s=o=>{let l=t.partByKey(o);return`${e.muscles[l.info.id].name}\uFF08${ly[l.info.side]}\uFF09`},r=(o,l,c)=>`<li><span>${s(o)}</span><button type="button" data-unset="${l}" data-key="${o}">${c}</button></li>`,a=()=>{for(let[u]of ld)i.querySelector(`[data-layer="${u}"]`).checked=t.state.layers[u];i.querySelector("[data-explode]").value=t.state.explode,i.querySelector("[data-overlay]").checked=t.state.overlay,i.querySelector(".pain-hint-line").textContent=hy(t.state.painMode,t.poseActive,t.visiblePainCount());let o=t.state.lookupMode,l=i.querySelector("[data-lookup]");l.textContent=o?"\u2713 \u627E\u75DB\u6E90\u4E2D\uFF08\u9EDE\u4E00\u4E0B\u7D50\u675F\uFF09":"\u627E\u75DB\u6E90\uFF1A\u6211\u54EA\u88E1\u75DB\uFF1F",l.classList.toggle("active",o),i.querySelector(".lookup-hint-line").textContent=o?"\u5728\u6A21\u578B\u4E0A\u9EDE\u6703\u75DB\u7684\u4F4D\u7F6E\uFF0C\u53F3\u5074\u5C31\u5217\u51FA\u8F49\u79FB\u75DB\u6703\u5230\u90A3\u88E1\u7684\u808C\u8089\u3002":"\u77E5\u9053\u54EA\u88E1\u75DB\u3001\u4F46\u4E0D\u77E5\u9053\u662F\u54EA\u689D\u808C\u8089\u6642\uFF0C\u7528\u9019\u500B\u53CD\u67E5\u3002";for(let u of i.querySelectorAll("[data-pain]"))u.classList.toggle("active",u.dataset.pain===t.state.painMode);let{hidden:c,ghost:h}=t.state;n.innerHTML=c.size+h.size===0?"":`<h3>\u5DF2\u96B1\u85CF\uFF0F\u534A\u900F\u660E</h3>
           <ul>${[...c].map(u=>r(u,"hidden","\u986F\u793A")).join("")}${[...h].map(u=>r(u,"ghost","\u53D6\u6D88\u534A\u900F\u660E")).join("")}</ul>
           <button type="button" data-restore-all>\u5168\u90E8\u6062\u5FA9</button>`};t.onChange(a),a()}var uy=[["all","\u5168\u90E8"],["face","\u81C9\u90E8"],["headNeck","\u982D\u9838"],["trunk","\u8EC0\u5E79"],["upperLimb","\u4E0A\u80A2"],["lowerLimb","\u4E0B\u80A2"]];function hd(i,t,e,n){let s=e.trim().toLowerCase(),r=new Map;for(let a of i){let o=t.muscles[a.info.id];n!=="all"&&a.info.region!==n||s&&!`${o.name} ${o.en}`.toLowerCase().includes(s)||(r.has(a.info.id)||r.set(a.info.id,{id:a.info.id,name:o.name,en:o.en,sides:[]}),r.get(a.info.id).sides.push(a.info.side))}return[...r.values()]}var dy={l:"\u5DE6",r:"\u53F3",m:"\u9078\u53D6"};function ud(i,t,e){let n="",s="all";i.innerHTML=`
    <h2>\u808C\u8089\u6E05\u55AE</h2>
    <input type="search" placeholder="\u641C\u5C0B\uFF1A\u80F8\u5C0F\u808C\u3001trapezius\u2026" data-search>
    <div class="regions">${uy.map(([l,c])=>`<button type="button" data-region="${l}">${c}</button>`).join("")}</div>
    <p class="muscle-count"></p>
    <ul class="muscle-rows"></ul>`;let r=i.querySelector(".muscle-rows"),a=i.querySelector(".muscle-count");i.addEventListener("input",l=>{"search"in l.target.dataset&&(n=l.target.value,o())}),i.addEventListener("click",l=>{let c=l.target.closest("button");c&&(c.dataset.region?(s=c.dataset.region,o()):c.dataset.key&&t.focus(c.dataset.key))});function o(){for(let h of i.querySelectorAll("[data-region]"))h.classList.toggle("active",h.dataset.region===s);let l=hd(t.parts,e,"","all").length;if(!n.trim()&&s==="all"){a.textContent=`\u5171 ${l} \u689D`,r.innerHTML='<li class="hint">\u8F38\u5165\u95DC\u9375\u5B57\uFF0C\u6216\u6309\u4E0A\u9762\u7684\u5206\u5340\uFF08\u982D\u9838\u3001\u8EC0\u5E79\u3001\u4E0A\u80A2\u3001\u4E0B\u80A2\uFF09\u5217\u51FA\u808C\u8089\u3002</li>';return}let c=hd(t.parts,e,n,s);a.textContent=`\u7B26\u5408 ${c.length} \u689D\uFF0F\u5171 ${l} \u689D\uFF08\u53EF\u4E0A\u4E0B\u6372\u52D5\uFF09`,r.innerHTML=c.length?c.map(h=>`<li title="${h.en}"><span>${h.name}</span>${h.sides.map(u=>`<button type="button" data-key="${h.id}.${u}" class="${t.state.selectedKey===`${h.id}.${u}`?"active":""}">${dy[u]}</button>`).join("")}</li>`).join(""):'<li class="hint">\u627E\u4E0D\u5230\u7B26\u5408\u7684\u808C\u8089</li>'}t.onChange(o),o()}var oc={l:"\u5DE6\u5074",r:"\u53F3\u5074",m:"\u4E2D\u7DDA"},fd={superficial:"\u6DFA\u5C64",middle:"\u4E2D\u5C64\uFF08\u95DC\u6389\u6DFA\u5C64\u624D\u770B\u5F97\u5230\uFF09",deep:"\u6DF1\u5C64\uFF08\u95DC\u6389\u6DFA\u5C64\u3001\u4E2D\u5C64\u624D\u770B\u5F97\u5230\uFF09"},dd={l:"\u5DE6",r:"\u53F3",m:""};function pd(i,t,e){function n(){let s=t.selectedAcupoint;if(s)return void(i.innerHTML=fy(s,e));if(t.state.lookup)return void(i.innerHTML=gy(t,e));if(t.state.selectedPain)return void(i.innerHTML=_y(t,e));if(t.state.selectedKey)return void(i.innerHTML=xy(t,e));i.innerHTML=vy(t,e)}i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.act&&t.state.selectedKey?t.toggle(r.dataset.act,t.state.selectedKey):r.dataset.muscle?t.focus(r.dataset.muscle):"postureZones"in r.dataset?t.setPostureZones(!t.state.postureZones):r.dataset.meridian&&t.toggleMeridian(r.dataset.meridian))}),t.onChange(n),n()}function fy({meridian:i,side:t,point:e},n){return`
    <h2>${e.name}<span class="side">${e.code}${dd[t]?`\u3000${dd[t]}\u5074`:""}</span></h2>
    <p class="en">${i.name}\uFF08${i.short}\uFF09</p>
    <dl>
      <dt>\u5B9A\u4F4D</dt><dd>${e.note||"\u2014"}</dd>
      <dt>\u6240\u5C6C</dt><dd>${i.organ}</dd>
      <dt>\u8D70\u5411</dt><dd>${i.flow}</dd>
    </dl>
    <p class="notes">${n.meridians[i.id]??""}</p>
    <p class="hint">\u7A74\u4F4D\u5EA7\u6A19\u662F\u4F9D\u6A21\u578B\u9AA8\u67B6\u4F30\u7B97\u7684\u6559\u5B78\u793A\u610F\uFF0C\u5BE6\u969B\u53D6\u7A74\u8ACB\u4F9D\u6A19\u6E96\u5B9A\u4F4D\u8207\u9AD4\u8868\u6A19\u8A8C\u3002</p>`}function py(i,t,e){let n=i.west;return`
    <details class="view west">
      <summary>\u897F\u91AB\u89C0\u9EDE\uFF1A\u808C\u7B4B\u819C\u6FC0\u75DB\u9EDE</summary>
      <p>${n.term}</p>
      <p>${n.how}</p>
      <p><b>\u9019\u4E00\u9EDE\uFF1A</b>${e}</p>
      <p><b>\u5E38\u898B\u8655\u7F6E\uFF1A</b>${n.do}</p>
      <p class="red-flag"><b>\u4EC0\u9EBC\u6642\u5019\u8981\u5C31\u91AB\uFF1A</b>${n.red}</p>
    </details>`}function my(i,t,e){let n=i.tcm,s=e.length?e.map(a=>`${a.point.name}\uFF08${a.point.code}\uFF0C\u7D04 ${a.distance.toFixed(1)} \u516C\u5206\uFF09`).join("\u3001"):"\u9644\u8FD1 6 \u516C\u5206\u5167\u6C92\u6709\u672C\u6A21\u578B\u6536\u9304\u7684\u7D93\u7A74\uFF0C\u53EF\u76F4\u63A5\u53D6\u963F\u662F\u7A74",r=t.length?t.map(a=>`<b>${a.meridian.short}</b>\uFF1A${i.meridianPoints[a.meridian.id]??"\u2014"}`).join("<br>"):"\u9644\u8FD1\u6C92\u6709\u7D93\u904E\u7684\u7D93\u8108\uFF0C\u4EE5\u5C40\u90E8\u963F\u662F\u7A74\u70BA\u4E3B";return`
    <details class="view tcm">
      <summary>\u4E2D\u91AB\u89C0\u9EDE\uFF1A\u7D93\u7B4B\u8207\u963F\u662F\u7A74</summary>
      <p>${n.ashi}</p>
      <p>${n.jingjin}</p>
      <p><b>\u8FD1\u53D6\uFF08\u9019\u4E00\u9EDE\u9644\u8FD1\u7684\u7D93\u7A74\uFF09\uFF1A</b>${s}</p>
      <p><b>\u9060\u53D6\uFF08\u540C\u4E00\u689D\u7D93\u8108\u7684\u8981\u7A74\uFF09\uFF1A</b><br>${r}</p>
      <p>${n.how}</p>
      <p>${n.pattern}</p>
      <p class="notes">${n.note}</p>
    </details>`}function gy(i,t){let{sources:e}=i.state.lookup;if(!e.length)return`
      <h2>\u627E\u75DB\u6E90</h2>
      <p class="hint">\u9019\u500B\u4F4D\u7F6E\u6C92\u6709\u5C0D\u61C9\u5230\u6536\u9304\u7684\u8F49\u79FB\u75DB\u5340\u57DF\u3002\u8A66\u8A66\u9EDE\u5728\u808C\u8089\u6BD4\u8F03\u591A\u7684\u5730\u65B9\uFF0C\u6216\u628A\u8996\u89D2\u8F49\u5230\u771F\u6B63\u6703\u75DB\u7684\u90A3\u4E00\u9762\u518D\u9EDE\u4E00\u6B21\u3002</p>`;let n=e.map(s=>{let r=t.muscles[s.id],a=i.partByKey(`${s.id}.${s.side}`)??i.partByKey(`${s.id}.m`);return!a||!r?"":`
        <li>
          <button type="button" class="link" data-muscle="${a.info.key}">${r.name}<span class="side">${oc[a.info.side]}</span></button>
          <span class="zone"><b class="depth ${s.zone.depth}">${ic[s.zone.depth]}</b>${s.zone.label}</span>
          <p>${r.painPoints==="\u2014"?r.referredPain:r.painPoints}</p>
        </li>`}).join("");return`
    <h2>\u627E\u75DB\u6E90<span class="side">${e.length} \u689D\u53EF\u80FD\u7684\u808C\u8089</span></h2>
    <p class="hint">\u4EE5\u4E0B\u808C\u8089\u7684\u8F49\u79FB\u75DB\u6703\u5230\u4F60\u9EDE\u7684\u90A3\u500B\u4F4D\u7F6E\uFF0C\u6108\u4E0A\u9762\u4EE3\u8868\u90A3\u4E00\u9EDE\u6108\u843D\u5728\u5B83\u7684\u8F49\u79FB\u75DB\u7BC4\u570D\u4E2D\u5FC3\u3002\u9EDE\u808C\u8089\u540D\u7A31\u53EF\u4EE5\u8DF3\u904E\u53BB\u770B\u5B8C\u6574\u8AAA\u660E\u8207\u75E0\u75DB\u9EDE\u3002</p>
    <ol class="lookup-list">${n}</ol>
    <p class="hint">\u540C\u4E00\u500B\u5730\u65B9\u75DB\u53EF\u80FD\u6709\u597D\u5E7E\u500B\u4F86\u6E90\uFF0C\u8981\u9760\u6309\u58D3\u80FD\u4E0D\u80FD\u91CD\u73FE\u4F60\u5E73\u5E38\u7684\u75DB\u4F86\u5206\u8FA8\u3002\u9019\u662F\u6574\u7406\u51FA\u4F86\u7684\u5E38\u898B\u95DC\u806F\uFF0C\u4E0D\u80FD\u53D6\u4EE3\u5C08\u696D\u8A55\u4F30\u3002</p>`}function _y(i,t){let{key:e,index:n}=i.state.selectedPain,s=i.partByKey(e);if(!s)return'<p class="hint">\u627E\u4E0D\u5230\u9019\u500B\u75E0\u75DB\u9EDE\u3002</p>';let r=t.muscles[s.info.id],a=Zn(s.delta),o=i.poseActive&&s.info.measure?`<p class="delta ${a}">\u76EE\u524D\u59FF\u52E2\u4E0B\u9019\u689D\u808C\u8089 ${ro(s.delta)}\u3000${Bs[a]}</p>${a==="same"?"":`<p class="pain-hint ${a}">${t.painHints[a]}</p>`}`:"",l=i.painPosition(e,n),c=l?i.nearbyMeridians(l):[],h=l?i.nearbyAcupoints(l):[],u=c.length?c.map(_=>`<button type="button" class="link" data-meridian="${_.meridian.id}">${_.meridian.short}</button>`).join("\u3001"):"\u9644\u8FD1\u6C92\u6709\u7D93\u904E\u7684\u7D93\u8108",d=i.referredZonesOfSelection(),f=td.map(_=>[_,[...new Set(d.filter(m=>m.depth===_).map(m=>m.label))]]).filter(([,_])=>_.length).map(([_,m])=>`<b class="depth ${_}">${ic[_]}</b>${m.join("\u3001")}`).join("<br>"),g=s.tps.length;return`
    <h2>\u75E0\u75DB\u9EDE<span class="side">${r.name}\u3000${oc[s.info.side]}${g>1?`\u3000\u7B2C ${n+1} \u9EDE`:""}</span></h2>
    <p class="en">${r.en}</p>
    ${o}
    <dl>
      <dt>\u6240\u5728\u5C64\u6B21</dt><dd>${fd[s.info.layer]}</dd>
      <dt>\u53EF\u80FD\u7684\u554F\u984C</dt><dd>${t.problems[s.info.id]??"\u2014"}</dd>
      <dt>\u75E0\u75DB\u4F4D\u7F6E</dt><dd>${r.painPoints}</dd>
      <dt>\u8F49\u79FB\u75DB</dt><dd>${r.referredPain}</dd>
      <dt>\u6A19\u793A\u7BC4\u570D</dt><dd>${d.length?`${f}<span class="zone-note">\u6A21\u578B\u4E0A\u6703\u628A\u9019\u4E9B\u5340\u57DF\u7684\u808C\u8089\u67D3\u8272\uFF08\u67D3\u4E0D\u5230\u7684\u5730\u65B9\u624D\u7528\u534A\u900F\u660E\u7684\u7403\u7F69\u51FA\u4F86\uFF09\u3002\u984F\u8272\u6108\u6FC3\u8868\u793A\u75DB\u5F97\u6108\u6DF1\u2014\u2014\u9019\u662F\u75DB\u611F\u89BA\u8D77\u4F86\u7684\u6DF1\u5EA6\uFF0C\u4E0D\u662F\u808C\u8089\u7684\u5C64\u6B21\u3002</span>`:"\u6C92\u6709\u5178\u578B\u7684\u8F49\u79FB\u75DB\u7BC4\u570D"}</dd>
      <dt>\u5E38\u898B\u9396\u77ED</dt><dd>${r.lockedShort}</dd>
      <dt>\u5E38\u898B\u9396\u9577</dt><dd>${r.lockedLong}</dd>
      <dt>\u5217\u8ECA\u7DDA</dt><dd>${r.lines.length?r.lines.join("\u3001"):"\u2014"}</dd>
      <dt>\u9130\u8FD1\u7D93\u8108</dt><dd>${u}</dd>
    </dl>
    ${py(t,r,t.problems[s.info.id]??"\u2014")}
    ${my(t,c,h)}
    <div class="actions"><button type="button" data-muscle="${e}">\u770B\u9019\u689D\u808C\u8089\u7684\u5B8C\u6574\u8AAA\u660E</button></div>
    <p class="hint">\u75E0\u75DB\u9EDE\u8207\u8F49\u79FB\u75DB\u662F\u5E38\u898B\u4F4D\u7F6E\u7684\u6574\u7406\uFF0C\u4E0D\u80FD\u53D6\u4EE3\u5C08\u696D\u8A55\u4F30\uFF1B\u75DB\u7684\u5730\u65B9\u4E0D\u4E00\u5B9A\u662F\u554F\u984C\u7684\u6839\u6E90\u3002</p>`}function xy(i,t){let e=i.state.selectedKey,n=i.partByKey(e),s=t.muscles[n.info.id],r=i.state,a=Zn(n.delta),o="";i.poseActive&&(o=n.info.measure?`<p class="delta ${a}">\u76EE\u524D ${ro(n.delta)}\u3000${Bs[a]}</p>`:'<p class="delta same">\u4E0D\u8A08\u7B97\u9577\u5EA6\u8B8A\u5316\uFF08\u7B4B\u819C\u3001\u808C\u8171\uFF0C\u4EE5\u53CA\u81C9\u90E8\u7B49\u672C\u6A21\u578B\u6C92\u6709\u5EFA\u95DC\u7BC0\u7684\u90E8\u4F4D\uFF09</p>');let l=i.poseActive&&n.info.measure&&a!=="same"?`<p class="pain-hint ${a}">${t.painHints[a]}</p>`:"";return`
    <h2>${s.name}<span class="side">${oc[n.info.side]}</span></h2>
    <p class="en">${s.en}<br><i>${s.latin}</i></p>
    ${o}
    <dl>
      <dt>\u6240\u5728\u5C64\u6B21</dt><dd>${fd[n.info.layer]}</dd>
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
    </div>`}function yy(i,t){let e=i.postureMuscles();if(!e.length)return"";let n=e.map(r=>{let a=t.muscles[r.id];return`<li class="${r.state}"><button type="button" class="link" data-muscle="${r.key}">${a.name}</button><span>${ro(r.delta)}\u3000${Bs[r.state]}</span></li>`}).join(""),s=i.state.postureZones;return`
    <h2>\u9019\u500B\u59FF\u52E2\u6700\u5403\u8667\u7684\u808C\u8089</h2>
    <p class="hint">\u4F9D\u9577\u5EA6\u8B8A\u5316\u6392\u5E8F\uFF08\u7D05\uFF1D\u9396\u77ED\u3001\u85CD\uFF1D\u9396\u9577\uFF09\u3002\u9EDE\u540D\u7A31\u8DF3\u5230\u90A3\u689D\u808C\u8089\u3002</p>
    <ol class="posture-list">${n}</ol>
    <div class="actions"><button type="button" data-posture-zones class="${s?"active":""}">${s?"\u2713 \u5DF2\u6A19\u51FA\u9019\u500B\u59FF\u52E2\u7684\u75DB\u5340":"\u6A19\u51FA\u9019\u500B\u59FF\u52E2\u7684\u75DB\u5340"}</button></div>
    <p class="hint">\u300C\u75DB\u5340\u300D\u628A\u4E0A\u9762\u9019\u4E9B\u808C\u8089\u7684\u8F49\u79FB\u75DB\u758A\u8D77\u4F86\u67D3\u5728\u6A21\u578B\u4E0A\uFF0C\u5C31\u662F\u9019\u500B\u59FF\u52E2\u6700\u5BB9\u6613\u611F\u89BA\u5230\u75E0\u75DB\u7684\u5730\u65B9\u3002</p>`}function vy(i,t){let e=i.activeLines.map(r=>Si.find(a=>a.id===r)),n=i.activeMeridians.map(Yu).filter(Boolean),s=yy(i,t);return!e.length&&!n.length?s||'<p class="hint">\u9EDE\u9078\u808C\u8089\u3001\u75E0\u75DB\u9EDE\u6216\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u4E5F\u53EF\u4EE5\u5F9E\u5DE6\u5074\u6E05\u55AE\u9078\u53D6\u3002</p>':`
    ${s}
    ${e.map(r=>`<h2>${r.name}</h2><p>${t.lines[r.name]}</p>`).join("")}
    ${n.map(r=>`<h2>${r.name}<span class="side">${r.code}</span></h2><p>${t.meridians[r.id]}</p>`).join("")}
    <p class="hint">\u9EDE\u9078\u7DDA\u4E0A\u7684\u808C\u8089\u6216\u7D93\u8108\u4E0A\u7684\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u518D\u9EDE\u4E00\u6B21\u53EF\u53D6\u6D88\u3002</p>`}var Qn=()=>window.matchMedia("(max-width: 900px)").matches;function My(i,t){try{let e=localStorage.getItem(i);return e===null?t:e==="1"}catch{return t}}function by(i,t){try{localStorage.setItem(i,t?"1":"0")}catch{}}function ti(i,t,{collapsedByDefault:e=!1,onToggle:n}={}){let s=i.querySelector("[data-collapse]");if(!s)return;let r=s.dataset.collapse,a=My(t,e),o=()=>{i.classList.toggle("collapsed",a),s.textContent=`${r} ${a?"\u25B8":"\u25BE"}`,s.title=`${a?"\u5C55\u958B":"\u6536\u5408"}${r}`,s.setAttribute("aria-label",s.title),s.setAttribute("aria-expanded",String(!a))};s.addEventListener("click",()=>{a=!a,by(t,a),o(),n?.(a)}),o()}var Sy=1500,md="anatomyTrains3d.jointsOpen";function Ey(){try{return localStorage.getItem(md)==="1"}catch{return!1}}function wy(i){try{localStorage.setItem(md,i?"1":"0")}catch{}}function gd(i,t,e,n){let s="neutral",r="both",a=0,o=d=>`<label><span>${d.label}</span><small>${d.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${d.key}"><small>${d.maxLabel}</small></label>`;i.innerHTML=`
    <div class="presets">
      <button type="button" class="bar-toggle" data-collapse="\u59FF\u52E2"></button>
      <span class="collapse-body">
        ${Object.entries(ao).map(([d,f])=>`<button type="button" data-preset="${d}">${f.label}</button>`).join("")}
        <button type="button" data-play>\u25B6 \u64AD\u653E</button>
        <button type="button" class="joints-toggle" data-joints aria-expanded="false"></button>
      </span>
    </div>
    <p class="posture-note"></p>
    <div class="slider-groups">
      ${bu.map(([d,f])=>`
        <fieldset class="slider-group${ks.filter(g=>g.group===d).length>5?" wide":""}">
          <legend>${f}</legend>
          ${ks.some(g=>g.group===d&&g.sided)?`<div class="side-modes">${Su.map(([g,_])=>`<button type="button" data-mode="${g}">${_}</button>`).join("")}</div>`:""}
          ${ks.filter(g=>g.group===d).map(o).join("")}
        </fieldset>`).join("")}
    </div>`;let l=i.querySelector("[data-joints]");function c(d){i.classList.toggle("open",d),l.setAttribute("aria-expanded",String(d)),l.textContent=d?"\u6536\u8D77\u95DC\u7BC0 \u25B4":"\u8ABF\u6574\u95DC\u7BC0 \u25BE"}c(Ey());function h(d,f){cancelAnimationFrame(a);let g=performance.now(),_=m=>{let p=Math.min(1,(m-g)/Sy);t.setParams(Tu(d,f,Au(p))),p<1&&(a=requestAnimationFrame(_))};a=requestAnimationFrame(_)}i.addEventListener("click",d=>{let f=d.target.closest("button");f&&(f.dataset.preset?(s=f.dataset.preset,h(t.params,ao[s].params)):"play"in f.dataset?((!s||s==="neutral")&&(s="roundedShoulders"),h(xn,ao[s].params)):f.dataset.mode?r=f.dataset.mode:"joints"in f.dataset&&(c(!i.classList.contains("open")),wy(i.classList.contains("open"))),u())}),i.addEventListener("input",d=>{let f=d.target.dataset.param;if(!f)return;cancelAnimationFrame(a);let g=wu(t.params,f,Ru(Number(d.target.value)),r);s=lo(g)?"neutral":null,t.setParams(g)});function u(){let d=t.params;for(let f of ks)i.querySelector(`[data-param="${f.key}"]`).value=Eu(d,f.key,r);for(let f of i.querySelectorAll("[data-preset]"))f.classList.toggle("active",f.dataset.preset===s);for(let f of i.querySelectorAll("[data-mode]"))f.classList.toggle("active",f.dataset.mode===r);i.querySelector(".posture-note").textContent=s?e.postures[s]:"\u81EA\u8A02\u59FF\u52E2\uFF1A\u62D6\u52D5\u6ED1\u687F\u8ABF\u6574\u5404\u95DC\u7BC0\uFF1B\u4E0A\u80A2\u3001\u4E0B\u80A2\u53EF\u5207\u63DB\u300C\u5169\u5074\u4E00\u8D77\u300D\u6216\u53EA\u8ABF\u5DE6\u5074\u3001\u53F3\u5074\u3002"}t.onChange(u),u(),ti(i,"anatomyTrains3d.postureBarOpen",{collapsedByDefault:Qn(),onToggle:n})}function _d(i,t,e){i.innerHTML=`<button type="button" class="bar-toggle" data-collapse="\u5217\u8ECA\u7DDA"></button><span class="collapse-body"><button type="button" data-line="">\u5168\u90E8</button>${Si.map(s=>`<button type="button" data-line="${s.id}">${s.name}</button>`).join("")}</span>`,ti(i,"anatomyTrains3d.lineBarOpen",{collapsedByDefault:Qn(),onToggle:e}),i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.line?t.toggleLine(r.dataset.line):t.clearLines())});let n=()=>{let s=t.activeLines;for(let r of i.querySelectorAll("[data-line]"))r.classList.toggle("active",r.dataset.line?s.includes(r.dataset.line):!s.length)};t.onChange(n),n()}function xd(i,t,e){let n=Object.fromEntries(ec),s=o=>`<button type="button" data-meridian="${o.id}" title="${o.name}\uFF08${n[o.group]}\uFF09\uFF1A${o.flow}"><i style="background:rgb(${o.color.map(l=>Math.round(l*255)).join(",")})"></i>${o.short}</button>`,r=ec.map(([o])=>zs.filter(l=>l.group===o).map(s).join(""));i.innerHTML=`<button type="button" class="bar-toggle" data-collapse="\u7D93\u8108"></button><span class="collapse-body"><button type="button" data-clear-meridians>\u4E0D\u986F\u793A</button>${r.map(o=>`<span class="sep"></span>${o}`).join("")}</span>`,ti(i,"anatomyTrains3d.meridianBarOpen",{collapsedByDefault:Qn(),onToggle:e}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.meridian?t.toggleMeridian(l.dataset.meridian):"clearMeridians"in l.dataset&&t.clearMeridians())});let a=()=>{let o=t.activeMeridians;for(let l of i.querySelectorAll("[data-meridian]"))l.classList.toggle("active",o.includes(l.dataset.meridian));i.querySelector("[data-clear-meridians]").classList.toggle("active",!o.length)};t.onChange(a),a()}var yd=[["up","\u25B2","\u756B\u9762\u4E0A\u79FB",0,1],["left","\u25C0","\u756B\u9762\u5DE6\u79FB",-1,0],["center","\u25CF","\u7F6E\u4E2D\uFF08\u56DE\u5230\u8EAB\u9AD4\u4E2D\u7DDA\uFF09"],["right","\u25B6","\u756B\u9762\u53F3\u79FB",1,0],["down","\u25BC","\u756B\u9762\u4E0B\u79FB",0,-1]];function vd(i,t){i.innerHTML=yd.map(([e,n,s])=>`<button type="button" class="pan-${e}" data-pan="${e}" title="${s}" aria-label="${s}">${n}</button>`).join("")+"<small>\u96D9\u64CA\u6A21\u578B\uFF1A\u8A2D\u70BA\u65CB\u8F49\u4E2D\u5FC3</small>",i.addEventListener("click",e=>{let n=yd.find(s=>s[0]===e.target.closest("button")?.dataset.pan);n&&(n[0]==="center"?t.center():t.pan(n[3],n[4]))})}var Ty=[{side:"left",cls:"hide-left",open:"\u25C0",closed:"\u25B6",label:["\u6536\u8D77\u5DE6\u5074\u5DE5\u5177\u5217","\u5C55\u958B\u5DE6\u5074\u5DE5\u5177\u5217"]},{side:"right",cls:"hide-right",open:"\u25B6",closed:"\u25C0",label:["\u6536\u8D77\u53F3\u5074\u8AAA\u660E","\u5C55\u958B\u53F3\u5074\u8AAA\u660E"]}];function Md(i,t){for(let e of Ty){let n=document.createElement("button");n.type="button",n.className=`panel-toggle ${e.side}`;let s=()=>{let r=document.body.classList.contains(e.cls);n.textContent=r?e.closed:e.open,n.title=e.label[r?1:0],n.setAttribute("aria-label",n.title),n.setAttribute("aria-expanded",String(!r))};n.addEventListener("click",()=>{document.body.classList.toggle(e.cls),s(),t.resize()}),s(),i.appendChild(n)}}var ei=ru(document.getElementById("viewport")),ac=Mu(window.MODEL_DATA);ei.scene.add(ac.group);var Re=ad(ei,ac);cd(document.getElementById("dissect"),Re,window.CONTENT);ud(document.getElementById("muscleList"),Re,window.CONTENT);pd(document.getElementById("info"),Re,window.CONTENT);var lc=()=>ei.resize();gd(document.getElementById("postureBar"),Re,window.CONTENT,lc);_d(document.getElementById("lineBar"),Re,lc);xd(document.getElementById("meridianBar"),Re,lc);vd(document.getElementById("panPad"),ei);Md(document.getElementById("viewport"),ei);ti(document.getElementById("legend"),"anatomyTrains3d.legendOpen",{collapsedByDefault:Qn()});var yo=ei.renderer.domElement,us=null;yo.addEventListener("pointerdown",i=>{us=[i.clientX,i.clientY],yo.focus({preventScroll:!0})});yo.addEventListener("pointerup",i=>{if(us&&Math.hypot(i.clientX-us[0],i.clientY-us[1])<5){if(Re.state.lookupMode){Re.lookupAt(Re.pointAt(i.clientX,i.clientY)),us=null;return}let t=Re.pickAt(i.clientX,i.clientY);t.kind==="acupoint"?Re.selectAcupoint(t.hit):t.kind==="pain"?Re.selectPain(t.pain):Re.select(t.key&&t.key===Re.state.selectedKey?null:t.key??null)}us=null});yo.addEventListener("dblclick",i=>{let t=Re.pointAt(i.clientX,i.clientY);t&&ei.recenter(t)});document.getElementById("loading").remove();window.app={viewer:ei,model:ac,ctrl:Re};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
