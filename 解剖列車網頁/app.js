(()=>{var Al="170",bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ld=0,Mc=1,Dd=2;var Ih=1,Ud=2,Pn=3,Zn=0,Oe=1,sn=2,$n=0,Wi=1,bc=2,Sc=3,Ec=4,Nd=5,ui=100,Fd=101,Od=102,Bd=103,kd=104,zd=200,Hd=201,Vd=202,Gd=203,ea=204,na=205,Wd=206,Xd=207,qd=208,$d=209,Yd=210,Zd=211,Kd=212,Jd=213,jd=214,ia=0,sa=1,ra=2,Yi=3,oa=4,aa=5,la=6,ca=7,Lh=0,Qd=1,tf=2,Yn=0,ef=1,nf=2,sf=3,rf=4,of=5,af=6,lf=7;var Dh=300,Zi=301,Ki=302,ha=303,ua=304,Kr=306,da=1e3,pi=1001,fa=1002,qe=1003,cf=1004;var Xs=1005;var dn=1006,So=1007;var mi=1008;var Un=1009,Uh=1010,Nh=1011,Cs=1012,Rl=1013,gi=1014,fn=1015,Bs=1016,Cl=1017,Pl=1018,Ji=1020,Fh=35902,Oh=1021,Bh=1022,on=1023,kh=1024,zh=1025,Xi=1026,ji=1027,Il=1028,Ll=1029,Hh=1030,Dl=1031;var Ul=1033,gr=33776,_r=33777,xr=33778,yr=33779,pa=35840,ma=35841,ga=35842,_a=35843,xa=36196,ya=37492,va=37496,Ma=37808,ba=37809,Sa=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,Ia=37818,La=37819,Da=37820,Ua=37821,vr=36492,Na=36494,Fa=36495,Vh=36283,Oa=36284,Ba=36285,ka=36286;var Mr=2300,za=2301,Eo=2302,wc=2400,Tc=2401,Ac=2402;var hf=3200,uf=3201;var Gh=0,df=1,qn="",ce="srgb",is="srgb-linear",Jr="linear",Qt="srgb";var Ri=7680;var Rc=519,ff=512,pf=513,mf=514,Wh=515,gf=516,_f=517,xf=518,yf=519,Ha=35044,Xh=35048;var Cc="300 es",In=2e3,br=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=1234567,Es=Math.PI/180,Ps=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function vf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mf(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function bf(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function Sf(i,t=1){return t-Math.abs(Nl(i,t*2)-t)}function Ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Af(i,t){return i+Math.random()*(t-i)}function Rf(i){return i*(.5-Math.random())}function Cf(i){i!==void 0&&(Pc=i);let t=Pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pf(i){return i*Es}function If(i){return i*Ps}function Lf(i){return(i&i-1)===0&&i!==0}function Df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var jr={DEG2RAD:Es,RAD2DEG:Ps,generateUUID:Ln,clamp:_e,euclideanModulo:Nl,mapLinear:vf,inverseLerp:Mf,lerp:ws,damp:bf,pingpong:Sf,smoothstep:Ef,smootherstep:wf,randInt:Tf,randFloat:Af,randFloatSpread:Rf,seededRandom:Cf,degToRad:Pf,radToDeg:If,isPowerOfTwo:Lf,ceilPowerOfTwo:Df,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:Nf,normalize:jt,denormalize:rn},_t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],M=s[4],x=s[7],R=s[2],A=s[5],I=s[8];return r[0]=a*_+o*E+l*R,r[3]=a*m+o*M+l*A,r[6]=a*f+o*x+l*I,r[1]=c*_+h*E+d*R,r[4]=c*m+h*M+d*A,r[7]=c*f+h*x+d*I,r[2]=u*_+p*E+g*R,r[5]=u*m+p*M+g*A,r[8]=u*f+p*x+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Ot;function qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){let i=Sr("canvas");return i.style.display="block",i}var Ic={};function bs(i){i in Ic||(Ic[i]=!0,console.warn(i))}function Of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Uc=[.3127,.329],Nc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[is]:{primaries:Lc,whitePoint:Uc,transfer:Jr,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:ce},outputColorSpaceConfig:{drawingBufferColorSpace:ce}},[ce]:{primaries:Lc,whitePoint:Uc,transfer:Qt,toXYZ:Nc,fromXYZ:Fc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:ce}}});var Ci,Va=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Sr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,Er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hf=0,$e=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=dn,a=mi,o=on,l=Un,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ln(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Dh;$e.DEFAULT_ANISOTROPY=1;var te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(p+1)/2,R=(f+1)/2,A=(h+u)/4,I=(d+_)/4,D=(g+m)/4;return M>x&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=I/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=D/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends Nn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ye=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-o,f=l*u+c*p+h*g+d*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let R=Math.sqrt(M),A=Math.atan2(R,f*E);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let x=o*E;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new P,Oc=new Ye,Be=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),$s.subVectors(this.max,gs),Pi.subVectors(t.a,gs),Ii.subVectors(t.b,gs),Li.subVectors(t.c,gs),zn.subVectors(Ii,Pi),Hn.subVectors(Li,Ii),si.subVectors(Pi,Li);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!Ro(e,Pi,Ii,Li,$s)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Pi,Ii,Li,$s))?!1:(Ys.crossVectors(zn,Hn),e=[Ys.x,Ys.y,Ys.z],Ro(e,Pi,Ii,Li,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new P,new P,new P,new P,new P,new P,new P,new P],Qe=new P,qs=new Be,Pi=new P,Ii=new P,Li=new P,zn=new P,Hn=new P,si=new P,gs=new P,$s=new P,Ys=new P,ri=new P;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);let o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vf=new Be,_s=new P,Co=new P,an=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Co)),this.expandByPoint(_s.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new P,Po=new P,Zs=new P,Vn=new P,Io=new P,Ks=new P,Lo=new P,Qi=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Po);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=Vn.dot(this.direction),l=-Vn.dot(Zs),c=Vn.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Po).addScaledVector(Zs,u),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){Io.subVectors(e,t),Ks.subVectors(n,t),Lo.crossVectors(Io,Ks);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let l=o*this.direction.dot(Ks.crossVectors(Vn,Ks));if(l<0)return null;let c=o*this.direction.dot(Io.cross(Vn));if(c<0||l+c>a)return null;let h=-o*Vn.dot(Lo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,u,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Wf)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),Js.crossVectors(We,Gn),s[0]=Gn.x,s[4]=Js.x,s[8]=We.x,s[1]=Gn.y,s[5]=Js.y,s[9]=We.y,s[2]=Gn.z,s[6]=Js.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],M=n[7],x=n[11],R=n[15],A=s[0],I=s[4],D=s[8],S=s[12],v=s[1],L=s[5],Y=s[9],F=s[13],V=s[2],J=s[6],Z=s[10],it=s[14],q=s[3],ct=s[7],ut=s[11],bt=s[15];return r[0]=a*A+o*v+l*V+c*q,r[4]=a*I+o*L+l*J+c*ct,r[8]=a*D+o*Y+l*Z+c*ut,r[12]=a*S+o*F+l*it+c*bt,r[1]=h*A+d*v+u*V+p*q,r[5]=h*I+d*L+u*J+p*ct,r[9]=h*D+d*Y+u*Z+p*ut,r[13]=h*S+d*F+u*it+p*bt,r[2]=g*A+_*v+m*V+f*q,r[6]=g*I+_*L+m*J+f*ct,r[10]=g*D+_*Y+m*Z+f*ut,r[14]=g*S+_*F+m*it+f*bt,r[3]=E*A+M*v+x*V+R*q,r[7]=E*I+M*L+x*J+R*ct,r[11]=E*D+M*Y+x*Z+R*ut,r[15]=E*S+M*F+x*it+R*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*p-n*l*p)+_*(+e*l*p-e*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=d*m*c-_*u*c+_*l*p-o*m*p-d*l*f+o*u*f,M=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,x=h*_*c-g*d*c+g*o*p-a*_*p-h*o*f+a*d*f,R=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=e*E+n*M+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=E*I,t[1]=(_*u*r-d*m*r-_*s*p+n*m*p+d*s*f-n*u*f)*I,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*I,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*p-n*l*p)*I,t[4]=M*I,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*I,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*p+e*l*p)*I,t[8]=x*I,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*I,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*I,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*I,t[12]=R*I,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*I,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*I,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,E=l*c,M=l*h,x=l*d,R=n.x,A=n.y,I=n.z;return s[0]=(1-(_+f))*R,s[1]=(p+x)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(u+f))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+M)*I,s[9]=(m-E)*I,s[10]=(1-(u+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let c=1/r,h=1/a,d=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,g;if(o===In)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===br)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,p=(n+s)*h,g,_;if(o===In)g=(a+r)*d,_=-2*d;else if(o===br)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new P,tn=new Ut,Gf=new P(0,0,0),Wf=new P(1,1,1),Gn=new P,Js=new P,We=new P,Bc=new Ut,kc=new Ye,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,zc=new P,Ui=new Ye,An=new Ut,js=new P,xs=new P,qf=new P,$f=new Ye,Hc=new P(1,0,0),Vc=new P(0,1,0),Gc=new P(0,0,1),Wc={type:"added"},Yf={type:"removed"},Ni={type:"childadded",child:null},Do={type:"childremoved",child:null},Ue=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new pn,n=new Ye,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ot}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(xs,js,this.up):An.lookAt(js,xs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(An),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new P(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new P,Rn=new P,Uo=new P,Cn=new P,Fi=new P,Oi=new P,Xc=new P,No=new P,Fo=new P,Oo=new P,Bo=new te,ko=new te,zo=new te,di=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),Rn.subVectors(n,e),Uo.subVectors(t,e);let a=en.dot(en),o=en.dot(Rn),l=en.dot(Uo),c=Rn.dot(Rn),h=Rn.dot(Uo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Bo.setScalar(0),ko.setScalar(0),zo.setScalar(0),Bo.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(ko,r.y),a.addScaledVector(zo,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),Rn.subVectors(t,e),en.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),en.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fi.subVectors(s,n),Oi.subVectors(r,n),No.subVectors(t,n);let l=Fi.dot(No),c=Oi.dot(No);if(l<=0&&c<=0)return e.copy(n);Fo.subVectors(t,s);let h=Fi.dot(Fo),d=Oi.dot(Fo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Fi,a);Oo.subVectors(t,r);let p=Fi.dot(Oo),g=Oi.dot(Oo);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Oi,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Xc.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Xc,o);let f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Nl(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ho(a,r,t+1/3),this.g=Ho(a,r,t),this.b=Ho(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(_e(Ae.r*255,0,255))*65536+Math.round(_e(Ae.g*255,0,255))*256+Math.round(_e(Ae.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ce){qt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Qs);let n=ws(Wn.h,Qs.h,e),s=ws(Wn.s,Qs.s,e),r=ws(Wn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new zt;zt.NAMES=$h;var Zf=0,_i=class extends Nn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ln(),this.name="",this.blending=Wi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new P,tr=new _t,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ha&&(t.usage=this.usage),t}};var Tr=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kf=0,Ke=new Ut,Vo=new Ue,Bi=new P,Xe=new Be,ys=new Be,Me=new P,ke=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Ar:Tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Xe.min,ys.min),Xe.expandByPoint(Me),Me.addVectors(Xe.max,ys.max),Xe.expandByPoint(Me)):(Xe.expandByPoint(ys.min),Xe.expandByPoint(ys.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),Me.add(Bi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new P,l[D]=new P;let c=new P,h=new P,d=new P,u=new _t,p=new _t,g=new _t,_=new P,m=new P;function f(D,S,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(_),o[S].add(_),o[v].add(_),l[D].add(m),l[S].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,S=E.length;D<S;++D){let v=E[D],L=v.start,Y=v.count;for(let F=L,V=L+Y;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new P,x=new P,R=new P,A=new P;function I(D){R.fromBufferAttribute(s,D),A.copy(R);let S=o[D];M.copy(S),M.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(A,S);let L=x.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,S=E.length;D<S;++D){let v=E[D],L=v.start,Y=v.count;for(let F=L,V=L+Y;F<V;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new fe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new Ut,oi=new Qi,er=new an,$c=new P,nr=new P,ir=new P,sr=new P,Go=new P,rr=new P,Yc=new P,or=new P,ae=class extends Ue{constructor(t=new ke,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Go.fromBufferAttribute(d,t),a?rr.addScaledVector(Go,h):rr.addScaledVector(Go.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(er.containsPoint(oi.origin)===!1&&(oi.intersectSphere(er,$c)===null||oi.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(qc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,R=M;x<R;x+=3){let A=o.getX(x),I=o.getX(x+1),D=o.getX(x+2);s=ar(this,f,t,n,c,h,d,A,I,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=ar(this,a,t,n,c,h,d,E,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,R=M;x<R;x+=3){let A=x,I=x+1,D=x+2;s=ar(this,f,t,n,c,h,d,A,I,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=m,M=m+1,x=m+2;s=ar(this,a,t,n,c,h,d,E,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jf(i,t,e,n,s,r,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Zn,o),l===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:i}}function ar(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);let h=Jf(i,t,e,n,nr,ir,sr,Yc);if(h){let d=new P;di.getBarycoord(Yc,nr,ir,sr,d),s&&(h.uv=di.getInterpolatedAttribute(s,o,l,c,d,new _t)),r&&(h.uv1=di.getInterpolatedAttribute(r,o,l,c,d,new _t)),a&&(h.normal=di.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};di.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=d}return h}var Ls=class i extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function g(_,m,f,E,M,x,R,A,I,D,S){let v=x/I,L=R/D,Y=x/2,F=R/2,V=A/2,J=I+1,Z=D+1,it=0,q=0,ct=new P;for(let ut=0;ut<Z;ut++){let bt=ut*L-F;for(let Rt=0;Rt<J;Rt++){let $t=Rt*v-Y;ct[_]=$t*E,ct[m]=bt*M,ct[f]=V,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[f]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Rt/I),d.push(1-ut/D),it+=1}}for(let ut=0;ut<D;ut++)for(let bt=0;bt<I;bt++){let Rt=u+bt+J*ut,$t=u+bt+J*(ut+1),j=u+(bt+1)+J*(ut+1),rt=u+(bt+1)+J*ut;l.push(Rt,$t,rt),l.push($t,j,rt),q+=6}o.addGroup(p,q,S),p+=q,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function jf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Qr={clone:ts,merge:Pe},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Rr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new P,Zc=new _t,Kc=new _t,Ie=class extends Rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,Kc),e.subVectors(Kc,Zc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ki=-90,zi=1,Xa=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(ki,zi,t,e);s.layers=this.layers,this.add(s);let r=new Ie(ki,zi,t,e);r.layers=this.layers,this.add(r);let a=new Ie(ki,zi,t,e);a.layers=this.layers,this.add(a);let o=new Ie(ki,zi,t,e);o.layers=this.layers,this.add(o);let l=new Ie(ki,zi,t,e);l.layers=this.layers,this.add(l);let c=new Ie(ki,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cr=class extends $e{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qa=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ls(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:$n});r.uniforms.tEquirect.value=e;let a=new ae(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=dn),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wo=new P,ep=new P,np=new Ot,nn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wo.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||np.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new an,lr=new P,Ds=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-r,u-c,m-p,x-f).normalize(),n[1].setComponents(l+r,u+c,m+p,x+f).normalize(),n[2].setComponents(l+a,u+h,m+g,x+E).normalize(),n[3].setComponents(l-a,u-h,m-g,x-E).normalize(),n[4].setComponents(l-o,u-d,m-_,x-M).normalize(),e===In)n[5].setComponents(l+o,u+d,m+_,x+M).normalize();else if(e===br)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ip(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pr=class i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*u-a;for(let M=0;M<c;M++){let x=M*d-r;g.push(x,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let M=E+c*f,x=E+c*(f+1),R=E+1+c*(f+1),A=E+1+c*f;p.push(M,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ap=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
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
}`,im=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vm=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,vg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Ig=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Sp,color_pars_fragment:Ep,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Lp,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Kp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:vm,normal_fragment_begin:Mm,normal_fragment_maps:bm,normal_pars_fragment:Sm,normal_pars_vertex:Em,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Im,packing:Lm,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:zm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:$m,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:Km,transmission_fragment:Jm,transmission_pars_fragment:jm,uv_pars_fragment:Qm,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:vg,meshmatcap_vert:Mg,meshmatcap_frag:bg,meshnormal_vert:Sg,meshnormal_frag:Eg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Ig,points_frag:Lg,shadow_vert:Dg,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},ht={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Le={basic:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Pe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Pe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Pe([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Pe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Pe([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Pe([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Pe([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Pe([ht.lights,ht.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Le.physical={uniforms:Pe([Le.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var cr={r:0,b:0,g:0},li=new pn,Og=new Ut;function Bg(i,t,e,n,s,r,a){let o=new zt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1,x=g(E);x===null?f(o,l):x&&x.isColor&&(f(x,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){let x=g(M);x&&(x.isCubeTexture||x.mapping===Kr)?(h===void 0&&(h=new ae(new Ls(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:ts(Le.backgroundCube.uniforms),vertexShader:Le.backgroundCube.vertexShader,fragmentShader:Le.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(li)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==Qt,(d!==x||u!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ae(new Pr(2,2),new ze({name:"BackgroundMaterial",uniforms:ts(Le.background.uniforms),vertexShader:Le.background.vertexShader,fragmentShader:Le.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,M){E.getRGB(cr,Yh(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m}}function kg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(v,L,Y,F,V){let J=!1,Z=d(F,Y,L);r!==Z&&(r=Z,c(r.object)),J=p(v,F,Y,V),J&&g(v,F,Y,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(v,L,Y,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,L,Y){let F=Y.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let J=V[L.id];J===void 0&&(J={},V[L.id]=J);let Z=J[F];return Z===void 0&&(Z=u(l()),J[F]=Z),Z}function u(v){let L=[],Y=[],F=[];for(let V=0;V<e;V++)L[V]=0,Y[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,L,Y,F){let V=r.attributes,J=L.attributes,Z=0,it=Y.getAttributes();for(let q in it)if(it[q].location>=0){let ut=V[q],bt=J[q];if(bt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor)),ut===void 0||ut.attribute!==bt||bt&&ut.data!==bt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==F}function g(v,L,Y,F){let V={},J=L.attributes,Z=0,it=Y.getAttributes();for(let q in it)if(it[q].location>=0){let ut=J[q];ut===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));let bt={};bt.attribute=ut,ut&&ut.data&&(bt.data=ut.data),V[q]=bt,Z++}r.attributes=V,r.attributesNum=Z,r.index=F}function _(){let v=r.newAttributes;for(let L=0,Y=v.length;L<Y;L++)v[L]=0}function m(v){f(v,0)}function f(v,L){let Y=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;Y[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),V[v]!==L&&(i.vertexAttribDivisor(v,L),V[v]=L)}function E(){let v=r.newAttributes,L=r.enabledAttributes;for(let Y=0,F=L.length;Y<F;Y++)L[Y]!==v[Y]&&(i.disableVertexAttribArray(Y),L[Y]=0)}function M(v,L,Y,F,V,J,Z){Z===!0?i.vertexAttribIPointer(v,L,Y,V,J):i.vertexAttribPointer(v,L,Y,F,V,J)}function x(v,L,Y,F){_();let V=F.attributes,J=Y.getAttributes(),Z=L.defaultAttributeValues;for(let it in J){let q=J[it];if(q.location>=0){let ct=V[it];if(ct===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){let ut=ct.normalized,bt=ct.itemSize,Rt=t.get(ct);if(Rt===void 0)continue;let $t=Rt.buffer,j=Rt.type,rt=Rt.bytesPerElement,Mt=j===i.INT||j===i.UNSIGNED_INT||ct.gpuType===Rl;if(ct.isInterleavedBufferAttribute){let C=ct.data,H=C.stride,k=ct.offset;if(C.isInstancedInterleavedBuffer){for(let $=0;$<q.locationSize;$++)f(q.location+$,C.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let $=0;$<q.locationSize;$++)m(q.location+$);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let $=0;$<q.locationSize;$++)M(q.location+$,bt/q.locationSize,j,ut,H*rt,(k+bt/q.locationSize*$)*rt,Mt)}else{if(ct.isInstancedBufferAttribute){for(let C=0;C<q.locationSize;C++)f(q.location+C,ct.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let C=0;C<q.locationSize;C++)m(q.location+C);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let C=0;C<q.locationSize;C++)M(q.location+C,bt/q.locationSize,j,ut,bt*rt,bt/q.locationSize*C*rt,Mt)}}else if(Z!==void 0){let ut=Z[it];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(q.location,ut);break;case 3:i.vertexAttrib3fv(q.location,ut);break;case 4:i.vertexAttrib4fv(q.location,ut);break;default:i.vertexAttrib1fv(q.location,ut)}}}}E()}function R(){D();for(let v in n){let L=n[v];for(let Y in L){let F=L[Y];for(let V in F)h(F[V].object),delete F[V];delete L[Y]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let Y in L){let F=L[Y];for(let V in F)h(F[V].object),delete F[V];delete L[Y]}delete n[v.id]}function I(v){for(let L in n){let Y=n[L];if(Y[v.id]===void 0)continue;let F=Y[v.id];for(let V in F)h(F[V].object),delete F[V];delete Y[v.id]}}function D(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function zg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let D=I===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Un&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Vg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new nn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,M=E*4,x=f.clippingState||null;l.value=x,x=h(g,u,M,p);for(let R=0;R!==M;++R)x[R]=e[R];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==_;++M,x+=4)a.copy(d[M]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gg(i){let t=new WeakMap;function e(a,o){return o===ha?a.mapping=Zi:o===ua&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ha||o===ua)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new qa(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ir=class extends Rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gi=4,Jc=[.125,.215,.35,.446,.526,.582],fi=20,Xo=new Ir,jc=new zt,qo=null,$o=0,Yo=0,Zo=!1,hi=(1+Math.sqrt(5))/2,Hi=1/hi,Qc=[new P(-hi,Hi,0),new P(hi,Hi,0),new P(-Hi,0,hi),new P(Hi,0,hi),new P(0,hi,-Hi),new P(0,hi,Hi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,$o,Yo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Bs,format:on,colorSpace:is,depthBuffer:!1},s=th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,t,e)}return s}_compileMaterial(t){let e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,n,s){let o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(jc),h.toneMapping=Yn,h.autoClear=!1;let p=new mn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new ae(new Ls,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(jc),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let M=this._cubeSize;hr(s,E*M,f>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qc[(s-r-1)%Qc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ae(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);let f=[],E=0;for(let I=0;I<fi;++I){let D=I/_,S=Math.exp(-D*D/2);f.push(S),I===0?E+=S:I<m&&(E+=2*S)}for(let I=0;I<f.length;I++)f[I]=f[I]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;let x=this._sizeLods[s],R=3*x*(s>M-Gi?s-M+Gi:0),A=4*(this._cubeSize-x);hr(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(d,Xo)}};function Wg(i){let t=[],e=[],n=[],s=i,r=i-Gi+1+Jc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Gi?l=Jc[a-i+Gi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){let I=A%3*2/3-1,D=A>2?0:-1,S=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];E.set(S,_*g*A),M.set(u,m*g*A);let v=[A,A,A,A,A,A];x.set(v,f*g*A)}let R=new ke;R.setAttribute("position",new fe(E,_)),R.setAttribute("uv",new fe(M,m)),R.setAttribute("faceIndex",new fe(x,f)),t.push(R),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function th(i,t,e){let n=new Fn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xg(i,t,e){let n=new Float32Array(fi),s=new P(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function eh(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function nh(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function qg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ha||l===ua,h=l===Zi||l===Ki;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Lr(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Lr(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $g(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let M=0,x=E.length;M<x;M+=3){let R=E[M+0],A=E[M+1],I=E[M+2];u.push(R,A,A,I,I,R)}}else if(g!==void 0){let E=g.array;_=g.version;for(let M=0,x=E.length/3-1;M<x;M+=3){let R=M+0,A=M+1,I=M+2;u.push(R,A,A,I,I,R)}}else return;let m=new(qh(u)?Ar:Tr)(u,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Zg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,t,e){let n=new WeakMap,s=new te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*R*4*d),I=new wr(A,x,R,d);I.type=fn,I.needsUpdate=!0;let D=M*4;for(let v=0;v<d;v++){let L=m[v],Y=f[v],F=E[v],V=x*R*4*v;for(let J=0;J<L.count;J++){let Z=J*D;p===!0&&(s.fromBufferAttribute(L,J),A[V+Z+0]=s.x,A[V+Z+1]=s.y,A[V+Z+2]=s.z,A[V+Z+3]=0),g===!0&&(s.fromBufferAttribute(Y,J),A[V+Z+4]=s.x,A[V+Z+5]=s.y,A[V+Z+6]=s.z,A[V+Z+7]=0),_===!0&&(s.fromBufferAttribute(F,J),A[V+Z+8]=s.x,A[V+Z+9]=s.y,A[V+Z+10]=s.z,A[V+Z+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new _t(x,R)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Dr=class extends $e{constructor(t,e,n,s,r,a,o,l,c,h=Xi){if(h!==Xi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=gi),n===void 0&&h===ji&&(n=Ji),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kh=new $e,ih=new Dr(1,1),Jh=new wr,jh=new Wa,Qh=new Cr,sh=[],rh=[],oh=new Float32Array(16),ah=new Float32Array(9),lh=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sh[s];if(r===void 0&&(r=new Float32Array(s),sh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=rh[t];e===void 0&&(e=new Int32Array(t),rh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function i0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;lh.set(n),i.uniformMatrix2fv(this.addr,!1,lh),ye(e,n)}}function s0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),ye(e,n)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),ye(e,n)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function p0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=Wh,r=ih):r=Kh,e.setTexture2D(t||r,s)}function m0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jh,s)}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qh,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jh,s)}function x0(i){switch(i){case 5126:return Qg;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function y0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function b0(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function S0(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function E0(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function w0(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function A0(i,t){i.uniform2iv(this.addr,t)}function R0(i,t){i.uniform3iv(this.addr,t)}function C0(i,t){i.uniform4iv(this.addr,t)}function P0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function D0(i,t){i.uniform4uiv(this.addr,t)}function U0(i,t,e){let n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Kh,r[a])}function N0(i,t,e){let n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jh,r[a])}function F0(i,t,e){let n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qh,r[a])}function O0(i,t,e){let n=this.cache,s=t.length,r=to(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jh,r[a])}function B0(i){switch(i){case 5126:return y0;case 35664:return v0;case 35665:return M0;case 35666:return b0;case 35674:return S0;case 35675:return E0;case 35676:return w0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return I0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}var $a=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}},Ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}},Za=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ko=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function k0(i,t,e){let n=i.name,s=n.length;for(Ko.lastIndex=0;;){let r=Ko.exec(n),a=Ko.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ch(e,c===void 0?new $a(o,i,t):new Ya(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Za(o),ch(e,d)),e=d}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);k0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function hh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z0=37297,H0=0;function V0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var uh=new Ot;function G0(i){qt._getMatrix(uh,qt.workingColorSpace,i);let t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Jr:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(t),a)}else return s}function W0(i,t){let e=G0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case sf:e="Cineon";break;case rf:e="ACESFilmic";break;case af:e="AgX";break;case lf:e="Neutral";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ur=new P;function q0(){qt.getLuminanceCoefficients(ur);let i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Y0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ss(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(K0,j0)}var J0=new Map;function j0(i,t){let e=kt[t];if(e===void 0){let n=J0.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}var Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(Q0,t_)}function t_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function e_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function r_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=e_(e),c=n_(e),h=i_(e),d=s_(e),u=r_(e),p=$0(e),g=Y0(r),_=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(m=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,W0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Ka(a),a=fh(a,e),a=ph(a,e),o=Ka(o),o=fh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=E+m+a,x=E+f+o,R=hh(s,s.VERTEX_SHADER,M),A=hh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(L){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(A).trim(),J=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{let it=dh(s,R,"vertex"),q=dh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+it+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(F===""||V==="")&&(Z=!1);Z&&(L.diagnostics={runnable:J,programLog:Y,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(R),s.deleteShader(A),D=new $i(s,_),S=Z0(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,z0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}var a_=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ja(t),e.set(t,n)),n}},ja=class{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}};function l_(i,t,e,n,s,r,a){let o=new Is,l=new Ja,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,L,Y,F){let V=Y.fog,J=F.geometry,Z=S.isMeshStandardMaterial?Y.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),q=it&&it.mapping===Kr?it.image.height:null,ct=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=ut!==void 0?ut.length:0,Rt=0;J.morphAttributes.position!==void 0&&(Rt=1),J.morphAttributes.normal!==void 0&&(Rt=2),J.morphAttributes.color!==void 0&&(Rt=3);let $t,j,rt,Mt;if(ct){let Jt=Le[ct];$t=Jt.vertexShader,j=Jt.fragmentShader}else $t=S.vertexShader,j=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);let C=i.getRenderTarget(),H=i.state.buffers.depth.getReversed(),k=F.isInstancedMesh===!0,$=F.isBatchedMesh===!0,st=!!S.map,lt=!!S.matcap,Ht=!!it,U=!!S.aoMap,Ne=!!S.lightMap,Vt=!!S.bumpMap,Gt=!!S.normalMap,Pt=!!S.displacementMap,se=!!S.emissiveMap,Ct=!!S.metalnessMap,T=!!S.roughnessMap,y=S.anisotropy>0,z=S.clearcoat>0,tt=S.dispersion>0,nt=S.iridescence>0,Q=S.sheen>0,Tt=S.transmission>0,ft=y&&!!S.anisotropyMap,xt=z&&!!S.clearcoatMap,Xt=z&&!!S.clearcoatNormalMap,ot=z&&!!S.clearcoatRoughnessMap,yt=nt&&!!S.iridescenceMap,It=nt&&!!S.iridescenceThicknessMap,Lt=Q&&!!S.sheenColorMap,vt=Q&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Bt=!!S.specularColorMap,ne=!!S.specularIntensityMap,N=Tt&&!!S.transmissionMap,dt=Tt&&!!S.thicknessMap,K=!!S.gradientMap,et=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Nt=!!S.extensions,de=Yn;S.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=i.toneMapping);let we={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:j,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:$,batchingColor:$&&F._colorsTexture!==null,instancing:k,instancingColor:k&&F.instanceColor!==null,instancingMorph:k&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:is,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:lt,envMap:Ht,envMapMode:Ht&&it.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:Ne,bumpMap:Vt,normalMap:Gt,displacementMap:u&&Pt,emissiveMap:se,normalMapObjectSpace:Gt&&S.normalMapType===df,normalMapTangentSpace:Gt&&S.normalMapType===Gh,metalnessMap:Ct,roughnessMap:T,anisotropy:y,anisotropyMap:ft,clearcoat:z,clearcoatMap:xt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:nt,iridescenceMap:yt,iridescenceThicknessMap:It,sheen:Q,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Wt,specularColorMap:Bt,specularIntensityMap:ne,transmission:Tt,transmissionMap:N,thicknessMap:dt,gradientMap:K,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:st&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Ne&&_(S.lightMap.channel),bumpMapUv:Vt&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:Pt&&_(S.displacementMap.channel),emissiveMapUv:se&&_(S.emissiveMap.channel),metalnessMapUv:Ct&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:ft&&_(S.anisotropyMap.channel),clearcoatMapUv:xt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Wt&&_(S.specularMap.channel),specularColorMapUv:Bt&&_(S.specularColorMap.channel),specularIntensityMapUv:ne&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:dt&&_(S.thicknessMap.channel),alphaMapUv:et&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Gt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(st||et),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:H,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Rt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Oe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)v.push(L),v.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(v,S),M(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let v=g[S.type],L;if(v){let Y=Le[v];L=Qr.clone(Y.uniforms)}else L=S.uniforms;return L}function R(S,v){let L;for(let Y=0,F=h.length;Y<F;Y++){let V=h[Y];if(V.cacheKey===v){L=V,++L.usedTimes;break}}return L===void 0&&(L=new o_(i,v,S,r),h.push(L)),L}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:D}}function c_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){let f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,_,m){let f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||h_),n.length>1&&n.sort(u||_h),s.length>1&&s.sort(u||_h)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function u_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new xh,i.set(n,[a])):s>=r.length?(a=new xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i){let t=new d_,e=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Ut,a=new Ut;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,M=0,x=0,R=0,A=0,I=0;c.sort(m_);for(let S=0,v=c.length;S<v;S++){let L=c[S],Y=L.color,F=L.intensity,V=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Y.r*F,d+=Y.g*F,u+=Y.b*F;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],F);I++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,q=e.get(L);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=L.shadow.matrix,E++}n.directional[p]=Z,p++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(Y).multiplyScalar(F),Z.distance=V,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[_]=Z;let it=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,it.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=it.matrix,L.castShadow){let q=e.get(L);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=J,x++}_++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(Y).multiplyScalar(F),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let it=L.shadow,q=e.get(L);q.shadowIntensity=it.intensity,q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(F),Z.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[f]=Z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==x||D.numSpotMaps!==R||D.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=x,D.numSpotMaps=R,D.numLightProbes=I,n.version=p_++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let M=c[f];if(M.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function yh(i){let t=new g_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function __(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new yh(i),t.set(s,[o])):r>=a.length?(o=new yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Qa=class extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tl=class extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function v_(i,t,e){let n=new Ds,s=new _t,r=new _t,a=new te,o=new Qa({depthPacking:uf}),l=new tl,c={},h=e.maxTextureSize,d={[Zn]:Oe,[Oe]:Zn,[sn]:sn},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:x_,fragmentShader:y_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new ke;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ae(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let f=this.type;this.render=function(A,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending($n),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let F=f!==Pn&&this.type===Pn,V=f===Pn&&this.type!==Pn;for(let J=0,Z=A.length;J<Z;J++){let it=A[J],q=it.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ct=q.getFrameExtents();if(s.multiply(ct),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y)),q.map===null||F===!0||V===!0){let bt=this.type!==Pn?{minFilter:qe,magFilter:qe}:{};q.map!==null&&q.map.dispose(),q.map=new Fn(s.x,s.y,bt),q.map.texture.name=it.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ut=q.getViewportCount();for(let bt=0;bt<ut;bt++){let Rt=q.getViewport(bt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),Y.viewport(a),q.updateMatrices(it,bt),n=q.getFrustum(),x(I,D,q.camera,it,this.type)}q.isPointLightShadow!==!0&&this.type===Pn&&E(q,D),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,L)};function E(A,I){let D=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,D,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,D,p,_,null)}function M(A,I,D,S){let v=null,L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let Y=v.uuid,F=I.uuid,V=c[Y];V===void 0&&(V={},c[Y]=V);let J=V[F];J===void 0&&(J=v.clone(),V[F]=J,I.addEventListener("dispose",R)),v=J}if(v.visible=I.visible,v.wireframe=I.wireframe,S===Pn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:d[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let Y=i.properties.get(v);Y.light=D}return v}function x(A,I,D,S,v){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let F=t.update(A),V=A.material;if(Array.isArray(V)){let J=F.groups;for(let Z=0,it=J.length;Z<it;Z++){let q=J[Z],ct=V[q.materialIndex];if(ct&&ct.visible){let ut=M(A,ct,S,v);A.onBeforeShadow(i,A,I,D,F,ut,q),i.renderBufferDirect(D,null,F,ut,A,q),A.onAfterShadow(i,A,I,D,F,ut,q)}}}else if(V.visible){let J=M(A,V,S,v);A.onBeforeShadow(i,A,I,D,F,J,null),i.renderBufferDirect(D,null,F,J,A,null),A.onAfterShadow(i,A,I,D,F,J,null)}}let Y=A.children;for(let F=0,V=Y.length;F<V;F++)x(Y[F],I,D,S,v)}function R(A){A.target.removeEventListener("dispose",R);for(let D in c){let S=c[D],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var M_={[ia]:sa,[ra]:la,[oa]:ca,[Yi]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:Yi};function b_(i,t){function e(){let N=!1,dt=new te,K=null,et=new te(0,0,0,0);return{setMask:function(gt){K!==gt&&!N&&(i.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){N=gt},setClear:function(gt,pt,Nt,de,we){we===!0&&(gt*=de,pt*=de,Nt*=de),dt.set(gt,pt,Nt,de),et.equals(dt)===!1&&(i.clearColor(gt,pt,Nt,de),et.copy(dt))},reset:function(){N=!1,K=null,et.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,K=null,et=null,gt=null;return{setReversed:function(pt){if(dt!==pt){let Nt=t.get("EXT_clip_control");dt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let de=gt;gt=null,this.setClear(de)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?C(i.DEPTH_TEST):H(i.DEPTH_TEST)},setMask:function(pt){K!==pt&&!N&&(i.depthMask(pt),K=pt)},setFunc:function(pt){if(dt&&(pt=M_[pt]),et!==pt){switch(pt){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=pt}},setLocked:function(pt){N=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){N=!1,K=null,et=null,gt=null,dt=!1}}}function s(){let N=!1,dt=null,K=null,et=null,gt=null,pt=null,Nt=null,de=null,we=null;return{setTest:function(Jt){N||(Jt?C(i.STENCIL_TEST):H(i.STENCIL_TEST))},setMask:function(Jt){dt!==Jt&&!N&&(i.stencilMask(Jt),dt=Jt)},setFunc:function(Jt,Je,Sn){(K!==Jt||et!==Je||gt!==Sn)&&(i.stencilFunc(Jt,Je,Sn),K=Jt,et=Je,gt=Sn)},setOp:function(Jt,Je,Sn){(pt!==Jt||Nt!==Je||de!==Sn)&&(i.stencilOp(Jt,Je,Sn),pt=Jt,Nt=Je,de=Sn)},setLocked:function(Jt){N=Jt},setClear:function(Jt){we!==Jt&&(i.clearStencil(Jt),we=Jt)},reset:function(){N=!1,dt=null,K=null,et=null,gt=null,pt=null,Nt=null,de=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,M=null,x=null,R=null,A=null,I=new zt(0,0,0),D=0,S=!1,v=null,L=null,Y=null,F=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,it=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=it>=2);let ct=null,ut={},bt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),$t=new te().fromArray(bt),j=new te().fromArray(Rt);function rt(N,dt,K,et){let gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(N,pt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<K;Nt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(dt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}let Mt={};Mt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),C(i.DEPTH_TEST),a.setFunc(Yi),Vt(!1),Gt(Mc),C(i.CULL_FACE),U($n);function C(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function H(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function k(N,dt){return d[N]!==dt?(i.bindFramebuffer(N,dt),d[N]=dt,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function $(N,dt){let K=p,et=!1;if(N){K=u.get(dt),K===void 0&&(K=[],u.set(dt,K));let gt=N.textures;if(K.length!==gt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Nt=gt.length;pt<Nt;pt++)K[pt]=i.COLOR_ATTACHMENT0+pt;K.length=gt.length,et=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,et=!0);et&&i.drawBuffers(K)}function st(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let lt={[ui]:i.FUNC_ADD,[Fd]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};lt[Bd]=i.MIN,lt[kd]=i.MAX;let Ht={[zd]:i.ZERO,[Hd]:i.ONE,[Vd]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[qd]:i.DST_COLOR,[Wd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[Kd]:i.ONE_MINUS_CONSTANT_COLOR,[Jd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,dt,K,et,gt,pt,Nt,de,we,Jt){if(N===$n){_===!0&&(H(i.BLEND),_=!1);return}if(_===!1&&(C(i.BLEND),_=!0),N!==Nd){if(N!==m||Jt!==S){if((f!==ui||x!==ui)&&(i.blendEquation(i.FUNC_ADD),f=ui,x=ui),Jt)switch(N){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,M=null,R=null,A=null,I.set(0,0,0),D=0,m=N,S=Jt}return}gt=gt||dt,pt=pt||K,Nt=Nt||et,(dt!==f||gt!==x)&&(i.blendEquationSeparate(lt[dt],lt[gt]),f=dt,x=gt),(K!==E||et!==M||pt!==R||Nt!==A)&&(i.blendFuncSeparate(Ht[K],Ht[et],Ht[pt],Ht[Nt]),E=K,M=et,R=pt,A=Nt),(de.equals(I)===!1||we!==D)&&(i.blendColor(de.r,de.g,de.b,we),I.copy(de),D=we),m=N,S=!1}function Ne(N,dt){N.side===sn?H(i.CULL_FACE):C(i.CULL_FACE);let K=N.side===Oe;dt&&(K=!K),Vt(K),N.blending===Wi&&N.transparent===!1?U($n):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let et=N.stencilWrite;o.setTest(et),et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):H(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function Gt(N){N!==Ld?(C(i.CULL_FACE),N!==L&&(N===Mc?i.cullFace(i.BACK):N===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):H(i.CULL_FACE),L=N}function Pt(N){N!==Y&&(Z&&i.lineWidth(N),Y=N)}function se(N,dt,K){N?(C(i.POLYGON_OFFSET_FILL),(F!==dt||V!==K)&&(i.polygonOffset(dt,K),F=dt,V=K)):H(i.POLYGON_OFFSET_FILL)}function Ct(N){N?C(i.SCISSOR_TEST):H(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+J-1),ct!==N&&(i.activeTexture(N),ct=N)}function y(N,dt,K){K===void 0&&(ct===null?K=i.TEXTURE0+J-1:K=ct);let et=ut[K];et===void 0&&(et={type:void 0,texture:void 0},ut[K]=et),(et.type!==N||et.texture!==dt)&&(ct!==K&&(i.activeTexture(K),ct=K),i.bindTexture(N,dt||Mt[N]),et.type=N,et.texture=dt)}function z(){let N=ut[ct];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){$t.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function vt(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function Wt(N,dt){let K=c.get(dt);K===void 0&&(K=new WeakMap,c.set(dt,K));let et=K.get(N);et===void 0&&(et=i.getUniformBlockIndex(dt,N.name),K.set(N,et))}function Bt(N,dt){let et=c.get(dt).get(N);l.get(dt)!==et&&(i.uniformBlockBinding(dt,et,N.__bindingPointIndex),l.set(dt,et))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,ut={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,M=null,x=null,R=null,A=null,I=new zt(0,0,0),D=0,S=!1,v=null,L=null,Y=null,F=null,V=null,$t.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:C,disable:H,bindFramebuffer:k,drawBuffers:$,useProgram:st,setBlending:U,setMaterial:Ne,setFlipSided:Vt,setCullFace:Gt,setLineWidth:Pt,setPolygonOffset:se,setScissorTest:Ct,activeTexture:T,bindTexture:y,unbindTexture:z,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:yt,texImage3D:It,updateUBOMapping:Wt,uniformBlockBinding:Bt,texStorage2D:Xt,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Lt,viewport:vt,reset:ne}}function vh(i,t,e,n){let s=S_(n);switch(e){case Oh:return i*t;case kh:return i*t;case zh:return i*t*2;case Il:return i*t/s.components*s.byteLength;case Ll:return i*t/s.components*s.byteLength;case Hh:return i*t*2/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Ul:return i*t*4/s.components*s.byteLength;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vr:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vh:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S_(i){switch(i){case Un:case Uh:return{byteLength:1,components:1};case Cs:case Nh:case Bs:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case gi:case Rl:case fn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):Sr("canvas")}function _(T,y,z){let tt=1,nt=Ct(T);if((nt.width>z||nt.height>z)&&(tt=z/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Q=Math.floor(tt*nt.width),Tt=Math.floor(tt*nt.height);d===void 0&&(d=g(Q,Tt));let ft=y?g(Q,Tt):d;return ft.width=Q,ft.height=Tt,ft.getContext("2d").drawImage(T,0,0,Q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+Tt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,y,z,tt,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=y;if(y===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),y===i.RGBA){let Tt=nt?Jr:qt.getTransfer(tt);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=Tt===Qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(T,y){let z;return T?y===null||y===gi||y===Ji?z=i.DEPTH24_STENCIL8:y===fn?z=i.DEPTH32F_STENCIL8:y===Cs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===gi||y===Ji?z=i.DEPTH_COMPONENT24:y===fn?z=i.DEPTH_COMPONENT32F:y===Cs&&(z=i.DEPTH_COMPONENT16),z}function R(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==qe&&T.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){let y=T.target;y.removeEventListener("dispose",A),D(y),y.isVideoTexture&&h.delete(y)}function I(T){let y=T.target;y.removeEventListener("dispose",I),v(y)}function D(T){let y=n.get(T);if(y.__webglInit===void 0)return;let z=T.source,tt=u.get(z);if(tt){let nt=tt[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(T),Object.keys(tt).length===0&&u.delete(z)}n.remove(T)}function S(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let z=T.source,tt=u.get(z);delete tt[y.__cacheKey],a.memory.textures--}function v(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let nt=0;nt<y.__webglFramebuffer[tt].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[tt][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)i.deleteFramebuffer(y.__webglFramebuffer[tt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=T.textures;for(let tt=0,nt=z.length;tt<nt;tt++){let Q=n.get(z[tt]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(z[tt])}n.remove(T)}let L=0;function Y(){L=0}function F(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function V(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function J(T,y){let z=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,T,y);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function Z(T,y){let z=n.get(T);if(T.version>0&&z.__version!==T.version){j(z,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function it(T,y){let z=n.get(T);if(T.version>0&&z.__version!==T.version){j(z,T,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function q(T,y){let z=n.get(T);if(T.version>0&&z.__version!==T.version){rt(z,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let ct={[da]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},ut={[qe]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},bt={[ff]:i.NEVER,[yf]:i.ALWAYS,[pf]:i.LESS,[Wh]:i.LEQUAL,[mf]:i.EQUAL,[xf]:i.GEQUAL,[gf]:i.GREATER,[_f]:i.NOTEQUAL};function Rt(T,y){if(y.type===fn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===So||y.magFilter===Xs||y.magFilter===mi||y.minFilter===dn||y.minFilter===So||y.minFilter===Xs||y.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ct[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ct[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ct[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qe||y.minFilter!==Xs&&y.minFilter!==mi||y.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));let tt=y.source,nt=u.get(tt);nt===void 0&&(nt={},u.set(tt,nt));let Q=V(y);if(Q!==T.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),nt[Q].usedTimes++;let Tt=nt[T.__cacheKey];Tt!==void 0&&(nt[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(y)),T.__cacheKey=Q,T.__webglTexture=nt[Q].texture}return z}function j(T,y,z){let tt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=i.TEXTURE_3D);let nt=$t(T,y),Q=y.source;e.bindTexture(tt,T.__webglTexture,i.TEXTURE0+z);let Tt=n.get(Q);if(Q.version!==Tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let ft=qt.getPrimaries(qt.workingColorSpace),xt=y.colorSpace===qn?null:qt.getPrimaries(y.colorSpace),Xt=y.colorSpace===qn||ft===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ot=_(y.image,!1,s.maxTextureSize);ot=se(y,ot);let yt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),Lt=M(y.internalFormat,yt,It,y.colorSpace,y.isVideoTexture);Rt(tt,y);let vt,Wt=y.mipmaps,Bt=y.isVideoTexture!==!0,ne=Tt.__version===void 0||nt===!0,N=Q.dataReady,dt=R(y,ot);if(y.isDepthTexture)Lt=x(y.format===ji,y.type),ne&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Lt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ot.width,ot.height,0,yt,It,null));else if(y.isDataTexture)if(Wt.length>0){Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,dt,Lt,Wt[0].width,Wt[0].height);for(let K=0,et=Wt.length;K<et;K++)vt=Wt[K],Bt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,yt,It,vt.data):e.texImage2D(i.TEXTURE_2D,K,Lt,vt.width,vt.height,0,yt,It,vt.data);y.generateMipmaps=!1}else Bt?(ne&&e.texStorage2D(i.TEXTURE_2D,dt,Lt,ot.width,ot.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,yt,It,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,ot.width,ot.height,0,yt,It,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Lt,Wt[0].width,Wt[0].height,ot.depth);for(let K=0,et=Wt.length;K<et;K++)if(vt=Wt[K],y.format!==on)if(yt!==null)if(Bt){if(N)if(y.layerUpdates.size>0){let gt=vh(vt.width,vt.height,y.format,y.type);for(let pt of y.layerUpdates){let Nt=vt.data.subarray(pt*gt/vt.data.BYTES_PER_ELEMENT,(pt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,pt,vt.width,vt.height,1,yt,Nt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,ot.depth,yt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Lt,vt.width,vt.height,ot.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,ot.depth,yt,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Lt,vt.width,vt.height,ot.depth,0,yt,It,vt.data)}else{Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,dt,Lt,Wt[0].width,Wt[0].height);for(let K=0,et=Wt.length;K<et;K++)vt=Wt[K],y.format!==on?yt!==null?Bt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,yt,It,vt.data):e.texImage2D(i.TEXTURE_2D,K,Lt,vt.width,vt.height,0,yt,It,vt.data)}else if(y.isDataArrayTexture)if(Bt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Lt,ot.width,ot.height,ot.depth),N)if(y.layerUpdates.size>0){let K=vh(ot.width,ot.height,y.format,y.type);for(let et of y.layerUpdates){let gt=ot.data.subarray(et*K/ot.data.BYTES_PER_ELEMENT,(et+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,yt,It,gt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,It,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ot.width,ot.height,ot.depth,0,yt,It,ot.data);else if(y.isData3DTexture)Bt?(ne&&e.texStorage3D(i.TEXTURE_3D,dt,Lt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,It,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ot.width,ot.height,ot.depth,0,yt,It,ot.data);else if(y.isFramebufferTexture){if(ne)if(Bt)e.texStorage2D(i.TEXTURE_2D,dt,Lt,ot.width,ot.height);else{let K=ot.width,et=ot.height;for(let gt=0;gt<dt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Lt,K,et,0,yt,It,null),K>>=1,et>>=1}}else if(Wt.length>0){if(Bt&&ne){let K=Ct(Wt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Lt,K.width,K.height)}for(let K=0,et=Wt.length;K<et;K++)vt=Wt[K],Bt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,yt,It,vt):e.texImage2D(i.TEXTURE_2D,K,Lt,yt,It,vt);y.generateMipmaps=!1}else if(Bt){if(ne){let K=Ct(ot);e.texStorage2D(i.TEXTURE_2D,dt,Lt,K.width,K.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,It,ot)}else e.texImage2D(i.TEXTURE_2D,0,Lt,yt,It,ot);m(y)&&f(tt),Tt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function rt(T,y,z){if(y.image.length!==6)return;let tt=$t(T,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let Q=n.get(nt);if(nt.version!==Q.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);let Tt=qt.getPrimaries(qt.workingColorSpace),ft=y.colorSpace===qn?null:qt.getPrimaries(y.colorSpace),xt=y.colorSpace===qn||Tt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let et=0;et<6;et++)!Xt&&!ot?yt[et]=_(y.image[et],!0,s.maxCubemapSize):yt[et]=ot?y.image[et].image:y.image[et],yt[et]=se(y,yt[et]);let It=yt[0],Lt=r.convert(y.format,y.colorSpace),vt=r.convert(y.type),Wt=M(y.internalFormat,Lt,vt,y.colorSpace),Bt=y.isVideoTexture!==!0,ne=Q.__version===void 0||tt===!0,N=nt.dataReady,dt=R(y,It);Rt(i.TEXTURE_CUBE_MAP,y);let K;if(Xt){Bt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Wt,It.width,It.height);for(let et=0;et<6;et++){K=yt[et].mipmaps;for(let gt=0;gt<K.length;gt++){let pt=K[gt];y.format!==on?Lt!==null?Bt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Lt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Lt,vt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Wt,pt.width,pt.height,0,Lt,vt,pt.data)}}}else{if(K=y.mipmaps,Bt&&ne){K.length>0&&dt++;let et=Ct(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,yt[et].width,yt[et].height,Lt,vt,yt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,yt[et].width,yt[et].height,0,Lt,vt,yt[et].data);for(let gt=0;gt<K.length;gt++){let Nt=K[gt].image[et].image;Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Nt.width,Nt.height,Lt,vt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Wt,Nt.width,Nt.height,0,Lt,vt,Nt.data)}}else{Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Lt,vt,yt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,Lt,vt,yt[et]);for(let gt=0;gt<K.length;gt++){let pt=K[gt];Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Lt,vt,pt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Wt,Lt,vt,pt.image[et])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Mt(T,y,z,tt,nt,Q){let Tt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),xt=M(z.internalFormat,Tt,ft,z.colorSpace),Xt=n.get(y),ot=n.get(z);if(ot.__renderTarget=y,!Xt.__hasExternalTextures){let yt=Math.max(1,y.width>>Q),It=Math.max(1,y.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,xt,yt,It,y.depth,0,Tt,ft,null):e.texImage2D(nt,Q,xt,yt,It,0,Tt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Gt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,nt,ot.__webglTexture,0,Vt(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,nt,ot.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function C(T,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let tt=y.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,Q=x(y.stencilBuffer,nt),Tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Vt(y);Gt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Q,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,T)}else{let tt=y.textures;for(let nt=0;nt<tt.length;nt++){let Q=tt[nt],Tt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),xt=M(Q.internalFormat,Tt,ft,Q.colorSpace),Xt=Vt(y);z&&Gt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,xt,y.width,y.height):Gt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,xt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,xt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function H(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(y.depthTexture);tt.__renderTarget=y,(!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);let nt=tt.__webglTexture,Q=Vt(y);if(y.depthTexture.format===Xi)Gt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===ji)Gt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function k(T){let y=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let tt=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){let nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=tt}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");H(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=i.createRenderbuffer(),C(y.__webglDepthbuffer[tt],T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),C(y.__webglDepthbuffer,T,!1);else{let tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(T,y,z){let tt=n.get(T);y!==void 0&&Mt(tt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&k(T)}function st(T){let y=T.texture,z=n.get(T),tt=n.get(y);T.addEventListener("dispose",I);let nt=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=y.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let xt=0;xt<y.mipmaps.length;xt++)z.__webglFramebuffer[ft][xt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ft=0,xt=nt.length;ft<xt;ft++){let Xt=n.get(nt[ft]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Gt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<nt.length;ft++){let xt=nt[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);let Xt=r.convert(xt.format,xt.colorSpace),ot=r.convert(xt.type),yt=M(xt.internalFormat,Xt,ot,xt.colorSpace,T.isXRRenderTarget===!0),It=Vt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),C(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)Mt(z.__webglFramebuffer[ft][xt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else Mt(z.__webglFramebuffer[ft],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,xt=nt.length;ft<xt;ft++){let Xt=nt[ft],ot=n.get(Xt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Rt(i.TEXTURE_2D,Xt),Mt(z.__webglFramebuffer,T,Xt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Xt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),Rt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)Mt(z.__webglFramebuffer[xt],T,y,i.COLOR_ATTACHMENT0,ft,xt);else Mt(z.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,ft,0);m(y)&&f(ft),e.unbindTexture()}T.depthBuffer&&k(T)}function lt(T){let y=T.textures;for(let z=0,tt=y.length;z<tt;z++){let nt=y[z];if(m(nt)){let Q=E(T),Tt=n.get(nt).__webglTexture;e.bindTexture(Q,Tt),f(Q),e.unbindTexture()}}}let Ht=[],U=[];function Ne(T){if(T.samples>0){if(Gt(T)===!1){let y=T.textures,z=T.width,tt=T.height,nt=i.COLOR_BUFFER_BIT,Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(T),ft=y.length>1;if(ft)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);let Xt=n.get(y[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,z,tt,0,0,z,tt,nt,i.NEAREST),l===!0&&(Ht.length=0,U.length=0,Ht.push(i.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push(Q),U.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[xt]);let Xt=n.get(y[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Vt(T){return Math.min(s.maxSamples,T.samples)}function Gt(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function se(T,y){let z=T.colorSpace,tt=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==is&&z!==qn&&(qt.getTransfer(z)===Qt?(tt!==on||nt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=it,this.setTextureCube=q,this.rebindTextures=$,this.setupRenderTarget=st,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Gt}function w_(i,t){function e(n,s=qn){let r,a=qt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===on)return i.RGBA;if(n===kh)return i.LUMINANCE;if(n===zh)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===yr)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===ya||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===ya)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vr||n===Na||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vr)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Oa||n===Ba||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var el=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},De=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`,nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},il=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=new nl,m=e.getContextAttributes(),f=null,E=null,M=[],x=[],R=new _t,A=null,I=new Ie;I.viewport=new te;let D=new Ie;D.viewport=new te;let S=[I,D],v=new el,L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=M[j];return rt===void 0&&(rt=new Ts,M[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=M[j];return rt===void 0&&(rt=new Ts,M[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=M[j];return rt===void 0&&(rt=new Ts,M[j]=rt),rt.getHandSpace()};function F(j){let rt=x.indexOf(j.inputSource);if(rt===-1)return;let Mt=M[rt];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let j=0;j<M.length;j++){let rt=x[j];rt!==null&&(x[j]=null,M[j].disconnect(rt))}L=null,Y=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Fn(p.framebufferWidth,p.framebufferHeight,{format:on,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Mt=null,C=null;m.depth&&(C=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?ji:Xi,Mt=m.stencil?Ji:gi);let H={colorFormat:e.RGBA8,depthFormat:C,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(H),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Fn(u.textureWidth,u.textureHeight,{format:on,type:Un,depthTexture:new Dr(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(j){for(let rt=0;rt<j.removed.length;rt++){let Mt=j.removed[rt],C=x.indexOf(Mt);C>=0&&(x[C]=null,M[C].disconnect(Mt))}for(let rt=0;rt<j.added.length;rt++){let Mt=j.added[rt],C=x.indexOf(Mt);if(C===-1){for(let k=0;k<M.length;k++)if(k>=x.length){x.push(Mt),C=k;break}else if(x[k]===null){x[k]=Mt,C=k;break}if(C===-1)break}let H=M[C];H&&H.connect(Mt)}}let Z=new P,it=new P;function q(j,rt,Mt){Z.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);let C=Z.distanceTo(it),H=rt.projectionMatrix.elements,k=Mt.projectionMatrix.elements,$=H[14]/(H[10]-1),st=H[14]/(H[10]+1),lt=(H[9]+1)/H[5],Ht=(H[9]-1)/H[5],U=(H[8]-1)/H[0],Ne=(k[8]+1)/k[0],Vt=$*U,Gt=$*Ne,Pt=C/(-U+Ne),se=Pt*-U;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(se),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),H[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Ct=$+Pt,T=st+Pt,y=Vt-se,z=Gt+(C-se),tt=lt*st/T*Ct,nt=Ht*st/T*Ct;j.projectionMatrix.makePerspective(y,z,tt,nt,Ct,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ct(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let rt=j.near,Mt=j.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),v.near=D.near=I.near=rt,v.far=D.far=I.far=Mt,(L!==v.near||Y!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,Y=v.far),I.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,v.layers.mask=I.layers.mask|D.layers.mask;let C=j.parent,H=v.cameras;ct(v,C);for(let k=0;k<H.length;k++)ct(H[k],C);H.length===2?q(v,I,D):v.projectionMatrix.copy(I.projectionMatrix),ut(j,v,C)};function ut(j,rt,Mt){Mt===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ps*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let bt=null;function Rt(j,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){let Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let C=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,C=!0);for(let k=0;k<Mt.length;k++){let $=Mt[k],st=null;if(p!==null)st=p.getViewport($);else{let Ht=d.getViewSubImage(u,$);st=Ht.viewport,k===0&&(t.setRenderTargetTextures(E,Ht.colorTexture,u.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(E))}let lt=S[k];lt===void 0&&(lt=new Ie,lt.layers.enable(k),lt.viewport=new te,S[k]=lt),lt.matrix.fromArray($.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray($.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(st.x,st.y,st.width,st.height),k===0&&(v.matrix.copy(lt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),C===!0&&v.cameras.push(lt)}let H=s.enabledFeatures;if(H&&H.includes("depth-sensing")){let k=d.getDepthInformation(Mt[0]);k&&k.isValid&&k.texture&&_.init(t,k,s.renderState)}}for(let Mt=0;Mt<M.length;Mt++){let C=x[Mt],H=M[Mt];C!==null&&H!==void 0&&H.update(C,rt,c||a)}bt&&bt(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let $t=new Zh;$t.setAnimationLoop(Rt),this.setAnimationLoop=function(j){bt=j},this.dispose=function(){}}},ci=new pn,C_=new Ut;function P_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),M=E.envMap,x=E.envMapRotation;M&&(m.envMap.value=M,ci.copy(x),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let x=M.program;n.uniformBlockBinding(E,x)}function c(E,M){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));let R=M.program;n.updateUBOMapping(E,R);let A=t.render.frame;r[E.id]!==A&&(u(E),r[E.id]=A)}function h(E){let M=d();E.__bindingPointIndex=M;let x=i.createBuffer(),R=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let M=s[E.id],x=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,I=x.length;A<I;A++){let D=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=D.length;S<v;S++){let L=D[S];if(p(L,A,S,R)===!0){let Y=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],V=0;for(let J=0;J<F.length;J++){let Z=F[J],it=_(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+V,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,V),V+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,x,R){let A=E.value,I=M+"_"+x;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let D=R[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(E){let M=E.uniforms,x=0,R=16;for(let I=0,D=M.length;I<D;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let v=0,L=S.length;v<L;v++){let Y=S[v],F=Array.isArray(Y.value)?Y.value:[Y.value];for(let V=0,J=F.length;V<J;V++){let Z=F[V],it=_(Z),q=x%R,ct=q%it.boundary,ut=q+ct;x+=ct,ut!==0&&R-ut<it.storage&&(x+=R-ut),Y.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=it.storage}}}let A=x%R;return A>0&&(x+=R-A),E.__size=x,E.__cache={},this}function _(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ur=class{constructor(t={}){let{canvas:e=Ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this.toneMapping=Yn,this.toneMappingExposure=1;let x=this,R=!1,A=0,I=0,D=null,S=-1,v=null,L=new te,Y=new te,F=null,V=new zt(0),J=0,Z=e.width,it=e.height,q=1,ct=null,ut=null,bt=new te(0,0,Z,it),Rt=new te(0,0,Z,it),$t=!1,j=new Ds,rt=!1,Mt=!1,C=new Ut,H=new Ut,k=new P,$=new te,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Ht(){return D===null?q:1}let U=n;function Ne(b,O){return e.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let O="webgl2";if(U=Ne(O,b),U===null)throw Ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Vt,Gt,Pt,se,Ct,T,y,z,tt,nt,Q,Tt,ft,xt,Xt,ot,yt,It,Lt,vt,Wt,Bt,ne,N;function dt(){Vt=new $g(U),Vt.init(),Bt=new w_(U,Vt),Gt=new Hg(U,Vt,t,Bt),Pt=new b_(U,Vt),Gt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),se=new Kg(U),Ct=new c_,T=new E_(U,Vt,Pt,Ct,Gt,Bt,se),y=new Gg(x),z=new qg(x),tt=new ip(U),ne=new kg(U,tt),nt=new Yg(U,tt,se,ne),Q=new jg(U,nt,tt,se),Lt=new Jg(U,Gt,T),ot=new Vg(Ct),Tt=new l_(x,y,z,Vt,Gt,ne,ot),ft=new P_(x,Ct),xt=new u_,Xt=new __(Vt),It=new Bg(x,y,z,Pt,Q,p,l),yt=new v_(x,Q,Gt),N=new I_(U,se,Gt,Pt),vt=new zg(U,Vt,se),Wt=new Zg(U,Vt,se),se.programs=Tt.programs,x.capabilities=Gt,x.extensions=Vt,x.properties=Ct,x.renderLists=xt,x.shadowMap=yt,x.state=Pt,x.info=se}dt();let K=new il(x,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=Vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Z,it,!1))},this.getSize=function(b){return b.set(Z,it)},this.setSize=function(b,O,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,it=O,e.width=Math.floor(b*q),e.height=Math.floor(O*q),G===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Z*q,it*q).floor()},this.setDrawingBufferSize=function(b,O,G){Z=b,it=O,q=G,e.width=Math.floor(b*G),e.height=Math.floor(O*G),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,O,G,W){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,O,G,W),Pt.viewport(L.copy(bt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,O,G,W){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,O,G,W),Pt.scissor(Y.copy(Rt).multiplyScalar(q).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(b){Pt.setScissorTest($t=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){ut=b},this.getClearColor=function(b){return b.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(b=!0,O=!0,G=!0){let W=0;if(b){let B=!1;if(D!==null){let at=D.texture.format;B=at===Ul||at===Dl||at===Ll}if(B){let at=D.texture.type,mt=at===Un||at===gi||at===Cs||at===Ji||at===Cl||at===Pl,St=It.getClearColor(),Et=It.getClearAlpha(),Dt=St.r,Ft=St.g,wt=St.b;mt?(g[0]=Dt,g[1]=Ft,g[2]=wt,g[3]=Et,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=wt,_[3]=Et,U.clearBufferiv(U.COLOR,0,_))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT),G&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),Xt.dispose(),Ct.dispose(),y.dispose(),z.dispose(),Q.dispose(),ne.dispose(),N.dispose(),Tt.dispose(),K.dispose(),K.removeEventListener("sessionstart",fc),K.removeEventListener("sessionend",pc),ii.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=se.autoReset,O=yt.enabled,G=yt.autoUpdate,W=yt.needsUpdate,B=yt.type;dt(),se.autoReset=b,yt.enabled=O,yt.autoUpdate=G,yt.needsUpdate=W,yt.type=B}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nt(b){let O=b.target;O.removeEventListener("dispose",Nt),de(O)}function de(b){we(b),Ct.remove(b)}function we(b){let O=Ct.get(b).programs;O!==void 0&&(O.forEach(function(G){Tt.releaseProgram(G)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,G,W,B,at){O===null&&(O=st);let mt=B.isMesh&&B.matrixWorld.determinant()<0,St=Cd(b,O,G,W,B);Pt.setMaterial(W,mt);let Et=G.index,Dt=1;if(W.wireframe===!0){if(Et=nt.getWireframeAttribute(G),Et===void 0)return;Dt=2}let Ft=G.drawRange,wt=G.attributes.position,Yt=Ft.start*Dt,ie=(Ft.start+Ft.count)*Dt;at!==null&&(Yt=Math.max(Yt,at.start*Dt),ie=Math.min(ie,(at.start+at.count)*Dt)),Et!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,Et.count)):wt!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,wt.count));let re=ie-Yt;if(re<0||re===1/0)return;ne.setup(B,W,St,G,Et);let Fe,Zt=vt;if(Et!==null&&(Fe=tt.get(Et),Zt=Wt,Zt.setIndex(Fe)),B.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*Ht()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(B.isLine){let At=W.linewidth;At===void 0&&(At=1),Pt.setLineWidth(At*Ht()),B.isLineSegments?Zt.setMode(U.LINES):B.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else B.isPoints?Zt.setMode(U.POINTS):B.isSprite&&Zt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let At=B._multiDrawStarts,En=B._multiDrawCounts,Kt=B._multiDrawCount,je=Et?tt.get(Et).bytesPerElement:1,Ai=Ct.get(W).currentProgram.getUniforms();for(let Ge=0;Ge<Kt;Ge++)Ai.setValue(U,"_gl_DrawID",Ge),Zt.render(At[Ge]/je,En[Ge])}else if(B.isInstancedMesh)Zt.renderInstances(Yt,re,B.count);else if(G.isInstancedBufferGeometry){let At=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,En=Math.min(G.instanceCount,At);Zt.renderInstances(Yt,re,En)}else Zt.render(Yt,re)};function Jt(b,O,G){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=Oe,b.needsUpdate=!0,Ws(b,O,G),b.side=Zn,b.needsUpdate=!0,Ws(b,O,G),b.side=sn):Ws(b,O,G)}this.compile=function(b,O,G=null){G===null&&(G=b),f=Xt.get(G),f.init(O),M.push(f),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();let W=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let at=B.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let St=at[mt];Jt(St,G,B),W.add(St)}else Jt(at,G,B),W.add(at)}),M.pop(),f=null,W},this.compileAsync=function(b,O,G=null){let W=this.compile(b,O,G);return new Promise(B=>{function at(){if(W.forEach(function(mt){Ct.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){B(b);return}setTimeout(at,10)}Vt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Je=null;function Sn(b){Je&&Je(b)}function fc(){ii.stop()}function pc(){ii.start()}let ii=new Zh;ii.setAnimationLoop(Sn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){Je=b,K.setAnimationLoop(b),b===null?ii.stop():ii.start()},K.addEventListener("sessionstart",fc),K.addEventListener("sessionend",pc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,D),f=Xt.get(b,M.length),f.init(O),M.push(f),H.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(H),Mt=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,Mt),m=xt.get(b,E.length),m.init(),E.push(m),K.enabled===!0&&K.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&bo(at,O,-1/0,x.sortObjects)}bo(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,ut),lt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,lt&&It.addToRenderList(m,b),this.info.render.frame++,rt===!0&&ot.beginShadows();let G=f.state.shadowsArray;yt.render(G,b,O),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){let at=O.cameras;if(B.length>0)for(let mt=0,St=at.length;mt<St;mt++){let Et=at[mt];gc(W,B,b,Et)}lt&&It.render(b);for(let mt=0,St=at.length;mt<St;mt++){let Et=at[mt];mc(m,b,Et,Et.viewport)}}else B.length>0&&gc(W,B,b,O),lt&&It.render(b),mc(m,b,O);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,O),ne.resetDefaultState(),S=-1,v=null,M.pop(),M.length>0?(f=M[M.length-1],rt===!0&&ot.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function bo(b,O,G,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){W&&$.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);let mt=Q.update(b),St=b.material;St.visible&&m.push(b,mt,St,G,$.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){let mt=Q.update(b),St=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),$.copy(mt.boundingSphere.center)),$.applyMatrix4(b.matrixWorld).applyMatrix4(H)),Array.isArray(St)){let Et=mt.groups;for(let Dt=0,Ft=Et.length;Dt<Ft;Dt++){let wt=Et[Dt],Yt=St[wt.materialIndex];Yt&&Yt.visible&&m.push(b,mt,Yt,G,$.z,wt)}}else St.visible&&m.push(b,mt,St,G,$.z,null)}}let at=b.children;for(let mt=0,St=at.length;mt<St;mt++)bo(at[mt],O,G,W)}function mc(b,O,G,W){let B=b.opaque,at=b.transmissive,mt=b.transparent;f.setupLightsView(G),rt===!0&&ot.setGlobalState(x.clippingPlanes,G),W&&Pt.viewport(L.copy(W)),B.length>0&&Gs(B,O,G),at.length>0&&Gs(at,O,G),mt.length>0&&Gs(mt,O,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function gc(b,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Fn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Bs:Un,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let at=f.state.transmissionRenderTarget[W.id],mt=W.viewport||L;at.setSize(mt.z,mt.w);let St=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(V),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),lt&&It.render(G);let Et=x.toneMapping;x.toneMapping=Yn;let Dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),rt===!0&&ot.setGlobalState(x.clippingPlanes,W),Gs(b,G,W),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,Yt=O.length;wt<Yt;wt++){let ie=O[wt],re=ie.object,Fe=ie.geometry,Zt=ie.material,At=ie.group;if(Zt.side===sn&&re.layers.test(W.layers)){let En=Zt.side;Zt.side=Oe,Zt.needsUpdate=!0,_c(re,G,W,Fe,Zt,At),Zt.side=En,Zt.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}x.setRenderTarget(St),x.setClearColor(V,J),Dt!==void 0&&(W.viewport=Dt),x.toneMapping=Et}function Gs(b,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,at=b.length;B<at;B++){let mt=b[B],St=mt.object,Et=mt.geometry,Dt=W===null?mt.material:W,Ft=mt.group;St.layers.test(G.layers)&&_c(St,O,G,Et,Dt,Ft)}}function _c(b,O,G,W,B,at){b.onBeforeRender(x,O,G,W,B,at),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,O,G,W,b,at),B.transparent===!0&&B.side===sn&&B.forceSinglePass===!1?(B.side=Oe,B.needsUpdate=!0,x.renderBufferDirect(G,O,W,B,b,at),B.side=Zn,B.needsUpdate=!0,x.renderBufferDirect(G,O,W,B,b,at),B.side=sn):x.renderBufferDirect(G,O,W,B,b,at),b.onAfterRender(x,O,G,W,B,at)}function Ws(b,O,G){O.isScene!==!0&&(O=st);let W=Ct.get(b),B=f.state.lights,at=f.state.shadowsArray,mt=B.state.version,St=Tt.getParameters(b,B.state,at,O,G),Et=Tt.getProgramCacheKey(St),Dt=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?z:y).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Nt),Dt=new Map,W.programs=Dt);let Ft=Dt.get(Et);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===mt)return yc(b,St),Ft}else St.uniforms=Tt.getUniforms(b),b.onBeforeCompile(St,x),Ft=Tt.acquireProgram(St,Et),Dt.set(Et,Ft),W.uniforms=St.uniforms;let wt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=ot.uniform),yc(b,St),W.needsLights=Id(b),W.lightsStateVersion=mt,W.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function xc(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=$i.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function yc(b,O){let G=Ct.get(b);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Cd(b,O,G,W,B){O.isScene!==!0&&(O=st),T.resetTextureUnits();let at=O.fog,mt=W.isMeshStandardMaterial?O.environment:null,St=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:is,Et=(W.isMeshStandardMaterial?z:y).get(W.envMap||mt),Dt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ie=!!G.morphAttributes.color,re=Yn;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(re=x.toneMapping);let Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Zt=Fe!==void 0?Fe.length:0,At=Ct.get(W),En=f.state.lights;if(rt===!0&&(Mt===!0||b!==v)){let Ze=b===v&&W.id===S;ot.setState(W,b,Ze)}let Kt=!1;W.version===At.__version?(At.needsLights&&At.lightsStateVersion!==En.state.version||At.outputColorSpace!==St||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==Et||W.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ot.numPlanes||At.numIntersection!==ot.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==Ft||At.morphTargets!==wt||At.morphNormals!==Yt||At.morphColors!==ie||At.toneMapping!==re||At.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,At.__version=W.version);let je=At.currentProgram;Kt===!0&&(je=Ws(W,O,B));let Ai=!1,Ge=!1,ps=!1,oe=je.getUniforms(),un=At.uniforms;if(Pt.useProgram(je.program)&&(Ai=!0,Ge=!0,ps=!0),W.id!==S&&(S=W.id,Ge=!0),Ai||v!==b){Pt.buffers.depth.getReversed()?(C.copy(b.projectionMatrix),Bf(C),kf(C),oe.setValue(U,"projectionMatrix",C)):oe.setValue(U,"projectionMatrix",b.projectionMatrix),oe.setValue(U,"viewMatrix",b.matrixWorldInverse);let Bn=oe.map.cameraPosition;Bn!==void 0&&Bn.setValue(U,k.setFromMatrixPosition(b.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&oe.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ge=!0,ps=!0)}if(B.isSkinnedMesh){oe.setOptional(U,B,"bindMatrix"),oe.setOptional(U,B,"bindMatrixInverse");let Ze=B.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),oe.setValue(U,"boneTexture",Ze.boneTexture,T))}B.isBatchedMesh&&(oe.setOptional(U,B,"batchingTexture"),oe.setValue(U,"batchingTexture",B._matricesTexture,T),oe.setOptional(U,B,"batchingIdTexture"),oe.setValue(U,"batchingIdTexture",B._indirectTexture,T),oe.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&oe.setValue(U,"batchingColorTexture",B._colorsTexture,T));let ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&Lt.update(B,G,je),(Ge||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,oe.setValue(U,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(un.envMap.value=Et,un.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(un.envMapIntensity.value=O.environmentIntensity),Ge&&(oe.setValue(U,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Pd(un,ps),at&&W.fog===!0&&ft.refreshFogUniforms(un,at),ft.refreshMaterialUniforms(un,W,q,it,f.state.transmissionRenderTarget[b.id]),$i.upload(U,xc(At),un,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($i.upload(U,xc(At),un,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&oe.setValue(U,"center",B.center),oe.setValue(U,"modelViewMatrix",B.modelViewMatrix),oe.setValue(U,"normalMatrix",B.normalMatrix),oe.setValue(U,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ze=W.uniformsGroups;for(let Bn=0,kn=Ze.length;Bn<kn;Bn++){let vc=Ze[Bn];N.update(vc,je),N.bind(vc,je)}}return je}function Pd(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Id(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,O,G){Ct.get(b.texture).__webglTexture=O,Ct.get(b.depthTexture).__webglTexture=G;let W=Ct.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let G=Ct.get(b);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,G=0){D=b,A=O,I=G;let W=!0,B=null,at=!1,mt=!1;if(b){let Et=Ct.get(b);if(Et.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Et.__hasExternalTextures)T.rebindTextures(b,Ct.get(b.texture).__webglTexture,Ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let wt=b.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&Ct.has(wt)&&(b.width!==wt.image.width||b.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(mt=!0);let Ft=Ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?B=Ft[O][G]:B=Ft[O],at=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?B=Ct.get(b).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[G]:B=Ft,L.copy(b.viewport),Y.copy(b.scissor),F=b.scissorTest}else L.copy(bt).multiplyScalar(q).floor(),Y.copy(Rt).multiplyScalar(q).floor(),F=$t;if(Pt.bindFramebuffer(U.FRAMEBUFFER,B)&&W&&Pt.drawBuffers(b,B),Pt.viewport(L),Pt.scissor(Y),Pt.setScissorTest(F),at){let Et=Ct.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,G)}else if(mt){let Et=Ct.get(b.texture),Dt=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,Dt)}S=-1},this.readRenderTargetPixels=function(b,O,G,W,B,at,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){Pt.bindFramebuffer(U.FRAMEBUFFER,St);try{let Et=b.texture,Dt=Et.format,Ft=Et.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&G>=0&&G<=b.height-B&&U.readPixels(O,G,W,B,Bt.convert(Dt),Bt.convert(Ft),at)}finally{let Et=D!==null?Ct.get(D).__webglFramebuffer:null;Pt.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,O,G,W,B,at,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){let Et=b.texture,Dt=Et.format,Ft=Et.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-W&&G>=0&&G<=b.height-B){Pt.bindFramebuffer(U.FRAMEBUFFER,St);let wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.bufferData(U.PIXEL_PACK_BUFFER,at.byteLength,U.STREAM_READ),U.readPixels(O,G,W,B,Bt.convert(Dt),Bt.convert(Ft),0);let Yt=D!==null?Ct.get(D).__webglFramebuffer:null;Pt.bindFramebuffer(U.FRAMEBUFFER,Yt);let ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Of(U,ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,at),U.deleteBuffer(wt),U.deleteSync(ie),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,G=0){b.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let W=Math.pow(2,-G),B=Math.floor(b.image.width*W),at=Math.floor(b.image.height*W),mt=O!==null?O.x:0,St=O!==null?O.y:0;T.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,mt,St,B,at),Pt.unbindTexture()},this.copyTextureToTexture=function(b,O,G=null,W=null,B=0){b.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,G=null);let at,mt,St,Et,Dt,Ft,wt,Yt,ie,re=b.isCompressedTexture?b.mipmaps[B]:b.image;G!==null?(at=G.max.x-G.min.x,mt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Dt=G.min.y,Ft=G.isBox3?G.min.z:0):(at=re.width,mt=re.height,St=re.depth||1,Et=0,Dt=0,Ft=0),W!==null?(wt=W.x,Yt=W.y,ie=W.z):(wt=0,Yt=0,ie=0);let Fe=Bt.convert(O.format),Zt=Bt.convert(O.type),At;O.isData3DTexture?(T.setTexture3D(O,0),At=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),At=U.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),At=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let En=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),je=U.getParameter(U.UNPACK_SKIP_PIXELS),Ai=U.getParameter(U.UNPACK_SKIP_ROWS),Ge=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);let ps=b.isDataArrayTexture||b.isData3DTexture,oe=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let un=Ct.get(b),ms=Ct.get(O),Ze=Ct.get(un.__renderTarget),Bn=Ct.get(ms.__renderTarget);Pt.bindFramebuffer(U.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let kn=0;kn<St;kn++)ps&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(b).__webglTexture,B,Ft+kn),b.isDepthTexture?(oe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(O).__webglTexture,B,ie+kn),U.blitFramebuffer(Et,Dt,at,mt,wt,Yt,at,mt,U.DEPTH_BUFFER_BIT,U.NEAREST)):oe?U.copyTexSubImage3D(At,B,wt,Yt,ie+kn,Et,Dt,at,mt):U.copyTexSubImage2D(At,B,wt,Yt,ie+kn,Et,Dt,at,mt);Pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(At,B,wt,Yt,ie,at,mt,St,Fe,Zt,re.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(At,B,wt,Yt,ie,at,mt,St,Fe,re.data):U.texSubImage3D(At,B,wt,Yt,ie,at,mt,St,Fe,Zt,re):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,wt,Yt,at,mt,Fe,Zt,re.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,wt,Yt,re.width,re.height,Fe,re.data):U.texSubImage2D(U.TEXTURE_2D,B,wt,Yt,at,mt,Fe,Zt,re);U.pixelStorei(U.UNPACK_ROW_LENGTH,En),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ai),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge),B===0&&O.generateMipmaps&&U.generateMipmap(At),Pt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,G=null,W=null,B=0){return b.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,G,W,B)},this.initRenderTarget=function(b){Ct.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Pt.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,Pt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Nr=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},sl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ce=new P,gn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var rl=class extends $e{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new Ut,Mh=new Ut,dr=[],bh=new Be,L_=new Ut,vs=new ae,Ms=new an,Fr=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Be),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),bh.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Ms.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Mh.multiplyMatrices(n,Vi),vs.matrixWorld=Mh,vs.raycast(t,dr);for(let a=0,o=dr.length;a<o;a++){let l=dr[a];l.instanceId=r,l.object=this,e.push(l)}dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rl(new Float32Array(s*this.count),s,this.count,Il,fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new Ut;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ol=class extends Or{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ol(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var fr=new P,Jo=new Ol,jo=new Ol,Qo=new Ol,al=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),c=fr);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),jo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),Qo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),jo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Jo.calc(l),jo.calc(l),Qo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function D_(i,t){let e=1-i;return e*e*t}function U_(i,t){return 2*(1-i)*i*t}function N_(i,t){return i*i*t}function As(i,t,e,n){return D_(i,t)+U_(i,e)+N_(i,n)}function F_(i,t){let e=1-i;return e*e*e*t}function O_(i,t){let e=1-i;return 3*e*e*i*t}function B_(i,t){return 3*(1-i)*i*i*t}function k_(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return F_(i,t)+O_(i,e)+B_(i,n)+k_(i,s)}var ll=class extends ln{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cl=class extends ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y),Rs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hl=class extends ln{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Us=class extends ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ul=class extends ln{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y),As(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Sh(o,l.x,c.x,h.x,d.x),Sh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},z_=Object.freeze({__proto__:null,ArcCurve:ol,CatmullRomCurve3:al,CubicBezierCurve:ll,CubicBezierCurve3:cl,EllipseCurve:Or,LineCurve:hl,LineCurve3:Us,QuadraticBezierCurve:ul,QuadraticBezierCurve3:Br,SplineCurve:dl});var fl=class i extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let M=new P,x=new P,R=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],M),p(e[A+1],x),p(e[A+2],R),l(M,x,R,E)}function l(E,M,x,R){let A=R+1,I=[];for(let D=0;D<=A;D++){I[D]=[];let S=E.clone().lerp(x,D/A),v=M.clone().lerp(x,D/A),L=A-D;for(let Y=0;Y<=L;Y++)Y===0&&D===A?I[D][Y]=S:I[D][Y]=S.clone().lerp(v,Y/L)}for(let D=0;D<A;D++)for(let S=0;S<2*(A-D)-1;S++){let v=Math.floor(S/2);S%2===0?(u(I[D][v+1]),u(I[D+1][v]),u(I[D][v])):(u(I[D][v+1]),u(I[D+1][v+1]),u(I[D+1][v]))}}function c(E){let M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(E),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let E=new P;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];let x=m(E)/2/Math.PI+.5,R=f(E)/Math.PI+.5;a.push(x,1-R)}g(),d()}function d(){for(let E=0;E<a.length;E+=6){let M=a[E+0],x=a[E+2],R=a[E+4],A=Math.max(M,x,R),I=Math.min(M,x,R);A>.9&&I<.1&&(M<.2&&(a[E+0]+=1),x<.2&&(a[E+2]+=1),R<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function p(E,M){let x=E*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){let E=new P,M=new P,x=new P,R=new P,A=new _t,I=new _t,D=new _t;for(let S=0,v=0;S<r.length;S+=9,v+=6){E.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(a[v+0],a[v+1]),I.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),R.copy(E).add(M).add(x).divideScalar(3);let L=m(R);_(A,v+0,E,L),_(I,v+2,M,L),_(D,v+4,x,L)}}function _(E,M,x,R){R<0&&E.x===1&&(a[M]=E.x-1),x.x===0&&x.z===0&&(a[M]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var kr=class i extends fl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var xi=class i extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let E=[],M=f/n,x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+x,1-M),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let M=h[f][E+1],x=h[f][E],R=h[f+1][E],A=h[f+1][E+1];(f!==0||a>0)&&p.push(M,x,A),(f!==n-1||l<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zr=class i extends ke{constructor(t=new Br(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new _t,h=new P,d=[],u=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(p,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),E(),f()}function m(M){h=t.getPointAt(M/e,h);let x=a.normals[M],R=a.binormals[M];for(let A=0;A<=s;A++){let I=A/s*Math.PI*2,D=Math.sin(I),S=-Math.cos(I);l.x=S*x.x+D*R.x,l.y=S*x.y+D*R.y,l.z=S*x.z+D*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){let R=(s+1)*(M-1)+(x-1),A=(s+1)*M+(x-1),I=(s+1)*M+x,D=(s+1)*(M-1)+x;g.push(R,A,D),g.push(A,I,D)}}function E(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new z_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Hr=class extends ke{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new P,r=new P;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,p=d.count;for(let g=u,_=u+p;g<_;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),E=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,E),Eh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Eh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new pe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Eh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Ns=class extends _i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function pr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function H_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ns=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends ns{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,o=2*e-n;break;case Ac:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:a=t,l=2*n-e;break;case Ac:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,E=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+E*a[c+R]+M*a[l+R]+x*a[d+R];return r}},ml=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},gl=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&H_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Eo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=za;var yi=class extends cn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Mr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends cn{};_l.prototype.ValueTypeName="color";var xl=class extends cn{};xl.prototype.ValueTypeName="number";var yl=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ye.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vr=class extends cn{InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends cn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Mr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends cn{};vl.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},V_=new Ml,bl=class{constructor(t){this.manager=t!==void 0?t:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Wr=class extends Gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ta=new Ut,wh=new P,Th=new P,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var El=class extends Sl{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new El}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xr=class extends ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var qr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ah();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ah(){return performance.now()}var Bl="\\[\\]\\.:\\/",G_=new RegExp("["+Bl+"]","g"),kl="[^"+Bl+"]",W_="[^"+Bl.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",kl),q_=/(WCOD+)?/.source.replace("WCOD",W_),$_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Z_=new RegExp("^"+X_+q_+$_+Y_+"$"),K_=["material","materials","bones","map"],wl=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G_,"")}static parseTrackName(t){let e=Z_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=wl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var By=new Float32Array(1);var Mi=class extends sl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Rh=new Ut,$r=class{constructor(t,e,n=0,s=1/0){this.ray=new Qi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(t,e=!0,n=[]){return Tl(t,this,n,e),n.sort(Ch),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tl(t[s],this,n,e);return n.sort(Ch),n}};function Ch(i,t){return i.distance-t.distance}function Tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Tl(r[a],t,e,!0)}}var Os=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ph=new P,mr=new P,Yr=class{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ph.subVectors(t,this.start),mr.subVectors(this.end,this.start);let n=mr.dot(mr),r=mr.dot(Ph)/n;return e&&(r=_e(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Zr=class extends Nn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);var tu={type:"change"},Hl={type:"start"},nu={type:"end"},eo=new Qi,eu=new nn,J_=Math.cos(70*jr.DEG2RAD),ve=new P,He=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zl=1e-6,no=class extends Zr{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ye,this._lastTargetPosition=new P,this._quat=new Ye().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Os,this._sphericalDelta=new Os,this._scale=1,this._panOffset=new P,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new P,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q_.bind(this),this._onPointerDown=j_.bind(this),this._onPointerUp=tx.bind(this),this._onContextMenu=ax.bind(this),this._onMouseWheel=ix.bind(this),this._onKeyDown=sx.bind(this),this._onTouchStart=rx.bind(this),this._onTouchMove=ox.bind(this),this._onMouseDown=ex.bind(this),this._onMouseMove=nx.bind(this),this._interceptControlDown=lx.bind(this),this._interceptControlUp=cx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tu),this.update(),this.state=ee.NONE}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=He:n>Math.PI&&(n-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<J_?this.object.lookAt(this.target):(eu.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(eu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zl||this._lastTargetPosition.distanceToSquared(this.target)>zl?(this.dispatchEvent(tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function j_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Q_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function tx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nu),this.state=ee.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ex(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Hl)}function nx(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ix(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Hl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nu))}function sx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Hl)}function ox(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function ax(i){this.enabled!==!1&&i.preventDefault()}function lx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rs=(i,t)=>i.map((e,n)=>e+t[n]),Vl=(i,t)=>i.map((e,n)=>e-t[n]),ks=(i,t)=>i.map(e=>e*t),io=i=>ks(i,1/(Math.hypot(...i)||1));function iu(i,t,e=.12){return 2*i*Math.tan(t*Math.PI/360)*e}function su(i,t,e,n,s,r){let a=rs(ks(io(t),s*n),ks(io(e),r*n));return{target:rs(i.target,a),position:rs(i.position,a)}}function ru(i,t){let e=Math.hypot(...Vl(i.position,i.target));return{target:i.target.slice(),position:rs(i.target,ks(io(t),e))}}function Gl(i,t){return{target:t.slice(),position:rs(i.position,Vl(t,i.target))}}function ou(i,t){return Gl(i,[t[0],i.target[1],t[2]])}function au(i,t,e,n){let s=Vl(i.position,i.target),r=Math.hypot(s[0],s[2]),a=r<.001?n:[s[0]/r,.05,s[2]/r];return{target:t.slice(),position:rs(t,ks(io(a),e))}}var so=new P(0,86,0),lu=300,hx=95,Wl={front:[-.25,.05,1],back:[.25,.05,-1],right:[-1,.05,.05],left:[1,.05,.05]};function cu(i){let t=new Ur({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(t.domElement);let e=new Nr;e.background=new zt(921878);let n=new Ie(35,1,1,2e3),s=new no(n,t.domElement);s.enableDamping=!0,s.zoomToCursor=!0,s.keyPanSpeed=25,t.domElement.tabIndex=0,s.listenToKeyEvents(t.domElement),e.add(new Wr(16777215,2764602,1.4));let r=new Fs(16777215,1.8);r.position.set(-80,220,160),e.add(r);let a=new Fs(16777215,.9);a.position.set(90,160,-160),e.add(a);function o(F,V,J){s.target.copy(F),n.position.copy(F).add(new P(...V).normalize().multiplyScalar(J)),s.update()}o(so,Wl.front,lu);let l=null,c=()=>l?.to??{target:s.target.toArray(),position:n.position.toArray()};function h(F,V=.3){l={from:{target:s.target.toArray(),position:n.position.toArray()},to:F,t:0,duration:V}}s.addEventListener("start",()=>l=null);function d(F){if(!l)return;l.t=Math.min(1,l.t+F/l.duration);let V=l.t*l.t*(3-2*l.t),J=(Z,it)=>Z.map((q,ct)=>q+(it[ct]-q)*V);s.target.fromArray(J(l.from.target,l.to.target)),n.position.fromArray(J(l.from.position,l.to.position)),l.t===1&&(l=null)}let u=F=>{l=null,s.target.fromArray(F.target),n.position.fromArray(F.position),s.update()},p=F=>u(ru(c(),Wl[F])),g=()=>u(au(c(),so.toArray(),lu,Wl.front));function _(F,V){let J=c(),Z=Math.hypot(...J.position.map((ct,ut)=>ct-J.target[ut])),it=new P(1,0,0).applyQuaternion(n.quaternion).toArray(),q=new P(0,1,0).applyQuaternion(n.quaternion).toArray();h(su(J,it,q,iu(Z,n.fov),F,V),.2)}let m=F=>h(Gl(c(),F),.35),f=()=>h(ou(c(),so.toArray()),.35);function E(F){let V=new P(...F),J=new P(V.x,0,V.z-so.z);J.length()<3&&J.copy(n.position).sub(s.target).setY(0),J.normalize().setY(.15),l=null,o(V,J.toArray(),hx)}let M=[],x=()=>{let F=i.clientWidth,V=i.clientHeight;t.setSize(F,V),n.aspect=F/V,n.updateProjectionMatrix();for(let J of M)J(F,V)};new ResizeObserver(x).observe(i),x();let R=new $r,A=new _t;function I(F,V,J){let Z=t.domElement.getBoundingClientRect();return A.set((F-Z.left)/Z.width*2-1,-((V-Z.top)/Z.height)*2+1),R.setFromCamera(A,n),R.intersectObjects(J,!1)[0]??null}let D=(F,V,J)=>I(F,V,J)?.object??null,S=(F,V,J)=>I(F,V,J),v=(F,V,J)=>I(F,V,J)?.point.toArray()??null,L=[],Y=new qr;return t.setAnimationLoop(()=>{let F=Y.getDelta();for(let V of L)V(F);d(F),s.update(),t.render(e,n)}),{scene:e,camera:n,controls:s,renderer:t,pick:D,pickHit:S,pickPoint:v,setView:p,showWholeBody:g,pan:_,recenter:m,center:f,lookAt:E,resize:x,onFrame:F=>L.push(F),onResize(F){M.push(F),F(i.clientWidth,i.clientHeight)}}}function hu(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Xl(i,t,e){let n=i.byteOffset%4?i.slice():i,s=new Int16Array(n.buffer,n.byteOffset+e.vOffset,e.vCount*3),r=new Float32Array(s.length);for(let c=0;c<s.length;c++){let h=c%3;r[c]=t.min[h]+(s[c]+32768)/65535*(t.max[h]-t.min[h])}let a=e.wide?Uint32Array:Uint16Array,o=new a(n.buffer,n.byteOffset+e.iOffset,e.iCount).slice(),l=e.sOffset===void 0?null:n.slice(e.sOffset,e.sOffset+e.vCount*3);return{positions:r,indices:o,skin:l}}var ux=["pelvis","L5","L4","L3","L2","L1","thoraxLow","thoraxMid","thoraxUp","neckLow","neckUp","head"],ro=["index","middle","ring","little"],dx=["thumbMeta","thumbProx","thumbDist",...ro.flatMap(i=>[`${i}Prox`,`${i}Mid`,`${i}Dist`])],uu=["clavicle","scapula","arm","ulna","radius","hand",...dx,"femur","shank","talus","foot"],qy=new Set(uu),du=[...ux,...uu.flatMap(i=>[`${i}.l`,`${i}.r`])],ql={ulna:"arm",radius:"ulna",hand:"radius",thumbMeta:"hand",thumbProx:"thumbMeta",thumbDist:"thumbProx",...Object.fromEntries(ro.flatMap(i=>[[`${i}Prox`,"hand"],[`${i}Mid`,`${i}Prox`],[`${i}Dist`,`${i}Mid`]])),shank:"femur",talus:"shank",foot:"talus"};function fu(i){let t=i.lastIndexOf(".");return t<0?[i,null]:[i.slice(0,t),i.slice(t+1)]}function os(i,t){return[i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14]]}function fx(i){return[i.a,...i.vias.map(t=>t.p),i.b]}function oo(i,t){return[os(t.get(i.segA).elements,i.a),...i.vias.map(e=>os(t.get(e.seg).elements,e.p)),os(t.get(i.segB).elements,i.b)]}function $l(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1],i[e][2]-i[e-1][2]);return t}function px(i,t,e){let n=new P(...e).normalize(),s=i.clone().invert().multiply(t),r=new P(1,0,0).cross(n);r.lengthSq()<1e-6&&r.set(0,1,0).cross(n),r.normalize();let a=r.clone().transformDirection(s);return Math.atan2(n.dot(r.clone().cross(a)),r.dot(a))}function mx(i,t){let e=new Map,n=s=>{if(e.has(s))return e.get(s);let[r,a]=fu(s),o=ql[r]&&`${ql[r]}.${a}`,l=i.get(s);if(o){let c=n(o);t.has(s)?l=c:c!==i.get(o)&&(l=c.clone().multiply(i.get(o).clone().invert()).multiply(l))}return e.set(s,l),l};return{get:n}}function Yl(i,t){if(!i.altVias)return pu(i,t);let e=[i.vias,...i.altVias].map(n=>pu({...i,vias:n},t));return e.reduce((n,s)=>n+s,0)/e.length}function pu(i,t){let e=$l(fx(i));if(e<.5)return 0;if(!i.wraps)return $l(oo(i,t))/e-1;let n=$l(oo(i,mx(t,new Set(i.wraps.map(s=>s.dist)))));for(let s of i.wraps)n-=s.m*px(t.get(s.prox),t.get(s.dist),s.axis);return n/e-1}function gx(i,t,e){let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function mu(i,t,e){let n=i.length/3,s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=s[0]**2+s[1]**2+s[2]**2||1,a=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++){let c=((i[l*3]-t[0])*s[0]+(i[l*3+1]-t[1])*s[1]+(i[l*3+2]-t[2])*s[2])/r,h=gx(.1,.9,c);a[l]=h,o[l]=4*h*(1-h)}return{rest:i,a:t,b:e,restLength:Math.sqrt(r),weight:a,belly:o}}function gu(i,t,e,n){let{rest:s,weight:r,belly:a}=i,o=t.elements,l=e.elements,c=os(o,i.a),h=os(l,i.b),d=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])||1,u=[(h[0]-c[0])/d,(h[1]-c[1])/d,(h[2]-c[2])/d],p=1/Math.sqrt(d/i.restLength);for(let g=0,_=r.length;g<_;g++){let m=s[g*3],f=s[g*3+1],E=s[g*3+2],M=r[g],x=1-M,R=x*(o[0]*m+o[4]*f+o[8]*E+o[12])+M*(l[0]*m+l[4]*f+l[8]*E+l[12]),A=x*(o[1]*m+o[5]*f+o[9]*E+o[13])+M*(l[1]*m+l[5]*f+l[9]*E+l[13]),I=x*(o[2]*m+o[6]*f+o[10]*E+o[14])+M*(l[2]*m+l[6]*f+l[10]*E+l[14]),D=1+(p-1)*a[g];if(D!==1){let S=(R-c[0])*u[0]+(A-c[1])*u[1]+(I-c[2])*u[2],v=c[0]+u[0]*S,L=c[1]+u[1]*S,Y=c[2]+u[2]*S;R=v+(R-v)*D,A=L+(A-L)*D,I=Y+(I-Y)*D}n[g*3]=R,n[g*3+1]=A,n[g*3+2]=I}}function _u(i,t,e,n,s){let r=e.map(a=>n.get(a).elements);for(let a=0,o=i.length/3;a<o;a++){let l=r[t[a*3]],c=r[t[a*3+1]],h=t[a*3+2]/255,d=1-h,u=i[a*3],p=i[a*3+1],g=i[a*3+2];s[a*3]=d*(l[0]*u+l[4]*p+l[8]*g+l[12])+h*(c[0]*u+c[4]*p+c[8]*g+c[12]),s[a*3+1]=d*(l[1]*u+l[5]*p+l[9]*g+l[13])+h*(c[1]*u+c[5]*p+c[9]*g+c[13]),s[a*3+2]=d*(l[2]*u+l[6]*p+l[10]*g+l[14])+h*(c[2]*u+c[6]*p+c[10]*g+c[14])}}var _n={natural:[.62,.25,.22],same:[.7,.68,.66],short:[.86,.16,.12],long:[.14,.4,.88],selected:[.72,.42,1]},ao={short:"\u9396\u77ED",long:"\u9396\u9577",same:"\u4E0D\u8B8A"};function xu(i){return Math.sign(i)*Math.round(Math.abs(i)*100)}function xn(i){let t=xu(i);return t<=-.03*100?"short":t>=.03*100?"long":"same"}function yu({selected:i,poseActive:t,measure:e,delta:n}){return i?_n.selected.slice():t?e?Zl(n):_n.same.slice():_n.natural.slice()}function Zl(i){let t=xn(i);if(t==="same")return _n.same.slice();let e=.35+.65*Math.min(1,Math.max(0,(Math.abs(i)-.03)/(.2-.03)));return _n.same.map((n,s)=>n+(_n[t][s]-n)*e)}function lo(i){let t=xu(i);return t===0?"0%":`${t>0?"+":"\u2212"}${Math.abs(t)}%`}var _x=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Kl(i){let t=i.length/3;if(!t)return{center:[0,0,0],radius:0};let e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let a=0;a<i.length;a++){let o=a%3;i[a]<e[o]&&(e[o]=i[a]),i[a]>n[o]&&(n[o]=i[a])}let s=e.map((a,o)=>(a+n[o])/2),r=0;for(let a=0;a<t;a++){let o=(i[a*3]-s[0])**2+(i[a*3+1]-s[1])**2+(i[a*3+2]-s[2])**2;o>r&&(r=o)}return{center:s,radius:Math.sqrt(r)}}function Jl(i,t){return 1-_x(.45,1,i/(t*1.15))}function xx(i,t){return t.some(e=>Math.hypot(i.center[0]-e.pos[0],i.center[1]-e.pos[1],i.center[2]-e.pos[2])<i.radius+e.radius*1.15)}function vu(i,t,e){if(!xx(t,e))return null;let n=i.length/3,s=new Float32Array(n),r=new Set,a=!1;for(let o=0;o<e.length;o++){let l=e[o],c=l.radius*1.15,[h,d,u]=l.pos;if(!(Math.hypot(t.center[0]-h,t.center[1]-d,t.center[2]-u)>=t.radius+c))for(let p=0;p<n;p++){let g=Math.hypot(i[p*3]-h,i[p*3+1]-d,i[p*3+2]-u);if(g>=c)continue;let _=Jl(g,l.radius);_<=s[p]||(s[p]=_,_>.05&&(r.add(o),a=!0))}}return a?{weights:s,hit:r}:null}function Mu(i,t,e){let n=null;for(let s of e){let r=t[s],a=Math.hypot(i.center[0]-r.pos[0],i.center[1]-r.pos[1],i.center[2]-r.pos[2]);(!n||a<n.d)&&(n={d:a,zone:r})}return n?.zone??null}function bu(i,t){let e=new ke;return e.setAttribute("position",new fe(i,3)),e.setIndex(new fe(t,1)),e.computeVertexNormals(),e}var Mx=new kr(.8);function Su(i){return i.userData.referredColor={value:new zt(1,1,1)},i.onBeforeCompile=t=>{t.uniforms.uReferredColor=i.userData.referredColor,t.vertexShader=`attribute float aReferred;
varying float vReferred;
${t.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
  vReferred = aReferred;`),t.fragmentShader=`uniform vec3 uReferredColor;
varying float vReferred;
${t.fragmentShader}`.replace("#include <color_fragment>",`#include <color_fragment>
  float referred = clamp(vReferred, 0.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, uReferredColor, referred * ${.9.toFixed(2)});`).replace("vec3 totalEmissiveRadiance = emissive;",`vec3 totalEmissiveRadiance = emissive + uReferredColor * clamp(vReferred, 0.0, 1.0) * ${.4.toFixed(2)};`)},i.customProgramCacheKey=()=>"referred",i}function Eu(i){let{meta:t}=i,e=hu(i.bin),n=new De,s=Su(new Ns({color:15327436,roughness:.75})),r=t.bones.map(l=>{let{positions:c,indices:h}=Xl(e,t.quant,l),d=new ae(bu(c,h),s);return d.matrixAutoUpdate=!1,n.add(d),{mesh:d,segment:l.segment}}),a=new De,o=t.parts.map(l=>{let{positions:c,indices:h,skin:d}=Xl(e,t.quant,l),u=bu(c.slice(),h);u.getAttribute("position").setUsage(Xh);let p=Su(new Ns({roughness:.55}));p.color.setRGB(..._n.natural,ce);let g=new ae(u,p);g.userData.partKey=l.key,g.frustumCulled=!1,n.add(g);let _=l.tps.map((m,f)=>{let E=new ae(Mx,new mn);return E.visible=!1,E.renderOrder=5,E.userData.pain={key:l.key,index:f},a.add(E),{marker:E,vertex:m}});return{info:l,mesh:g,rest:c,skin:d,prep:d?null:mu(c,l.a,l.b),segments:l.skinSegs??[l.segA,l.segB,...l.vias.map(m=>m.seg)],tps:_,delta:0,target:[0,0,0]}});return n.add(a),{group:n,bones:r,parts:o,boneMaterial:s,joints:t.joints}}var co=["scapProtraction","scapElevation","shoulderRotation","elbowFlexion","forearmPronation","wristFlexion","fingerFlexion","thumbFlexion","hipFlexion","kneeFlexion","ankleFlexion","footInversion"],bx=["headForward","thoracicFlexion","pelvicTilt","pelvicObliquity","trunkFlexion","trunkSideBend","trunkRotation"],yn=Object.freeze({...Object.fromEntries(co.flatMap(i=>[[`${i}.l`,0],[`${i}.r`,0]])),...Object.fromEntries(bx.map(i=>[i,0]))});function hn(i){let t={...yn};for(let[e,n]of Object.entries(i))co.includes(e)?t[`${e}.l`]=t[`${e}.r`]=n:t[e]=n;return t}var Ei={neutral:{label:"\u4E2D\u7ACB",params:yn},roundedShoulders:{label:"\u5713\u80A9",params:hn({scapProtraction:.8,shoulderRotation:.6})},forwardHead:{label:"\u982D\u524D\u50BE",params:hn({headForward:1})},kyphosis:{label:"\u80F8\u690E\u99DD\u80CC",params:hn({thoracicFlexion:1})},anteriorTilt:{label:"\u9AA8\u76C6\u524D\u50BE",params:hn({pelvicTilt:1})},posteriorTilt:{label:"\u9AA8\u76C6\u5F8C\u50BE",params:hn({pelvicTilt:-1})},unevenShoulders:{label:"\u9AD8\u4F4E\u80A9",params:hn({"scapElevation.r":.7,"scapElevation.l":-.3})},legLength:{label:"\u9577\u77ED\u8173",params:hn({pelvicObliquity:1})},phone:{label:"\u6ED1\u624B\u6A5F",params:hn({headForward:.8,scapProtraction:.6,shoulderRotation:.4,elbowFlexion:.7,forearmPronation:.8,wristFlexion:.3,fingerFlexion:.4,thumbFlexion:.5})},kneeHyperextension:{label:"\u819D\u904E\u4F38",params:hn({kneeFlexion:-1})},highHeels:{label:"\u7A7F\u9AD8\u8DDF\u978B",params:hn({ankleFlexion:-.67})},flatFoot:{label:"\u6241\u5E73\u8DB3",params:hn({footInversion:-1})}},zs=[{key:"headForward",group:"sagittal",sided:!1,label:"\u982D\u9838\u524D\u79FB",minLabel:"\u5F8C\u6536",maxLabel:"\u524D\u79FB"},{key:"thoracicFlexion",group:"sagittal",sided:!1,label:"\u80F8\u690E\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u99DD\u80CC"},{key:"pelvicTilt",group:"sagittal",sided:!1,label:"\u9AA8\u76C6\u5F8C\u50BE\uFF0F\u524D\u50BE",minLabel:"\u5F8C\u50BE",maxLabel:"\u524D\u50BE"},{key:"trunkFlexion",group:"sagittal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5F8C\u4EF0\uFF0F\u524D\u5F4E",minLabel:"\u5F8C\u4EF0",maxLabel:"\u524D\u5F4E"},{key:"pelvicObliquity",group:"frontal",sided:!1,label:"\u9AA8\u76C6\u5074\u50BE\uFF08\u9577\u77ED\u8173\uFF09",minLabel:"\u53F3\u5074\u4F4E",maxLabel:"\u5DE6\u5074\u4F4E"},{key:"trunkSideBend",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5074\u5F4E",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"trunkRotation",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u8F49\u5411",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"scapProtraction",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u524D\u4F38\uFF0F\u5F8C\u7E2E",minLabel:"\u5F8C\u7E2E",maxLabel:"\u524D\u4F38"},{key:"scapElevation",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u4E0A\u63D0\uFF0F\u4E0B\u58D3",minLabel:"\u4E0B\u58D3",maxLabel:"\u4E0A\u63D0"},{key:"shoulderRotation",group:"upperLimb",sided:!0,label:"\u80A9\u95DC\u7BC0\u5167\u65CB\uFF0F\u5916\u65CB",minLabel:"\u5916\u65CB",maxLabel:"\u5167\u65CB"},{key:"elbowFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8098\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"forearmPronation",group:"upperLimb",sided:!0,label:"\u524D\u81C2\u65CB\u5F8C\uFF0F\u65CB\u524D",minLabel:"\u65CB\u5F8C",maxLabel:"\u65CB\u524D"},{key:"wristFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8155\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"fingerFlexion",group:"upperLimb",sided:!0,label:"\u624B\u6307\u4F38\u76F4\uFF0F\u63E1\u62F3",minLabel:"\u904E\u4F38",maxLabel:"\u63E1\u62F3"},{key:"thumbFlexion",group:"upperLimb",sided:!0,label:"\u62C7\u6307\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"hipFlexion",group:"lowerLimb",sided:!0,label:"\u5927\u817F\u653E\u4E0B\uFF0F\u62AC\u8D77",minLabel:"\u5F80\u5F8C",maxLabel:"\u62AC\u8D77"},{key:"kneeFlexion",group:"lowerLimb",sided:!0,label:"\u819D\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"ankleFlexion",group:"lowerLimb",sided:!0,label:"\u8E1D\u8E60\u5C48\uFF0F\u80CC\u5C48",minLabel:"\u8E60\u5C48",maxLabel:"\u80CC\u5C48"},{key:"footInversion",group:"lowerLimb",sided:!0,label:"\u8DB3\u5916\u7FFB\uFF0F\u5167\u7FFB",minLabel:"\u5916\u7FFB",maxLabel:"\u5167\u7FFB"}],wu=[["sagittal","\u524D\u5F8C\u65B9\u5411"],["frontal","\u5DE6\u53F3\u65B9\u5411\uFF08\u5074\u5F4E\u3001\u8F49\u5411\uFF09"],["upperLimb","\u4E0A\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"],["lowerLimb","\u4E0B\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"]],Tu=[["both","\u5169\u5074\u4E00\u8D77"],["l","\u53EA\u8ABF\u5DE6\u5074"],["r","\u53EA\u8ABF\u53F3\u5074"]];function Au(i,t,e){return co.includes(t)?e==="both"?(i[`${t}.l`]+i[`${t}.r`])/2:i[`${t}.${e}`]:i[t]}function Ru(i,t,e,n){let s={...i};return co.includes(t)?n==="both"?s[`${t}.l`]=s[`${t}.r`]=e:s[`${t}.${n}`]=e:s[t]=e,s}function Cu(i,t,e){return Object.fromEntries(Object.keys(yn).map(n=>[n,i[n]+(t[n]-i[n])*e]))}function Pu(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}function Iu(i){return Math.abs(i)<.05?0:i}function ho(i){return Object.keys(yn).every(t=>Math.abs(i[t]??0)<.001)}var he={clavProtraction:20,clavElevation:15,scapTilt:12,humeralRotation:40,neckFlexion:25,headExtension:22,thoracicFlexion:30,pelvicTilt:18,pelvicObliquity:8,elbowFlexion:140,elbowExtension:10,pronation:150,supination:10,wristFlexion:70,wristExtension:60,hipFlexion:120,hipExtension:20,kneeFlexion:140,kneeExtension:15,dorsiflexion:20,plantarflexion:45,inversion:30,eversion:25},as={flexion:{hip:50,lumbar:40},extension:{hip:10,lumbar:20},sideBend:{lumbar:18,thoraxLow:6,thoraxMid:6,thoraxUp:0},rotation:{lumbar:10,thoraxLow:12,thoraxMid:13,thoraxUp:10}},Lu={fingerFlexion:{flex:[90,100,70],extend:[20,0,0]},thumbFlexion:{flex:[30,50,80],extend:[30,0,20]}},Jn=(i,t,e)=>Ve*(i>=0?t*i:e*i),Sx={thoraxLow:.3,thoraxMid:.4,thoraxUp:.3},Ex=["L5","L4","L3","L2","L1"],Ve=Math.PI/180,ls=new P(1,0,0),Du=new P(0,1,0),uo=new P(0,0,1),ue=i=>i.isVector3?i.clone():new P(i[0],i[1],i[2]);function me(i,t,e){let n=ue(i);return new Ut().makeTranslation(n.x,n.y,n.z).multiply(new Ut().makeRotationAxis(t.clone().normalize(),e)).multiply(new Ut().makeTranslation(-n.x,-n.y,-n.z))}function wx(i,t){let e=ue(i);return new Ut().makeTranslation(e.x,e.y,e.z).multiply(new Ut().makeRotationFromQuaternion(t)).multiply(new Ut().makeTranslation(-e.x,-e.y,-e.z))}function Uu(i,t){let e=ue(i),[n,s,r]=t.center,[a,o,l]=t.radii;return Math.hypot((e.x-n)/a,(e.y-s)/o,(e.z-r)/l)}function Tx(i,t,e){let n=ue(t.center);return i.clone().sub(n).multiplyScalar(e/Uu(i,t)).add(n)}function Ax(i,t,e){let n=ue(i.ac[t]).applyMatrix4(e),s=ue(i.scapAnchor[t]),r=s.clone().applyMatrix4(e),a=s.distanceTo(ue(i.ac[t])),o=Uu(s,i.thorax),l=r.clone();for(let h=0;h<8;h++)l=Tx(l,i.thorax,o),l=n.clone().add(l.sub(n).setLength(a));let c=new Ye().setFromUnitVectors(r.clone().sub(n).normalize(),l.clone().sub(n).normalize());return{glide:wx(n,c),ac:n,anchor:l}}function jl(i,t={}){let e={...yn,...t},n=new Map(du.map(R=>[R,new Ut])),s=i.pivots,r=he.pelvicTilt*Ve*e.pelvicTilt,a=he.pelvicObliquity*Ve*e.pelvicObliquity,o=e.trunkFlexion>=0?as.flexion:as.extension,l=o.hip*Ve*e.trunkFlexion,c=o.lumbar*Ve*e.trunkFlexion,h=Ve*e.trunkSideBend,d=Ve*e.trunkRotation,u=ue(i.hip.l).add(ue(i.hip.r)).multiplyScalar(.5),p=e.pelvicObliquity>=0?i.hip.r:i.hip.l,g=me(u,ls,r+l).multiply(me(p,uo,-a));n.set("pelvis",g);for(let R of["l","r"]){let A=ue(i.hip[R]).applyMatrix4(g).sub(ue(i.hip[R])),D=new Ut().makeTranslation(A.x,A.y,A.z).clone().multiply(me(i.hip[R],ls,-Jn(e[`hipFlexion.${R}`],he.hipFlexion,he.hipExtension))),{knee:S,ankle:v,subtalar:L}=i,Y=D.clone().multiply(me(S[R].pivot,ue(S[R].axis),Jn(e[`kneeFlexion.${R}`],he.kneeFlexion,he.kneeExtension))),F=Y.clone().multiply(me(v[R].pivot,ue(v[R].axis),Jn(e[`ankleFlexion.${R}`],he.dorsiflexion,he.plantarflexion))),V=F.clone().multiply(me(L[R].pivot,ue(L[R].axis),Jn(e[`footInversion.${R}`],he.inversion,he.eversion)));n.set(`femur.${R}`,D),n.set(`shank.${R}`,Y),n.set(`talus.${R}`,F),n.set(`foot.${R}`,V)}let _=(R,A,I)=>me(s[R],uo,-h*A).multiply(me(s[R],Du,d*I)),m=g;for(let R of Ex){let A=m.clone().multiply(me(s[R],ls,(c-r)/5)).multiply(me(s[R],uo,a/5)).multiply(_(R,as.sideBend.lumbar/5,as.rotation.lumbar/5));n.set(R,A),m=A}let f=he.thoracicFlexion*Ve*e.thoracicFlexion;for(let R of["thoraxLow","thoraxMid","thoraxUp"]){let A=m.clone().multiply(me(s[R],ls,f*Sx[R])).multiply(_(R,as.sideBend[R],as.rotation[R]));n.set(R,A),m=A}let E=m,M=E.clone().multiply(me(s.neckLow,ls,he.neckFlexion*Ve*e.headForward-f/2)),x=M.clone().multiply(me(s.head,ls,-he.headExtension*Ve*e.headForward-f/2));n.set("neckLow",M),n.set("neckUp",M.clone()),n.set("head",x);for(let R of["l","r"]){let A=R==="r"?1:-1,I=e[`scapProtraction.${R}`],D=me(i.sc[R],Du,A*he.clavProtraction*Ve*I).multiply(me(i.sc[R],uo,-A*he.clavElevation*Ve*e[`scapElevation.${R}`])),{glide:S,ac:v,anchor:L}=Ax(i,R,D),F=me(v,L.clone().sub(v),A*he.scapTilt*Ve*I).multiply(S).multiply(D),V=ue(i.gh[R]).sub(ue(i.elbow[R])),J=F.clone().multiply(me(i.gh[R],V,A*he.humeralRotation*Ve*e[`shoulderRotation.${R}`])),[Z,it]=i.elbowAxis[R],q=ue(it).sub(ue(Z)),ct=ue(Z).add(ue(it)).multiplyScalar(.5),ut=J.clone().multiply(me(ct,q,A*Jn(e[`elbowFlexion.${R}`],he.elbowFlexion,he.elbowExtension))),[bt,Rt]=i.forearmAxis[R],$t=ut.clone().multiply(me(bt,ue(Rt).sub(ue(bt)),-A*Jn(e[`forearmPronation.${R}`],he.pronation,he.supination))),j=$t.clone().multiply(me(i.wrist[R],q,A*Jn(e[`wristFlexion.${R}`],he.wristFlexion,he.wristExtension)));n.set(`clavicle.${R}`,E.clone().multiply(D)),n.set(`scapula.${R}`,E.clone().multiply(F)),n.set(`arm.${R}`,E.clone().multiply(J)),n.set(`ulna.${R}`,E.clone().multiply(ut)),n.set(`radius.${R}`,E.clone().multiply($t)),n.set(`hand.${R}`,E.clone().multiply(j));let rt=i.fingers[R],Mt=(C,H,k,$,st)=>{let lt=C;H.forEach((Ht,U)=>{lt=lt.clone().multiply(me(Ht.pivot,ue(Ht.axis),Jn(e[`${$}.${R}`],st.flex[U],st.extend[U]))),n.set(`${k[U]}.${R}`,E.clone().multiply(lt))})};for(let C of ro)Mt(j,rt[C],[`${C}Prox`,`${C}Mid`,`${C}Dist`],"fingerFlexion",Lu.fingerFlexion);Mt(j,rt.thumb,["thumbMeta","thumbProx","thumbDist"],"thumbFlexion",Lu.thumbFlexion)}return n}var Rx={superficial:1,middle:.6,deep:.3},Cx=15,Px=8,Ix=.1,Lx=.15,Dx=.3;function Nu(){return{layers:{superficial:!0,middle:!0,deep:!0,bones:!0},hidden:new Set,ghost:new Set,pulled:new Set,explode:0,selectedKey:null,lineParts:null,painMode:"off",selectedPain:null,overlay:!1,lookupMode:!1,lookup:null,postureZones:!1}}function Ql(i,t){if(!t.layers[i.layer]||t.hidden.has(i.key))return{visible:!1,opacity:0,glow:0,pickable:!1,selected:!1};let e=t.ghost.has(i.key)?Ix:1,n=0;return t.lineParts&&(t.lineParts.has(i.id)?n=.25:e=Math.min(e,Lx)),{visible:!0,opacity:e,glow:n,pickable:e>=Dx,selected:t.selectedKey===i.key}}function Fu(i,t,e){let n=i.centroid[0]-e[0],s=i.centroid[2]-e[1],r=Math.hypot(n,s)||1,a=t.explode*Cx*Rx[i.layer]+(t.pulled.has(i.key)?Px:0);return[n/r*a,0,s/r*a]}function Ou(i){i.hidden.clear(),i.ghost.clear()}function Bu(i){Object.assign(i.layers,{superficial:!0,middle:!0,deep:!0,bones:!0}),i.hidden.clear(),i.ghost.clear(),i.pulled.clear(),i.explode=0,i.selectedKey=null,i.selectedPain=null,i.lookup=null}function ku(i,t,e,n){if(t.painMode==="off"||!Ql(i,t).visible)return null;let s=e&&i.measure?xn(n):"same";return s!=="same"?s:t.selectedKey===i.key?"focus":t.painMode==="all"?"spot":null}var cs=i=>({ids:i,opp:!0}),Ux=i=>Array.isArray(i)?{ids:i,opp:!1}:i,On=[{id:"sbl",name:"\u6DFA\u80CC\u7DDA",stations:[["plantarAponeurosis"],["calcanealTendon"],["gastrocnemiusMed","gastrocnemiusLat"],["bicepsFemorisLong","semitendinosus","semimembranosus"],["thoracolumbarFascia","iliocostalisLumborum","longissimusThoracis","spinalisThoracis","iliocostalisThoracis"],["rectusCapPostMajor","rectusCapPostMinor","obliquusCapSup","obliquusCapInf"],["epicranialAponeurosis","occipitalis","frontalis"]]},{id:"sfl",name:"\u6DFA\u524D\u7DDA",stations:[["tibialisAnterior","extensorDigitorumLongus","extensorHallucisLongus"],["rectusFemoris","vastusLateralis","vastusMedialis","vastusIntermedius"],["rectusAbdominis"],["sternocleidomastoid"],["epicranialAponeurosis"]]},{id:"ll",name:"\u9AD4\u5074\u7DDA",stations:[["fibularisLongus","fibularisBrevis"],["iliotibialTract","tensorFasciaeLatae","gluteusMaximus"],["externalOblique","internalOblique"],["externalIntercostals","internalIntercostals"],["spleniusCapitis","sternocleidomastoid"]]},{id:"spl",name:"\u87BA\u65CB\u7DDA",stations:[["spleniusCapitis","spleniusColli"],cs(["rhomboidMajor","rhomboidMinor"]),cs(["serratusAnterior"]),cs(["externalOblique"]),["internalOblique"],["tensorFasciaeLatae","iliotibialTract"],["tibialisAnterior"],["fibularisLongus"],["bicepsFemorisLong"],["iliocostalisLumborum","longissimusThoracis"]]},{id:"sfal",name:"\u6DFA\u524D\u81C2\u7DDA",stations:[["pecMajorClav","pecMajorStern","pecMajorAbd","latissimus"],["medialIntermuscularSeptum"],["flexorCarpiRadialis","palmarisLongus","fcuHumeral","fcuUlnar","fdsHumeroUlnar","fdsRadial","flexorDigitorumProfundus"],["flexorRetinaculum"],["palmarAponeurosis"]]},{id:"dfal",name:"\u6DF1\u524D\u81C2\u7DDA",stations:[["pecMinor","clavipectoralFascia"],["bicepsShort","bicepsLong","coracobrachialis"],["abductorPollicisBrevis","flexorPollicisBrevisSup","flexorPollicisBrevisDeep","opponensPollicis"]]},{id:"sbal",name:"\u6DFA\u5F8C\u81C2\u7DDA",stations:[["trapUpper","trapMiddle","trapLower"],["deltoidAnt","deltoidMid","deltoidPost"],["lateralIntermuscularSeptum"],["extensorCarpiRadialisLongus","extensorCarpiRadialisBrevis","extensorDigitorum","extensorDigitiMinimi","ecuHumeral","ecuUlnar"],["extensorRetinaculum"]]},{id:"dbal",name:"\u6DF1\u5F8C\u81C2\u7DDA",stations:[["rhomboidMajor","rhomboidMinor","levatorScapulae"],["supraspinatus","infraspinatus","teresMinor","subscapularis"],["tricepsLong","tricepsLat","tricepsMed"],["abductorDigitiMinimi","flexorDigitiMinimi","opponensDigitiMinimi"]]},{id:"bfl",name:"\u5F8C\u529F\u80FD\u7DDA",stations:[["latissimus"],["thoracolumbarFascia"],cs(["gluteusMaximus"]),cs(["vastusLateralis"])]},{id:"ffl",name:"\u524D\u529F\u80FD\u7DDA",stations:[["pecMajorAbd"],["rectusAbdominis"],cs(["adductorLongus"])]},{id:"ifl",name:"\u540C\u5074\u529F\u80FD\u7DDA",stations:[["latissimus"],["externalOblique"],["sartorius"]]},{id:"dfl",name:"\u6DF1\u524D\u7DDA",stations:[["tibialisPosterior","flexorDigitorumLongus","flexorHallucisLongus"],["popliteus"],["adductorMagnus","adductorMinimus","adductorBrevis","adductorLongus","pectineus"],["pubococcygeus","iliococcygeus","coccygeus"],["psoasMajor","iliacus","quadratusLumborum"],["diaphragm"],["longusColli","longusCapitis","scalenusAnterior","scalenusMedius","scalenusPosterior"],["sternohyoid","omohyoid","thyrohyoid","digastricPost","digastricAnt","mylohyoid","geniohyoid","stylohyoid"]]}].map(i=>({...i,stations:i.stations.map(Ux)}));function zu(i){return i.length?new Set(i.flatMap(t=>[...Nx(t)??[]])):null}function Nx(i){let t=On.find(e=>e.id===i);return t?new Set(t.stations.flatMap(e=>e.ids)):null}var tc=[.36,.6,.96],Gu=1.5,Fx=.25,Ox=.6,Bx={l:"r",r:"l"},Hu=i=>i.reduce((t,e)=>[t[0]+e[0]/i.length,t[1]+e[1]/i.length,t[2]+e[2]/i.length],[0,0,0]),ec=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function kx(i,t,e,n=Gu){let s=new P(e[0]-t[0],e[1]-t[1],e[2]-t[2]);s.lengthSq()<1e-8&&s.set(0,1,0);let r=s.normalize(),a=new P().crossVectors(r,Math.abs(r.y)<.9?new P(0,1,0):new P(1,0,0)).normalize(),o=new P().crossVectors(r,a),l=new Float32Array(i.length),c=new P;for(let h=0;h<i.length;h+=3)c.set(i[h]-t[0],i[h+1]-t[1],i[h+2]-t[2]),l[h]=c.dot(r)/n,l[h+1]=c.dot(a)/n,l[h+2]=c.dot(o)/n;return l}function zx(i,t,e=Gu){let n=new Float32Array(i.length/2*3);for(let s=0;s<i.length/2;s++)n[s*3]=i[s*2]*t/e,n[s*3+1]=i[s*2+1]*4,n[s*3+2]=.5;return n}var Hx=`
attribute vec3 netCoord;
uniform float uLift;
varying vec3 vNet;
void main() {
  vNet = netCoord;
  vec3 p = position + normalize(normal) * uLift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,Vx=`
uniform vec3 uColor;
varying vec3 vNet;
void main() {
  vec3 w = max(fwidth(vNet), vec3(1e-4));
  vec3 gap = abs(fract(vNet - 0.5) - 0.5) / w;
  vec3 lines = (1.0 - clamp(gap - 0.5, 0.0, 1.0)) * (1.0 - smoothstep(0.25, 0.5, w));
  float line = max(max(lines.x, lines.y), lines.z);
  gl_FragColor = vec4(uColor, mix(0.3, 0.9, line));
}`;function Vu(i,t){return new ze({uniforms:{uColor:{value:new P(...t)},uLift:{value:i}},vertexShader:Hx,fragmentShader:Vx,transparent:!0,depthWrite:!1})}function Wu(i,t){let e=[i].flat().map(h=>On.find(d=>d.id===h)),n=[],s=[];for(let h of e)for(let d of["l","r"]){let u=[];for(let p of h.stations){let g=p.opp?Bx[d]:d,_=p.ids.map(m=>t.find(f=>f.info.id===m&&(f.info.side===g||f.info.side==="m")));u.push(_);for(let m of _){if(n.some(x=>x.part===m))continue;let f=m.mesh.geometry;f.getAttribute("netCoord")||f.setAttribute("netCoord",new fe(kx(m.rest,m.info.a,m.info.b),3));let E=Vu(Fx,tc),M=new ae(f,E);M.renderOrder=5,m.mesh.add(M),n.push({part:m,mesh:M,material:E})}}s.push(u)}let r=new De,a=Vu(0,tc);function o(){for(let h of r.children)h.geometry.dispose();r.clear()}function l(h,d,u){for(let{part:p,material:g}of n){let _=u?p.info.measure?Zl(p.delta):_n.same:tc;g.uniforms.uColor.value.set(..._)}o();for(let p of s){let g=null;for(let _ of p){let m=[],f=[];for(let M of _){let x=d(M),R=oo(M.info,h).map(A=>[A[0]+x[0],A[1]+x[1],A[2]+x[2]]);m.push(R[0]),f.push(R[R.length-1])}let E=[Hu(m),Hu(f)];if(g){let M=null;for(let R of g)for(let A of E)(!M||ec(R,A)<ec(M[0],M[1]))&&(M=[R,A]);let x=ec(M[0],M[1]);if(x>.01){let R=new Us(new P(...M[0]),new P(...M[1])),A=new zr(R,8,Ox,8,!1);A.setAttribute("netCoord",new fe(zx(A.getAttribute("uv").array,x),3));let I=new ae(A,a);I.renderOrder=5,r.add(I)}}g=E}}}function c(){for(let{part:h,mesh:d,material:u}of n)h.mesh.remove(d),u.dispose();o(),a.dispose()}return{group:r,shells:n,update:l,dispose:c}}var Xu=new Be,fo=new P,hs=class extends Xr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pe(t,3)),this.setAttribute("uv",new pe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Mi(e,6,1);return this.setAttribute("instanceStart",new gn(n,3,0)),this.setAttribute("instanceEnd",new gn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Mi(e,6,1);return this.setAttribute("instanceColorStart",new gn(n,3,0)),this.setAttribute("instanceColorEnd",new gn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Hr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Xu.setFromBufferAttribute(e),this.boundingBox.union(Xu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fo)),fo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _t(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Le.line={uniforms:Qr.merge([ht.common,ht.fog,ht.line]),vertexShader:`
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
		`};var jn=class extends ze{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Qr.clone(Le.line.uniforms),vertexShader:Le.line.vertexShader,fragmentShader:Le.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var nc=new te,qu=new P,$u=new P,be=new te,Se=new te,vn=new te,ic=new P,sc=new Ut,Ee=new Yr,Yu=new P,po=new Be,mo=new an,Mn=new te,bn,wi;function Zu(i,t,e){return Mn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Mn.multiplyScalar(1/Mn.w),Mn.x=wi/e.width,Mn.y=wi/e.height,Mn.applyMatrix4(i.projectionMatrixInverse),Mn.multiplyScalar(1/Mn.w),Math.abs(Math.max(Mn.x,Mn.y))}function Gx(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ee.start.fromBufferAttribute(s,o),Ee.end.fromBufferAttribute(r,o),Ee.applyMatrix4(e);let c=new P,h=new P;bn.distanceSqToSegment(Ee.start,Ee.end,h,c),h.distanceTo(c)<wi*.5&&t.push({point:h,pointOnLine:c,distance:bn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Wx(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),d=-t.near;bn.at(1,vn),vn.w=1,vn.applyMatrix4(t.matrixWorldInverse),vn.applyMatrix4(n),vn.multiplyScalar(1/vn.w),vn.x*=r.x/2,vn.y*=r.y/2,vn.z=0,ic.copy(vn),sc.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,p=h;u<p;u++){if(be.fromBufferAttribute(l,u),Se.fromBufferAttribute(c,u),be.w=1,Se.w=1,be.applyMatrix4(sc),Se.applyMatrix4(sc),be.z>d&&Se.z>d)continue;if(be.z>d){let M=be.z-Se.z,x=(be.z-d)/M;be.lerp(Se,x)}else if(Se.z>d){let M=Se.z-be.z,x=(Se.z-d)/M;Se.lerp(be,x)}be.applyMatrix4(n),Se.applyMatrix4(n),be.multiplyScalar(1/be.w),Se.multiplyScalar(1/Se.w),be.x*=r.x/2,be.y*=r.y/2,Se.x*=r.x/2,Se.y*=r.y/2,Ee.start.copy(be),Ee.start.z=0,Ee.end.copy(Se),Ee.end.z=0;let _=Ee.closestPointToPointParameter(ic,!0);Ee.at(_,Yu);let m=jr.lerp(be.z,Se.z,_),f=m>=-1&&m<=1,E=ic.distanceTo(Yu)<wi*.5;if(f&&E){Ee.start.fromBufferAttribute(l,u),Ee.end.fromBufferAttribute(c,u),Ee.start.applyMatrix4(a),Ee.end.applyMatrix4(a);let M=new P,x=new P;bn.distanceSqToSegment(Ee.start,Ee.end,x,M),e.push({point:x,pointOnLine:M,distance:bn.origin.distanceTo(x),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var go=class extends ae{constructor(t=new hs,e=new jn({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)qu.fromBufferAttribute(e,a),$u.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+qu.distanceTo($u);let r=new Mi(s,2,1);return t.setAttribute("instanceDistanceStart",new gn(r,1,0)),t.setAttribute("instanceDistanceEnd",new gn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;bn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;wi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),mo.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=wi*.5;else{let d=Math.max(s.near,mo.distanceToPoint(bn.origin));c=Zu(s,d,l.resolution)}if(mo.radius+=c,bn.intersectsSphere(mo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),po.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=wi*.5;else{let d=Math.max(s.near,po.distanceToPoint(bn.origin));h=Zu(s,d,l.resolution)}po.expandByScalar(h),bn.intersectsBox(po)!==!1&&(n?Gx(this,e):Wx(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(nc),this.material.uniforms.resolution.value.set(nc.z,nc.w))}};var Ti=class extends hs{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var _o=class extends go{constructor(t=new Ti,e=new jn({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var w=(i,t,e,n,s,r,a,o="")=>({code:i,name:t,seg:e,hub:n,p:[s,r,a],note:o}),Xx={head:{point:[0,162,-1.5]},neck:{a:[0,143.5,-3],b:[0,153.5,-2]},chest:{a:[0,119,-4],b:[0,142,-4]},belly:{a:[0,97,-3],b:[0,119,-3]},pelvis:{a:[0,80,-3],b:[0,97,-3]},arm:{a:[16.99,138.34,-2.63],b:[20.6,109.08,-3.21]},forearm:{a:[20.6,109.08,-3.21],b:[26.42,85.08,1.98]},hand:{a:[26.42,85.08,1.98],b:[27.7,77.3,4]},thigh:{a:[8.39,86.03,-.5],b:[7.37,45.79,-3.28]},shank:{a:[7.37,45.79,-3.28],b:[7.43,7.41,-4.55]},foot:{a:[7.43,7.41,-4.55],b:[9.8,2,10.5]},none:null},qx={head:.6,neck:1.6,chest:1.4,belly:1.6,pelvis:1.8,arm:1.6,forearm:1,hand:.5,thigh:2,shank:1.2,foot:.5,none:0},Hs=[{id:"lu",code:"LU",name:"\u624B\u592A\u9670\u80BA\u7D93",short:"\u80BA\u7D93",organ:"\u80BA",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u62C7\u6307\uFF09",color:[.88,.92,.92],points:[w("LU1","\u4E2D\u5E9C","thoraxUp","chest",12,135.5,7.2,"\u7B2C\u4E00\u808B\u9593\u3001\u9396\u9AA8\u4E0B\u7AA9\u5916\u4E0B\u65B9"),w("LU2","\u96F2\u9580","clavicle","chest",13.2,139.2,4.6,"\u9396\u9AA8\u4E0B\u7AA9\u51F9\u9677\u8655"),w("LU3","\u5929\u5E9C","arm","arm",17.4,126,2,"\u4E0A\u81C2\u5167\u5074\u3001\u80B1\u4E8C\u982D\u808C\u6A48\u5074\u7DE3"),w("LU4","\u4FE0\u767D","arm","arm",18.4,120,2.4,"\u5929\u5E9C\u4E0B 1 \u5BF8"),w("LU5","\u5C3A\u6FA4","arm","arm",22.6,110.5,2.2,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u6A48\u5074"),w("LU6","\u5B54\u6700","radius","forearm",25,99,2.4,"\u8155\u6A6B\u7D0B\u4E0A 7 \u5BF8\u3001\u6A48\u9AA8\u5167\u7DE3"),w("LU7","\u5217\u7F3A","radius","forearm",27.4,88.2,2.6,"\u6A48\u9AA8\u8396\u7A81\u4E0A\u65B9\u3001\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8"),w("LU8","\u7D93\u6E20","radius","forearm",28,86.6,2.8,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8\u3001\u6A48\u52D5\u8108\u5916\u5074"),w("LU9","\u592A\u6DF5","radius","forearm",28.3,85.3,3,"\u8155\u6A6B\u7D0B\u6A48\u5074\u3001\u6A48\u52D5\u8108\u640F\u52D5\u8655"),w("LU10","\u9B5A\u969B","thumbMeta","hand",30.2,81.4,5,"\u7B2C\u4E00\u638C\u9AA8\u6A48\u5074\u4E2D\u9EDE\u3001\u8D64\u767D\u8089\u969B"),w("LU11","\u5C11\u5546","thumbDist","none",33.3,77.3,6.9,"\u62C7\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"li",code:"LI",name:"\u624B\u967D\u660E\u5927\u8178\u7D93",short:"\u5927\u8178\u7D93",organ:"\u5927\u8178",group:"handYang",flow:"\u624B\uFF08\u98DF\u6307\uFF09\u2192 \u982D\u9762",color:[.97,.52,.12],points:[w("LI1","\u5546\u967D","indexDist","none",32.1,71.3,8.4,"\u98DF\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1"),w("LI2","\u4E8C\u9593","indexProx","none",31.4,74.2,6.2,"\u98DF\u6307\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u524D\u65B9"),w("LI3","\u4E09\u9593","hand","hand",30.4,77.4,4.6,"\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u5F8C\u65B9"),w("LI4","\u5408\u8C37","hand","hand",29.3,80.6,2.4,"\u7B2C\u4E00\u3001\u4E8C\u638C\u9AA8\u4E4B\u9593\uFF08\u864E\u53E3\uFF09"),w("LI5","\u967D\u8C3F","hand","hand",29,84.3,1.4,"\u8155\u80CC\u6A48\u5074\u3001\u9F3B\u7159\u58FA\u51F9\u9677\u4E2D"),w("LI6","\u504F\u6B77","radius","forearm",28,91,.6,"\u967D\u8C3F\u4E0A 3 \u5BF8"),w("LI7","\u6EAB\u6E9C","radius","forearm",27.2,95,.1,"\u967D\u8C3F\u4E0A 5 \u5BF8"),w("LI8","\u4E0B\u5EC9","radius","forearm",26.2,102.5,-.2,"\u66F2\u6C60\u4E0B 4 \u5BF8"),w("LI9","\u4E0A\u5EC9","radius","forearm",26,104.5,-.2,"\u66F2\u6C60\u4E0B 3 \u5BF8"),w("LI10","\u624B\u4E09\u91CC","radius","forearm",25.6,106.5,-.1,"\u66F2\u6C60\u4E0B 2 \u5BF8"),w("LI11","\u66F2\u6C60","arm","arm",24.8,110.5,.5,"\u5C48\u8098\u6642\u8098\u6A6B\u7D0B\u5916\u5074\u7AEF"),w("LI12","\u8098\u9ACE","arm","arm",25,113,-2,"\u80B1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u7DE3"),w("LI13","\u624B\u4E94\u91CC","arm","arm",23,119,-2,"\u66F2\u6C60\u4E0A 3 \u5BF8"),w("LI14","\u81C2\u81D1","arm","arm",21,125,-2,"\u4E09\u89D2\u808C\u6B62\u9EDE\u524D\u7DE3"),w("LI15","\u80A9\u9AC3","scapula","arm",17.8,139.8,.2,"\u80A9\u5CF0\u524D\u4E0B\u65B9\u51F9\u9677"),w("LI16","\u5DE8\u9AA8","scapula","chest",12,142.6,-3.4,"\u9396\u9AA8\u80A9\u5CF0\u7AEF\u8207\u80A9\u80DB\u5CA1\u4E4B\u9593"),w("LI17","\u5929\u9F0E","neckLow","neck",4.6,146.2,.8,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),w("LI18","\u6276\u7A81","neckUp","neck",4.6,150.2,2.4,"\u5589\u7D50\u65C1\u3001\u80F8\u9396\u4E73\u7A81\u808C\u4E2D"),w("LI19","\u53E3\u79BE\u9ACE","head","head",1,155.2,9.2,"\u9F3B\u5B54\u5916\u7DE3\u76F4\u4E0B\u3001\u6C34\u6E9D\u65C1"),w("LI20","\u8FCE\u9999","head","head",1.6,156.4,9.2,"\u9F3B\u7FFC\u5916\u7DE3\u4E2D\u9EDE\u65C1")]},{id:"st",code:"ST",name:"\u8DB3\u967D\u660E\u80C3\u7D93",short:"\u80C3\u7D93",organ:"\u80C3",group:"footYang",flow:"\u982D\u9762 \u2192 \u8DB3\uFF08\u7B2C\u4E8C\u8DBE\uFF09",color:[.88,.82,.22],points:[w("ST1","\u627F\u6CE3","head","head",3,157.4,7.6,"\u77B3\u5B54\u76F4\u4E0B\u3001\u773C\u7736\u4E0B\u7DE3"),w("ST2","\u56DB\u767D","head","head",3,156.4,8,"\u627F\u6CE3\u76F4\u4E0B\u3001\u7736\u4E0B\u5B54\u8655"),w("ST4","\u5730\u5009","head","head",2,153.6,8.4,"\u53E3\u89D2\u65C1"),w("ST5","\u5927\u8FCE","head","head",3.8,151.4,6.4,"\u4E0B\u9837\u89D2\u524D\u65B9\u3001\u54AC\u808C\u524D\u7DE3"),w("ST6","\u9830\u8ECA","head","head",5.2,152.2,3,"\u4E0B\u9837\u89D2\u524D\u4E0A\u65B9\u3001\u54AC\u808C\u9686\u8D77\u8655"),w("ST7","\u4E0B\u95DC","head","head",6,156.4,3.4,"\u9874\u5F13\u4E0B\u7DE3\u51F9\u9677"),w("ST8","\u982D\u7DAD","head","head",5,166.4,4.8,"\u524D\u9AEE\u969B\u984D\u89D2"),w("ST9","\u4EBA\u8FCE","neckUp","neck",2.8,150.4,4.4,"\u5589\u7D50\u65C1\u3001\u9838\u52D5\u8108\u640F\u52D5\u8655"),w("ST10","\u6C34\u7A81","neckLow","neck",3,147.4,4,"\u4EBA\u8FCE\u8207\u6C23\u820D\u4E4B\u9593"),w("ST11","\u6C23\u820D","neckLow","neck",2.6,143.6,4.4,"\u9396\u9AA8\u5167\u5074\u7AEF\u4E0A\u7DE3"),w("ST12","\u7F3A\u76C6","clavicle","chest",8,141.4,2.6,"\u9396\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),w("ST13","\u6C23\u6236","thoraxUp","chest",8,138.4,5.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),w("ST15","\u5C4B\u7FF3","thoraxUp","chest",8.6,133.4,8.4,"\u7B2C\u4E8C\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),w("ST17","\u4E73\u4E2D","thoraxMid","chest",9.6,130,10.8,"\u4E73\u982D\u4E2D\u592E\uFF08\u53EA\u4F5C\u5B9A\u4F4D\uFF0C\u4E0D\u91DD\u4E0D\u7078\uFF09"),w("ST18","\u4E73\u6839","thoraxMid","chest",9,126.4,10,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E94\u808B\u9593"),w("ST21","\u6881\u9580","L1","belly",4,111,10,"\u81CD\u4E0A 4 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),w("ST25","\u5929\u6A1E","L3","belly",4,103,10.2,"\u81CD\u65C1 2 \u5BF8"),w("ST28","\u6C34\u9053","pelvis","pelvis",4,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),w("ST30","\u6C23\u885D","pelvis","pelvis",4,92.6,7,"\u8179\u80A1\u6E9D\u3001\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u65C1 2 \u5BF8"),w("ST31","\u9AC0\u95DC","femur","thigh",9.6,86,4,"\u5927\u817F\u524D\u9762\u3001\u9AC2\u524D\u4E0A\u68D8\u8207\u9AD5\u9AA8\u5916\u7DE3\u9023\u7DDA\u4E0A"),w("ST32","\u4F0F\u5154","femur","thigh",9.6,58,3,"\u9AD5\u5E95\u4E0A 6 \u5BF8"),w("ST34","\u6881\u4E18","femur","thigh",9.6,50,2,"\u9AD5\u5E95\u4E0A 2 \u5BF8"),w("ST35","\u72A2\u9F3B","shank","shank",10.4,42.6,1.6,"\u9AD5\u97CC\u5E36\u5916\u5074\u51F9\u9677\uFF08\u5916\u819D\u773C\uFF09"),w("ST36","\u8DB3\u4E09\u91CC","shank","shank",9.6,36.6,1.6,"\u72A2\u9F3B\u4E0B 3 \u5BF8\u3001\u811B\u9AA8\u524D\u5D74\u5916\u4E00\u6A6B\u6307"),w("ST37","\u4E0A\u5DE8\u865B","shank","shank",9.6,30.6,1.2,"\u72A2\u9F3B\u4E0B 6 \u5BF8"),w("ST38","\u689D\u53E3","shank","shank",9.6,26.6,1,"\u72A2\u9F3B\u4E0B 8 \u5BF8"),w("ST39","\u4E0B\u5DE8\u865B","shank","shank",9.6,24.6,1,"\u72A2\u9F3B\u4E0B 9 \u5BF8"),w("ST40","\u8C50\u9686","shank","shank",11,26.6,-.2,"\u5916\u8E1D\u5C16\u4E0A 8 \u5BF8\u3001\u689D\u53E3\u5916\u4E00\u6A6B\u6307"),w("ST41","\u89E3\u8C3F","talus","foot",7.6,8.6,.6,"\u8E1D\u95DC\u7BC0\u524D\u6A6B\u7D0B\u4E2D\u592E\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("ST42","\u885D\u967D","foot","foot",8.6,5.4,4,"\u8DB3\u80CC\u6700\u9AD8\u8655\u3001\u52D5\u8108\u640F\u52D5\u8655"),w("ST43","\u9677\u8C37","foot","foot",9.3,4.2,6.2,"\u7B2C\u4E8C\u3001\u4E09\u8E60\u9AA8\u4E4B\u9593"),w("ST44","\u5167\u5EAD","foot","foot",10,2.4,8.6,"\u7B2C\u4E8C\u3001\u4E09\u8DBE\u7E2B\u7AEF"),w("ST45","\u53B2\u514C","foot","none",10.8,1.4,13.3,"\u7B2C\u4E8C\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"sp",code:"SP",name:"\u8DB3\u592A\u9670\u813E\u7D93",short:"\u813E\u7D93",organ:"\u813E",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u80F8\u8179",color:[.7,.45,.2],points:[w("SP1","\u96B1\u767D","foot","none",6.6,1.8,12.6,"\u8DB3\u5927\u8DBE\u5167\u5074\u8DBE\u7532\u89D2\u65C1"),w("SP2","\u5927\u90FD","foot","foot",5.9,2.4,9.8,"\u8DB3\u5927\u8DBE\u672C\u7BC0\u524D\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("SP3","\u592A\u767D","foot","foot",5.6,3,6.4,"\u7B2C\u4E00\u8E60\u9AA8\u5C0F\u982D\u5F8C\u4E0B\u65B9"),w("SP4","\u516C\u5B6B","foot","foot",5.6,3.6,3.4,"\u7B2C\u4E00\u8E60\u9AA8\u57FA\u5E95\u524D\u4E0B\u65B9"),w("SP5","\u5546\u4E18","foot","foot",4.9,6,-.4,"\u5167\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),w("SP6","\u4E09\u9670\u4EA4","shank","shank",3.9,14,-3,"\u5167\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u7DE3\u5F8C\u65B9"),w("SP7","\u6F0F\u8C37","shank","shank",4.2,20,-3,"\u5167\u8E1D\u5C16\u4E0A 6 \u5BF8"),w("SP8","\u5730\u6A5F","shank","shank",4.4,31,-2.4,"\u9670\u9675\u6CC9\u4E0B 3 \u5BF8"),w("SP9","\u9670\u9675\u6CC9","shank","shank",4.4,40.4,-1.4,"\u811B\u9AA8\u5167\u5074\u9AC1\u4E0B\u7DE3\u51F9\u9677"),w("SP10","\u8840\u6D77","femur","thigh",6,50,1.6,"\u9AD5\u5E95\u5167\u5074\u7AEF\u4E0A 2 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u9686\u8D77"),w("SP11","\u7B95\u9580","femur","thigh",5.6,62,1,"\u8840\u6D77\u8207\u885D\u9580\u9023\u7DDA\u4E0A"),w(null,null,"femur","thigh",5.6,77,3.5),w("SP12","\u885D\u9580","pelvis","pelvis",5.6,91.4,6,"\u8179\u80A1\u6E9D\u5916\u5074\u3001\u80A1\u52D5\u8108\u5916\u5074"),w("SP15","\u5927\u6A6B","L3","belly",8,103,8.6,"\u81CD\u65C1 4 \u5BF8"),w("SP17","\u98DF\u7AC7","thoraxMid","chest",11,121,7,"\u7B2C\u4E94\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 6 \u5BF8"),w("SP21","\u5927\u5305","thoraxMid","chest",13,122,0,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u7B2C\u516D\u808B\u9593")]},{id:"ht",code:"HT",name:"\u624B\u5C11\u9670\u5FC3\u7D93",short:"\u5FC3\u7D93",organ:"\u5FC3",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u5C0F\u6307\uFF09",color:[.78,.16,.26],points:[w("HT1","\u6975\u6CC9","arm","arm",14.4,133,-1,"\u814B\u7AA9\u9802\u9EDE\u3001\u814B\u52D5\u8108\u640F\u52D5\u8655"),w("HT2","\u9752\u9748","arm","arm",17,117,0,"\u8098\u6A6B\u7D0B\u4E0A 3 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5167\u5074\u6E9D"),w("HT3","\u5C11\u6D77","arm","arm",18.2,110.5,1.4,"\u8098\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u80B1\u9AA8\u5167\u4E0A\u9AC1\u524D\u65B9"),w("HT4","\u9748\u9053","ulna","forearm",23,88,3.2,"\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),w("HT5","\u901A\u91CC","ulna","forearm",23.3,87,3.3,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8"),w("HT6","\u9670\u90C4","ulna","forearm",23.6,86,3.4,"\u8155\u6A6B\u7D0B\u4E0A 0.5 \u5BF8"),w("HT7","\u795E\u9580","hand","hand",24,85,3.6,"\u8155\u6A6B\u7D0B\u5C3A\u5074\u7AEF\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),w("HT8","\u5C11\u5E9C","hand","hand",25,79,5,"\u638C\u5FC3\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593"),w("HT9","\u5C11\u885D","littleDist","none",23.4,72.5,8.2,"\u5C0F\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"si",code:"SI",name:"\u624B\u592A\u967D\u5C0F\u8178\u7D93",short:"\u5C0F\u8178\u7D93",organ:"\u5C0F\u8178",group:"handYang",flow:"\u624B\uFF08\u5C0F\u6307\uFF09\u2192 \u982D\u9762",color:[.95,.52,.45],points:[w("SI1","\u5C11\u6FA4","littleDist","none",22.6,72.6,8,"\u5C0F\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),w("SI2","\u524D\u8C37","littleProx","none",22.4,75.6,5,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u524D\u65B9"),w("SI3","\u5F8C\u8C3F","hand","hand",22.9,78.6,3,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u5F8C\u65B9\u3001\u63E1\u62F3\u6642\u6A6B\u7D0B\u982D"),w("SI4","\u8155\u9AA8","hand","hand",23.4,82.4,1.8,"\u7B2C\u4E94\u638C\u9AA8\u57FA\u5E95\u8207\u9264\u9AA8\u4E4B\u9593"),w("SI5","\u967D\u8C37","hand","hand",23.6,84.8,.8,"\u8155\u80CC\u5C3A\u5074\u3001\u5C3A\u9AA8\u8396\u7A81\u8207\u4E09\u89D2\u9AA8\u4E4B\u9593"),w("SI6","\u990A\u8001","ulna","forearm",23,87,-.6,"\u5C3A\u9AA8\u8396\u7A81\u6A48\u5074\u9AA8\u7E2B\u4E2D"),w("SI7","\u652F\u6B63","ulna","forearm",22.6,95,-1.4,"\u8155\u80CC\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5C3A\u9AA8\u80CC\u5074"),w("SI8","\u5C0F\u6D77","ulna","forearm",19.6,110,-5,"\u5C3A\u9AA8\u9DF9\u5634\u8207\u80B1\u9AA8\u5167\u4E0A\u9AC1\u4E4B\u9593"),w("SI9","\u80A9\u8C9E","scapula","arm",15.2,132,-5.6,"\u814B\u5F8C\u7D0B\u982D\u4E0A 1 \u5BF8"),w("SI10","\u81D1\u4FDE","scapula","chest",15,137,-6,"\u80A9\u80DB\u5CA1\u4E0B\u7DE3\u3001\u814B\u5F8C\u7D0B\u982D\u76F4\u4E0A"),w("SI11","\u5929\u5B97","scapula","chest",11,133,-7.2,"\u80A9\u80DB\u5CA1\u4E0B\u7AA9\u4E2D\u592E"),w("SI12","\u79C9\u98A8","scapula","chest",10.5,139.4,-6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u4E2D\u592E"),w("SI13","\u66F2\u57A3","scapula","chest",7.6,139.4,-6.6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u5167\u5074\u7AEF"),w("SI14","\u80A9\u5916\u4FDE","thoraxUp","chest",6,143.6,-7,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 3 \u5BF8"),w("SI15","\u80A9\u4E2D\u4FDE","neckLow","neck",4.2,145.6,-6.4,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 2 \u5BF8"),w("SI16","\u5929\u7A97","neckUp","neck",5,150,.2,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3\u3001\u5589\u7D50\u65C1"),w("SI17","\u5929\u5BB9","head","head",5,152.2,1.6,"\u4E0B\u9837\u89D2\u5F8C\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u524D\u7DE3"),w("SI18","\u9874\u9ACE","head","head",5,157,5.4,"\u5916\u773C\u89D2\u76F4\u4E0B\u3001\u9874\u9AA8\u4E0B\u7DE3"),w("SI19","\u807D\u5BAE","head","head",6.6,157.6,2.2,"\u8033\u5C4F\u524D\u3001\u5F35\u53E3\u51F9\u9677\u8655")]},{id:"bl",code:"BL",name:"\u8DB3\u592A\u967D\u8180\u80F1\u7D93",short:"\u8180\u80F1\u7D93",organ:"\u8180\u80F1",group:"footYang",flow:"\u982D\u9762 \u2192 \u80CC \u2192 \u8DB3\uFF08\u5C0F\u8DBE\uFF09",color:[.3,.7,.98],points:[w("BL1","\u775B\u660E","head","head",1.4,158.4,7.4,"\u5167\u773C\u89D2\u7A0D\u4E0A\u65B9\u51F9\u9677"),w("BL2","\u6522\u7AF9","head","head",1.9,160.4,7.9,"\u7709\u982D\u51F9\u9677\u4E2D"),w(null,null,"head","head",2.2,164.5,6.5),w("BL7","\u901A\u5929","head","head",2.2,169.6,.8,"\u524D\u9AEE\u969B\u6B63\u4E2D\u76F4\u4E0A 4 \u5BF8\u3001\u65C1\u958B 1.5 \u5BF8"),w(null,null,"head","head",2.6,166,-6),w(null,null,"head","head",2.6,159.5,-9.3),w("BL10","\u5929\u67F1","neckUp","neck",2.6,153.2,-7.4,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u65C1\u958B 1.3 \u5BF8\u3001\u659C\u65B9\u808C\u5916\u7DE3"),w("BL11","\u5927\u677C","thoraxUp","chest",3,143.4,-8,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL13","\u80BA\u4FDE","thoraxUp","chest",3,139.4,-9.4,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL15","\u5FC3\u4FDE","thoraxMid","chest",3,134.4,-9.4,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL17","\u8188\u4FDE","thoraxMid","chest",3,128,-9.4,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL18","\u809D\u4FDE","thoraxLow","chest",3,122.4,-9.2,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL20","\u813E\u4FDE","thoraxLow","belly",3,116.4,-8.2,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL21","\u80C3\u4FDE","thoraxLow","belly",3,113.4,-7.6,"\u7B2C\u5341\u4E8C\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL23","\u814E\u4FDE","L2","belly",3,107,-6.8,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL25","\u5927\u8178\u4FDE","L4","belly",3,100,-6.6,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL27","\u5C0F\u8178\u4FDE","pelvis","pelvis",2.6,95.6,-7.6,"\u7B2C\u4E00\u85A6\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),w("BL32","\u6B21\u9ACE","pelvis","pelvis",2.2,92,-8.2,"\u7B2C\u4E8C\u85A6\u5F8C\u5B54\u4E2D"),w("BL36","\u627F\u6276","femur","thigh",7,80,-7.6,"\u81C0\u6A6B\u7D0B\u4E2D\u9EDE"),w("BL37","\u6BB7\u9580","femur","thigh",7.4,65,-6.6,"\u627F\u6276\u8207\u59D4\u4E2D\u9023\u7DDA\u4E0A\u3001\u627F\u6276\u4E0B 6 \u5BF8"),w("BL40","\u59D4\u4E2D","shank","shank",7.4,44.6,-6.8,"\u8195\u6A6B\u7D0B\u4E2D\u9EDE"),w("BL57","\u627F\u5C71","shank","shank",7.4,26,-7.6,"\u5C0F\u817F\u5F8C\u5074\u3001\u8153\u8178\u808C\u5169\u808C\u8179\u4E4B\u9593\u7684\u4EBA\u5B57\u7D0B"),w("BL58","\u98DB\u63DA","shank","shank",9.4,21,-6.8,"\u5D11\u5D19\u76F4\u4E0A 7 \u5BF8\u3001\u627F\u5C71\u5916\u4E0B\u65B9"),w("BL60","\u5D11\u5D19","shank","shank",11,7.6,-5.8,"\u5916\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),w("BL62","\u7533\u8108","foot","foot",12,4.6,-3.8,"\u5916\u8E1D\u5C16\u76F4\u4E0B\u51F9\u9677"),w("BL64","\u4EAC\u9AA8","foot","foot",13.5,2.8,1.4,"\u7B2C\u4E94\u8E60\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("BL65","\u675F\u9AA8","foot","foot",14,2.2,4.4,"\u7B2C\u4E94\u8E60\u8DBE\u95DC\u7BC0\u5F8C\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("BL67","\u81F3\u9670","foot","none",14.6,1.2,9.4,"\u8DB3\u5C0F\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"ki",code:"KI",name:"\u8DB3\u5C11\u9670\u814E\u7D93",short:"\u814E\u7D93",organ:"\u814E",group:"footYin",flow:"\u8DB3\uFF08\u8DB3\u5E95\uFF09\u2192 \u80F8\u8179",color:[.25,.32,.78],points:[w("KI1","\u6E67\u6CC9","foot","foot",7.5,1.1,4.4,"\u8DB3\u5E95\u524D 1/3 \u51F9\u9677\uFF08\u5C48\u8DBE\u6642\u6700\u51F9\u8655\uFF09"),w("KI2","\u7136\u8C37","foot","foot",5.4,3.4,1.4,"\u821F\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),w("KI3","\u592A\u8C3F","shank","shank",4.8,8,-4.8,"\u5167\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),w("KI5","\u6C34\u6CC9","foot","foot",5,5.4,-5,"\u592A\u8C3F\u76F4\u4E0B 1 \u5BF8"),w("KI6","\u7167\u6D77","foot","foot",4.5,5.6,-2.4,"\u5167\u8E1D\u5C16\u4E0B\u65B9\u51F9\u9677"),w("KI7","\u5FA9\u6E9C","shank","shank",4.5,12,-4.4,"\u592A\u8C3F\u4E0A 2 \u5BF8\u3001\u8DDF\u8171\u524D\u7DE3"),w("KI9","\u7BC9\u8CD3","shank","shank",5,22,-4.8,"\u592A\u8C3F\u4E0A 5 \u5BF8\u3001\u8153\u8178\u808C\u5167\u5074"),w("KI10","\u9670\u8C37","shank","shank",5,44.6,-6,"\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u5169\u808C\u8171\u4E4B\u9593"),w(null,null,"femur","thigh",5.5,58,-4),w(null,null,"femur","thigh",5,72,-2),w(null,null,"pelvis","pelvis",3,82,2),w("KI11","\u6A6B\u9AA8","pelvis","pelvis",1.2,82.6,5.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 0.5 \u5BF8"),w("KI13","\u6C23\u7A74","pelvis","pelvis",1.2,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u65C1\u958B 0.5 \u5BF8"),w("KI16","\u8093\u4FDE","L3","belly",1.2,103,10.4,"\u81CD\u65C1 0.5 \u5BF8"),w("KI21","\u5E7D\u9580","thoraxLow","belly",1.3,117,10.8,"\u81CD\u4E0A 6 \u5BF8\u65C1\u958B 0.5 \u5BF8"),w("KI23","\u795E\u5C01","thoraxMid","chest",2,130,10.8,"\u7B2C\u56DB\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8"),w("KI27","\u4FDE\u5E9C","thoraxUp","chest",4,138.2,6.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8")]},{id:"pc",code:"PC",name:"\u624B\u53A5\u9670\u5FC3\u5305\u7D93",short:"\u5FC3\u5305\u7D93",organ:"\u5FC3\u5305",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u4E2D\u6307\uFF09",color:[.48,.34,.92],points:[w("PC1","\u5929\u6C60","thoraxMid","chest",12,130,8.6,"\u7B2C\u56DB\u808B\u9593\u3001\u4E73\u982D\u5916\u5074 1 \u5BF8"),w("PC2","\u5929\u6CC9","arm","arm",17,128,2.6,"\u814B\u524D\u7D0B\u982D\u4E0B 2 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5169\u982D\u4E4B\u9593"),w("PC3","\u66F2\u6FA4","arm","arm",20.4,110.5,2.8,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u5C3A\u5074"),w("PC4","\u90C4\u9580","radius","forearm",24,95,3,"\u8155\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("PC5","\u9593\u4F7F","radius","forearm",25,91,3.3,"\u8155\u6A6B\u7D0B\u4E0A 3 \u5BF8"),w("PC6","\u5167\u95DC","radius","forearm",25.4,89,3.5,"\u8155\u6A6B\u7D0B\u4E0A 2 \u5BF8\u3001\u638C\u9577\u808C\u8171\u8207\u6A48\u5074\u5C48\u8155\u808C\u8171\u4E4B\u9593"),w("PC7","\u5927\u9675","hand","hand",26.3,85,4,"\u8155\u6A6B\u7D0B\u4E2D\u9EDE\u3001\u5169\u808C\u8171\u4E4B\u9593"),w("PC8","\u52DE\u5BAE","hand","hand",27.4,79,5.4,"\u638C\u5FC3\u7B2C\u4E8C\u3001\u4E09\u638C\u9AA8\u4E4B\u9593\uFF08\u63E1\u62F3\u6642\u4E2D\u6307\u5C16\u6240\u6307\uFF09"),w("PC9","\u4E2D\u885D","middleDist","none",28.5,70,9.6,"\u4E2D\u6307\u5C16\u7AEF\u4E2D\u592E")]},{id:"te",code:"TE",name:"\u624B\u5C11\u967D\u4E09\u7126\u7D93",short:"\u4E09\u7126\u7D93",organ:"\u4E09\u7126",group:"handYang",flow:"\u624B\uFF08\u7121\u540D\u6307\uFF09\u2192 \u982D\u9762",color:[.62,.86,.25],points:[w("TE1","\u95DC\u885D","ringDist","none",25.2,71.4,9.2,"\u7121\u540D\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),w("TE2","\u6DB2\u9580","hand","hand",25,77.4,4.4,"\u7B2C\u56DB\u3001\u4E94\u6307\u7E2B\u7AEF"),w("TE3","\u4E2D\u6E1A","hand","hand",25.3,79.6,2.8,"\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593\u3001\u638C\u6307\u95DC\u7BC0\u5F8C\u65B9"),w("TE4","\u967D\u6C60","hand","hand",25.8,84.5,.8,"\u8155\u80CC\u6A6B\u7D0B\u4E2D\u3001\u4F38\u6307\u808C\u8171\u5C3A\u5074"),w("TE5","\u5916\u95DC","radius","forearm",25,88.6,-1,"\u967D\u6C60\u4E0A 2 \u5BF8\u3001\u6A48\u5C3A\u9AA8\u4E4B\u9593"),w("TE6","\u652F\u6E9D","radius","forearm",24.8,90.6,-1.3,"\u967D\u6C60\u4E0A 3 \u5BF8"),w("TE7","\u6703\u5B97","ulna","forearm",23.5,90.6,-1.5,"\u652F\u6E9D\u5C3A\u5074\u3001\u5C3A\u9AA8\u6A48\u5074\u7DE3"),w("TE8","\u4E09\u967D\u7D61","radius","forearm",24.5,92.6,-1.5,"\u967D\u6C60\u4E0A 4 \u5BF8"),w("TE9","\u56DB\u7006","ulna","forearm",23,99,-3,"\u8098\u5C16\u4E0B 5 \u5BF8"),w("TE10","\u5929\u4E95","arm","arm",21.5,113,-5.4,"\u8098\u5C16\u4E0A 1 \u5BF8\u51F9\u9677"),w("TE11","\u6E05\u51B7\u6DF5","arm","arm",21,116,-5,"\u5929\u4E95\u4E0A 1 \u5BF8"),w("TE12","\u6D88\u6FFC","arm","arm",20,122,-5,"\u6E05\u51B7\u6DF5\u8207\u81D1\u6703\u9023\u7DDA\u4E2D\u9EDE"),w("TE13","\u81D1\u6703","arm","arm",19,128,-5,"\u80A9\u9ACE\u4E0B 3 \u5BF8\u3001\u4E09\u89D2\u808C\u5F8C\u4E0B\u7DE3"),w("TE14","\u80A9\u9ACE","scapula","arm",17.6,139,-5.4,"\u80A9\u5CF0\u5F8C\u4E0B\u65B9\u51F9\u9677"),w("TE15","\u5929\u9ACE","scapula","chest",7.6,143,-6,"\u80A9\u80DB\u9AA8\u4E0A\u89D2\u4E0A\u65B9"),w("TE16","\u5929\u7256","neckUp","neck",5.4,151,-2.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),w("TE17","\u7FF3\u98A8","head","head",6.4,155.4,-.4,"\u8033\u5782\u5F8C\u65B9\u3001\u4E73\u7A81\u8207\u4E0B\u9837\u89D2\u4E4B\u9593"),w("TE19","\u9871\u606F","head","head",7,160.4,-2.4,"\u8033\u5F8C\u9AEE\u969B\u3001\u7FF3\u98A8\u8207\u89D2\u5B6B\u4E4B\u9593"),w("TE20","\u89D2\u5B6B","head","head",7,162.4,-.4,"\u8033\u5C16\u6B63\u4E0A\u65B9\u9AEE\u969B"),w("TE21","\u8033\u9580","head","head",6.6,158.6,2.4,"\u8033\u5C4F\u4E0A\u5207\u8DE1\u524D\u65B9\u51F9\u9677"),w("TE23","\u7D72\u7AF9\u7A7A","head","head",5,160.6,6.4,"\u7709\u68A2\u51F9\u9677\u4E2D")]},{id:"gb",code:"GB",name:"\u8DB3\u5C11\u967D\u81BD\u7D93",short:"\u81BD\u7D93",organ:"\u81BD",group:"footYang",flow:"\u982D\u9762 \u2192 \u9AD4\u5074 \u2192 \u8DB3\uFF08\u7B2C\u56DB\u8DBE\uFF09",color:[.2,.82,.7],points:[w("GB1","\u77B3\u5B50\u9ACE","head","head",5.3,158.4,5.8,"\u5916\u773C\u89D2\u5916\u5074\u51F9\u9677"),w("GB2","\u807D\u6703","head","head",6.6,156.4,2,"\u8033\u5C4F\u9593\u5207\u8DE1\u524D\u65B9\u3001\u5F35\u53E3\u51F9\u9677"),w("GB4","\u9837\u53AD","head","head",6.5,163,4.4,"\u982D\u7DAD\u8207\u66F2\u9B22\u9023\u7DDA\u4E0A 1/4"),w("GB8","\u7387\u8C37","head","head",6.5,165.4,-.4,"\u8033\u5C16\u76F4\u4E0A\u5165\u9AEE\u969B 1.5 \u5BF8"),w("GB12","\u5B8C\u9AA8","head","head",5.5,155.4,-4.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u51F9\u9677"),w(null,null,"head","head",6.5,162,-2),w(null,null,"head","head",5,166,4),w("GB14","\u967D\u767D","head","head",3,162.4,7.4,"\u77B3\u5B54\u76F4\u4E0A\u3001\u7709\u4E0A 1 \u5BF8"),w(null,null,"head","head",3.5,167,5),w(null,null,"head","head",4.5,169,-1),w(null,null,"head","head",5,164,-7),w("GB20","\u98A8\u6C60","head","head",4,155.4,-7.4,"\u6795\u9AA8\u4E0B\u3001\u80F8\u9396\u4E73\u7A81\u808C\u8207\u659C\u65B9\u808C\u4E4B\u9593\u51F9\u9677"),w("GB21","\u80A9\u4E95","clavicle","chest",9,145.8,-3,"\u5927\u690E\u8207\u80A9\u5CF0\u9023\u7DDA\u4E2D\u9EDE\u3001\u659C\u65B9\u808C\u4E0A\u7DE3"),w("GB22","\u6DF5\u814B","thoraxMid","chest",13.5,128.5,.5,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u814B\u4E0B 3 \u5BF8"),w("GB24","\u65E5\u6708","thoraxMid","chest",8.6,119.6,8.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E03\u808B\u9593"),w("GB25","\u4EAC\u9580","thoraxLow","belly",7,112,-5,"\u7B2C\u5341\u4E8C\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),w("GB26","\u5E36\u8108","L3","belly",11,105,1,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u76F4\u4E0B\u3001\u8207\u81CD\u540C\u9AD8"),w("GB29","\u5C45\u9ACE","pelvis","pelvis",12.5,90,-2,"\u9AC2\u524D\u4E0A\u68D8\u8207\u5927\u8F49\u5B50\u9023\u7DDA\u4E2D\u9EDE"),w("GB30","\u74B0\u8DF3","pelvis","pelvis",12,85,-6,"\u80A1\u9AA8\u5927\u8F49\u5B50\u8207\u85A6\u9AA8\u88C2\u5B54\u9023\u7DDA\u5916 1/3"),w("GB31","\u98A8\u5E02","femur","thigh",12.6,62,-2,"\u5927\u817F\u5916\u5074\u3001\u76F4\u7ACB\u5782\u624B\u6642\u4E2D\u6307\u5C16\u6240\u6307"),w("GB33","\u819D\u967D\u95DC","femur","thigh",12,47,-2.4,"\u80A1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u65B9\u51F9\u9677"),w("GB34","\u967D\u9675\u6CC9","shank","shank",11.8,39.4,-1,"\u8153\u9AA8\u5C0F\u982D\u524D\u4E0B\u65B9\u51F9\u9677"),w("GB36","\u5916\u4E18","shank","shank",12,27,-3,"\u5916\u8E1D\u5C16\u4E0A 7 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),w("GB37","\u5149\u660E","shank","shank",12,19,-3,"\u5916\u8E1D\u5C16\u4E0A 5 \u5BF8"),w("GB39","\u61F8\u9418","shank","shank",12,14,-3,"\u5916\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),w("GB40","\u4E18\u589F","foot","foot",11.8,5.4,-.4,"\u5916\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),w("GB41","\u8DB3\u81E8\u6CE3","foot","foot",11.5,4,4,"\u7B2C\u56DB\u3001\u4E94\u8E60\u9AA8\u4E4B\u9593"),w("GB43","\u4FE0\u8C3F","foot","foot",12.8,2,7.4,"\u7B2C\u56DB\u3001\u4E94\u8DBE\u7E2B\u7AEF"),w("GB44","\u8DB3\u7AC5\u9670","foot","none",13.6,1.3,11.3,"\u7B2C\u56DB\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"lr",code:"LR",name:"\u8DB3\u53A5\u9670\u809D\u7D93",short:"\u809D\u7D93",organ:"\u809D",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u8105\u808B",color:[.2,.6,.3],points:[w("LR1","\u5927\u6566","foot","none",8.9,1.8,12.6,"\u8DB3\u5927\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1"),w("LR2","\u884C\u9593","foot","foot",8.5,2.4,9,"\u7B2C\u4E00\u3001\u4E8C\u8DBE\u7E2B\u7AEF"),w("LR3","\u592A\u885D","foot","foot",8,4.4,4.4,"\u7B2C\u4E00\u3001\u4E8C\u8E60\u9AA8\u7D50\u5408\u90E8\u524D\u65B9\u51F9\u9677"),w("LR4","\u4E2D\u5C01","foot","foot",5.6,7,.2,"\u5167\u8E1D\u524D\u65B9\u3001\u811B\u9AA8\u524D\u808C\u8171\u5167\u5074"),w("LR5","\u8821\u6E9D","shank","shank",4.2,18,-1.4,"\u5167\u8E1D\u5C16\u4E0A 5 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u9762\u4E2D\u592E"),w("LR6","\u4E2D\u90FD","shank","shank",4.4,22,-1.4,"\u5167\u8E1D\u5C16\u4E0A 7 \u5BF8"),w("LR7","\u819D\u95DC","shank","shank",5,39,-2,"\u9670\u9675\u6CC9\u5F8C 1 \u5BF8"),w("LR8","\u66F2\u6CC9","shank","shank",4.8,44.6,-4,"\u5C48\u819D\u6642\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u4E0A\u65B9"),w("LR9","\u9670\u5305","femur","thigh",5,55,0,"\u9AD5\u5E95\u4E0A 4 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u8207\u7E2B\u5320\u808C\u4E4B\u9593"),w(null,null,"femur","thigh",5.2,70,2),w("LR11","\u9670\u5EC9","femur","thigh",4.6,85,3,"\u6C23\u885D\u76F4\u4E0B 2 \u5BF8\u3001\u9577\u6536\u808C\u5916\u7DE3"),w("LR12","\u6025\u8108","pelvis","pelvis",2.6,83,5,"\u6065\u9AA8\u806F\u5408\u5916\u5074\u3001\u8179\u80A1\u6E9D\u52D5\u8108\u640F\u52D5\u8655"),w(null,null,"pelvis","pelvis",4.5,92,7),w(null,null,"L3","belly",8,101,7),w("LR13","\u7AE0\u9580","thoraxLow","belly",11,110,2,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),w("LR14","\u671F\u9580","thoraxMid","chest",9,123.4,9.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u516D\u808B\u9593")]},{id:"cv",code:"CV",name:"\u4EFB\u8108",short:"\u4EFB\u8108",organ:"\u524D\u6B63\u4E2D\u7DDA\uFF08\u9670\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u6703\u9670 \u2192 \u4E0B\u9837\uFF08\u524D\u6B63\u4E2D\u7DDA\uFF09",color:[.96,.87,.6],points:[w("CV1","\u6703\u9670","pelvis","pelvis",0,79,-1,"\u524D\u5F8C\u4E8C\u9670\u4E4B\u9593"),w("CV2","\u66F2\u9AA8","pelvis","pelvis",0,81.4,4.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u4E2D\u9EDE"),w("CV3","\u4E2D\u6975","pelvis","pelvis",0,84.6,6.2,"\u81CD\u4E0B 4 \u5BF8"),w("CV4","\u95DC\u5143","pelvis","pelvis",0,97,9.6,"\u81CD\u4E0B 3 \u5BF8"),w("CV6","\u6C23\u6D77","L5","belly",0,100,10,"\u81CD\u4E0B 1.5 \u5BF8"),w("CV8","\u795E\u95D5","L3","belly",0,103,10.6,"\u81CD\u4E2D\u592E\uFF08\u7981\u91DD\uFF0C\u53EF\u7078\uFF09"),w("CV9","\u6C34\u5206","L3","belly",0,105,10.6,"\u81CD\u4E0A 1 \u5BF8"),w("CV12","\u4E2D\u8118","L1","belly",0,112,11,"\u81CD\u8207\u80F8\u9AA8\u4E0B\u7AEF\u9023\u7DDA\u4E2D\u9EDE"),w("CV14","\u5DE8\u95D5","thoraxLow","belly",0,119,11,"\u81CD\u4E0A 6 \u5BF8"),w("CV15","\u9CE9\u5C3E","thoraxMid","chest",0,122.6,11,"\u80F8\u9AA8\u528D\u7A81\u4E0B"),w("CV17","\u81BB\u4E2D","thoraxMid","chest",0,130,11.2,"\u5169\u4E73\u982D\u9023\u7DDA\u4E2D\u9EDE\u3001\u7B2C\u56DB\u808B\u9593"),w("CV18","\u7389\u5802","thoraxMid","chest",0,132.6,11,"\u7B2C\u4E09\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),w("CV20","\u83EF\u84CB","thoraxUp","chest",0,137,8,"\u7B2C\u4E00\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),w("CV21","\u7487\u74A3","thoraxUp","chest",0,139,6.4,"\u5929\u7A81\u4E0B 1 \u5BF8"),w("CV22","\u5929\u7A81","thoraxUp","chest",0,140.8,4.4,"\u80F8\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),w("CV23","\u5EC9\u6CC9","head","neck",0,151,5,"\u820C\u9AA8\u4E0A\u7DE3\u51F9\u9677"),w("CV24","\u627F\u6F3F","head","head",0,152.4,8.6,"\u9826\u5507\u6E9D\u6B63\u4E2D\u51F9\u9677")]},{id:"gv",code:"GV",name:"\u7763\u8108",short:"\u7763\u8108",organ:"\u5F8C\u6B63\u4E2D\u7DDA\uFF08\u967D\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u5C3E\u9AA8 \u2192 \u982D\u9802 \u2192 \u4E0A\u5507\uFF08\u5F8C\u6B63\u4E2D\u7DDA\uFF09",color:[.66,.7,.95],points:[w("GV1","\u9577\u5F37","pelvis","pelvis",0,82.6,-8,"\u5C3E\u9AA8\u7AEF\u8207\u809B\u9580\u9023\u7DDA\u4E2D\u9EDE"),w("GV2","\u8170\u4FDE","pelvis","pelvis",0,88,-8.6,"\u85A6\u7BA1\u88C2\u5B54\u4E2D"),w("GV3","\u8170\u967D\u95DC","L4","belly",0,100,-7,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B"),w("GV4","\u547D\u9580","L2","belly",0,107,-7,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B"),w("GV6","\u810A\u4E2D","thoraxLow","belly",0,117,-8.4,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV8","\u7B4B\u7E2E","thoraxLow","chest",0,122.4,-9.4,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV9","\u81F3\u967D","thoraxMid","chest",0,128,-9.8,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u3001\u5169\u80A9\u80DB\u4E0B\u89D2\u9023\u7DDA"),w("GV11","\u795E\u9053","thoraxMid","chest",0,134.4,-9.8,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV12","\u8EAB\u67F1","thoraxUp","chest",0,139.4,-9.8,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV13","\u9676\u9053","thoraxUp","chest",0,143.4,-8.4,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),w("GV14","\u5927\u690E","neckLow","neck",0,145,-7.8,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\uFF08\u4F4E\u982D\u6642\u6700\u7A81\u51FA\u7684\u9AA8\u982D\u4E0B\u65B9\uFF09"),w("GV15","\u555E\u9580","neckUp","neck",0,152,-6.8,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),w("GV16","\u98A8\u5E9C","head","head",0,154.2,-8.4,"\u6795\u5916\u9686\u51F8\u76F4\u4E0B\u51F9\u9677"),w("GV17","\u8166\u6236","head","head",0,157.6,-9.4,"\u6795\u5916\u9686\u51F8\u4E0A\u7DE3\u51F9\u9677"),w("GV19","\u5F8C\u9802","head","head",0,166,-6.4,"\u767E\u6703\u5F8C 1.5 \u5BF8"),w("GV20","\u767E\u6703","head","head",0,170.3,-1.4,"\u982D\u9802\u6B63\u4E2D\u3001\u5169\u8033\u5C16\u9023\u7DDA\u4E2D\u9EDE"),w("GV21","\u524D\u9802","head","head",0,169.4,2,"\u767E\u6703\u524D 1.5 \u5BF8"),w("GV23","\u4E0A\u661F","head","head",0,167,6.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 1 \u5BF8"),w("GV24","\u795E\u5EAD","head","head",0,166,7.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),w("GV26","\u6C34\u6E9D","head","head",0,155,9.2,"\u4EBA\u4E2D\u6E9D\u4E0A 1/3 \u8655"),w("GV28","\u9F66\u4EA4","head","head",0,153.4,8.4,"\u4E0A\u5507\u7E6B\u5E36\u8207\u7259\u9F66\u76F8\u63A5\u8655")]}],rc=[["handYin","\u624B\u4E09\u9670\uFF08\u80F8\u2192\u624B\uFF09"],["handYang","\u624B\u4E09\u967D\uFF08\u624B\u2192\u982D\uFF09"],["footYang","\u8DB3\u4E09\u967D\uFF08\u982D\u2192\u8DB3\uFF09"],["footYin","\u8DB3\u4E09\u9670\uFF08\u8DB3\u2192\u80F8\u8179\uFF09"],["extra","\u4EFB\u7763\u4E8C\u8108"]];function Ku(i){return Hs.find(t=>t.id===i)??null}var Ju=i=>i.midline?["m"]:["l","r"];var $x=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","indexMid","indexDist","middleProx","middleMid","middleDist","ringProx","ringMid","ringDist","littleProx","littleMid","littleDist"]);function Yx(i,t){return $x.has(i.seg)?`${i.seg}.${t==="r"?"r":"l"}`:i.seg}function Zx(i,t){let e=t==="r"?[-i.p[0],i.p[1],i.p[2]]:[...i.p],n=Xx[i.hub],s=qx[i.hub]??0;if(!n||!s)return e;let r=n.point?t==="r"?[-n.point[0],n.point[1],n.point[2]]:n.point:Kx(e,n,t),a=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],o=Math.hypot(a[0],a[1],a[2]);return o<1e-6?e:[e[0]+a[0]/o*s,e[1]+a[1]/o*s,e[2]+a[2]/o*s]}function Kx(i,t,e){let n=e==="r"?-1:1,s=[t.a[0]*n,t.a[1],t.a[2]],r=[t.b[0]*n,t.b[1],t.b[2]],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=[i[0]-s[0],i[1]-s[1],i[2]-s[2]],l=a[0]**2+a[1]**2+a[2]**2,c=Math.max(0,Math.min(1,l?(o[0]*a[0]+o[1]*a[1]+o[2]*a[2])/l:0));return[s[0]+a[0]*c,s[1]+a[1]*c,s[2]+a[2]*c]}function ju(i,t){return i.points.map(e=>({code:e.code,name:e.name,note:e.note,seg:Yx(e,t),pos:Zx(e,t)}))}var Qu=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function Jx(i,t){return Math.max(1,Math.min(10,Math.round(Qu(i,t)/2.5)))}function jx(i,t,e,n,s){let r=s*s,a=r*s,o=[0,0,0];for(let l=0;l<3;l++)o[l]=.5*(2*t[l]+(-i[l]+e[l])*s+(2*i[l]-5*t[l]+4*e[l]-n[l])*r+(-i[l]+3*t[l]-3*e[l]+n[l])*a);return o}function xo(i){if(i.length<2)return i.map(e=>[...e]);let t=[];for(let e=0;e<i.length-1;e++){let n=i[Math.max(0,e-1)],s=i[e],r=i[e+1],a=i[Math.min(i.length-1,e+2)],o=Jx(s,r);for(let l=0;l<o;l++)t.push(jx(n,s,r,a,l/o))}return t.push([...i[i.length-1]]),t}function td(i,t){let e=1/0;for(let n=0;n<t.length-1;n++){let s=t[n],r=t[n+1],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=a[0]**2+a[1]**2+a[2]**2,l=o?Math.max(0,Math.min(1,((i[0]-s[0])*a[0]+(i[1]-s[1])*a[1]+(i[2]-s[2])*a[2])/o)):0,c=Qu(i,[s[0]+a[0]*l,s[1]+a[1]*l,s[2]+a[2]*l]);c<e&&(e=c)}return e}var Qx=.5,ty=3.4,ey=new xi(Qx,12,8),ny=[1,1,1];function ed(){let i=new De;i.renderOrder=6;let t=[];for(let o of Hs)for(let l of Ju(o)){let c=ju(o,l),h=c.map((g,_)=>({...g,index:_})).filter(g=>g.code),d=new jn({linewidth:ty,transparent:!0,opacity:.95,depthWrite:!1});d.color.setRGB(...o.color,ce);let u=new _o(new Ti,d);u.raycast=()=>{},u.renderOrder=6,u.frustumCulled=!1,u.visible=!1;let p=new Fr(ey,new mn({toneMapped:!1}),h.length);p.instanceColor=new es(new Float32Array(h.length*3),3),p.frustumCulled=!1,p.renderOrder=7,p.visible=!1,p.userData.track=t.length,i.add(u,p),t.push({meridian:o,side:l,nodes:c,acu:h,line:u,material:d,dots:p,live:c.map(()=>[0,0,0]),active:!1,stale:!0})}let e=new P,n=new Ut,s=null;function r(o,l){for(let u=0;u<o.nodes.length;u++){let p=o.nodes[u];e.fromArray(p.pos),l&&e.applyMatrix4(l.get(p.seg)??n.identity()),o.live[u]=e.toArray()}let c=xo(o.live),h=new Float32Array(c.length*3);for(let u=0;u<c.length;u++)h.set(c[u],u*3);o.line.geometry.dispose(),o.line.geometry=new Ti,o.line.geometry.setPositions(h),o.line.computeLineDistances();let d=new zt;for(let u=0;u<o.acu.length;u++){n.identity().setPosition(...o.live[o.acu[u].index]),o.dots.setMatrixAt(u,n);let p=s&&s.track===o&&s.acuIndex===u;d.setRGB(...p?ny:o.meridian.color,ce),o.dots.setColorAt(u,d)}o.dots.instanceMatrix.needsUpdate=!0,o.dots.instanceColor&&(o.dots.instanceColor.needsUpdate=!0),o.stale=!1}let a=null;return{group:i,tracks:t,setActive(o){let l=new Set(o);for(let c of t)c.active=l.has(c.meridian.id),c.active&&c.stale&&r(c,a),c.line.visible=c.active,c.dots.visible=c.active},update(o){a=o;for(let l of t)l.active?r(l,o):l.stale=!0},setResolution(o,l){for(let c of t)c.material.resolution.set(o,l)},setOverlay(o){for(let l of t)l.material.depthTest=!o,l.material.needsUpdate=!0,l.dots.material.depthTest=!o,l.dots.material.needsUpdate=!0},select(o){s=o;for(let l of t)l.active&&r(l,a)},get selected(){return s},pickTargets(){return t.filter(o=>o.active).map(o=>o.dots)},resolve(o,l){let c=t[o.userData.track];if(!c||l==null)return null;let h=c.acu[l];return h?{meridian:c.meridian,side:c.side,point:h,track:c,acuIndex:l}:null},livePaths(){return t.map(o=>({meridian:o.meridian,side:o.side,path:o.stale?null:o.live}))},allAcupoints(o){let l=[];for(let c of t)for(let h of c.acu)e.fromArray(c.nodes[h.index].pos),o&&e.applyMatrix4(o.get(h.seg)??n.identity()),l.push({meridian:c.meridian,side:c.side,point:h,pos:e.toArray()});return l},allPaths(o){return t.map(l=>{let c=l.nodes.map(h=>(e.fromArray(h.pos),o&&e.applyMatrix4(o.get(h.seg)??n.identity()),e.toArray()));return{meridian:l.meridian,side:l.side,path:c}})}}}var X=(i,t,e,n,s,r,a,o)=>[i,{id:i,label:t,seg:e,p:[n,s,r],radius:a,depth:o}],yo=Object.fromEntries([X("forehead","\u524D\u984D","head",2.5,165,7.6,3.6,"surface"),X("temple","\u592A\u967D\u7A74","head",6.2,161.5,3.4,3.2,"surface"),X("eyeOrbit","\u773C\u7736","head",3,158.6,7.4,2.6,"deep"),X("vertex","\u982D\u9802","head",2,169,-1,4.2,"surface"),X("occiput","\u5F8C\u8166","head",3,158,-9,4,"mid"),X("behindEar","\u8033\u5F8C","head",6.4,157,-2.6,2.6,"surface"),X("aboveEar","\u8033\u4E0A","head",6.8,162.5,-.6,2.6,"surface"),X("mastoid","\u4E73\u7A81","head",6,155.2,-3.2,2.6,"mid"),X("cheek","\u81C9\u9830","head",4.6,155,6,3,"surface"),X("jaw","\u4E0B\u9837","head",4.2,151.6,5.4,3,"surface"),X("chin","\u4E0B\u5DF4","head",0,151.6,8.2,2.6,"surface"),X("teethLower","\u4E0B\u6392\u7259\u9F52","head",1.6,153.6,8.2,2,"deep"),X("tongue","\u820C\u982D\u3001\u820C\u6839","head",0,152,4.6,2.2,"deep"),X("glabella","\u7709\u9593","head",0,161.4,8.6,2,"surface"),X("nose","\u9F3B\u6A11\u8207\u9F3B\u7FFC","head",0,158,9.4,2.2,"surface"),X("upperLip","\u4E0A\u5507","head",0,154,8.8,2,"surface"),X("lowerLip","\u4E0B\u5507","head",0,152,8.6,2,"surface"),X("teethUpper","\u4E0A\u6392\u7259\u9F52","head",1.8,154.4,8,2,"deep"),X("earInner","\u8033\u6735\u6DF1\u8655","head",6,157.4,.6,2.2,"deep"),X("tmj","\u9873\u984E\u95DC\u7BC0","head",6.3,157.4,2.4,2.2,"deep"),X("throatFront","\u5589\u56A8\u524D\u9762","neckUp",0,149.5,5,2.8,"mid"),X("throatDeep","\u5589\u56A8\u6DF1\u8655","neckUp",0,149,1.8,2.8,"deep"),X("neckFrontUp","\u9838\u90E8\u524D\u4E0A\u65B9","neckUp",0,152,3,2.6,"deep"),X("neckSide","\u9838\u90E8\u5074\u9762","neckUp",4.6,149,1.2,3,"mid"),X("neckBack","\u9838\u5F8C","neckUp",0,150,-7,3.4,"mid"),X("neckShoulderAngle","\u9838\u80A9\u4EA4\u89D2","neckLow",5,145,-5,3.6,"mid"),X("supraclavicular","\u9396\u9AA8\u4E0A\u65B9","clavicle",6,142.5,1.6,3,"mid"),X("shoulderFront","\u80A9\u8180\u524D\u5074","scapula",15,137,2,4,"mid"),X("shoulderLat","\u80A9\u8180\u5916\u5074","arm",18.6,134,-2,4,"mid"),X("shoulderBack","\u80A9\u8180\u5F8C\u5074","scapula",15,135,-6.4,4,"mid"),X("shoulderDeep","\u80A9\u95DC\u7BC0\u6DF1\u8655","arm",16,136,-1,3.6,"deep"),X("deltoid","\u4E09\u89D2\u808C\u5340\u57DF","arm",18,132.5,-1,4.6,"mid"),X("scapulaMedial","\u80A9\u80DB\u9AA8\u5167\u7DE3","scapula",7.6,134,-8,4,"mid"),X("scapulaMedialUp","\u80A9\u80DB\u9AA8\u5167\u7DE3\u4E0A\u6BB5","scapula",7.6,139,-7,3,"mid"),X("scapulaInferior","\u80A9\u80DB\u9AA8\u4E0B\u89D2","scapula",8.6,127,-8.4,3.2,"mid"),X("scapulaAbove","\u80A9\u80DB\u9AA8\u4E0A\u65B9","scapula",9,142,-5,3.6,"mid"),X("scapulaDeep","\u80A9\u80DB\u9AA8\u6DF1\u8655","scapula",11,133,-6.4,4,"deep"),X("interscapular","\u80A9\u80DB\u9AA8\u4E4B\u9593","thoraxMid",3.6,133,-9.4,4,"surface"),X("upperBackMid","\u4E0A\u80CC\u6B63\u4E2D","thoraxUp",0,138,-9.6,3.6,"mid"),X("thoracicMid","\u80F8\u690E\u6B63\u4E2D","thoraxMid",0,129,-10,3.6,"mid"),X("thoracicSide","\u80F8\u690E\u65C1","thoraxMid",3,128,-9.4,3.2,"mid"),X("backRibs","\u80CC\u90E8\u808B\u9AA8\u65C1","thoraxLow",6,117,-7.6,3.6,"mid"),X("lowerBack","\u4E0B\u80CC","L3",4,104,-7,4.4,"mid"),X("lowerBackMid","\u4E0B\u80CC\u6B63\u4E2D","L4",0,101,-7,3,"mid"),X("lowerBackSide","\u4E0B\u80CC\u5074\u9762","L2",7,108,-5,3.4,"mid"),X("lumbarParaspinal","\u8170\u690E\u65C1","L3",3.2,104,-6.4,3.4,"deep"),X("sacrum","\u85A6\u9AA8","pelvis",0,92,-8.4,3.6,"mid"),X("si","\u85A6\u9AC2\u95DC\u7BC0","pelvis",3.2,94,-8.4,3,"deep"),X("coccyx","\u5C3E\u9AA8","pelvis",0,84,-8,2.6,"mid"),X("anus","\u809B\u9580","pelvis",0,80,-4,2.6,"deep"),X("perineum","\u6703\u9670","pelvis",0,79,-1,2.6,"deep"),X("chestFront","\u524D\u80F8","thoraxMid",6,130,10,4.4,"mid"),X("chestSide","\u80F8\u5ED3\u5074\u9762","thoraxMid",12.5,124,1.5,4.2,"mid"),X("breast","\u4E73\u623F\u5340","thoraxMid",9.6,129,10.6,4,"surface"),X("breastLower","\u4E0B\u80F8\u3001\u4E73\u623F\u4E0B\u7DE3","thoraxMid",9,122.5,9.4,3.6,"surface"),X("sternum","\u80F8\u9AA8\u65C1","thoraxMid",2.6,129,10.6,3,"mid"),X("intercostal","\u808B\u9593","thoraxMid",10,122,5.5,3.6,"mid"),X("subcostal","\u808B\u5F13\u4E0B","thoraxLow",7,113,8.4,3.6,"deep"),X("upperAbdomen","\u4E0A\u8179","L1",2.6,110,10.4,4,"deep"),X("abdomen","\u8179\u90E8","L3",4,104,10,4.4,"deep"),X("lowerAbdomen","\u4E0B\u8179","pelvis",2.6,97,9.4,4,"deep"),X("pubic","\u6065\u9AA8\u4E0A\u65B9","pelvis",0,83.5,5.6,3,"mid"),X("groin","\u8179\u80A1\u6E9D","pelvis",5,90,6,3.6,"deep"),X("pelvisDeep","\u9AA8\u76C6\u5167\u6DF1\u8655","pelvis",3,88,-1,4,"deep"),X("buttock","\u81C0\u90E8","pelvis",8,88,-8,5,"mid"),X("buttockUpLat","\u81C0\u90E8\u4E0A\u5916\u5074","pelvis",10,93,-6,4,"mid"),X("buttockDeep","\u81C0\u90E8\u6DF1\u8655","pelvis",8,87,-6,4,"deep"),X("buttockLower","\u81C0\u90E8\u4E0B\u7DE3","femur",7,80,-7.4,3.6,"mid"),X("greaterTroch","\u9AD6\u90E8\u5916\u5074\uFF08\u5927\u8F49\u5B50\uFF09","femur",12.5,85,-3,3.6,"mid"),X("hipFrontLat","\u9AD6\u90E8\u524D\u5916\u5074","femur",10.5,84,3,3.6,"mid"),X("thighFront","\u5927\u817F\u524D\u9762","femur",8.5,62,4,4.6,"mid"),X("thighFrontUp","\u5927\u817F\u524D\u4E0A\u65B9","femur",9,78,4,4.2,"mid"),X("thighLat","\u5927\u817F\u5916\u5074","femur",12.5,62,-1,4.6,"mid"),X("thighMed","\u5927\u817F\u5167\u5074","femur",4.5,62,1,4.6,"mid"),X("thighMedUp","\u5927\u817F\u5167\u5074\u4E0A\u6BB5","femur",4.5,78,2,4.2,"deep"),X("thighBack","\u5927\u817F\u5F8C\u5074","femur",7.5,62,-6,4.6,"mid"),X("thighBackUp","\u5927\u817F\u5F8C\u5074\u4E0A\u6BB5","femur",7.5,76,-7,4.2,"mid"),X("thighLatBack","\u5927\u817F\u5916\u5F8C\u5074","femur",11,62,-4,4.2,"mid"),X("kneeFront","\u819D\u84CB\u524D\u9762","shank",8.5,44,2.4,3.6,"mid"),X("kneeMed","\u819D\u84CB\u5167\u5074","shank",4.5,44,0,3,"mid"),X("kneeLat","\u819D\u84CB\u5916\u5074","shank",11.5,44,0,3,"mid"),X("kneeBack","\u819D\u84CB\u5F8C\u9762\uFF08\u8195\u7AA9\uFF09","shank",7.5,44.5,-7,3.6,"deep"),X("kneeBackLat","\u819D\u84CB\u5F8C\u5916\u5074","shank",10.5,44,-6,3,"deep"),X("kneeBackMed","\u819D\u84CB\u5F8C\u5167\u5074","shank",4.8,44,-6,3,"mid"),X("kneeAbove","\u819D\u84CB\u4E0A\u65B9","femur",8.5,50,2,3.6,"mid"),X("calfBack","\u5C0F\u817F\u5F8C\u9762","shank",7.5,26,-7,4,"mid"),X("calfUpper","\u5C0F\u817F\u4E0A\u6BB5","shank",7.5,36,-6,3.6,"mid"),X("calfLat","\u5C0F\u817F\u5916\u5074","shank",11.5,26,-3,3.6,"mid"),X("shinMed","\u811B\u9AA8\u5167\u5074","shank",4.5,28,-1,3.6,"surface"),X("achilles","\u8DDF\u8171","shank",7.5,12,-6,2.6,"surface"),X("heel","\u8173\u8DDF","foot",7.9,3,-6.5,3,"mid"),X("heelLat","\u8173\u8DDF\u5916\u5074","foot",10.5,2.8,-5.5,2.6,"surface"),X("ankleFrontMed","\u8E1D\u95DC\u7BC0\u524D\u5167\u5074","talus",5,8,0,2.6,"surface"),X("ankleFrontLat","\u8E1D\u524D\u5916\u5074","foot",11,6,-1,2.6,"surface"),X("ankleLat","\u5916\u8E1D\u5468\u570D","shank",11.8,7,-3,3,"surface"),X("footLatBorder","\u8173\u7684\u5916\u5074\u7DE3","foot",13.5,2.5,2.5,3,"surface"),X("footDorsum","\u8173\u80CC","foot",9.5,5.2,4.5,3.4,"surface"),X("footDorsumMed","\u8173\u80CC\u5167\u5074","foot",7,5.2,5.5,3,"surface"),X("arch","\u8173\u5E95\u5167\u5074\u8DB3\u5F13","foot",6.2,1.5,1.5,3,"mid"),X("soleFront","\u8173\u5E95\u524D\u534A","foot",8.5,1,6,3.4,"mid"),X("toesPlantar","\u8173\u8DBE\u5E95\u9762","foot",11,1.1,10.5,3,"surface"),X("toesDorsal","\u8173\u8DBE\u80CC\u9762","foot",11,2.2,10.5,3,"surface"),X("halluxPlantar","\u62C7\u8DBE\u5E95\u9762","foot",8,1.1,11.8,2.2,"surface"),X("halluxDorsal","\u62C7\u8DBE\u80CC\u9762","foot",8,2.4,11.5,2.2,"surface"),X("mt1Head","\u7B2C\u4E00\u8E60\u9AA8\u982D","foot",7,3.2,7.5,2.4,"mid"),X("upperArmFront","\u4E0A\u81C2\u524D\u9762","arm",17.5,124,1.5,4,"mid"),X("upperArmBack","\u4E0A\u81C2\u5F8C\u9762","arm",19.5,122,-6,4,"mid"),X("upperArmLat","\u4E0A\u81C2\u5916\u5074","arm",21,124,-3,4,"mid"),X("armInner","\u624B\u81C2\u5167\u5074","arm",15.5,122,-2,4.4,"mid"),X("elbowFront","\u624B\u8098\u524D\u9762","arm",20.5,110,1.5,3,"mid"),X("elbowLat","\u80B1\u9AA8\u5916\u4E0A\u9AC1\uFF08\u624B\u8098\u5916\u5074\uFF09","arm",24.5,110.5,-1.5,2.8,"surface"),X("forearmFlexor","\u524D\u81C2\u638C\u5074","radius",24.5,96,3,3.8,"mid"),X("forearmFlexorLow","\u524D\u81C2\u638C\u5074\u4E0B\u6BB5","radius",25.5,90,3.4,3.2,"surface"),X("forearmExt","\u524D\u81C2\u80CC\u5074","radius",25,97,-1.5,3.8,"mid"),X("forearmUlnar","\u524D\u81C2\u5C3A\u5074\uFF08\u5C0F\u6307\u5074\uFF09","ulna",22,96,.5,3.6,"mid"),X("forearmRadial","\u524D\u81C2\u6A48\u5074\uFF08\u62C7\u6307\u5074\uFF09","radius",26.5,96,1,3.6,"mid"),X("wristPalmar","\u624B\u8155\u638C\u5074","hand",26,85,4,2.6,"mid"),X("wristPalmarRadial","\u624B\u8155\u638C\u5074\u62C7\u6307\u5074","hand",27.8,85,3.6,2.2,"deep"),X("wristPalmarUlnar","\u624B\u8155\u638C\u5074\u5C0F\u6307\u5074","hand",24.2,85,3.8,2.2,"surface"),X("wristDorsal","\u624B\u8155\u80CC\u5074","hand",26,84.5,.8,2.6,"surface"),X("wristDorsalRadial","\u624B\u8155\u80CC\u5074\u62C7\u6307\u5074","hand",28.3,84.3,1.2,2.2,"surface"),X("wristDorsalUlnar","\u624B\u8155\u80CC\u5074\u5C0F\u6307\u5074","hand",23.8,84.6,.9,2.2,"surface"),X("handDorsum","\u624B\u80CC","hand",27,80,1.4,3,"surface"),X("webSpace","\u864E\u53E3","hand",29.3,80.5,2.6,2.2,"surface"),X("palm","\u638C\u5FC3","hand",27,80,4.8,3,"surface"),X("thenar","\u5927\u9B5A\u969B","thumbMeta",29.8,82,4.8,2.4,"surface"),X("thumbBase","\u62C7\u6307\u6839\u90E8","thumbMeta",30.4,81,4.2,2.2,"surface"),X("thumb","\u62C7\u6307","thumbProx",31.9,80,5.4,2,"surface"),X("thumbTip","\u62C7\u6307\u638C\u9762\u5230\u6307\u5C16","thumbDist",32.8,77.9,6.6,1.8,"surface"),X("indexFinger","\u98DF\u6307","indexProx",30.1,75.2,4.5,1.8,"surface"),X("middleFinger","\u4E2D\u6307","middleProx",27.7,75.2,5,1.8,"surface"),X("ringFinger","\u7121\u540D\u6307","ringProx",25.5,75.7,4.9,1.8,"surface"),X("littleFinger","\u5C0F\u6307","littleProx",23.7,76.7,4.9,1.8,"surface"),X("fingersPalmar","\u624B\u6307\u638C\u9762","hand",27,74,6.4,3.4,"surface"),X("fingerTips","\u6307\u5C16","middleDist",28.5,70.6,8.8,2.4,"surface")]),Vs={pecMajorClav:["shoulderFront","deltoid"],pecMajorStern:["chestFront","breast","armInner","forearmUlnar"],pecMajorAbd:["breastLower"],pecMinor:["shoulderFront","chestFront","armInner","littleFinger"],subclavius:["shoulderFront","upperArmFront","forearmRadial","thumb","indexFinger"],serratusAnterior:["chestSide","scapulaInferior"],trapUpper:["neckSide","behindEar","temple","eyeOrbit"],trapMiddle:["interscapular"],trapLower:["neckBack","mastoid","scapulaAbove"],rhomboidMajor:["scapulaMedial","interscapular"],rhomboidMinor:["scapulaMedialUp"],levatorScapulae:["neckShoulderAngle","scapulaMedial"],deltoidAnt:["shoulderFront","deltoid"],deltoidMid:["shoulderLat"],deltoidPost:["shoulderBack","upperArmBack"],bicepsLong:["shoulderFront","elbowFront"],bicepsShort:["shoulderFront","elbowFront"],coracobrachialis:["shoulderFront","upperArmBack","forearmExt","handDorsum"],tricepsLong:["shoulderBack","upperArmBack","neckShoulderAngle"],tricepsLat:["upperArmBack","forearmExt"],tricepsMed:["elbowLat","forearmUlnar"],latissimus:["scapulaInferior","armInner","ringFinger","littleFinger"],teresMajor:["shoulderBack","upperArmBack"],supraspinatus:["shoulderLat","elbowLat"],infraspinatus:["shoulderDeep","upperArmFront"],teresMinor:["shoulderBack","deltoid"],subscapularis:["shoulderBack","scapulaDeep","wristDorsal"],temporalis:["temple","forehead","eyeOrbit","teethUpper"],masseterSup:["jaw","teethUpper","teethLower","earInner"],masseterDeep:["earInner","tmj"],pterygoidMed:["throatFront","tmj","earInner"],pterygoidLatInf:["tmj","cheek"],orbicularisOculiOrb:["forehead","nose","cheek"],corrugatorSupercilii:["glabella","forehead"],levatorLabiiSuperioris:["nose","cheek"],zygomaticusMajor:["nose","glabella","forehead"],mentalis:["chin","lowerLip"],orbicularisOris:["upperLip","lowerLip","nose"],rectusCapPostMajor:["occiput","temple","eyeOrbit"],rectusCapPostMinor:["occiput","vertex","eyeOrbit"],obliquusCapSup:["occiput","temple"],obliquusCapInf:["occiput","behindEar"],rectusCapAnt:["neckFrontUp"],rectusCapLat:["occiput"],longusColli:["throatFront","throatDeep"],longusCapitis:["throatFront","throatDeep"],scalenusAnterior:["chestFront","scapulaMedial","upperArmFront","upperArmBack","thumb","indexFinger"],scalenusMedius:["shoulderLat","upperArmLat","scapulaMedial","handDorsum"],scalenusPosterior:["scapulaMedialUp"],sternocleidomastoid:["forehead","eyeOrbit","cheek","vertex","behindEar"],platysma:["jaw","cheek"],digastricPost:["mastoid","behindEar","throatFront"],digastricAnt:["teethLower","chin"],stylohyoid:["throatFront","mastoid"],geniohyoid:["chin","tongue"],mylohyoid:["tongue","teethLower"],sternohyoid:["throatFront"],sternothyroid:["throatFront"],thyrohyoid:["throatFront"],omohyoid:["neckSide","supraclavicular"],occipitalis:["occiput","eyeOrbit"],frontalis:["forehead"],temporoparietalis:["temple","aboveEar"],spleniusCapitis:["vertex"],spleniusColli:["eyeOrbit","occiput","neckShoulderAngle"],iliocostalisLumborum:["lowerBack","buttockUpLat","lowerAbdomen"],iliocostalisThoracis:["scapulaMedial","chestSide","abdomen"],iliocostalisColli:["neckShoulderAngle","scapulaAbove"],longissimusThoracis:["lowerBack","buttock"],longissimusColli:["neckBack","scapulaAbove"],longissimusCapitis:["behindEar","eyeOrbit"],spinalisThoracis:["thoracicMid"],spinalisColli:["neckBack"],spinalisCapitis:["occiput"],semispinalisThoracis:["upperBackMid"],semispinalisColli:["occiput","neckBack"],multifidusLumborum:["lowerBackMid","sacrum","abdomen"],multifidusThoracis:["thoracicSide","chestFront","abdomen"],multifidusColli:["occiput","neckBack","scapulaMedialUp"],rotatores:["thoracicMid"],interspinalesColli:["neckBack"],interspinalesThoracis:["thoracicMid"],interspinalesLumborum:["lowerBackMid"],intertransversariiVentral:["lowerBackSide"],intertransversariiDorsal:["lowerBackSide"],serratusPostSup:["scapulaDeep","upperArmBack","littleFinger","chestFront"],serratusPostInf:["backRibs"],levatoresCostarumLongi:["backRibs"],levatoresCostarumBreves:["backRibs"],externalIntercostals:["intercostal"],internalIntercostals:["intercostal"],innermostIntercostals:["intercostal"],transversusThoracis:["sternum"],diaphragm:["subcostal","chestSide","shoulderLat"],rectusAbdominis:["upperAbdomen","thoracicMid","lowerAbdomen","lowerBack"],externalOblique:["upperAbdomen","lowerAbdomen","groin"],internalOblique:["lowerAbdomen","groin","pubic"],transversusAbdominis:["subcostal","upperAbdomen"],pyramidalis:["pubic","lowerAbdomen"],quadratusLumborum:["si","buttockUpLat","greaterTroch","lowerBack"],externalAnalSphincter:["anus","coccyx"],puboanalis:["anus","perineum"],pubococcygeus:["coccyx","sacrum","perineum","lowerAbdomen"],iliococcygeus:["coccyx","sacrum"],coccygeus:["coccyx","sacrum","buttock"],gluteusMaximus:["buttock","sacrum","coccyx"],gluteusMedius:["lowerBack","si","buttockUpLat","thighLatBack"],gluteusMinimus:["buttock","thighLat","thighBack","calfLat","ankleLat"],tensorFasciaeLatae:["hipFrontLat","thighLat","kneeLat"],piriformis:["si","buttock","thighBack"],gemellusSup:["buttockDeep"],gemellusInf:["buttockDeep"],obturatorInternus:["coccyx","anus","thighBackUp","pelvisDeep"],obturatorExternus:["groin","thighMedUp"],quadratusFemoris:["buttockLower","thighBackUp"],psoasMajor:["lumbarParaspinal","thighFrontUp"],iliacus:["lowerBack","si","thighFrontUp"],sartorius:["thighMed","thighFront"],rectusFemoris:["kneeFront"],vastusLateralis:["thighLat","kneeLat"],vastusMedialis:["kneeMed","kneeFront"],vastusIntermedius:["thighFront","kneeAbove"],adductorLongus:["groin","thighMed","kneeMed","shinMed"],adductorBrevis:["groin","thighMed"],adductorMagnus:["groin","thighMed","pelvisDeep"],adductorMinimus:["thighMedUp"],gracilis:["thighMed"],pectineus:["groin","thighMedUp"],bicepsFemorisLong:["kneeBack","thighBack"],bicepsFemorisShort:["kneeBackLat"],semitendinosus:["buttockLower","thighBack","kneeBackMed","calfUpper"],semimembranosus:["buttockLower","thighBack","kneeBack"],gastrocnemiusMed:["arch","calfBack"],gastrocnemiusLat:["kneeBack","calfBack","calfLat"],soleus:["heel","si"],plantaris:["kneeBack","calfUpper"],popliteus:["kneeBack"],tibialisPosterior:["achilles","heel","soleFront"],flexorDigitorumLongus:["soleFront","toesPlantar"],flexorHallucisLongus:["halluxPlantar","mt1Head"],tibialisAnterior:["ankleFrontMed","halluxDorsal"],extensorDigitorumLongus:["footDorsum","toesDorsal"],extensorHallucisLongus:["footDorsumMed","halluxDorsal"],fibularisTertius:["ankleFrontLat","heelLat"],fibularisLongus:["ankleLat","footLatBorder"],fibularisBrevis:["ankleLat","footLatBorder"],brachialis:["thumbBase","elbowFront","shoulderFront"],pronatorTeresHum:["wristPalmarRadial","forearmFlexor"],flexorCarpiRadialis:["wristPalmar","palm"],palmarisLongus:["palm","forearmFlexorLow"],fcuHumeral:["wristPalmarUlnar"],fdsHumeroUlnar:["middleFinger","ringFinger","littleFinger"],flexorDigitorumProfundus:["fingersPalmar","fingerTips"],flexorPollicisLongus:["thumbTip"],pronatorQuadratus:["wristPalmar"],anconeus:["elbowLat"],brachioradialis:["elbowLat","wristDorsalRadial","webSpace"],extensorCarpiRadialisLongus:["elbowLat","webSpace"],extensorCarpiRadialisBrevis:["wristDorsal","handDorsum"],extensorDigitorum:["forearmExt","handDorsum","middleFinger","ringFinger"],extensorDigitiMinimi:["littleFinger"],ecuHumeral:["wristDorsalUlnar"],supinator:["elbowLat","webSpace"],abductorPollicisLongus:["wristDorsalRadial","thumbBase"],abductorPollicisBrevis:["thumb","wristPalmarRadial"],opponensPollicis:["thumbTip","wristPalmarRadial"],adductorPollicisObl:["thumbBase","thenar"],abductorDigitiMinimi:["littleFinger"],dorsalInterosseiHand:["handDorsum","fingerTips"]},iy=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","middleProx","ringProx","littleProx","middleDist"]);var nd={surface:"\u8868\u6DFA",mid:"\u808C\u8089\u5C64",deep:"\u6DF1\u8655"},oc=i=>yo[i].p[0]===0;function Qn(i,t){let e=yo[i],n=t==="r";return{id:e.id,label:e.label,seg:iy.has(e.seg)?`${e.seg}.${n?"r":"l"}`:e.seg,pos:[n?-e.p[0]:e.p[0],e.p[1],e.p[2]],radius:e.radius,depth:e.depth}}function vo(i,t){let e=Vs[i]??[],n=[];for(let s of e)oc(s)?n.push(Qn(s,"l")):t==="m"?n.push(Qn(s,"l"),Qn(s,"r")):n.push(Qn(s,t));return n}var us={surface:[1,.92,.25],mid:[1,.52,.08],deep:[.85,.12,.72]},kv=us.mid,sy=.22,ry=.55,oy=new xi(1,20,14),ay=new xi(1,12,8);function id(i,t){return new mn({transparent:!0,opacity:i,wireframe:t,depthTest:!1,depthWrite:!1,side:sn,toneMapped:!1})}function sd(){let i=new De;i.renderOrder=8;let t=[],e=[];function n(l){if(!t[l]){let c=new ae(oy,id(sy,!1)),h=new ae(ay,id(ry,!0));for(let d of[c,h])d.renderOrder=8,d.frustumCulled=!1,d.raycast=()=>{},i.add(d);t[l]=[c,h]}return t[l]}let s=new P,r=new Ut,a=null;function o(l){for(let c=0;c<e.length;c++){let h=e[c];s.fromArray(h.pos),l&&s.applyMatrix4(l.get(h.seg)??r);let d=us[h.depth]??us.mid;for(let u of n(c))u.position.copy(s),u.scale.setScalar(h.radius),u.material.color.setRGB(...d,ce),u.visible=!0}for(let c=e.length;c<t.length;c++)for(let h of t[c])h.visible=!1}return{group:i,show(l,c=a){e=l??[],a=c,o(c)},update(l){a=l,e.length&&o(l)},get count(){return e.length}}}var rd=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]),ac=(()=>{let i={};for(let[t,e]of Object.entries(Vs))for(let n of e)(i[n]??(i[n]=[])).push(t);return i})();function od(){let i=[];for(let t of Object.keys(yo))oc(t)?i.push({...Qn(t,"l"),side:"m"}):i.push({...Qn(t,"l"),side:"l"},{...Qn(t,"r"),side:"r"});return i}function ly(i,t){return t.map(e=>({zone:e,distance:rd(i,e.pos),weight:Jl(rd(i,e.pos),e.radius)})).filter(e=>e.weight>0).sort((e,n)=>n.weight-e.weight)}function ad(i,t,e=12){let n=new Map;for(let s of ly(i,t)){let r=s.zone.side==="m"?["l","r"]:[s.zone.side];for(let a of ac[s.zone.id]??[])for(let o of r){let l=`${a}.${o}`,c=n.get(l);(!c||c.weight<s.weight)&&n.set(l,{id:a,side:o,zone:s.zone,weight:s.weight,distance:s.distance})}}return[...n.values()].sort((s,r)=>r.weight-s.weight||s.distance-r.distance).slice(0,e)}var ld={focus:[1,.55,.78],short:[1,.23,.13],long:[.12,.42,1],spot:[1,.12,.48]},cy={superficial:1,middle:.74,deep:.54},lc=.5,hy=[.12,.05,.2],uy=7,dy=6,cd=10,hd=i=>`${i>0?"+":"\u2212"}${Math.round(Math.abs(i)*100)}%`;function ud(i,t){let e=Nu(),n=[t.joints.thorax.center[0],t.joints.thorax.center[2]],s=new Map(t.parts.map(C=>[C.info.key,C])),r=[],a={...yn},o=null,l=[],c=null,h=[],d=null,u=ed();i.scene.add(u.group);let p=sd();i.scene.add(p.group),i.onResize((C,H)=>u.setResolution(C,H));let g=()=>!ho(a),_=()=>r.forEach(C=>C()),m=0;function f(){for(let C of t.parts)C.stale&&(C.mesh.geometry.computeVertexNormals(),C.mesh.geometry.computeBoundingSphere(),C.stale=!1)}function E(){let C=jl(t.joints,a),H=new Set([...C].filter(([k,$])=>!o||!$.equals(o.get(k))).map(([k])=>k));o=C;for(let k of t.bones)k.mesh.matrix.copy(o.get(k.segment));for(let k of t.parts){if(!k.segments.some(st=>H.has(st)))continue;let $=k.mesh.geometry.getAttribute("position");k.skin?_u(k.rest,k.skin,k.info.skinSegs,o,$.array):gu(k.prep,o.get(k.info.segA),o.get(k.info.segB),$.array),$.needsUpdate=!0,k.stale=!0,k.delta=Yl(k.info,o)}it=null,J=null,F=null,clearTimeout(m),m=setTimeout(f,120),M(),R(),I(),u.update(o),p.update(o)}function M(){for(let C of t.parts){let H=yu({selected:e.selectedKey===C.info.key,poseActive:g(),measure:C.info.measure,delta:C.delta});C.mesh.material.color.setRGB(H[0],H[1],H[2],ce)}}function x(){for(let C of t.bones)C.mesh.visible=e.layers.bones;for(let C of t.parts){let H=Ql(C.info,e),k=C.mesh.material;C.mesh.visible=H.visible,k.opacity=H.opacity;let $=H.opacity<1;k.transparent!==$&&(k.transparent=$,k.needsUpdate=!0),k.depthWrite=!$,H.selected?k.emissive.setRGB(...hy):k.emissive.setRGB(H.glow,H.glow*.85,H.glow*.5),C.pickable=H.pickable,C.target=Fu(C.info,e,n)}M(),R(),I()}function R(){for(let C of t.parts){let H=ku(C.info,e,g(),C.delta);for(let k=0;k<C.tps.length;k++){let{marker:$}=C.tps[k];$.visible=!!H,$.material.depthTest=!e.overlay;let st=e.selectedPain&&e.selectedPain.key===C.info.key&&e.selectedPain.index===k;H&&$.material.color.setRGB(...st?ld.focus:ld[H],ce),$.scale.setScalar(cy[C.info.layer]*(st?1.8:1))}}}function A(){for(let C of t.parts){if(!C.tps.length||!C.tps[0].marker.visible)continue;let H=C.mesh.geometry.getAttribute("position").array,k=C.mesh.geometry.getAttribute("normal").array,$=C.mesh.position;for(let{marker:st,vertex:lt}of C.tps)st.position.set(H[lt*3]+k[lt*3]*lc+$.x,H[lt*3+1]+k[lt*3+1]*lc+$.y,H[lt*3+2]+k[lt*3+2]*lc+$.z)}}function I(){c?.update(o,C=>C.target,g())}function D(C){c&&(i.scene.remove(c.group),c.dispose(),c=null),C.length&&(c=Wu(C,t.parts),i.scene.add(c.group))}function S(C){l=C,e.lineParts=zu(C),D(C),x(),_()}let v=null;function L(){if(v)return v;v=new Map;for(let[C,H]of Object.entries(Ei)){if(C==="neutral")continue;let k=jl(t.joints,H.params);for(let $ of t.parts){if(!$.info.measure)continue;let st=Yl($.info,k),lt=xn(st);lt!=="same"&&(v.has($.info.key)||v.set($.info.key,[]),v.get($.info.key).push({label:H.label,delta:st,state:lt,deltaText:hd(st)}))}}for(let C of v.values())C.sort((H,k)=>Math.abs(k.delta)-Math.abs(H.delta));return v}let Y=od(),F=null;function V(){if(F)return F;let C=new P,H=new Ut;return F=Y.map(k=>(C.fromArray(k.pos),o&&C.applyMatrix4(o.get(k.seg)??H),{...k,pos:C.toArray()})),F}let J=null;function Z(C,H=4){return J??(J=u.allAcupoints(o)),J.map(k=>({...k,distance:Math.hypot(C[0]-k.pos[0],C[1]-k.pos[1],C[2]-k.pos[2])})).filter(k=>k.distance<=dy).sort((k,$)=>k.distance-$.distance).slice(0,H)}let it=null;function q(C,H=3){it??(it=u.allPaths(o).map(st=>({...st,path:xo(st.path)})));let k=[];for(let{meridian:st,side:lt,path:Ht}of it){let U=td(C,Ht);U<=uy&&k.push({meridian:st,side:lt,distance:U})}k.sort((st,lt)=>st.distance-lt.distance);let $=new Set;return k.filter(st=>!$.has(st.meridian.id)&&$.add(st.meridian.id)).slice(0,H)}let ct=[],ut=[];function bt(){for(let C of ct)C.deleteAttribute("aReferred");ct.length=0;for(let C of ut)C.userData.referredColor.value.setRGB(1,1,1);ut.length=0}function Rt(){bt();let C=$t();if(!C.length){p.show([],o);return}let H=new Set,k=($,st,lt,Ht)=>{let U=vu(st,lt,C);if(!U)return;$.setAttribute("aReferred",new fe(U.weights,1)),ct.push($);let Ne=Mu(lt,C,U.hit);Ht.userData.referredColor.value.setRGB(...us[Ne.depth]??us.mid,ce),ut.includes(Ht)||ut.push(Ht);for(let Vt of U.hit)H.add(Vt)};for(let $ of t.parts)$.mesh.visible&&($.restBounds??($.restBounds=Kl($.rest)),k($.mesh.geometry,$.rest,$.restBounds,$.mesh.material));if(e.layers.bones)for(let $ of t.bones){let st=$.mesh.geometry.getAttribute("position").array;$.restBounds??($.restBounds=Kl(st)),k($.mesh.geometry,st,$.restBounds,t.boneMaterial)}p.show(C.filter(($,st)=>!H.has(st)),o)}function $t(){let C=e.selectedPain,H=C&&s.get(C.key);if(H)return vo(H.info.id,H.info.side);if(e.lookup){let k=new Set;return e.lookup.sources.map($=>$.zone).filter($=>!k.has($.id+$.side)&&k.add($.id+$.side))}return e.postureZones&&g()?rt():[]}function j(C=cd){if(!g())return[];let H=new Map;for(let k of t.parts){if(!k.info.measure)continue;let $=xn(k.delta);if($==="same")continue;let st=H.get(k.info.id);(!st||Math.abs(st.delta)<Math.abs(k.delta))&&H.set(k.info.id,{id:k.info.id,key:k.info.key,side:k.info.side,delta:k.delta,state:$})}return[...H.values()].sort((k,$)=>Math.abs($.delta)-Math.abs(k.delta)).slice(0,C)}function rt(){let C=new Set,H=[];for(let k of j()){let $=s.get(k.key);if($)for(let st of vo($.info.id,$.info.side)){let lt=`${st.id}.${st.seg}`;C.has(lt)||(C.add(lt),H.push(st))}}return H}function Mt(C,H){let k=s.get(C),$=k?.tps[H];if(!$)return null;let st=k.mesh.geometry.getAttribute("position").array,lt=k.mesh.position;return[st[$.vertex*3]+lt.x,st[$.vertex*3+1]+lt.y,st[$.vertex*3+2]+lt.z]}return i.onFrame(C=>{let H=1-Math.exp(-C*10);for(let k of t.parts){let $=k.mesh.position;$.set($.x+(k.target[0]-$.x)*H,$.y+(k.target[1]-$.y)*H,$.z+(k.target[2]-$.z)*H)}A()}),E(),f(),x(),{state:e,meridians:u,get params(){return{...a}},get poseActive(){return g()},get activeLines(){return[...l]},get activeMeridians(){return[...h]},parts:t.parts,referred:p,partByKey:C=>s.get(C),referredZonesOfSelection(){let C=e.selectedPain,H=C&&s.get(C.key);return H?vo(H.info.id,H.info.side):[]},nearbyMeridians:q,nearbyAcupoints:Z,postureMuscles:j,posturesFor(C,H=3){return(L().get(C)??[]).slice(0,H)},antagonistsOf(C,H=2){let k=s.get(C);if(!k||!g())return[];let $=xn(k.delta)==="short"?"long":"short";return j(cd).filter(st=>st.state===$&&st.key!==C).slice(0,H).map(st=>({id:st.id,key:st.key,delta:st.delta,deltaText:hd(st.delta)}))},alsoHere(C,H=5){let k=Vs[C]??[],$=new Map;for(let st of k)for(let lt of ac[st]??[])lt!==C&&$.set(lt,($.get(lt)??0)+1);return[...$.entries()].sort((st,lt)=>lt[1]-st[1]).slice(0,H).map(([st,lt])=>({id:st,shared:lt}))},lineMatesOf(C,H=6){let k=new Set;for(let $ of On){let st=$.stations.flatMap(lt=>lt.ids);if(st.includes(C))for(let lt of st)lt!==C&&k.add(lt)}return[...k].slice(0,H)},get postureLabel(){return d},setPostureLabel(C){d=C,_()},lookupAt(C){let H=C?ad(C,V()):[];e.lookup=C?{position:C,sources:H}:null,e.selectedKey=null,e.selectedPain=null,u.select(null),x(),Rt(),_()},setLookupMode(C){e.lookupMode=C,C||(e.lookup=null),_()},setPostureZones(C){e.postureZones=C,Rt(),_()},visiblePainCount(){return t.parts.reduce((C,H)=>C+H.tps.filter(k=>k.marker.visible).length,0)},painPosition:Mt,setParams(C){a={...a,...C},E(),_()},setLayer(C,H){e.layers[C]=H,x(),Rt(),_()},setExplode(C){e.explode=C,x(),_()},setPainMode(C){e.painMode=C,C==="off"&&(e.selectedPain=null),R(),Rt(),_()},setOverlay(C){e.overlay=C,u.setOverlay(C),R(),_()},toggle(C,H){let k=e[C];k.has(H)?k.delete(H):k.add(H),C==="hidden"&&e.selectedKey===H&&(e.selectedKey=null),C==="hidden"&&e.selectedPain?.key===H&&(e.selectedPain=null),x(),Rt(),_()},select(C){e.selectedKey=C,C&&(e.selectedPain=null),x(),Rt(),_()},selectPain(C){let H=C&&e.selectedPain?.key===C.key&&e.selectedPain?.index===C.index;e.selectedPain=H?null:C,e.selectedPain&&(e.selectedKey=null,u.select(null)),x(),Rt(),_()},selectAcupoint(C){let H=u.selected,k=C&&H&&H.track===C.track&&H.acuIndex===C.acuIndex;u.select(k?null:C),!k&&C&&(e.selectedKey=null,e.selectedPain=null),x(),Rt(),_()},get selectedAcupoint(){return u.selected},focus(C){let H=s.get(C);H&&(e.selectedKey=C,e.selectedPain=null,i.lookAt(H.info.centroid),x(),Rt(),_())},toggleLine(C){S(l.includes(C)?l.filter(H=>H!==C):[...l,C])},clearLines(){S([])},toggleMeridian(C){h=h.includes(C)?h.filter(H=>H!==C):[...h,C],u.setActive(h),u.update(o),h.length||u.select(null),_()},setMeridians(C){h=[...new Set(C)],u.setActive(h),u.update(o),h.length||u.select(null),_()},clearMeridians(){this.setMeridians([])},reset(){Bu(e),u.select(null),x(),Rt(),_()},restoreParts(){Ou(e),x(),Rt(),_()},pickAt(C,H){f();let k=u.pickTargets(),$=e.painMode==="off"?[]:t.parts.flatMap(Ht=>Ht.tps.filter(U=>U.marker.visible).map(U=>U.marker)),st=t.parts.filter(Ht=>Ht.pickable).map(Ht=>Ht.mesh),lt=i.pickHit(C,H,[...k,...$,...st]);if(!lt)return{kind:null};if(lt.object.isInstancedMesh){let Ht=u.resolve(lt.object,lt.instanceId);return Ht?{kind:"acupoint",hit:Ht}:{kind:null}}return lt.object.userData.pain?{kind:"pain",pain:lt.object.userData.pain}:lt.object.userData.partKey?{kind:"muscle",key:lt.object.userData.partKey}:{kind:null}},pointAt(C,H){f();let k=t.parts.filter(st=>st.pickable).map(st=>st.mesh),$=e.layers.bones?t.bones.map(st=>st.mesh):[];return i.pickPoint(C,H,[...k,...$])},onChange(C){r.push(C)}}}var fy={l:"\u5DE6",r:"\u53F3",m:"\u4E2D\u7DDA"},dd=[["superficial","\u6DFA\u5C64"],["middle","\u4E2D\u5C64"],["deep","\u6DF1\u5C64"],["bones","\u9AA8\u9ABC"]],py=[["off","\u4E0D\u986F\u793A"],["posture","\u59FF\u52E2\u9020\u6210\u7684"],["all","\u5168\u8EAB"]];function my(i,t,e){return i==="off"?"\u9078\u300C\u59FF\u52E2\u9020\u6210\u7684\u300D\uFF0C\u4E0B\u65B9\u63DB\u59FF\u52E2\u6642\u5C31\u6703\u6A19\u51FA\u88AB\u5B83\u9396\u77ED\u3001\u9396\u9577\u7684\u808C\u8089\u75E0\u75DB\u9EDE\u3002":i==="all"?`\u5168\u8EAB ${e} \u500B\u75E0\u75DB\u9EDE\u3002\u83F1\u5F62\u6108\u5927\u4EE3\u8868\u808C\u8089\u6108\u6DFA\u5C64\uFF1B\u9EDE\u5B83\u770B\u53EF\u80FD\u7684\u554F\u984C\u8207\u8F49\u79FB\u75DB\u7BC4\u570D\u3002`:t?`\u9019\u500B\u59FF\u52E2\u6A19\u51FA ${e} \u500B\u75E0\u75DB\u9EDE\uFF1A\u7D05\uFF1D\u9396\u77ED\u3001\u85CD\uFF1D\u9396\u9577\u3002\u9EDE\u5B83\u770B\u53EF\u80FD\u7684\u554F\u984C\u8207\u8F49\u79FB\u75DB\u7BC4\u570D\u3002`:"\u76EE\u524D\u662F\u4E2D\u7ACB\u59FF\u52E2\uFF0C\u6240\u4EE5\u6C92\u6709\u75E0\u75DB\u9EDE\u3002\u5230\u4E0B\u65B9\u9078\u4E00\u500B\u59FF\u52E2\uFF08\u5713\u80A9\u3001\u982D\u524D\u50BE\u3001\u6ED1\u624B\u6A5F\u2026\uFF09\uFF0C\u88AB\u5B83\u9396\u77ED\u3001\u9396\u9577\u7684\u808C\u8089\u5C31\u6703\u6A19\u51FA\u4F86\u3002"}function fd(i,t,e){i.innerHTML=`
    <h2>\u62C6\u89E3</h2>
    <div class="layers">${dd.map(([o,l])=>`<label class="toggle"><input type="checkbox" data-layer="${o}" checked>${l}</label>`).join("")}</div>
    <div class="pain-modes">
      <span class="label">\u75E0\u75DB\u9EDE</span>
      ${py.map(([o,l])=>`<button type="button" data-pain="${o}">${l}</button>`).join("")}
    </div>
    <p class="hint pain-hint-line"></p>
    <button type="button" class="lookup-toggle" data-lookup></button>
    <p class="hint lookup-hint-line"></p>
    <label class="toggle" title="\u7D93\u8108\u8207\u75E0\u75DB\u9EDE\u4E0D\u6703\u88AB\u808C\u8089\u64CB\u4F4F\uFF0C\u80CC\u9762\u7684\u4E5F\u770B\u5F97\u5230"><input type="checkbox" data-overlay>\u7A7F\u900F\u986F\u793A</label>
    <label class="slider">\u7206\u70B8\u5716<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>\u5FA9\u539F</button>
    <div class="hidden-list"></div>
    <p class="hint">\u95DC\u6389\u6DFA\u5C64\u770B\u4E2D\u5C64\uFF1B\u9EDE\u9078\u808C\u8089\u53EF\u96B1\u85CF\u3001\u534A\u900F\u660E\u6216\u62C9\u51FA\u3002</p>`;let n=i.querySelector(".hidden-list");i.addEventListener("change",o=>{let l=o.target.dataset.layer;l&&t.setLayer(l,o.target.checked),"overlay"in o.target.dataset&&t.setOverlay(o.target.checked)}),i.addEventListener("input",o=>{"explode"in o.target.dataset&&t.setExplode(Number(o.target.value))}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.pain?t.setPainMode(l.dataset.pain):"lookup"in l.dataset?t.setLookupMode(!t.state.lookupMode):"reset"in l.dataset?t.reset():"restoreAll"in l.dataset?t.restoreParts():l.dataset.unset&&t.toggle(l.dataset.unset,l.dataset.key))});let s=o=>{let l=t.partByKey(o);return`${e.muscles[l.info.id].name}\uFF08${fy[l.info.side]}\uFF09`},r=(o,l,c)=>`<li><span>${s(o)}</span><button type="button" data-unset="${l}" data-key="${o}">${c}</button></li>`,a=()=>{for(let[d]of dd)i.querySelector(`[data-layer="${d}"]`).checked=t.state.layers[d];i.querySelector("[data-explode]").value=t.state.explode,i.querySelector("[data-overlay]").checked=t.state.overlay,i.querySelector(".pain-hint-line").textContent=my(t.state.painMode,t.poseActive,t.visiblePainCount());let o=t.state.lookupMode,l=i.querySelector("[data-lookup]");l.textContent=o?"\u2713 \u627E\u75DB\u6E90\u4E2D\uFF08\u9EDE\u4E00\u4E0B\u7D50\u675F\uFF09":"\u627E\u75DB\u6E90\uFF1A\u6211\u54EA\u88E1\u75DB\uFF1F",l.classList.toggle("active",o),i.querySelector(".lookup-hint-line").textContent=o?"\u5728\u6A21\u578B\u4E0A\u9EDE\u6703\u75DB\u7684\u4F4D\u7F6E\uFF0C\u53F3\u5074\u5C31\u5217\u51FA\u8F49\u79FB\u75DB\u6703\u5230\u90A3\u88E1\u7684\u808C\u8089\u3002":"\u77E5\u9053\u54EA\u88E1\u75DB\u3001\u4F46\u4E0D\u77E5\u9053\u662F\u54EA\u689D\u808C\u8089\u6642\uFF0C\u7528\u9019\u500B\u53CD\u67E5\u3002";for(let d of i.querySelectorAll("[data-pain]"))d.classList.toggle("active",d.dataset.pain===t.state.painMode);let{hidden:c,ghost:h}=t.state;n.innerHTML=c.size+h.size===0?"":`<h3>\u5DF2\u96B1\u85CF\uFF0F\u534A\u900F\u660E</h3>
           <ul>${[...c].map(d=>r(d,"hidden","\u986F\u793A")).join("")}${[...h].map(d=>r(d,"ghost","\u53D6\u6D88\u534A\u900F\u660E")).join("")}</ul>
           <button type="button" data-restore-all>\u5168\u90E8\u6062\u5FA9</button>`};t.onChange(a),a()}var gy=[["all","\u5168\u90E8"],["face","\u81C9\u90E8"],["headNeck","\u982D\u9838"],["trunk","\u8EC0\u5E79"],["upperLimb","\u4E0A\u80A2"],["lowerLimb","\u4E0B\u80A2"]];function pd(i,t,e,n){let s=e.trim().toLowerCase(),r=new Map;for(let a of i){let o=t.muscles[a.info.id];n!=="all"&&a.info.region!==n||s&&!`${o.name} ${o.en}`.toLowerCase().includes(s)||(r.has(a.info.id)||r.set(a.info.id,{id:a.info.id,name:o.name,en:o.en,sides:[]}),r.get(a.info.id).sides.push(a.info.side))}return[...r.values()]}var _y={l:"\u5DE6",r:"\u53F3",m:"\u9078\u53D6"};function md(i,t,e){let n="",s="all";i.innerHTML=`
    <h2>\u808C\u8089\u6E05\u55AE</h2>
    <input type="search" placeholder="\u641C\u5C0B\uFF1A\u80F8\u5C0F\u808C\u3001trapezius\u2026" data-search>
    <div class="regions">${gy.map(([l,c])=>`<button type="button" data-region="${l}">${c}</button>`).join("")}</div>
    <p class="muscle-count"></p>
    <ul class="muscle-rows"></ul>`;let r=i.querySelector(".muscle-rows"),a=i.querySelector(".muscle-count");i.addEventListener("input",l=>{"search"in l.target.dataset&&(n=l.target.value,o())}),i.addEventListener("click",l=>{let c=l.target.closest("button");c&&(c.dataset.region?(s=c.dataset.region,o()):c.dataset.key&&t.focus(c.dataset.key))});function o(){for(let h of i.querySelectorAll("[data-region]"))h.classList.toggle("active",h.dataset.region===s);let l=pd(t.parts,e,"","all").length;if(!n.trim()&&s==="all"){a.textContent=`\u5171 ${l} \u689D`,r.innerHTML='<li class="hint">\u8F38\u5165\u95DC\u9375\u5B57\uFF0C\u6216\u6309\u4E0A\u9762\u7684\u5206\u5340\uFF08\u982D\u9838\u3001\u8EC0\u5E79\u3001\u4E0A\u80A2\u3001\u4E0B\u80A2\uFF09\u5217\u51FA\u808C\u8089\u3002</li>';return}let c=pd(t.parts,e,n,s);a.textContent=`\u7B26\u5408 ${c.length} \u689D\uFF0F\u5171 ${l} \u689D\uFF08\u53EF\u4E0A\u4E0B\u6372\u52D5\uFF09`,r.innerHTML=c.length?c.map(h=>`<li title="${h.en}"><span>${h.name}</span>${h.sides.map(d=>`<button type="button" data-key="${h.id}.${d}" class="${t.state.selectedKey===`${h.id}.${d}`?"active":""}">${_y[d]}</button>`).join("")}</li>`).join(""):'<li class="hint">\u627E\u4E0D\u5230\u7B26\u5408\u7684\u808C\u8089</li>'}t.onChange(o),o()}function xy(i){let t=Math.abs(i??0);return t<.03?null:t<.1?"mild":t<.2?"clear":"strong"}var yy={mild:"\u7A0D\u5FAE",clear:"\u660E\u986F",strong:"\u76F8\u7576\u660E\u986F\u5730"},vy={short:"\u7E2E\u77ED",long:"\u88AB\u62C9\u9577"},My={superficial:"\u5B83\u5728\u6700\u5916\u5C64\uFF0C\u81EA\u5DF1\u7528\u624B\u6216\u6EFE\u7B52\u6309\u5F97\u5230\u3002",middle:"\u5B83\u88AB\u5916\u5C64\u7684\u808C\u8089\u84CB\u4F4F\uFF0C\u81EA\u5DF1\u6309\u4E0D\u592A\u5230\uFF0C\u8981\u5148\u653E\u9B06\u8868\u5C64\uFF0C\u6216\u8ACB\u4EBA\u5F92\u624B\u8655\u7406\u3002",deep:"\u5B83\u5728\u5F88\u6DF1\u7684\u5730\u65B9\uFF0C\u81EA\u5DF1\u6309\u4E0D\u5230\uFF0C\u9700\u8981\u5C08\u696D\u7684\u5F92\u624B\u6CBB\u7642\u6216\u4E7E\u91DD\u3002"},by=["\u9EBB","\u795E\u7D93","\u7121\u529B"],gd=i=>by.some(t=>(i??"").includes(t)),cc=(i,t=3)=>i.slice(0,t).join("\u3001");function _d(i){let t=[],e=xy(i.delta),n;i.lock&&e?(n=`\u4F60\u9EDE\u7684\u9019\u500B\u4F4D\u7F6E\u662F\u300C${i.name}\u300D\u3002\u5728${i.postureLabel?`\u300C${i.postureLabel}\u300D\u9019\u500B\u59FF\u52E2`:"\u76EE\u524D\u9019\u500B\u59FF\u52E2"}\u4E0B\uFF0C\u5B83\u88AB${yy[e]}${vy[i.lock]}\u3002`,n+=i.lock==="short"?"\u808C\u8089\u9577\u671F\u505C\u5728\u7E2E\u77ED\u7684\u4F4D\u7F6E\uFF0C\u5C40\u90E8\u6703\u8B8A\u7DCA\u3001\u5F62\u6210\u6309\u4E0B\u53BB\u7279\u5225\u75DB\u7684\u7D50\u7BC0\u3002":"\u808C\u8089\u9577\u671F\u88AB\u62C9\u9577\u537B\u9084\u8981\u51FA\u529B\u6490\u4F4F\uFF0C\u6703\u53C8\u9178\u53C8\u7DCA\u2014\u2014\u9019\u7A2E\u60C5\u6CC1\u4E00\u76F4\u6309\u5B83\u4E0D\u6703\u597D\uFF0C\u8981\u5148\u8655\u7406\u628A\u5B83\u62C9\u9577\u7684\u90A3\u4E00\u908A\u3002"):n=`\u4F60\u9EDE\u7684\u9019\u500B\u4F4D\u7F6E\u662F\u300C${i.name}\u300D\u3002\u5B83\u5E38\u898B\u7684\u75E0\u75DB\u4F4D\u7F6E\u5C31\u5728${i.painPoints}\u3002`,t.push({title:"\u70BA\u4EC0\u9EBC\u6703\u75DB",body:n});let s=[];i.worstPostures.length&&s.push(`\u9019\u689D\u808C\u8089\u5728${cc(i.worstPostures.map(l=>l.label))}\u7684\u6642\u5019\u6700\u5403\u8667\u3002`);let r=i.lock==="long"?i.lockedLong:i.lockedShort;r&&r!=="\u2014"&&s.push(`\u65E5\u5E38\u4E2D\u5E38\u898B\u7684\u539F\u56E0\u662F\uFF1A${r}\u3002`),s.length&&t.push({title:"\u4EC0\u9EBC\u6642\u5019\u6700\u5BB9\u6613\u767C\u751F",body:s.join("")});let a=i.lock==="long"?[...i.care.strengthen,...i.care.release]:[...i.care.release,...i.care.strengthen];t.push({title:"\u73FE\u5728\u53EF\u4EE5\u505A\u7684",body:a.length?a.slice(0,2).map(l=>`<b>${l.name}</b>\uFF1A${l.how}`).join("<br>"):"\u5148\u5F9E\u6539\u8B8A\u59FF\u52E2\u958B\u59CB\uFF1A\u6BCF 30 \u5206\u9418\u8D77\u4F86\u52D5\u4E00\u52D5\uFF0C\u4E0D\u8981\u8B93\u540C\u4E00\u500B\u59FF\u52E2\u7DAD\u6301\u592A\u4E45\u3002\u8981\u505A\u54EA\u4E9B\u904B\u52D5\uFF0C\u8ACB\u8A62\u554F\u4F60\u7684\u6CBB\u7642\u5E2B\u6216\u91AB\u5E2B\u3002"});let o=["\u4F11\u606F\u6216\u591C\u88E1\u53CD\u800C\u66F4\u75DB","\u4E0D\u660E\u539F\u56E0\u7684\u9AD4\u91CD\u6E1B\u8F15\u6216\u767C\u71D2","\u660E\u986F\u5916\u50B7\u4E4B\u5F8C"];return(gd(i.problems)||gd(i.referredPain))&&o.unshift("\u624B\u8173\u767C\u9EBB\u3001\u7121\u529B\uFF0C\u6216\u9EBB\u7684\u7BC4\u570D\u6108\u4F86\u6108\u5927"),t.push({title:"\u9019\u4E9B\u60C5\u6CC1\u8981\u770B\u91AB\u751F",body:`${o.join("\u3001")}\uFF0C\u6216\u75DB\u6301\u7E8C\u52A0\u91CD\u800C\u4E14\u548C\u59FF\u52E2\u7121\u95DC\u3002`}),t}function xd(i){let t=[],e=[];i.lock?(e.push(`<b>${i.deltaText}\u3000${i.lock==="short"?"\u9396\u77ED":"\u9396\u9577"}</b>\uFF08${i.layerText}\uFF09\u3002`),e.push(i.lock==="short"?"\u8655\u7F6E\u4EE5\u653E\u9B06\u3001\u4F38\u5C55\u70BA\u4E3B\uFF0C\u4E26\u5148\u79FB\u9664\u8B93\u5B83\u7DAD\u6301\u7E2E\u77ED\u7684\u59FF\u52E2\u56E0\u7D20\u3002":"\u88AB\u62C9\u9577\u800C\u6301\u7E8C\u4F4E\u5EA6\u6536\u7E2E\uFF0C\u55AE\u7D14\u6309\u58D3\u6216\u4F38\u5C55\u6703\u66F4\u9B06\u66F4\u7121\u529B\uFF1B\u9806\u5E8F\u662F\u5148\u653E\u9B06\u5C0D\u5074\u9396\u77ED\u7684\u808C\u8089\uFF0C\u518D\u6F38\u9032\u5F37\u5316\u9019\u4E00\u689D\u3002")):e.push(`\u76EE\u524D\u59FF\u52E2\u4E0B\u9577\u5EA6\u6C92\u6709\u660E\u986F\u8B8A\u5316\uFF08${i.layerText}\uFF09\u3002\u8981\u5F9E\u91CD\u8907\u6027\u52D5\u4F5C\u6216\u8CA0\u8377\u627E\u539F\u56E0\uFF0C\u800C\u4E0D\u662F\u975C\u614B\u59FF\u52E2\u3002`),e.push(My[i.layer]),i.antagonists.length&&e.push(`\u540C\u4E00\u500B\u59FF\u52E2\u4E0B\u65B9\u5411\u76F8\u53CD\u7684\u662F\uFF1A${i.antagonists.map(r=>`${r.name} ${r.deltaText}`).join("\u3001")}\u3002`),t.push({title:"\u76EE\u524D\u72C0\u614B\u8207\u8655\u7F6E\u65B9\u5411",body:e.join(" ")}),i.worstPostures.length&&t.push({title:"\u54EA\u4E9B\u59FF\u52E2\u6700\u5403\u8667",body:i.worstPostures.map(r=>`${r.label} ${r.deltaText}`).join("\uFF5C")}),i.alsoHere.length&&t.push({title:"\u9451\u5225\uFF08\u540C\u6A23\u6703\u75DB\u5728\u9019\u88E1\u7684\uFF09",body:`${i.alsoHere.map(r=>r.name).join("\u3001")}\u3002\u8981\u9760\u6309\u58D3\u80FD\u4E0D\u80FD\u91CD\u73FE\u75C5\u4EBA\u5E73\u5E38\u7684\u75DB\u4F86\u5206\u8FA8\u3002`});let n=i.zones.filter(r=>r.depth==="deep").map(r=>r.label);n.length&&t.push({title:"\u5BB9\u6613\u88AB\u8AA4\u8A8D",body:`\u8F49\u79FB\u75DB\u6703\u5230${cc(n,4)}\u9019\u4E9B\u6DF1\u8655\uFF0C\u5E38\u88AB\u7576\u6210\u95DC\u7BC0\u6216\u5167\u81DF\u7684\u554F\u984C\u3002`}),i.lineMates.length&&t.push({title:"\u7B4B\u819C\u9023\u9396",body:`\u540C\u5C6C${i.lines}\uFF1A${cc(i.lineMates,4)}\u3002\u53EA\u8655\u7406\u9019\u4E00\u689D\u5BB9\u6613\u5FA9\u767C\u6642\uFF0C\u5F80\u7DDA\u4E0A\u4E0B\u6E38\u627E\u3002`});let s=[];return i.lock==="short"?s.push("\u75DB\u8655\u56FA\u5B9A\u3001\u62D2\u6309\uFF0C\u504F<b>\u6C23\u6EEF\u8840\u7600</b>\uFF08\u4E0D\u901A\u5247\u75DB\uFF09\uFF0C\u4EE5\u901A\u70BA\u4E3B\u3002"):i.lock==="long"&&s.push("\u9178\u8EDF\u559C\u6309\u3001\u4E45\u6309\u624D\u8212\u670D\uFF0C\u504F<b>\u6C23\u8840\u4E0D\u8DB3</b>\uFF08\u4E0D\u69AE\u5247\u75DB\uFF09\uFF0C\u5B9C\u88DC\u5B9C\u7078\uFF0C\u5C11\u7528\u91CD\u7009\u3002"),i.meridians.length&&s.push(`\u5FAA\u884C\u7D93\u904E\u7684\u662F${i.meridians.map(r=>r.short).join("\u3001")}\uFF0C\u5C6C\u540C\u540D\u7D93\u7B4B\u3002`),i.acupoints.length&&s.push(`\u8FD1\u53D6\uFF1A${i.acupoints.map(r=>`${r.name}\uFF08${r.code}\uFF09`).join("\u3001")}\u3002`),i.distal&&s.push(`\u9060\u53D6\uFF1A${i.distal}`),s.length&&t.push({title:"\u4E2D\u91AB",body:s.join(" ")}),t}var hc={l:"\u5DE6\u5074",r:"\u53F3\u5074",m:"\u4E2D\u7DDA"},vd="anatomyTrains3d.painView",ds=(()=>{try{return localStorage.getItem(vd)==="clinic"?"clinic":"patient"}catch{return"patient"}})(),Sy={superficial:"\u6DFA\u5C64",middle:"\u4E2D\u5C64",deep:"\u6DF1\u5C64"},Ey={superficial:"\u6DFA\u5C64",middle:"\u4E2D\u5C64\uFF08\u95DC\u6389\u6DFA\u5C64\u624D\u770B\u5F97\u5230\uFF09",deep:"\u6DF1\u5C64\uFF08\u95DC\u6389\u6DFA\u5C64\u3001\u4E2D\u5C64\u624D\u770B\u5F97\u5230\uFF09"},yd={l:"\u5DE6",r:"\u53F3",m:""};function Md(i,t,e){function n(){let s=t.selectedAcupoint;if(s)return void(i.innerHTML=wy(s,e));if(t.state.lookup)return void(i.innerHTML=Ay(t,e));if(t.state.selectedPain)return void(i.innerHTML=Ry(t,e));if(t.state.selectedKey)return void(i.innerHTML=Cy(t,e));i.innerHTML=Iy(t,e)}i.addEventListener("click",s=>{let r=s.target.closest("button");if(r)if(r.dataset.act&&t.state.selectedKey)t.toggle(r.dataset.act,t.state.selectedKey);else if(r.dataset.muscle)t.focus(r.dataset.muscle);else if("postureZones"in r.dataset)t.setPostureZones(!t.state.postureZones);else if(r.dataset.view){ds=r.dataset.view;try{localStorage.setItem(vd,ds)}catch{}n()}else r.dataset.meridian&&t.toggleMeridian(r.dataset.meridian)}),t.onChange(n),n()}function wy({meridian:i,side:t,point:e},n){return`
    <h2>${e.name}<span class="side">${e.code}${yd[t]?`\u3000${yd[t]}\u5074`:""}</span></h2>
    <p class="en">${i.name}\uFF08${i.short}\uFF09</p>
    <dl>
      <dt>\u5B9A\u4F4D</dt><dd>${e.note||"\u2014"}</dd>
      <dt>\u6240\u5C6C</dt><dd>${i.organ}</dd>
      <dt>\u8D70\u5411</dt><dd>${i.flow}</dd>
    </dl>
    <p class="notes">${n.meridians[i.id]??""}</p>
    <p class="hint">\u7A74\u4F4D\u5EA7\u6A19\u662F\u4F9D\u6A21\u578B\u9AA8\u67B6\u4F30\u7B97\u7684\u6559\u5B78\u793A\u610F\uFF0C\u5BE6\u969B\u53D6\u7A74\u8ACB\u4F9D\u6A19\u6E96\u5B9A\u4F4D\u8207\u9AD4\u8868\u6A19\u8A8C\u3002</p>`}function Ty(i){let t=i.west,e=i.tcm;return`
    <details class="view">
      <summary>\u540D\u8A5E\u8AAA\u660E\uFF08\u6FC0\u75DB\u9EDE\u3001\u963F\u662F\u7A74\u3001\u7D93\u7B4B\uFF09</summary>
      <p>${t.term}</p>
      <p>${t.how}</p>
      <p>${e.ashi}</p>
      <p>${e.jingjin}</p>
      <p class="notes">${e.note}</p>
    </details>`}function Ay(i,t){let{sources:e}=i.state.lookup;if(!e.length)return`
      <h2>\u627E\u75DB\u6E90</h2>
      <p class="hint">\u9019\u500B\u4F4D\u7F6E\u6C92\u6709\u5C0D\u61C9\u5230\u6536\u9304\u7684\u8F49\u79FB\u75DB\u5340\u57DF\u3002\u8A66\u8A66\u9EDE\u5728\u808C\u8089\u6BD4\u8F03\u591A\u7684\u5730\u65B9\uFF0C\u6216\u628A\u8996\u89D2\u8F49\u5230\u771F\u6B63\u6703\u75DB\u7684\u90A3\u4E00\u9762\u518D\u9EDE\u4E00\u6B21\u3002</p>`;let n=e.map(s=>{let r=t.muscles[s.id],a=i.partByKey(`${s.id}.${s.side}`)??i.partByKey(`${s.id}.m`);return!a||!r?"":`
        <li>
          <button type="button" class="link" data-muscle="${a.info.key}">${r.name}<span class="side">${hc[a.info.side]}</span></button>
          <span class="zone"><b class="depth ${s.zone.depth}">${nd[s.zone.depth]}</b>${s.zone.label}</span>
          <p>${r.painPoints==="\u2014"?r.referredPain:r.painPoints}</p>
        </li>`}).join("");return`
    <h2>\u627E\u75DB\u6E90<span class="side">${e.length} \u689D\u53EF\u80FD\u7684\u808C\u8089</span></h2>
    <p class="hint">\u4EE5\u4E0B\u808C\u8089\u7684\u8F49\u79FB\u75DB\u6703\u5230\u4F60\u9EDE\u7684\u90A3\u500B\u4F4D\u7F6E\uFF0C\u6108\u4E0A\u9762\u4EE3\u8868\u90A3\u4E00\u9EDE\u6108\u843D\u5728\u5B83\u7684\u8F49\u79FB\u75DB\u7BC4\u570D\u4E2D\u5FC3\u3002\u9EDE\u808C\u8089\u540D\u7A31\u53EF\u4EE5\u8DF3\u904E\u53BB\u770B\u5B8C\u6574\u8AAA\u660E\u8207\u75E0\u75DB\u9EDE\u3002</p>
    <ol class="lookup-list">${n}</ol>
    <p class="hint">\u540C\u4E00\u500B\u5730\u65B9\u75DB\u53EF\u80FD\u6709\u597D\u5E7E\u500B\u4F86\u6E90\uFF0C\u8981\u9760\u6309\u58D3\u80FD\u4E0D\u80FD\u91CD\u73FE\u4F60\u5E73\u5E38\u7684\u75DB\u4F86\u5206\u8FA8\u3002\u9019\u662F\u6574\u7406\u51FA\u4F86\u7684\u5E38\u898B\u95DC\u806F\uFF0C\u4E0D\u80FD\u53D6\u4EE3\u5C08\u696D\u8A55\u4F30\u3002</p>`}function Ry(i,t){let{key:e,index:n}=i.state.selectedPain,s=i.partByKey(e);if(!s)return'<p class="hint">\u627E\u4E0D\u5230\u9019\u500B\u75E0\u75DB\u9EDE\u3002</p>';let r=t.muscles[s.info.id],a=xn(s.delta),o=i.painPosition(e,n),l=o?i.nearbyMeridians(o):[],c=o?i.nearbyAcupoints(o):[],h=i.referredZonesOfSelection(),d=t.careFor[s.info.id]??{release:[],strengthen:[]},u={release:(d.release??[]).map(f=>t.selfCare[f]).filter(Boolean),strengthen:(d.strengthen??[]).map(f=>t.selfCare[f]).filter(Boolean)},p={name:r.name,layer:s.info.layer,layerText:Sy[s.info.layer],delta:s.delta,deltaText:lo(s.delta),lock:i.poseActive&&s.info.measure&&a!=="same"?a:null,postureLabel:i.postureLabel,worstPostures:i.posturesFor(e),antagonists:i.antagonistsOf(e).map(f=>({name:t.muscles[f.id].name,deltaText:f.deltaText})),zones:h,alsoHere:i.alsoHere(s.info.id).map(f=>({name:t.muscles[f.id].name})),lineMates:i.lineMatesOf(s.info.id).map(f=>t.muscles[f].name),lines:r.lines.join("\u3001"),meridians:l.map(f=>({short:f.meridian.short,id:f.meridian.id})),acupoints:c.map(f=>({name:f.point.name,code:f.point.code})),distal:l.map(f=>t.meridianPoints[f.meridian.id]).filter(Boolean)[0]??null,painPoints:r.painPoints,referredPain:r.referredPain,problems:t.problems[s.info.id]??"",lockedShort:r.lockedShort,lockedLong:r.lockedLong,care:u};p.lines||(p.lineMates=[]);let g=ds==="patient"?_d(p):xd(p),_=s.tps.length,m=h.length?'<p class="hint">\u6A21\u578B\u4E0A\u5DF2\u628A\u8F49\u79FB\u75DB\u7BC4\u570D\u67D3\u51FA\u4F86\uFF08\u9EC3\uFF1D\u8868\u6DFA\u3001\u6A59\uFF1D\u808C\u8089\u5C64\u3001\u6D0B\u7D05\uFF1D\u6DF1\u8655\uFF09\u3002</p>':"";return`
    <h2>\u75E0\u75DB\u9EDE<span class="side">${r.name}\u3000${hc[s.info.side]}${_>1?`\u3000\u7B2C ${n+1} \u9EDE`:""}</span></h2>
    <div class="view-switch">
      <button type="button" data-view="patient" class="${ds==="patient"?"active":""}">\u75C5\u4EBA\u7248</button>
      <button type="button" data-view="clinic" class="${ds==="clinic"?"active":""}">\u81E8\u5E8A\u7248</button>
    </div>
    ${g.map(f=>`<h3 class="block">${f.title}</h3><p>${f.body}</p>`).join("")}
    ${m}
    ${Ty(t)}
    <div class="actions"><button type="button" data-muscle="${e}">\u770B\u9019\u689D\u808C\u8089\u7684\u5B8C\u6574\u8AAA\u660E</button></div>
    <p class="hint">${ds==="patient"?"\u4EE5\u4E0A\u662F\u5E38\u898B\u95DC\u806F\u7684\u6574\u7406\uFF0C\u4E0D\u662F\u8A3A\u65B7\u3002\u52D5\u4F5C\u505A\u4E86\u6703\u66F4\u75DB\u5C31\u505C\u4E0B\u4F86\uFF0C\u6709\u4E0A\u9762\u63D0\u5230\u7684\u60C5\u6CC1\u8ACB\u5C31\u91AB\u3002":"\u75E0\u75DB\u9EDE\u8207\u8F49\u79FB\u75DB\u662F\u5E38\u898B\u4F4D\u7F6E\u7684\u6574\u7406\uFF0C\u4E0D\u80FD\u53D6\u4EE3\u81E8\u5E8A\u8A55\u4F30\uFF1B\u81EA\u6211\u7167\u9867\u7684\u52D5\u4F5C\u5C1A\u5F85\u6CBB\u7642\u5E2B\u5BE9\u95B1\u3002"}</p>`}function Cy(i,t){let e=i.state.selectedKey,n=i.partByKey(e),s=t.muscles[n.info.id],r=i.state,a=xn(n.delta),o="";i.poseActive&&(o=n.info.measure?`<p class="delta ${a}">\u76EE\u524D ${lo(n.delta)}\u3000${ao[a]}</p>`:'<p class="delta same">\u4E0D\u8A08\u7B97\u9577\u5EA6\u8B8A\u5316\uFF08\u7B4B\u819C\u3001\u808C\u8171\uFF0C\u4EE5\u53CA\u81C9\u90E8\u7B49\u672C\u6A21\u578B\u6C92\u6709\u5EFA\u95DC\u7BC0\u7684\u90E8\u4F4D\uFF09</p>');let l=i.poseActive&&n.info.measure&&a!=="same"?`<p class="pain-hint ${a}">${t.painHints[a]}</p>`:"";return`
    <h2>${s.name}<span class="side">${hc[n.info.side]}</span></h2>
    <p class="en">${s.en}<br><i>${s.latin}</i></p>
    ${o}
    <dl>
      <dt>\u6240\u5728\u5C64\u6B21</dt><dd>${Ey[n.info.layer]}</dd>
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
    </div>`}function Py(i,t){let e=i.postureMuscles();if(!e.length)return"";let n=e.map(r=>{let a=t.muscles[r.id];return`<li class="${r.state}"><button type="button" class="link" data-muscle="${r.key}">${a.name}</button><span>${lo(r.delta)}\u3000${ao[r.state]}</span></li>`}).join(""),s=i.state.postureZones;return`
    <h2>\u9019\u500B\u59FF\u52E2\u6700\u5403\u8667\u7684\u808C\u8089</h2>
    <p class="hint">\u4F9D\u9577\u5EA6\u8B8A\u5316\u6392\u5E8F\uFF08\u7D05\uFF1D\u9396\u77ED\u3001\u85CD\uFF1D\u9396\u9577\uFF09\u3002\u9EDE\u540D\u7A31\u8DF3\u5230\u90A3\u689D\u808C\u8089\u3002</p>
    <ol class="posture-list">${n}</ol>
    <div class="actions"><button type="button" data-posture-zones class="${s?"active":""}">${s?"\u2713 \u5DF2\u6A19\u51FA\u9019\u500B\u59FF\u52E2\u7684\u75DB\u5340":"\u6A19\u51FA\u9019\u500B\u59FF\u52E2\u7684\u75DB\u5340"}</button></div>
    <p class="hint">\u300C\u75DB\u5340\u300D\u628A\u4E0A\u9762\u9019\u4E9B\u808C\u8089\u7684\u8F49\u79FB\u75DB\u758A\u8D77\u4F86\u67D3\u5728\u6A21\u578B\u4E0A\uFF0C\u5C31\u662F\u9019\u500B\u59FF\u52E2\u6700\u5BB9\u6613\u611F\u89BA\u5230\u75E0\u75DB\u7684\u5730\u65B9\u3002</p>`}function Iy(i,t){let e=i.activeLines.map(r=>On.find(a=>a.id===r)),n=i.activeMeridians.map(Ku).filter(Boolean),s=Py(i,t);return!e.length&&!n.length?s||'<p class="hint">\u9EDE\u9078\u808C\u8089\u3001\u75E0\u75DB\u9EDE\u6216\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u4E5F\u53EF\u4EE5\u5F9E\u5DE6\u5074\u6E05\u55AE\u9078\u53D6\u3002</p>':`
    ${s}
    ${e.map(r=>`<h2>${r.name}</h2><p>${t.lines[r.name]}</p>`).join("")}
    ${n.map(r=>`<h2>${r.name}<span class="side">${r.code}</span></h2><p>${t.meridians[r.id]}</p>`).join("")}
    <p class="hint">\u9EDE\u9078\u7DDA\u4E0A\u7684\u808C\u8089\u6216\u7D93\u8108\u4E0A\u7684\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u518D\u9EDE\u4E00\u6B21\u53EF\u53D6\u6D88\u3002</p>`}var ti=()=>window.matchMedia("(max-width: 900px)").matches;function Ly(i,t){try{let e=localStorage.getItem(i);return e===null?t:e==="1"}catch{return t}}function Dy(i,t){try{localStorage.setItem(i,t?"1":"0")}catch{}}function ei(i,t,{collapsedByDefault:e=!1,onToggle:n}={}){let s=i.querySelector("[data-collapse]");if(!s)return;let r=s.dataset.collapse,a=Ly(t,e),o=()=>{i.classList.toggle("collapsed",a),s.textContent=`${r} ${a?"\u25B8":"\u25BE"}`,s.title=`${a?"\u5C55\u958B":"\u6536\u5408"}${r}`,s.setAttribute("aria-label",s.title),s.setAttribute("aria-expanded",String(!a))};s.addEventListener("click",()=>{a=!a,Dy(t,a),o(),n?.(a)}),o()}var Uy=1500,bd="anatomyTrains3d.jointsOpen";function Ny(){try{return localStorage.getItem(bd)==="1"}catch{return!1}}function Fy(i){try{localStorage.setItem(bd,i?"1":"0")}catch{}}function Sd(i,t,e,n){let s="neutral",r="both",a=0,o=u=>`<label><span>${u.label}</span><small>${u.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${u.key}"><small>${u.maxLabel}</small></label>`;i.innerHTML=`
    <div class="presets">
      <button type="button" class="bar-toggle" data-collapse="\u59FF\u52E2"></button>
      <span class="collapse-body">
        ${Object.entries(Ei).map(([u,p])=>`<button type="button" data-preset="${u}">${p.label}</button>`).join("")}
        <button type="button" data-play>\u25B6 \u64AD\u653E</button>
        <button type="button" class="joints-toggle" data-joints aria-expanded="false"></button>
      </span>
    </div>
    <p class="posture-note"></p>
    <div class="slider-groups">
      ${wu.map(([u,p])=>`
        <fieldset class="slider-group${zs.filter(g=>g.group===u).length>5?" wide":""}">
          <legend>${p}</legend>
          ${zs.some(g=>g.group===u&&g.sided)?`<div class="side-modes">${Tu.map(([g,_])=>`<button type="button" data-mode="${g}">${_}</button>`).join("")}</div>`:""}
          ${zs.filter(g=>g.group===u).map(o).join("")}
        </fieldset>`).join("")}
    </div>`;let l=i.querySelector("[data-joints]");function c(u){i.classList.toggle("open",u),l.setAttribute("aria-expanded",String(u)),l.textContent=u?"\u6536\u8D77\u95DC\u7BC0 \u25B4":"\u8ABF\u6574\u95DC\u7BC0 \u25BE"}c(Ny());function h(u,p){cancelAnimationFrame(a);let g=performance.now(),_=m=>{let f=Math.min(1,(m-g)/Uy);t.setParams(Cu(u,p,Pu(f))),f<1&&(a=requestAnimationFrame(_))};a=requestAnimationFrame(_)}i.addEventListener("click",u=>{let p=u.target.closest("button");p&&(p.dataset.preset?(s=p.dataset.preset,h(t.params,Ei[s].params)):"play"in p.dataset?((!s||s==="neutral")&&(s="roundedShoulders"),h(yn,Ei[s].params)):p.dataset.mode?r=p.dataset.mode:"joints"in p.dataset&&(c(!i.classList.contains("open")),Fy(i.classList.contains("open"))),d())}),i.addEventListener("input",u=>{let p=u.target.dataset.param;if(!p)return;cancelAnimationFrame(a);let g=Ru(t.params,p,Iu(Number(u.target.value)),r);s=ho(g)?"neutral":null,t.setParams(g)});function d(){let u=t.params;for(let g of zs)i.querySelector(`[data-param="${g.key}"]`).value=Au(u,g.key,r);for(let g of i.querySelectorAll("[data-preset]"))g.classList.toggle("active",g.dataset.preset===s);for(let g of i.querySelectorAll("[data-mode]"))g.classList.toggle("active",g.dataset.mode===r);i.querySelector(".posture-note").textContent=s?e.postures[s]:"\u81EA\u8A02\u59FF\u52E2\uFF1A\u62D6\u52D5\u6ED1\u687F\u8ABF\u6574\u5404\u95DC\u7BC0\uFF1B\u4E0A\u80A2\u3001\u4E0B\u80A2\u53EF\u5207\u63DB\u300C\u5169\u5074\u4E00\u8D77\u300D\u6216\u53EA\u8ABF\u5DE6\u5074\u3001\u53F3\u5074\u3002";let p=s&&s!=="neutral"?Ei[s].label:null;t.postureLabel!==p&&t.setPostureLabel(p)}t.onChange(d),d(),ei(i,"anatomyTrains3d.postureBarOpen",{collapsedByDefault:ti(),onToggle:n})}function Ed(i,t,e){i.innerHTML=`<button type="button" class="bar-toggle" data-collapse="\u5217\u8ECA\u7DDA"></button><span class="collapse-body"><button type="button" data-line="">\u5168\u90E8</button>${On.map(s=>`<button type="button" data-line="${s.id}">${s.name}</button>`).join("")}</span>`,ei(i,"anatomyTrains3d.lineBarOpen",{collapsedByDefault:ti(),onToggle:e}),i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.line?t.toggleLine(r.dataset.line):t.clearLines())});let n=()=>{let s=t.activeLines;for(let r of i.querySelectorAll("[data-line]"))r.classList.toggle("active",r.dataset.line?s.includes(r.dataset.line):!s.length)};t.onChange(n),n()}function wd(i,t,e){let n=Object.fromEntries(rc),s=o=>`<button type="button" data-meridian="${o.id}" title="${o.name}\uFF08${n[o.group]}\uFF09\uFF1A${o.flow}"><i style="background:rgb(${o.color.map(l=>Math.round(l*255)).join(",")})"></i>${o.short}</button>`,r=rc.map(([o])=>Hs.filter(l=>l.group===o).map(s).join(""));i.innerHTML=`<button type="button" class="bar-toggle" data-collapse="\u7D93\u8108"></button><span class="collapse-body"><button type="button" data-clear-meridians>\u4E0D\u986F\u793A</button>${r.map(o=>`<span class="sep"></span>${o}`).join("")}</span>`,ei(i,"anatomyTrains3d.meridianBarOpen",{collapsedByDefault:ti(),onToggle:e}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.meridian?t.toggleMeridian(l.dataset.meridian):"clearMeridians"in l.dataset&&t.clearMeridians())});let a=()=>{let o=t.activeMeridians;for(let l of i.querySelectorAll("[data-meridian]"))l.classList.toggle("active",o.includes(l.dataset.meridian));i.querySelector("[data-clear-meridians]").classList.toggle("active",!o.length)};t.onChange(a),a()}var Td=[["up","\u25B2","\u756B\u9762\u4E0A\u79FB",0,1],["left","\u25C0","\u756B\u9762\u5DE6\u79FB",-1,0],["center","\u25CF","\u7F6E\u4E2D\uFF08\u56DE\u5230\u8EAB\u9AD4\u4E2D\u7DDA\uFF09"],["right","\u25B6","\u756B\u9762\u53F3\u79FB",1,0],["down","\u25BC","\u756B\u9762\u4E0B\u79FB",0,-1]];function Ad(i,t){i.innerHTML=Td.map(([e,n,s])=>`<button type="button" class="pan-${e}" data-pan="${e}" title="${s}" aria-label="${s}">${n}</button>`).join("")+"<small>\u96D9\u64CA\u6A21\u578B\uFF1A\u8A2D\u70BA\u65CB\u8F49\u4E2D\u5FC3</small>",i.addEventListener("click",e=>{let n=Td.find(s=>s[0]===e.target.closest("button")?.dataset.pan);n&&(n[0]==="center"?t.center():t.pan(n[3],n[4]))})}var Oy=[{side:"left",cls:"hide-left",open:"\u25C0",closed:"\u25B6",label:["\u6536\u8D77\u5DE6\u5074\u5DE5\u5177\u5217","\u5C55\u958B\u5DE6\u5074\u5DE5\u5177\u5217"]},{side:"right",cls:"hide-right",open:"\u25B6",closed:"\u25C0",label:["\u6536\u8D77\u53F3\u5074\u8AAA\u660E","\u5C55\u958B\u53F3\u5074\u8AAA\u660E"]}];function Rd(i,t){for(let e of Oy){let n=document.createElement("button");n.type="button",n.className=`panel-toggle ${e.side}`;let s=()=>{let r=document.body.classList.contains(e.cls);n.textContent=r?e.closed:e.open,n.title=e.label[r?1:0],n.setAttribute("aria-label",n.title),n.setAttribute("aria-expanded",String(!r))};n.addEventListener("click",()=>{document.body.classList.toggle(e.cls),s(),t.resize()}),s(),i.appendChild(n)}}var ni=cu(document.getElementById("viewport")),uc=Eu(window.MODEL_DATA);ni.scene.add(uc.group);var Re=ud(ni,uc);fd(document.getElementById("dissect"),Re,window.CONTENT);md(document.getElementById("muscleList"),Re,window.CONTENT);Md(document.getElementById("info"),Re,window.CONTENT);var dc=()=>ni.resize();Sd(document.getElementById("postureBar"),Re,window.CONTENT,dc);Ed(document.getElementById("lineBar"),Re,dc);wd(document.getElementById("meridianBar"),Re,dc);Ad(document.getElementById("panPad"),ni);Rd(document.getElementById("viewport"),ni);ei(document.getElementById("legend"),"anatomyTrains3d.legendOpen",{collapsedByDefault:ti()});var Mo=ni.renderer.domElement,fs=null;Mo.addEventListener("pointerdown",i=>{fs=[i.clientX,i.clientY],Mo.focus({preventScroll:!0})});Mo.addEventListener("pointerup",i=>{if(fs&&Math.hypot(i.clientX-fs[0],i.clientY-fs[1])<5){if(Re.state.lookupMode){Re.lookupAt(Re.pointAt(i.clientX,i.clientY)),fs=null;return}let t=Re.pickAt(i.clientX,i.clientY);t.kind==="acupoint"?Re.selectAcupoint(t.hit):t.kind==="pain"?Re.selectPain(t.pain):Re.select(t.key&&t.key===Re.state.selectedKey?null:t.key??null)}fs=null});Mo.addEventListener("dblclick",i=>{let t=Re.pointAt(i.clientX,i.clientY);t&&ni.recenter(t)});document.getElementById("loading").remove();window.app={viewer:ni,model:uc,ctrl:Re};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
