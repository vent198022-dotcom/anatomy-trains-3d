(()=>{var xl="170",gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,rc=1,ld=2;var mh=1,cd=2,Cn=3,Yn=0,Ne=1,sn=2,Xn=0,ki=1,oc=2,ac=3,lc=4,hd=5,ri=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,_d=202,xd=203,qo=204,Yo=205,yd=206,vd=207,Md=208,bd=209,Sd=210,Ed=211,wd=212,Td=213,Ad=214,$o=0,Zo=1,Ko=2,Gi=3,Jo=4,jo=5,Qo=6,ta=7,gh=0,Rd=1,Cd=2,qn=0,Pd=1,Id=2,Ld=3,Dd=4,Ud=5,Nd=6,Fd=7;var _h=300,Wi=301,Xi=302,ea=303,na=304,Gr=306,ia=1e3,li=1001,sa=1002,We=1003,Od=1004;var Bs=1005;var dn=1006,po=1007;var ci=1008;var Dn=1009,xh=1010,yh=1011,bs=1012,yl=1013,hi=1014,fn=1015,Is=1016,vl=1017,Ml=1018,qi=1020,vh=35902,Mh=1021,bh=1022,on=1023,Sh=1024,Eh=1025,zi=1026,Yi=1027,bl=1028,Sl=1029,wh=1030,El=1031;var wl=1033,cr=33776,hr=33777,ur=33778,dr=33779,ra=35840,oa=35841,aa=35842,la=35843,ca=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,ya=37815,va=37816,Ma=37817,ba=37818,Sa=37819,Ea=37820,wa=37821,fr=36492,Ta=36494,Aa=36495,Th=36283,Ra=36284,Ca=36285,Pa=36286;var pr=2300,Ia=2301,mo=2302,cc=2400,hc=2401,uc=2402;var Bd=3200,kd=3201;var Ah=0,zd=1,Wn="",de="srgb",ji="srgb-linear",Wr="linear",Jt="srgb";var Si=7680;var dc=519,Vd=512,Hd=513,Gd=514,Rh=515,Wd=516,Xd=517,qd=518,Yd=519,La=35044,Ch=35048;var fc="300 es",Pn=2e3,mr=2001,Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=1234567,_s=Math.PI/180,Ss=180/Math.PI;function In(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Tl(i,t){return(i%t+t)%t}function $d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zd(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function Kd(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function Jd(i,t=1){return t-Math.abs(Tl(i,t*2)-t)}function jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ef(i,t){return i+Math.random()*(t-i)}function nf(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(pc=i);let t=pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rf(i){return i*_s}function of(i){return i*Ss}function af(i){return(i&i-1)===0&&i!==0}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xr={DEG2RAD:_s,RAD2DEG:Ss,generateUUID:In,clamp:_e,euclideanModulo:Tl,mapLinear:$d,inverseLerp:Zd,lerp:xs,damp:Kd,pingpong:Jd,smoothstep:jd,smootherstep:Qd,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:af,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:hf,normalize:Kt,denormalize:rn},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],E=s[1],v=s[4],_=s[7],C=s[2],R=s[5],I=s[8];return r[0]=a*y+o*E+l*C,r[3]=a*m+o*v+l*R,r[6]=a*f+o*_+l*I,r[1]=c*y+h*E+u*C,r[4]=c*m+h*v+u*R,r[7]=c*f+h*_+u*I,r[2]=d*y+p*E+g*C,r[5]=d*m+p*v+g*R,r[8]=d*f+p*_+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},go=new Lt;function Ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=gr("canvas");return i.style.display="block",i}var mc={};function ms(i){i in mc||(mc[i]=!0,console.warn(i))}function df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ff(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?Wr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gc=[.64,.33,.3,.6,.15,.06],_c=[.2126,.7152,.0722],xc=[.3127,.329],yc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[ji]:{primaries:gc,whitePoint:xc,transfer:Wr,toXYZ:yc,fromXYZ:vc,luminanceCoefficients:_c,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:gc,whitePoint:xc,transfer:Jt,toXYZ:yc,fromXYZ:vc,luminanceCoefficients:_c,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var Ei,Da=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=gr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mf=0,_r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gf=0,Xe=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=li,s=li,r=dn,a=ci,o=on,l=Dn,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=In(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=_h;Xe.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(p+1)/2,C=(f+1)/2,R=(h+d)/4,I=(u+y)/4,U=(g+m)/4;return v>_&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=I/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=I/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ua=class extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*y,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let C=Math.sqrt(v),R=Math.atan2(C,f*E);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}let _=o*E;if(l=l*m+d*_,c=c*m+p*_,h=h*m+g*_,u=u*m+y*_,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xo=new P,Mc=new qe,Fe=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),zs.subVectors(this.max,cs),wi.subVectors(t.a,cs),Ti.subVectors(t.b,cs),Ai.subVectors(t.c,cs),Bn.subVectors(Ti,wi),kn.subVectors(Ai,Ti),jn.subVectors(wi,Ai);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-jn.z,jn.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,jn.z,0,-jn.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-jn.y,jn.x,0];return!yo(e,wi,Ti,Ai,zs)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,wi,Ti,Ai,zs))?!1:(Vs.crossVectors(Bn,kn),e=[Vs.x,Vs.y,Vs.z],yo(e,wi,Ti,Ai,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},En=[new P,new P,new P,new P,new P,new P,new P,new P],Qe=new P,ks=new Fe,wi=new P,Ti=new P,Ai=new P,Bn=new P,kn=new P,jn=new P,cs=new P,zs=new P,Vs=new P,Qn=new P;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);let o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _f=new Fe,hs=new P,vo=new P,an=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_f.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);let e=hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(vo)),this.expandByPoint(hs.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new P,Mo=new P,Hs=new P,zn=new P,bo=new P,Gs=new P,So=new P,$i=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mo.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Mo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=zn.dot(this.direction),l=-zn.dot(Hs),c=zn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mo).addScaledVector(Hs,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),Gs.subVectors(n,t),So.crossVectors(bo,Gs);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);let l=o*this.direction.dot(Gs.crossVectors(zn,Gs));if(l<0)return null;let c=o*this.direction.dot(bo.cross(zn));if(c<0||l+c>a)return null;let h=-o*zn.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,yf)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Vn.crossVectors(n,He),Vn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Vn.crossVectors(n,He)),Vn.normalize(),Ws.crossVectors(He,Vn),s[0]=Vn.x,s[4]=Ws.x,s[8]=He.x,s[1]=Vn.y,s[5]=Ws.y,s[9]=He.y,s[2]=Vn.z,s[6]=Ws.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],E=n[3],v=n[7],_=n[11],C=n[15],R=s[0],I=s[4],U=s[8],S=s[12],M=s[1],L=s[5],X=s[9],w=s[13],D=s[2],F=s[6],z=s[10],$=s[14],V=s[3],tt=s[7],ot=s[11],vt=s[15];return r[0]=a*R+o*M+l*D+c*V,r[4]=a*I+o*L+l*F+c*tt,r[8]=a*U+o*X+l*z+c*ot,r[12]=a*S+o*w+l*$+c*vt,r[1]=h*R+u*M+d*D+p*V,r[5]=h*I+u*L+d*F+p*tt,r[9]=h*U+u*X+d*z+p*ot,r[13]=h*S+u*w+d*$+p*vt,r[2]=g*R+y*M+m*D+f*V,r[6]=g*I+y*L+m*F+f*tt,r[10]=g*U+y*X+m*z+f*ot,r[14]=g*S+y*w+m*$+f*vt,r[3]=E*R+v*M+_*D+C*V,r[7]=E*I+v*L+_*F+C*tt,r[11]=E*U+v*X+_*z+C*ot,r[15]=E*S+v*w+_*$+C*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+y*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],E=u*m*c-y*d*c+y*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,_=h*y*c-g*u*c+g*o*p-a*y*p-h*o*f+a*u*f,C=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,R=e*E+n*v+s*_+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=E*I,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*I,t[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*f+n*l*f)*I,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*I,t[4]=v*I,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*I,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*I,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*I,t[8]=_*I,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*I,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*f+e*o*f)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*I,t[12]=C*I,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*I,t[14]=(g*o*s-a*y*s-g*n*l+e*y*l+a*n*m-e*o*m)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,y=a*h,m=a*u,f=o*u,E=l*c,v=l*h,_=l*u,C=n.x,R=n.y,I=n.z;return s[0]=(1-(y+f))*C,s[1]=(p+_)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-_)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+v)*I,s[9]=(m-E)*I,s[10]=(1-(d+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ri.set(s[0],s[1],s[2]).length(),a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);let c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===Pn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===mr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,g,y;if(o===Pn)g=(a+r)*u,y=-2*u;else if(o===mr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ri=new P,tn=new Dt,xf=new P(0,0,0),yf=new P(1,1,1),Vn=new P,Ws=new P,He=new P,bc=new Dt,Sc=new qe,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vf=0,Ec=new P,Ci=new qe,Tn=new Dt,Xs=new P,us=new P,Mf=new P,bf=new qe,wc=new P(1,0,0),Tc=new P(0,1,0),Ac=new P(0,0,1),Rc={type:"added"},Sf={type:"removed"},Pi={type:"childadded",child:null},Eo={type:"childremoved",child:null},De=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new pn,n=new qe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Lt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(wc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(us,Xs,this.up):Tn.lookAt(Xs,us,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new P(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new P,An=new P,wo=new P,Rn=new P,Ii=new P,Li=new P,Cc=new P,To=new P,Ao=new P,Ro=new P,Co=new jt,Po=new jt,Io=new jt,oi=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),en.subVectors(t,e),s.cross(en);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){en.subVectors(s,e),An.subVectors(n,e),wo.subVectors(t,e);let a=en.dot(en),o=en.dot(An),l=en.dot(wo),c=An.dot(An),h=An.dot(wo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Co.setScalar(0),Po.setScalar(0),Io.setScalar(0),Co.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,n),Io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Io,r.z),a}static isFrontFacing(t,e,n,s){return en.subVectors(n,e),An.subVectors(t,e),en.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),An.subVectors(this.a,this.b),en.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Li.subVectors(r,n),To.subVectors(t,n);let l=Ii.dot(To),c=Li.dot(To);if(l<=0&&c<=0)return e.copy(n);Ao.subVectors(t,s);let h=Ii.dot(Ao),u=Li.dot(Ao);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ii,a);Ro.subVectors(t,r);let p=Ii.dot(Ro),g=Li.dot(Ro);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Li,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Cc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Cc,o);let f=1/(m+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(Ii,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Tl(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return Wt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(_e(Ae.r*255,0,255))*65536+Math.round(_e(Ae.g*255,0,255))*256+Math.round(_e(Ae.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=de){Wt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(qs);let n=xs(Hn.h,qs.h,e),s=xs(Hn.s,qs.s,e),r=xs(Hn.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Bt;Bt.NAMES=Ih;var Ef=0,ui=class extends Un{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=In(),this.name="",this.blending=ki,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new P,Ys=new dt,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}};var yr=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},wf=0,Ke=new Dt,Do=new De,Di=new P,Ge=new Fe,ds=new Fe,Me=new P,Oe=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ph(t)?vr:yr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ge.min,ds.min),Ge.expandByPoint(Me),Me.addVectors(Ge.max,ds.max),Ge.expandByPoint(Me)):(Ge.expandByPoint(ds.min),Ge.expandByPoint(ds.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Me.add(Di)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new P,l[U]=new P;let c=new P,h=new P,u=new P,d=new dt,p=new dt,g=new dt,y=new P,m=new P;function f(U,S,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[U].add(y),o[S].add(y),o[M].add(y),l[U].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,S=E.length;U<S;++U){let M=E[U],L=M.start,X=M.count;for(let w=L,D=L+X;w<D;w+=3)f(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let v=new P,_=new P,C=new P,R=new P;function I(U){C.fromBufferAttribute(s,U),R.copy(C);let S=o[U];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(R,S);let L=_.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,L)}for(let U=0,S=E.length;U<S;++U){let M=E[U],L=M.start,X=M.count;for(let w=L,D=L+X;w<D;w+=3)I(t.getX(w+0)),I(t.getX(w+1)),I(t.getX(w+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=new Dt,ti=new $i,$s=new an,Ic=new P,Zs=new P,Ks=new P,Js=new P,Uo=new P,js=new P,Lc=new P,Qs=new P,oe=class extends De{constructor(t=new Oe,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uo.fromBufferAttribute(u,t),a?js.addScaledVector(Uo,h):js.addScaledVector(Uo.sub(e),h))}e.add(js)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!($s.containsPoint(ti.origin)===!1&&(ti.intersectSphere($s,Ic)===null||ti.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,C=v;_<C;_+=3){let R=o.getX(_),I=o.getX(_+1),U=o.getX(_+2);s=tr(this,f,t,n,c,h,u,R,I,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=tr(this,a,t,n,c,h,u,E,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,C=v;_<C;_+=3){let R=_,I=_+1,U=_+2;s=tr(this,f,t,n,c,h,u,R,I,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=m,v=m+1,_=m+2;s=tr(this,a,t,n,c,h,u,E,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tf(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Yn,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qs);return c<e.near||c>e.far?null:{distance:c,point:Qs.clone(),object:i}}function tr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Zs),i.getVertexPosition(l,Ks),i.getVertexPosition(c,Js);let h=Tf(i,t,e,n,Zs,Ks,Js,Lc);if(h){let u=new P;oi.getBarycoord(Lc,Zs,Ks,Js,u),s&&(h.uv=oi.getInterpolatedAttribute(s,o,l,c,u,new dt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,u,new dt)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};oi.getNormal(Zs,Ks,Js,d.normal),h.face=d,h.barycoord=u}return h}var ws=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(y,m,f,E,v,_,C,R,I,U,S){let M=_/I,L=C/U,X=_/2,w=C/2,D=R/2,F=I+1,z=U+1,$=0,V=0,tt=new P;for(let ot=0;ot<z;ot++){let vt=ot*L-w;for(let Ft=0;Ft<F;Ft++){let qt=Ft*M-X;tt[y]=qt*E,tt[m]=vt*v,tt[f]=D,c.push(tt.x,tt.y,tt.z),tt[y]=0,tt[m]=0,tt[f]=R>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Ft/I),u.push(1-ot/U),$+=1}}for(let ot=0;ot<U;ot++)for(let vt=0;vt<I;vt++){let Ft=d+vt+F*ot,qt=d+vt+F*(ot+1),Z=d+(vt+1)+F*(ot+1),et=d+(vt+1)+F*ot;l.push(Ft,qt,et),l.push(qt,Z,et),V+=6}o.addGroup(p,V,S),p+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Af(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var qr={clone:Zi,merge:Ce},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Mr=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new P,Dc=new dt,Uc=new dt,Pe=class extends Mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Uc),e.subVectors(Uc,Dc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ui=-90,Ni=1,Fa=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Ui,Ni,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Ui,Ni,t,e);r.layers=this.layers,this.add(r);let a=new Pe(Ui,Ni,t,e);a.layers=this.layers,this.add(a);let o=new Pe(Ui,Ni,t,e);o.layers=this.layers,this.add(o);let l=new Pe(Ui,Ni,t,e);l.layers=this.layers,this.add(l);let c=new Pe(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},br=class extends Xe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oa=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new br(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ws(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Xn});r.uniforms.tEquirect.value=e;let a=new oe(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=dn),new Fa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},No=new P,Pf=new P,If=new Lt,nn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=No.subVectors(n,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(No),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||If.getNormalMatrix(t),s=this.coplanarPoint(No).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new an,er=new P,Ts=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],E=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-p,_-f).normalize(),n[1].setComponents(l+r,d+c,m+p,_+f).normalize(),n[2].setComponents(l+a,d+h,m+g,_+E).normalize(),n[3].setComponents(l-a,d-h,m-g,_-E).normalize(),n[4].setComponents(l-o,d-u,m-y,_-v).normalize(),e===Pn)n[5].setComponents(l+o,d+u,m+y,_+v).normalize();else if(e===mr)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(er.x=s.normal.x>0?t.max.x:t.min.x,er.y=s.normal.y>0?t.max.y:t.min.y,er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sr=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let E=f*d-a;for(let v=0;v<c;v++){let _=v*u-r;g.push(_,-E,0),y.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let v=E+c*f,_=E+c*(f+1),C=E+1+c*(f+1),R=E+1+c*f;p.push(v,_,R),p.push(_,C,R)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Yf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
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
#endif`,np=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
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
#endif`,Ip=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
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
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,zm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,eg=`#define PHONG
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
}`,ng=`#define STANDARD
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
}`,ig=`#define STANDARD
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
}`,sg=`#define TOON
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
}`,rg=`#define TOON
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
}`,og=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 color;
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
}`,hg=`uniform float rotation;
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
}`,ug=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Df,alphahash_pars_fragment:Uf,alphamap_fragment:Nf,alphamap_pars_fragment:Ff,alphatest_fragment:Of,alphatest_pars_fragment:Bf,aomap_fragment:kf,aomap_pars_fragment:zf,batching_pars_vertex:Vf,batching_vertex:Hf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Jf,color_fragment:jf,color_pars_fragment:Qf,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:wp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:xp,fog_pars_fragment:yp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Mp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Ep,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Up,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:kp,map_pars_fragment:zp,map_particle_fragment:Vp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:$p,morphtarget_vertex:Zp,normal_fragment_begin:Kp,normal_fragment_maps:Jp,normal_pars_fragment:jp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:xm,skinning_pars_vertex:ym,skinning_vertex:vm,skinnormal_vertex:Mm,specularmap_fragment:bm,specularmap_pars_fragment:Sm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Im,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:km,distanceRGBA_vert:zm,distanceRGBA_frag:Vm,equirect_vert:Hm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Km,meshmatcap_frag:Jm,meshnormal_vert:jm,meshnormal_frag:Qm,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:hg,sprite_frag:ug},st={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ie={basic:{uniforms:Ce([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ce([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ce([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ce([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ce([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ce([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ce([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ce([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ce([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ce([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ce([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ce([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ce([st.lights,st.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Ie.physical={uniforms:Ce([Ie.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var nr={r:0,b:0,g:0},ni=new pn,dg=new Dt;function fg(i,t,e,n,s,r,a){let o=new Bt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function y(E){let v=!1,_=g(E);_===null?f(o,l):_&&_.isColor&&(f(_,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Gr)?(h===void 0&&(h=new oe(new ws(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Zi(Ie.backgroundCube.uniforms),vertexShader:Ie.backgroundCube.vertexShader,fragmentShader:Ie.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(v.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(ni)),h.material.toneMapped=Wt.getTransfer(_.colorSpace)!==Jt,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new oe(new Sr(2,2),new Be({name:"BackgroundMaterial",uniforms:Zi(Ie.background.uniforms),vertexShader:Ie.background.vertexShader,fragmentShader:Ie.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(_.colorSpace)!==Jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(nr,Lh(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:y,addToRenderList:m}}function pg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,L,X,w,D){let F=!1,z=u(w,X,L);r!==z&&(r=z,c(r.object)),F=p(M,w,X,D),F&&g(M,w,X,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,_(M,L,X,w),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,X){let w=X.wireframe===!0,D=n[M.id];D===void 0&&(D={},n[M.id]=D);let F=D[L.id];F===void 0&&(F={},D[L.id]=F);let z=F[w];return z===void 0&&(z=d(l()),F[w]=z),z}function d(M){let L=[],X=[],w=[];for(let D=0;D<e;D++)L[D]=0,X[D]=0,w[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:w,object:M,attributes:{},index:null}}function p(M,L,X,w){let D=r.attributes,F=L.attributes,z=0,$=X.getAttributes();for(let V in $)if($[V].location>=0){let ot=D[V],vt=F[V];if(vt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ot===void 0||ot.attribute!==vt||vt&&ot.data!==vt.data)return!0;z++}return r.attributesNum!==z||r.index!==w}function g(M,L,X,w){let D={},F=L.attributes,z=0,$=X.getAttributes();for(let V in $)if($[V].location>=0){let ot=F[V];ot===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor));let vt={};vt.attribute=ot,ot&&ot.data&&(vt.data=ot.data),D[V]=vt,z++}r.attributes=D,r.attributesNum=z,r.index=w}function y(){let M=r.newAttributes;for(let L=0,X=M.length;L<X;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){let X=r.newAttributes,w=r.enabledAttributes,D=r.attributeDivisors;X[M]=1,w[M]===0&&(i.enableVertexAttribArray(M),w[M]=1),D[M]!==L&&(i.vertexAttribDivisor(M,L),D[M]=L)}function E(){let M=r.newAttributes,L=r.enabledAttributes;for(let X=0,w=L.length;X<w;X++)L[X]!==M[X]&&(i.disableVertexAttribArray(X),L[X]=0)}function v(M,L,X,w,D,F,z){z===!0?i.vertexAttribIPointer(M,L,X,D,F):i.vertexAttribPointer(M,L,X,w,D,F)}function _(M,L,X,w){y();let D=w.attributes,F=X.getAttributes(),z=L.defaultAttributeValues;for(let $ in F){let V=F[$];if(V.location>=0){let tt=D[$];if(tt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){let ot=tt.normalized,vt=tt.itemSize,Ft=t.get(tt);if(Ft===void 0)continue;let qt=Ft.buffer,Z=Ft.type,et=Ft.bytesPerElement,gt=Z===i.INT||Z===i.UNSIGNED_INT||tt.gpuType===yl;if(tt.isInterleavedBufferAttribute){let rt=tt.data,Et=rt.stride,Rt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)f(V.location+Ot,rt.meshPerAttribute);M.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Ot=0;Ot<V.locationSize;Ot++)v(V.location+Ot,vt/V.locationSize,Z,ot,Et*et,(Rt+vt/V.locationSize*Ot)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)f(V.location+rt,tt.meshPerAttribute);M.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let rt=0;rt<V.locationSize;rt++)v(V.location+rt,vt/V.locationSize,Z,ot,vt*et,vt/V.locationSize*rt*et,gt)}}else if(z!==void 0){let ot=z[$];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(V.location,ot);break;case 3:i.vertexAttrib3fv(V.location,ot);break;case 4:i.vertexAttrib4fv(V.location,ot);break;default:i.vertexAttrib1fv(V.location,ot)}}}}E()}function C(){U();for(let M in n){let L=n[M];for(let X in L){let w=L[X];for(let D in w)h(w[D].object),delete w[D];delete L[X]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let X in L){let w=L[X];for(let D in w)h(w[D].object),delete w[D];delete L[X]}delete n[M.id]}function I(M){for(let L in n){let X=n[L];if(X[M.id]===void 0)continue;let w=X[M.id];for(let D in w)h(w[D].object),delete w[D];delete X[M.id]}}function U(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function mg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let U=I===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==fn&&!U)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:R}}function _g(i){let t=this,e=null,n=0,s=!1,r=!1,a=new nn,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,v=E*4,_=f.clippingState||null;l.value=_,_=h(g,d,v,p);for(let C=0;C!==v;++C)_[C]=e[C];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==y;++v,_+=4)a.copy(u[v]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function xg(i){let t=new WeakMap;function e(a,o){return o===ea?a.mapping=Wi:o===na&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ea||o===na)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Oa(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Er=class extends Mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bi=4,Nc=[.125,.215,.35,.446,.526,.582],ai=20,Fo=new Er,Fc=new Bt,Oo=null,Bo=0,ko=0,zo=!1,si=(1+Math.sqrt(5))/2,Fi=1/si,Oc=[new P(-si,Fi,0),new P(si,Fi,0),new P(-Fi,0,si),new P(Fi,0,si),new P(0,si,-Fi),new P(0,si,Fi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,ko),this._renderer.xr.enabled=zo,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Is,format:on,colorSpace:ji,depthBuffer:!1},s=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=vg(r,t,e)}return s}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s){let o=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fc),h.toneMapping=qn,h.autoClear=!1;let p=new mn({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new oe(new ws,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Fc),y=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;ir(s,E*v,f>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oc[(s-r-1)%Oc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);let f=[],E=0;for(let I=0;I<ai;++I){let U=I/y,S=Math.exp(-U*U/2);f.push(S),I===0?E+=S:I<m&&(E+=2*S)}for(let I=0;I<f.length;I++)f[I]=f[I]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let _=this._sizeLods[s],C=3*_*(s>v-Bi?s-v+Bi:0),R=4*(this._cubeSize-_);ir(e,C,R,3*_,2*_),l.setRenderTarget(e),l.render(u,Fo)}};function yg(i){let t=[],e=[],n=[],s=i,r=i-Bi+1+Nc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Bi?l=Nc[a-i+Bi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,E=new Float32Array(y*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let R=0;R<p;R++){let I=R%3*2/3-1,U=R>2?0:-1,S=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];E.set(S,y*g*R),v.set(d,m*g*R);let M=[R,R,R,R,R,R];_.set(M,f*g*R)}let C=new Oe;C.setAttribute("position",new ge(E,y)),C.setAttribute("uv",new ge(v,m)),C.setAttribute("faceIndex",new ge(_,f)),t.push(C),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vg(i,t,e){let n=new Float32Array(ai),s=new P(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function kc(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function zc(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Mg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ea||l===na,h=l===Wi||l===Xi;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new wr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new wr(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let v=0,_=E.length;v<_;v+=3){let C=E[v+0],R=E[v+1],I=E[v+2];d.push(C,R,R,I,I,C)}}else if(g!==void 0){let E=g.array;y=g.version;for(let v=0,_=E.length/3-1;v<_;v+=3){let C=v+0,R=v+1,I=v+2;d.push(C,R,R,I,I,C)}}else return;let m=new(Ph(d)?vr:yr)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Eg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*y[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t,e){let n=new WeakMap,s=new jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let R=new Float32Array(_*C*4*u),I=new xr(R,_,C,u);I.type=fn,I.needsUpdate=!0;let U=v*4;for(let M=0;M<u;M++){let L=m[M],X=f[M],w=E[M],D=_*C*4*M;for(let F=0;F<L.count;F++){let z=F*U;p===!0&&(s.fromBufferAttribute(L,F),R[D+z+0]=s.x,R[D+z+1]=s.y,R[D+z+2]=s.z,R[D+z+3]=0),g===!0&&(s.fromBufferAttribute(X,F),R[D+z+4]=s.x,R[D+z+5]=s.y,R[D+z+6]=s.z,R[D+z+7]=0),y===!0&&(s.fromBufferAttribute(w,F),R[D+z+8]=s.x,R[D+z+9]=s.y,R[D+z+10]=s.z,R[D+z+11]=w.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new dt(_,C)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ag(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Tr=class extends Xe{constructor(t,e,n,s,r,a,o,l,c,h=zi){if(h!==zi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=hi),n===void 0&&h===Yi&&(n=qi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uh=new Xe,Vc=new Tr(1,1),Nh=new xr,Fh=new Na,Oh=new br,Hc=[],Gc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yr(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),ye(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),ye(e,n)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),ye(e,n)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vc.compareFunction=Rh,r=Vc):r=Uh,e.setTexture2D(t||r,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fh,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oh,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nh,s)}function Yg(i){switch(i){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(i,t){i.uniform1fv(this.addr,t)}function Zg(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Kg(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function jg(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qg(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t0(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e0(i,t){i.uniform1iv(this.addr,t)}function n0(i,t){i.uniform2iv(this.addr,t)}function i0(i,t){i.uniform3iv(this.addr,t)}function s0(i,t){i.uniform4iv(this.addr,t)}function r0(i,t){i.uniform1uiv(this.addr,t)}function o0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function l0(i,t){i.uniform4uiv(this.addr,t)}function c0(i,t,e){let n=this.cache,s=t.length,r=Yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uh,r[a])}function h0(i,t,e){let n=this.cache,s=t.length,r=Yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Fh,r[a])}function u0(i,t,e){let n=this.cache,s=t.length,r=Yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Oh,r[a])}function d0(i,t,e){let n=this.cache,s=t.length,r=Yr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nh,r[a])}function f0(i){switch(i){case 5126:return $g;case 35664:return Zg;case 35665:return Kg;case 35666:return Jg;case 35674:return jg;case 35675:return Qg;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}var Ba=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}},ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f0(e.type)}},za=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Vo=/(\w+)(\])?(\[|\.)?/g;function Yc(i,t){i.seq.push(t),i.map[t.id]=t}function p0(i,t,e){let n=i.name,s=n.length;for(Vo.lastIndex=0;;){let r=Vo.exec(n),a=Vo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yc(e,c===void 0?new Ba(o,i,t):new ka(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new za(o),Yc(e,u)),e=u}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);p0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function $c(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var m0=37297,g0=0;function _0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zc=new Lt;function x0(i){Wt._getMatrix(Zc,Wt.workingColorSpace,i);let t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_0(i.getShaderSource(t),a)}else return s}function y0(i,t){let e=x0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(i,t){let e;switch(t){case Pd:e="Linear";break;case Id:e="Reinhard";break;case Ld:e="Cineon";break;case Dd:e="ACESFilmic";break;case Nd:e="AgX";break;case Fd:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sr=new P;function M0(){Wt.getLuminanceCoefficients(sr);let i=sr.x.toFixed(4),t=sr.y.toFixed(4),e=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function S0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function Jc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(w0,A0)}var T0=new Map;function A0(i,t){let e=Nt[t];if(e===void 0){let n=T0.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}var R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(R0,C0)}function C0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function P0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function I0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function D0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Rd:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function U0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function N0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=P0(e),c=I0(e),h=L0(e),u=D0(e),d=U0(e),p=b0(e),g=S0(r),y=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(m=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==qn?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,y0("linearToOutputTexel",e.outputColorSpace),M0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Va(a),a=Jc(a,e),a=jc(a,e),o=Va(o),o=Jc(o,e),o=jc(o,e),a=Qc(a),o=Qc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=E+m+a,_=E+f+o,C=$c(s,s.VERTEX_SHADER,v),R=$c(s,s.FRAGMENT_SHADER,_);s.attachShader(y,C),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(L){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(y).trim(),w=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(R).trim(),F=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,R);else{let $=Kc(s,C,"vertex"),V=Kc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+$+`
`+V)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(w===""||D==="")&&(z=!1);z&&(L.diagnostics={runnable:F,programLog:X,vertexShader:{log:w,prefix:m},fragmentShader:{log:D,prefix:f}})}s.deleteShader(C),s.deleteShader(R),U=new Hi(s,y),S=E0(s,y)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,m0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=R,this}var F0=0,Ha=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ga(t),e.set(t,n)),n}},Ga=class{constructor(t){this.id=F0++,this.code=t,this.usedTimes=0}};function O0(i,t,e,n,s,r,a){let o=new Es,l=new Ha,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,X,w){let D=X.fog,F=w.geometry,z=S.isMeshStandardMaterial?X.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),V=$&&$.mapping===Gr?$.image.height:null,tt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ot=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=ot!==void 0?ot.length:0,Ft=0;F.morphAttributes.position!==void 0&&(Ft=1),F.morphAttributes.normal!==void 0&&(Ft=2),F.morphAttributes.color!==void 0&&(Ft=3);let qt,Z,et,gt;if(tt){let Zt=Ie[tt];qt=Zt.vertexShader,Z=Zt.fragmentShader}else qt=S.vertexShader,Z=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);let rt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Rt=w.isInstancedMesh===!0,Ot=w.isBatchedMesh===!0,te=!!S.map,kt=!!S.matcap,ae=!!$,O=!!S.aoMap,$e=!!S.lightMap,zt=!!S.bumpMap,Vt=!!S.normalMap,wt=!!S.displacementMap,ie=!!S.emissiveMap,St=!!S.metalnessMap,A=!!S.roughnessMap,x=S.anisotropy>0,H=S.clearcoat>0,J=S.dispersion>0,Q=S.iridescence>0,K=S.sheen>0,Mt=S.transmission>0,lt=x&&!!S.anisotropyMap,ft=H&&!!S.clearcoatMap,Gt=H&&!!S.clearcoatNormalMap,nt=H&&!!S.clearcoatRoughnessMap,pt=Q&&!!S.iridescenceMap,Tt=Q&&!!S.iridescenceThicknessMap,At=K&&!!S.sheenColorMap,mt=K&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Ut=!!S.specularColorMap,ee=!!S.specularIntensityMap,N=Mt&&!!S.transmissionMap,at=Mt&&!!S.thicknessMap,Y=!!S.gradientMap,j=!!S.alphaMap,ut=S.alphaTest>0,ct=!!S.alphaHash,Pt=!!S.extensions,ue=qn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);let we={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:Z,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&w._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&w.instanceColor!==null,instancingMorph:Rt&&w.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:te,matcap:kt,envMap:ae,envMapMode:ae&&$.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:$e,bumpMap:zt,normalMap:Vt,displacementMap:d&&wt,emissiveMap:ie,normalMapObjectSpace:Vt&&S.normalMapType===zd,normalMapTangentSpace:Vt&&S.normalMapType===Ah,metalnessMap:St,roughnessMap:A,anisotropy:x,anisotropyMap:lt,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:Gt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:Q,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:K,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Ut,specularIntensityMap:ee,transmission:Mt,transmissionMap:N,thicknessMap:at,gradientMap:Y,opaque:S.transparent===!1&&S.blending===ki&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:ct,combine:S.combine,mapUv:te&&y(S.map.channel),aoMapUv:O&&y(S.aoMap.channel),lightMapUv:$e&&y(S.lightMap.channel),bumpMapUv:zt&&y(S.bumpMap.channel),normalMapUv:Vt&&y(S.normalMap.channel),displacementMapUv:wt&&y(S.displacementMap.channel),emissiveMapUv:ie&&y(S.emissiveMap.channel),metalnessMapUv:St&&y(S.metalnessMap.channel),roughnessMapUv:A&&y(S.roughnessMap.channel),anisotropyMapUv:lt&&y(S.anisotropyMap.channel),clearcoatMapUv:ft&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&y(S.sheenRoughnessMap.channel),specularMapUv:Ht&&y(S.specularMap.channel),specularColorMapUv:Ut&&y(S.specularColorMap.channel),specularIntensityMapUv:ee&&y(S.specularIntensityMap.channel),transmissionMapUv:N&&y(S.transmissionMap.channel),thicknessMapUv:at&&y(S.thicknessMap.channel),alphaMapUv:j&&y(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Vt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!F.attributes.uv&&(te||j),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:w.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:te&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let M=g[S.type],L;if(M){let X=Ie[M];L=qr.clone(X.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let X=0,w=h.length;X<w;X++){let D=h[X];if(D.cacheKey===M){L=D,++L.usedTimes;break}}return L===void 0&&(L=new N0(i,M,S,r),h.push(L)),L}function R(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:C,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:U}}function B0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function k0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function o(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||k0),n.length>1&&n.sort(d||eh),s.length>1&&s.sort(d||eh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function z0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new nh,i.set(n,[a])):s>=r.length?(a=new nh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function V0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function H0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var G0=0;function W0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X0(i){let t=new V0,e=H0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Dt,a=new Dt;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,E=0,v=0,_=0,C=0,R=0,I=0;c.sort(W0);for(let S=0,M=c.length;S<M;S++){let L=c[S],X=L.color,w=L.intensity,D=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=X.r*w,u+=X.g*w,d+=X.b*w;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],w);I++}else if(L.isDirectionalLight){let z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=L.shadow.matrix,E++}n.directional[p]=z,p++}else if(L.isSpotLight){let z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(X).multiplyScalar(w),z.distance=D,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[y]=z;let $=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,$.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[y]=$.matrix,L.castShadow){let V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=F,_++}y++}else if(L.isRectAreaLight){let z=t.get(L);z.color.copy(X).multiplyScalar(w),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){let z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=z,g++}else if(L.isHemisphereLight){let z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(w),z.groundColor.copy(L.groundColor).multiplyScalar(w),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==v||U.numSpotShadows!==_||U.numSpotMaps!==C||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,U.directionalLength=p,U.pointLength=g,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=v,U.numSpotShadows=_,U.numSpotMaps=C,U.numLightProbes=I,n.version=G0++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let v=c[f];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function ih(i){let t=new X0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function q0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ih(i),t.set(s,[o])):r>=a.length?(o=new ih(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wa=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`;function Z0(i,t,e){let n=new Ts,s=new dt,r=new dt,a=new jt,o=new Wa({depthPacking:kd}),l=new Xa,c={},h=e.maxTextureSize,u={[Yn]:Ne,[Ne]:Yn,[sn]:sn},d=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Y0,fragmentShader:$0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let f=this.type;this.render=function(R,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Xn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let w=f!==Cn&&this.type===Cn,D=f===Cn&&this.type!==Cn;for(let F=0,z=R.length;F<z;F++){let $=R[F],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let tt=V.getFrameExtents();if(s.multiply(tt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||w===!0||D===!0){let vt=this.type!==Cn?{minFilter:We,magFilter:We}:{};V.map!==null&&V.map.dispose(),V.map=new Nn(s.x,s.y,vt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ot=V.getViewportCount();for(let vt=0;vt<ot;vt++){let Ft=V.getViewport(vt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),X.viewport(a),V.updateMatrices($,vt),n=V.getFrustum(),_(I,U,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Cn&&E(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function E(R,I){let U=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,U,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,U,p,y,null)}function v(R,I,U,S){let M=null,L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let X=M.uuid,w=I.uuid,D=c[X];D===void 0&&(D={},c[X]=D);let F=D[w];F===void 0&&(F=M.clone(),D[w]=F,I.addEventListener("dispose",C)),M=F}if(M.visible=I.visible,M.wireframe=I.wireframe,S===Cn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let X=i.properties.get(M);X.light=U}return M}function _(R,I,U,S,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let w=t.update(R),D=R.material;if(Array.isArray(D)){let F=w.groups;for(let z=0,$=F.length;z<$;z++){let V=F[z],tt=D[V.materialIndex];if(tt&&tt.visible){let ot=v(R,tt,S,M);R.onBeforeShadow(i,R,I,U,w,ot,V),i.renderBufferDirect(U,null,w,ot,R,V),R.onAfterShadow(i,R,I,U,w,ot,V)}}}else if(D.visible){let F=v(R,D,S,M);R.onBeforeShadow(i,R,I,U,w,F,null),i.renderBufferDirect(U,null,w,F,R,null),R.onAfterShadow(i,R,I,U,w,F,null)}}let X=R.children;for(let w=0,D=X.length;w<D;w++)_(X[w],I,U,S,M)}function C(R){R.target.removeEventListener("dispose",C);for(let U in c){let S=c[U],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var K0={[$o]:Zo,[Ko]:Qo,[Jo]:ta,[Gi]:jo,[Zo]:$o,[Qo]:Ko,[ta]:Jo,[jo]:Gi};function J0(i,t){function e(){let N=!1,at=new jt,Y=null,j=new jt(0,0,0,0);return{setMask:function(ut){Y!==ut&&!N&&(i.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){N=ut},setClear:function(ut,ct,Pt,ue,we){we===!0&&(ut*=ue,ct*=ue,Pt*=ue),at.set(ut,ct,Pt,ue),j.equals(at)===!1&&(i.clearColor(ut,ct,Pt,ue),j.copy(at))},reset:function(){N=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let N=!1,at=!1,Y=null,j=null,ut=null;return{setReversed:function(ct){if(at!==ct){let Pt=t.get("EXT_clip_control");at?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let ue=ut;ut=null,this.setClear(ue)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?rt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ct){Y!==ct&&!N&&(i.depthMask(ct),Y=ct)},setFunc:function(ct){if(at&&(ct=K0[ct]),j!==ct){switch(ct){case $o:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ct}},setLocked:function(ct){N=ct},setClear:function(ct){ut!==ct&&(at&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){N=!1,Y=null,j=null,ut=null,at=!1}}}function s(){let N=!1,at=null,Y=null,j=null,ut=null,ct=null,Pt=null,ue=null,we=null;return{setTest:function(Zt){N||(Zt?rt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Zt){at!==Zt&&!N&&(i.stencilMask(Zt),at=Zt)},setFunc:function(Zt,Je,bn){(Y!==Zt||j!==Je||ut!==bn)&&(i.stencilFunc(Zt,Je,bn),Y=Zt,j=Je,ut=bn)},setOp:function(Zt,Je,bn){(ct!==Zt||Pt!==Je||ue!==bn)&&(i.stencilOp(Zt,Je,bn),ct=Zt,Pt=Je,ue=bn)},setLocked:function(Zt){N=Zt},setClear:function(Zt){we!==Zt&&(i.clearStencil(Zt),we=Zt)},reset:function(){N=!1,at=null,Y=null,j=null,ut=null,ct=null,Pt=null,ue=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,v=null,_=null,C=null,R=null,I=new Bt(0,0,0),U=0,S=!1,M=null,L=null,X=null,w=null,D=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=$>=2);let tt=null,ot={},vt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),qt=new jt().fromArray(vt),Z=new jt().fromArray(Ft);function et(N,at,Y,j){let ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(N,ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Y;Pt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(at+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}let gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Gi),zt(!1),Vt(rc),rt(i.CULL_FACE),O(Xn);function rt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Et(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Rt(N,at){return u[N]!==at?(i.bindFramebuffer(N,at),u[N]=at,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Ot(N,at){let Y=p,j=!1;if(N){Y=d.get(at),Y===void 0&&(Y=[],d.set(at,Y));let ut=N.textures;if(Y.length!==ut.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Pt=ut.length;ct<Pt;ct++)Y[ct]=i.COLOR_ATTACHMENT0+ct;Y.length=ut.length,j=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,j=!0);j&&i.drawBuffers(Y)}function te(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let kt={[ri]:i.FUNC_ADD,[ud]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};kt[fd]=i.MIN,kt[pd]=i.MAX;let ae={[md]:i.ZERO,[gd]:i.ONE,[_d]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[yd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Td]:i.CONSTANT_ALPHA,[Ad]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,at,Y,j,ut,ct,Pt,ue,we,Zt){if(N===Xn){y===!0&&(Et(i.BLEND),y=!1);return}if(y===!1&&(rt(i.BLEND),y=!0),N!==hd){if(N!==m||Zt!==S){if((f!==ri||_!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,_=ri),Zt)switch(N){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,v=null,C=null,R=null,I.set(0,0,0),U=0,m=N,S=Zt}return}ut=ut||at,ct=ct||Y,Pt=Pt||j,(at!==f||ut!==_)&&(i.blendEquationSeparate(kt[at],kt[ut]),f=at,_=ut),(Y!==E||j!==v||ct!==C||Pt!==R)&&(i.blendFuncSeparate(ae[Y],ae[j],ae[ct],ae[Pt]),E=Y,v=j,C=ct,R=Pt),(ue.equals(I)===!1||we!==U)&&(i.blendColor(ue.r,ue.g,ue.b,we),I.copy(ue),U=we),m=N,S=!1}function $e(N,at){N.side===sn?Et(i.CULL_FACE):rt(i.CULL_FACE);let Y=N.side===Ne;at&&(Y=!Y),zt(Y),N.blending===ki&&N.transparent===!1?O(Xn):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let j=N.stencilWrite;o.setTest(j),j&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Vt(N){N!==ad?(rt(i.CULL_FACE),N!==L&&(N===rc?i.cullFace(i.BACK):N===ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),L=N}function wt(N){N!==X&&(z&&i.lineWidth(N),X=N)}function ie(N,at,Y){N?(rt(i.POLYGON_OFFSET_FILL),(w!==at||D!==Y)&&(i.polygonOffset(at,Y),w=at,D=Y)):Et(i.POLYGON_OFFSET_FILL)}function St(N){N?rt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+F-1),tt!==N&&(i.activeTexture(N),tt=N)}function x(N,at,Y){Y===void 0&&(tt===null?Y=i.TEXTURE0+F-1:Y=tt);let j=ot[Y];j===void 0&&(j={type:void 0,texture:void 0},ot[Y]=j),(j.type!==N||j.texture!==at)&&(tt!==Y&&(i.activeTexture(Y),tt=Y),i.bindTexture(N,at||gt[N]),j.type=N,j.texture=at)}function H(){let N=ot[tt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(N){qt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function mt(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function Ht(N,at){let Y=c.get(at);Y===void 0&&(Y=new WeakMap,c.set(at,Y));let j=Y.get(N);j===void 0&&(j=i.getUniformBlockIndex(at,N.name),Y.set(N,j))}function Ut(N,at){let j=c.get(at).get(N);l.get(at)!==j&&(i.uniformBlockBinding(at,j,N.__bindingPointIndex),l.set(at,j))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,ot={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,v=null,_=null,C=null,R=null,I=new Bt(0,0,0),U=0,S=!1,M=null,L=null,X=null,w=null,D=null,qt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Et,bindFramebuffer:Rt,drawBuffers:Ot,useProgram:te,setBlending:O,setMaterial:$e,setFlipSided:zt,setCullFace:Vt,setLineWidth:wt,setPolygonOffset:ie,setScissorTest:St,activeTexture:A,bindTexture:x,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:At,viewport:mt,reset:ee}}function sh(i,t,e,n){let s=j0(n);switch(e){case Mh:return i*t;case Sh:return i*t;case Eh:return i*t*2;case bl:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case wh:return i*t*2/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:case la:return Math.max(i,16)*Math.max(t,8)/4;case ra:case aa:return Math.max(i,8)*Math.max(t,8)/2;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Th:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j0(i){switch(i){case Dn:case xh:return{byteLength:1,components:1};case bs:case yh:case Is:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case hi:case yl:case fn:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Q0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):gr("canvas")}function y(A,x,H){let J=1,Q=St(A);if((Q.width>H||Q.height>H)&&(J=H/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(J*Q.width),Mt=Math.floor(J*Q.height);u===void 0&&(u=g(K,Mt));let lt=x?g(K,Mt):u;return lt.width=K,lt.height=Mt,lt.getContext("2d").drawImage(A,0,0,K,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Mt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,x,H,J,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=x;if(x===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),x===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),x===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),x===i.RGBA){let Mt=Q?Wr:Wt.getTransfer(J);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Mt===Jt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,x){let H;return A?x===null||x===hi||x===qi?H=i.DEPTH24_STENCIL8:x===fn?H=i.DEPTH32F_STENCIL8:x===bs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===qi?H=i.DEPTH_COMPONENT24:x===fn?H=i.DEPTH_COMPONENT32F:x===bs&&(H=i.DEPTH_COMPONENT16),H}function C(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){let x=A.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&h.delete(x)}function I(A){let x=A.target;x.removeEventListener("dispose",I),M(x)}function U(A){let x=n.get(A);if(x.__webglInit===void 0)return;let H=A.source,J=d.get(H);if(J){let Q=J[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys(J).length===0&&d.delete(H)}n.remove(A)}function S(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let H=A.source,J=d.get(H);delete J[x.__cacheKey],a.memory.textures--}function M(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let Q=0;Q<x.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=A.textures;for(let J=0,Q=H.length;J<Q;J++){let K=n.get(H[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(A)}let L=0;function X(){L=0}function w(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function D(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function F(A,x){let H=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,A,x);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function z(A,x){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Z(H,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function $(A,x){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Z(H,A,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function V(A,x){let H=n.get(A);if(A.version>0&&H.__version!==A.version){et(H,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let tt={[ia]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},ot={[We]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},vt={[Vd]:i.NEVER,[Yd]:i.ALWAYS,[Hd]:i.LESS,[Rh]:i.LEQUAL,[Gd]:i.EQUAL,[qd]:i.GEQUAL,[Wd]:i.GREATER,[Xd]:i.NOTEQUAL};function Ft(A,x){if(x.type===fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===po||x.magFilter===Bs||x.magFilter===ci||x.minFilter===dn||x.minFilter===po||x.minFilter===Bs||x.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,tt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,tt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,tt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ot[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==Bs&&x.minFilter!==ci||x.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function qt(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));let J=x.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let K=D(x);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[K].usedTimes++;let Mt=Q[A.__cacheKey];Mt!==void 0&&(Q[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(x)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return H}function Z(A,x,H){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);let Q=qt(A,x),K=x.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+H);let Mt=n.get(K);if(K.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);let lt=Wt.getPrimaries(Wt.workingColorSpace),ft=x.colorSpace===Wn?null:Wt.getPrimaries(x.colorSpace),Gt=x.colorSpace===Wn||lt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let nt=y(x.image,!1,s.maxTextureSize);nt=ie(x,nt);let pt=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type),At=v(x.internalFormat,pt,Tt,x.colorSpace,x.isVideoTexture);Ft(J,x);let mt,Ht=x.mipmaps,Ut=x.isVideoTexture!==!0,ee=Mt.__version===void 0||Q===!0,N=K.dataReady,at=C(x,nt);if(x.isDepthTexture)At=_(x.format===Yi,x.type),ee&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,pt,Tt,null));else if(x.isDataTexture)if(Ht.length>0){Ut&&ee&&e.texStorage2D(i.TEXTURE_2D,at,At,Ht[0].width,Ht[0].height);for(let Y=0,j=Ht.length;Y<j;Y++)mt=Ht[Y],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,Y,At,mt.width,mt.height,0,pt,Tt,mt.data);x.generateMipmaps=!1}else Ut?(ee&&e.texStorage2D(i.TEXTURE_2D,at,At,nt.width,nt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,pt,Tt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,pt,Tt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,At,Ht[0].width,Ht[0].height,nt.depth);for(let Y=0,j=Ht.length;Y<j;Y++)if(mt=Ht[Y],x.format!==on)if(pt!==null)if(Ut){if(N)if(x.layerUpdates.size>0){let ut=sh(mt.width,mt.height,x.format,x.type);for(let ct of x.layerUpdates){let Pt=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ct,mt.width,mt.height,1,pt,Pt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,nt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,At,mt.width,mt.height,nt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,nt.depth,pt,Tt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,At,mt.width,mt.height,nt.depth,0,pt,Tt,mt.data)}else{Ut&&ee&&e.texStorage2D(i.TEXTURE_2D,at,At,Ht[0].width,Ht[0].height);for(let Y=0,j=Ht.length;Y<j;Y++)mt=Ht[Y],x.format!==on?pt!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,At,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,Y,At,mt.width,mt.height,0,pt,Tt,mt.data)}else if(x.isDataArrayTexture)if(Ut){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,At,nt.width,nt.height,nt.depth),N)if(x.layerUpdates.size>0){let Y=sh(nt.width,nt.height,x.format,x.type);for(let j of x.layerUpdates){let ut=nt.data.subarray(j*Y/nt.data.BYTES_PER_ELEMENT,(j+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,nt.width,nt.height,1,pt,Tt,ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Tt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,pt,Tt,nt.data);else if(x.isData3DTexture)Ut?(ee&&e.texStorage3D(i.TEXTURE_3D,at,At,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Tt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,pt,Tt,nt.data);else if(x.isFramebufferTexture){if(ee)if(Ut)e.texStorage2D(i.TEXTURE_2D,at,At,nt.width,nt.height);else{let Y=nt.width,j=nt.height;for(let ut=0;ut<at;ut++)e.texImage2D(i.TEXTURE_2D,ut,At,Y,j,0,pt,Tt,null),Y>>=1,j>>=1}}else if(Ht.length>0){if(Ut&&ee){let Y=St(Ht[0]);e.texStorage2D(i.TEXTURE_2D,at,At,Y.width,Y.height)}for(let Y=0,j=Ht.length;Y<j;Y++)mt=Ht[Y],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,pt,Tt,mt):e.texImage2D(i.TEXTURE_2D,Y,At,pt,Tt,mt);x.generateMipmaps=!1}else if(Ut){if(ee){let Y=St(nt);e.texStorage2D(i.TEXTURE_2D,at,At,Y.width,Y.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Tt,nt)}else e.texImage2D(i.TEXTURE_2D,0,At,pt,Tt,nt);m(x)&&f(J),Mt.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function et(A,x,H){if(x.image.length!==6)return;let J=qt(A,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let K=n.get(Q);if(Q.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+H);let Mt=Wt.getPrimaries(Wt.workingColorSpace),lt=x.colorSpace===Wn?null:Wt.getPrimaries(x.colorSpace),ft=x.colorSpace===Wn||Mt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!Gt&&!nt?pt[j]=y(x.image[j],!0,s.maxCubemapSize):pt[j]=nt?x.image[j].image:x.image[j],pt[j]=ie(x,pt[j]);let Tt=pt[0],At=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Ht=v(x.internalFormat,At,mt,x.colorSpace),Ut=x.isVideoTexture!==!0,ee=K.__version===void 0||J===!0,N=Q.dataReady,at=C(x,Tt);Ft(i.TEXTURE_CUBE_MAP,x);let Y;if(Gt){Ut&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ht,Tt.width,Tt.height);for(let j=0;j<6;j++){Y=pt[j].mipmaps;for(let ut=0;ut<Y.length;ut++){let ct=Y[ut];x.format!==on?At!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,ct.width,ct.height,At,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,Ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,ct.width,ct.height,At,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,Ht,ct.width,ct.height,0,At,mt,ct.data)}}}else{if(Y=x.mipmaps,Ut&&ee){Y.length>0&&at++;let j=St(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(nt){Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,At,mt,pt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,pt[j].width,pt[j].height,0,At,mt,pt[j].data);for(let ut=0;ut<Y.length;ut++){let Pt=Y[ut].image[j].image;Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Pt.width,Pt.height,At,mt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,Ht,Pt.width,Pt.height,0,At,mt,Pt.data)}}else{Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,mt,pt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,At,mt,pt[j]);for(let ut=0;ut<Y.length;ut++){let ct=Y[ut];Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,At,mt,ct.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,Ht,At,mt,ct.image[j])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),K.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function gt(A,x,H,J,Q,K){let Mt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),ft=v(H.internalFormat,Mt,lt,H.colorSpace),Gt=n.get(x),nt=n.get(H);if(nt.__renderTarget=x,!Gt.__hasExternalTextures){let pt=Math.max(1,x.width>>K),Tt=Math.max(1,x.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,ft,pt,Tt,x.depth,0,Mt,lt,null):e.texImage2D(Q,K,ft,pt,Tt,0,Mt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,nt.__webglTexture,0,zt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,nt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let J=x.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=_(x.stencilBuffer,Q),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=zt(x);Vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,K,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,A)}else{let J=x.textures;for(let Q=0;Q<J.length;Q++){let K=J[Q],Mt=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),ft=v(K.internalFormat,Mt,lt,K.colorSpace),Gt=zt(x);H&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ft,x.width,x.height):Vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);let Q=J.__webglTexture,K=zt(x);if(x.depthTexture.format===zi)Vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Yi)Vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Rt(A){let x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Et(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[J],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,x,H){let J=n.get(A);x!==void 0&&gt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Rt(A)}function te(A){let x=A.texture,H=n.get(A),J=n.get(x);A.addEventListener("dispose",I);let Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let ft=0;ft<x.mipmaps.length;ft++)H.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else H.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)H.__webglFramebuffer[lt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let lt=0,ft=Q.length;lt<ft;lt++){let Gt=n.get(Q[lt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Vt(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){let ft=Q[lt];H.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);let Gt=r.convert(ft.format,ft.colorSpace),nt=r.convert(ft.type),pt=v(ft.internalFormat,Gt,nt,ft.colorSpace,A.isXRRenderTarget===!0),Tt=zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)gt(H.__webglFramebuffer[lt][ft],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else gt(H.__webglFramebuffer[lt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,ft=Q.length;lt<ft;lt++){let Gt=Q[lt],nt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Ft(i.TEXTURE_2D,Gt),gt(H.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),Ft(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)gt(H.__webglFramebuffer[ft],A,x,i.COLOR_ATTACHMENT0,lt,ft);else gt(H.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&f(lt),e.unbindTexture()}A.depthBuffer&&Rt(A)}function kt(A){let x=A.textures;for(let H=0,J=x.length;H<J;H++){let Q=x[H];if(m(Q)){let K=E(A),Mt=n.get(Q).__webglTexture;e.bindTexture(K,Mt),f(K),e.unbindTexture()}}}let ae=[],O=[];function $e(A){if(A.samples>0){if(Vt(A)===!1){let x=A.textures,H=A.width,J=A.height,Q=i.COLOR_BUFFER_BIT,K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(A),lt=x.length>1;if(lt)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Gt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,Q,i.NEAREST),l===!0&&(ae.length=0,O.length=0,ae.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ae.push(K),O.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Gt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function zt(A){return Math.min(s.maxSamples,A.samples)}function Vt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ie(A,x){let H=A.colorSpace,J=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==ji&&H!==Wn&&(Wt.getTransfer(H)===Jt?(J!==on||Q!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=w,this.resetTextureUnits=X,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Vt}function t_(i,t){function e(n,s=Wn){let r,a=Wt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===yh)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===bh)return i.RGB;if(n===on)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===Eh)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===wh)return i.RG;if(n===El)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===oa||n===aa||n===la)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===ha)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===ba||n===Sa||n===Ea||n===wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===Ta||n===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===Ra||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var qa=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Le=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},e_={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`,Ya=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$a=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Ya,m=e.getContextAttributes(),f=null,E=null,v=[],_=[],C=new dt,R=null,I=new Pe;I.viewport=new jt;let U=new Pe;U.viewport=new jt;let S=[I,U],M=new qa,L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=v[Z];return et===void 0&&(et=new ys,v[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=v[Z];return et===void 0&&(et=new ys,v[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=v[Z];return et===void 0&&(et=new ys,v[Z]=et),et.getHandSpace()};function w(Z){let et=_.indexOf(Z.inputSource);if(et===-1)return;let gt=v[et];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<v.length;Z++){let et=_[Z];et!==null&&(_[Z]=null,v[Z].disconnect(et))}L=null,X=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",D),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Nn(p.framebufferWidth,p.framebufferHeight,{format:on,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Yi:zi,gt=m.stencil?qi:hi);let Et={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Nn(d.textureWidth,d.textureHeight,{format:on,type:Dn,depthTexture:new Tr(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(Z){for(let et=0;et<Z.removed.length;et++){let gt=Z.removed[et],rt=_.indexOf(gt);rt>=0&&(_[rt]=null,v[rt].disconnect(gt))}for(let et=0;et<Z.added.length;et++){let gt=Z.added[et],rt=_.indexOf(gt);if(rt===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=_.length){_.push(gt),rt=Rt;break}else if(_[Rt]===null){_[Rt]=gt,rt=Rt;break}if(rt===-1)break}let Et=v[rt];Et&&Et.connect(gt)}}let z=new P,$=new P;function V(Z,et,gt){z.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);let rt=z.distanceTo($),Et=et.projectionMatrix.elements,Rt=gt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),te=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],ae=(Et[9]-1)/Et[5],O=(Et[8]-1)/Et[0],$e=(Rt[8]+1)/Rt[0],zt=Ot*O,Vt=Ot*$e,wt=rt/(-O+$e),ie=wt*-O;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ie),Z.translateZ(wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let St=Ot+wt,A=te+wt,x=zt-ie,H=Vt+(rt-ie),J=kt*te/A*St,Q=ae*te/A*St;Z.projectionMatrix.makePerspective(x,H,J,Q,St,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function tt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,gt=Z.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(gt=y.depthFar)),M.near=U.near=I.near=et,M.far=U.far=I.far=gt,(L!==M.near||X!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,X=M.far),I.layers.mask=Z.layers.mask|2,U.layers.mask=Z.layers.mask|4,M.layers.mask=I.layers.mask|U.layers.mask;let rt=Z.parent,Et=M.cameras;tt(M,rt);for(let Rt=0;Rt<Et.length;Rt++)tt(Et[Rt],rt);Et.length===2?V(M,I,U):M.projectionMatrix.copy(I.projectionMatrix),ot(Z,M,rt)};function ot(Z,et,gt){gt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ss*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let vt=null;function Ft(Z,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Rt=0;Rt<gt.length;Rt++){let Ot=gt[Rt],te=null;if(p!==null)te=p.getViewport(Ot);else{let ae=u.getViewSubImage(d,Ot);te=ae.viewport,Rt===0&&(t.setRenderTargetTextures(E,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(E))}let kt=S[Rt];kt===void 0&&(kt=new Pe,kt.layers.enable(Rt),kt.viewport=new jt,S[Rt]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(te.x,te.y,te.width,te.height),Rt===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(kt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Rt=u.getDepthInformation(gt[0]);Rt&&Rt.isValid&&Rt.texture&&y.init(t,Rt,s.renderState)}}for(let gt=0;gt<v.length;gt++){let rt=_[gt],Et=v[gt];rt!==null&&Et!==void 0&&Et.update(rt,et,c||a)}vt&&vt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let qt=new Dh;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}},ii=new pn,s_=new Dt;function r_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),v=E.envMap,_=E.envMapRotation;v&&(m.envMap.value=v,ii.copy(_),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(ii)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let _=v.program;n.uniformBlockBinding(E,_)}function c(E,v){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(E,C);let R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){let v=u();E.__bindingPointIndex=v;let _=i.createBuffer(),C=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let v=s[E.id],_=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,I=_.length;R<I;R++){let U=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,M=U.length;S<M;S++){let L=U[S];if(p(L,R,S,C)===!0){let X=L.__offset,w=Array.isArray(L.value)?L.value:[L.value],D=0;for(let F=0;F<w.length;F++){let z=w[F],$=y(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,X+D,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,v,_,C){let R=E.value,I=v+"_"+_;if(C[I]===void 0)return typeof R=="number"||typeof R=="boolean"?C[I]=R:C[I]=R.clone(),!0;{let U=C[I];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[I]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(E){let v=E.uniforms,_=0,C=16;for(let I=0,U=v.length;I<U;I++){let S=Array.isArray(v[I])?v[I]:[v[I]];for(let M=0,L=S.length;M<L;M++){let X=S[M],w=Array.isArray(X.value)?X.value:[X.value];for(let D=0,F=w.length;D<F;D++){let z=w[D],$=y(z),V=_%C,tt=V%$.boundary,ot=V+tt;_+=tt,ot!==0&&C-ot<$.storage&&(_+=C-ot),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=$.storage}}}let R=_%C;return R>0&&(_+=C-R),E.__size=_,E.__cache={},this}function y(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ar=class{constructor(t={}){let{canvas:e=uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=qn,this.toneMappingExposure=1;let _=this,C=!1,R=0,I=0,U=null,S=-1,M=null,L=new jt,X=new jt,w=null,D=new Bt(0),F=0,z=e.width,$=e.height,V=1,tt=null,ot=null,vt=new jt(0,0,z,$),Ft=new jt(0,0,z,$),qt=!1,Z=new Ts,et=!1,gt=!1,rt=new Dt,Et=new Dt,Rt=new P,Ot=new jt,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ae(){return U===null?V:1}let O=n;function $e(b,B){return e.getContext(b,B)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){let B="webgl2";if(O=$e(B,b),O===null)throw $e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let zt,Vt,wt,ie,St,A,x,H,J,Q,K,Mt,lt,ft,Gt,nt,pt,Tt,At,mt,Ht,Ut,ee,N;function at(){zt=new bg(O),zt.init(),Ut=new t_(O,zt),Vt=new gg(O,zt,t,Ut),wt=new J0(O,zt),Vt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),ie=new wg(O),St=new B0,A=new Q0(O,zt,wt,St,Vt,Ut,ie),x=new xg(_),H=new Mg(_),J=new Lf(O),ee=new pg(O,J),Q=new Sg(O,J,ie,ee),K=new Ag(O,Q,J,ie),At=new Tg(O,Vt,A),nt=new _g(St),Mt=new O0(_,x,H,zt,Vt,ee,nt),lt=new r_(_,St),ft=new z0,Gt=new q0(zt),Tt=new fg(_,x,H,wt,K,p,l),pt=new Z0(_,K,Vt),N=new o_(O,ie,Vt,wt),mt=new mg(O,zt,ie),Ht=new Eg(O,zt,ie),ie.programs=Mt.programs,_.capabilities=Vt,_.extensions=zt,_.properties=St,_.renderLists=ft,_.shadowMap=pt,_.state=wt,_.info=ie}at();let Y=new $a(_,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=zt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=zt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(z,$,!1))},this.getSize=function(b){return b.set(z,$)},this.setSize=function(b,B,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,$=B,e.width=Math.floor(b*V),e.height=Math.floor(B*V),G===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(z*V,$*V).floor()},this.setDrawingBufferSize=function(b,B,G){z=b,$=B,V=G,e.width=Math.floor(b*G),e.height=Math.floor(B*G),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,B,G,W){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,B,G,W),wt.viewport(L.copy(vt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,B,G,W){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,B,G,W),wt.scissor(X.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){wt.setScissorTest(qt=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(b=!0,B=!0,G=!0){let W=0;if(b){let k=!1;if(U!==null){let it=U.texture.format;k=it===wl||it===El||it===Sl}if(k){let it=U.texture.type,ht=it===Dn||it===hi||it===bs||it===qi||it===vl||it===Ml,_t=Tt.getClearColor(),xt=Tt.getClearAlpha(),Ct=_t.r,It=_t.g,yt=_t.b;ht?(g[0]=Ct,g[1]=It,g[2]=yt,g[3]=xt,O.clearBufferuiv(O.COLOR,0,g)):(y[0]=Ct,y[1]=It,y[2]=yt,y[3]=xt,O.clearBufferiv(O.COLOR,0,y))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Gt.dispose(),St.dispose(),x.dispose(),H.dispose(),K.dispose(),ee.dispose(),N.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Jl),Y.removeEventListener("sessionend",jl),Jn.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=ie.autoReset,B=pt.enabled,G=pt.autoUpdate,W=pt.needsUpdate,k=pt.type;at(),ie.autoReset=b,pt.enabled=B,pt.autoUpdate=G,pt.needsUpdate=W,pt.type=k}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pt(b){let B=b.target;B.removeEventListener("dispose",Pt),ue(B)}function ue(b){we(b),St.remove(b)}function we(b){let B=St.get(b).programs;B!==void 0&&(B.forEach(function(G){Mt.releaseProgram(G)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,G,W,k,it){B===null&&(B=te);let ht=k.isMesh&&k.matrixWorld.determinant()<0,_t=sd(b,B,G,W,k);wt.setMaterial(W,ht);let xt=G.index,Ct=1;if(W.wireframe===!0){if(xt=Q.getWireframeAttribute(G),xt===void 0)return;Ct=2}let It=G.drawRange,yt=G.attributes.position,Xt=It.start*Ct,ne=(It.start+It.count)*Ct;it!==null&&(Xt=Math.max(Xt,it.start*Ct),ne=Math.min(ne,(it.start+it.count)*Ct)),xt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,xt.count)):yt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,yt.count));let se=ne-Xt;if(se<0||se===1/0)return;ee.setup(k,W,_t,G,xt);let Ue,Yt=mt;if(xt!==null&&(Ue=J.get(xt),Yt=Ht,Yt.setIndex(Ue)),k.isMesh)W.wireframe===!0?(wt.setLineWidth(W.wireframeLinewidth*ae()),Yt.setMode(O.LINES)):Yt.setMode(O.TRIANGLES);else if(k.isLine){let bt=W.linewidth;bt===void 0&&(bt=1),wt.setLineWidth(bt*ae()),k.isLineSegments?Yt.setMode(O.LINES):k.isLineLoop?Yt.setMode(O.LINE_LOOP):Yt.setMode(O.LINE_STRIP)}else k.isPoints?Yt.setMode(O.POINTS):k.isSprite&&Yt.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Yt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let bt=k._multiDrawStarts,Sn=k._multiDrawCounts,$t=k._multiDrawCount,je=xt?J.get(xt).bytesPerElement:1,bi=St.get(W).currentProgram.getUniforms();for(let Ve=0;Ve<$t;Ve++)bi.setValue(O,"_gl_DrawID",Ve),Yt.render(bt[Ve]/je,Sn[Ve])}else if(k.isInstancedMesh)Yt.renderInstances(Xt,se,k.count);else if(G.isInstancedBufferGeometry){let bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Sn=Math.min(G.instanceCount,bt);Yt.renderInstances(Xt,se,Sn)}else Yt.render(Xt,se)};function Zt(b,B,G){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,Os(b,B,G),b.side=Yn,b.needsUpdate=!0,Os(b,B,G),b.side=sn):Os(b,B,G)}this.compile=function(b,B,G=null){G===null&&(G=b),f=Gt.get(G),f.init(B),v.push(f),G.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),b!==G&&b.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let W=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let it=k.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){let _t=it[ht];Zt(_t,G,k),W.add(_t)}else Zt(it,G,k),W.add(it)}),v.pop(),f=null,W},this.compileAsync=function(b,B,G=null){let W=this.compile(b,B,G);return new Promise(k=>{function it(){if(W.forEach(function(ht){St.get(ht).currentProgram.isReady()&&W.delete(ht)}),W.size===0){k(b);return}setTimeout(it,10)}zt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Je=null;function bn(b){Je&&Je(b)}function Jl(){Jn.stop()}function jl(){Jn.start()}let Jn=new Dh;Jn.setAnimationLoop(bn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(b){Je=b,Y.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",Jl),Y.addEventListener("sessionend",jl),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,B,U),f=Gt.get(b,v.length),f.init(B),v.push(f),Et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,gt),m=ft.get(b,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){let it=_.xr.getDepthSensingMesh();it!==null&&fo(it,B,-1/0,_.sortObjects)}fo(b,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,ot),kt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,kt&&Tt.addToRenderList(m,b),this.info.render.frame++,et===!0&&nt.beginShadows();let G=f.state.shadowsArray;pt.render(G,b,B),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,k=m.transmissive;if(f.setupLights(),B.isArrayCamera){let it=B.cameras;if(k.length>0)for(let ht=0,_t=it.length;ht<_t;ht++){let xt=it[ht];tc(W,k,b,xt)}kt&&Tt.render(b);for(let ht=0,_t=it.length;ht<_t;ht++){let xt=it[ht];Ql(m,b,xt,xt.viewport)}}else k.length>0&&tc(W,k,b,B),kt&&Tt.render(b),Ql(m,b,B);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(_,b,B),ee.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(f=v[v.length-1],et===!0&&nt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function fo(b,B,G,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){W&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);let ht=K.update(b),_t=b.material;_t.visible&&m.push(b,ht,_t,G,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let ht=K.update(b),_t=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ot.copy(ht.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(_t)){let xt=ht.groups;for(let Ct=0,It=xt.length;Ct<It;Ct++){let yt=xt[Ct],Xt=_t[yt.materialIndex];Xt&&Xt.visible&&m.push(b,ht,Xt,G,Ot.z,yt)}}else _t.visible&&m.push(b,ht,_t,G,Ot.z,null)}}let it=b.children;for(let ht=0,_t=it.length;ht<_t;ht++)fo(it[ht],B,G,W)}function Ql(b,B,G,W){let k=b.opaque,it=b.transmissive,ht=b.transparent;f.setupLightsView(G),et===!0&&nt.setGlobalState(_.clippingPlanes,G),W&&wt.viewport(L.copy(W)),k.length>0&&Fs(k,B,G),it.length>0&&Fs(it,B,G),ht.length>0&&Fs(ht,B,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function tc(b,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Nn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Is:Dn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let it=f.state.transmissionRenderTarget[W.id],ht=W.viewport||L;it.setSize(ht.z,ht.w);let _t=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(D),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),kt&&Tt.render(G);let xt=_.toneMapping;_.toneMapping=qn;let Ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),et===!0&&nt.setGlobalState(_.clippingPlanes,W),Fs(b,G,W),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),zt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let yt=0,Xt=B.length;yt<Xt;yt++){let ne=B[yt],se=ne.object,Ue=ne.geometry,Yt=ne.material,bt=ne.group;if(Yt.side===sn&&se.layers.test(W.layers)){let Sn=Yt.side;Yt.side=Ne,Yt.needsUpdate=!0,ec(se,G,W,Ue,Yt,bt),Yt.side=Sn,Yt.needsUpdate=!0,It=!0}}It===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}_.setRenderTarget(_t),_.setClearColor(D,F),Ct!==void 0&&(W.viewport=Ct),_.toneMapping=xt}function Fs(b,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,it=b.length;k<it;k++){let ht=b[k],_t=ht.object,xt=ht.geometry,Ct=W===null?ht.material:W,It=ht.group;_t.layers.test(G.layers)&&ec(_t,B,G,xt,Ct,It)}}function ec(b,B,G,W,k,it){b.onBeforeRender(_,B,G,W,k,it),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(_,B,G,W,b,it),k.transparent===!0&&k.side===sn&&k.forceSinglePass===!1?(k.side=Ne,k.needsUpdate=!0,_.renderBufferDirect(G,B,W,k,b,it),k.side=Yn,k.needsUpdate=!0,_.renderBufferDirect(G,B,W,k,b,it),k.side=sn):_.renderBufferDirect(G,B,W,k,b,it),b.onAfterRender(_,B,G,W,k,it)}function Os(b,B,G){B.isScene!==!0&&(B=te);let W=St.get(b),k=f.state.lights,it=f.state.shadowsArray,ht=k.state.version,_t=Mt.getParameters(b,k.state,it,B,G),xt=Mt.getProgramCacheKey(_t),Ct=W.programs;W.environment=b.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(b.isMeshStandardMaterial?H:x).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",Pt),Ct=new Map,W.programs=Ct);let It=Ct.get(xt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===ht)return ic(b,_t),It}else _t.uniforms=Mt.getUniforms(b),b.onBeforeCompile(_t,_),It=Mt.acquireProgram(_t,xt),Ct.set(xt,It),W.uniforms=_t.uniforms;let yt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(yt.clippingPlanes=nt.uniform),ic(b,_t),W.needsLights=od(b),W.lightsStateVersion=ht,W.needsLights&&(yt.ambientLightColor.value=k.state.ambient,yt.lightProbe.value=k.state.probe,yt.directionalLights.value=k.state.directional,yt.directionalLightShadows.value=k.state.directionalShadow,yt.spotLights.value=k.state.spot,yt.spotLightShadows.value=k.state.spotShadow,yt.rectAreaLights.value=k.state.rectArea,yt.ltc_1.value=k.state.rectAreaLTC1,yt.ltc_2.value=k.state.rectAreaLTC2,yt.pointLights.value=k.state.point,yt.pointLightShadows.value=k.state.pointShadow,yt.hemisphereLights.value=k.state.hemi,yt.directionalShadowMap.value=k.state.directionalShadowMap,yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,yt.spotShadowMap.value=k.state.spotShadowMap,yt.spotLightMatrix.value=k.state.spotLightMatrix,yt.spotLightMap.value=k.state.spotLightMap,yt.pointShadowMap.value=k.state.pointShadowMap,yt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function nc(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Hi.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function ic(b,B){let G=St.get(b);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function sd(b,B,G,W,k){B.isScene!==!0&&(B=te),A.resetTextureUnits();let it=B.fog,ht=W.isMeshStandardMaterial?B.environment:null,_t=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ji,xt=(W.isMeshStandardMaterial?H:x).get(W.envMap||ht),Ct=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),yt=!!G.morphAttributes.position,Xt=!!G.morphAttributes.normal,ne=!!G.morphAttributes.color,se=qn;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=_.toneMapping);let Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Yt=Ue!==void 0?Ue.length:0,bt=St.get(W),Sn=f.state.lights;if(et===!0&&(gt===!0||b!==M)){let Ze=b===M&&W.id===S;nt.setState(W,b,Ze)}let $t=!1;W.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Sn.state.version||bt.outputColorSpace!==_t||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==xt||W.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Ct||bt.vertexTangents!==It||bt.morphTargets!==yt||bt.morphNormals!==Xt||bt.morphColors!==ne||bt.toneMapping!==se||bt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,bt.__version=W.version);let je=bt.currentProgram;$t===!0&&(je=Os(W,B,k));let bi=!1,Ve=!1,as=!1,re=je.getUniforms(),un=bt.uniforms;if(wt.useProgram(je.program)&&(bi=!0,Ve=!0,as=!0),W.id!==S&&(S=W.id,Ve=!0),bi||M!==b){wt.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),ff(rt),pf(rt),re.setValue(O,"projectionMatrix",rt)):re.setValue(O,"projectionMatrix",b.projectionMatrix),re.setValue(O,"viewMatrix",b.matrixWorldInverse);let Fn=re.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,Rt.setFromMatrixPosition(b.matrixWorld)),Vt.logarithmicDepthBuffer&&re.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&re.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ve=!0,as=!0)}if(k.isSkinnedMesh){re.setOptional(O,k,"bindMatrix"),re.setOptional(O,k,"bindMatrixInverse");let Ze=k.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),re.setValue(O,"boneTexture",Ze.boneTexture,A))}k.isBatchedMesh&&(re.setOptional(O,k,"batchingTexture"),re.setValue(O,"batchingTexture",k._matricesTexture,A),re.setOptional(O,k,"batchingIdTexture"),re.setValue(O,"batchingIdTexture",k._indirectTexture,A),re.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&re.setValue(O,"batchingColorTexture",k._colorsTexture,A));let ls=G.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&At.update(k,G,je),(Ve||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,re.setValue(O,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(un.envMap.value=xt,un.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(un.envMapIntensity.value=B.environmentIntensity),Ve&&(re.setValue(O,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&rd(un,as),it&&W.fog===!0&&lt.refreshFogUniforms(un,it),lt.refreshMaterialUniforms(un,W,V,$,f.state.transmissionRenderTarget[b.id]),Hi.upload(O,nc(bt),un,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hi.upload(O,nc(bt),un,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&re.setValue(O,"center",k.center),re.setValue(O,"modelViewMatrix",k.modelViewMatrix),re.setValue(O,"normalMatrix",k.normalMatrix),re.setValue(O,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ze=W.uniformsGroups;for(let Fn=0,On=Ze.length;Fn<On;Fn++){let sc=Ze[Fn];N.update(sc,je),N.bind(sc,je)}}return je}function rd(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function od(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,B,G){St.get(b.texture).__webglTexture=B,St.get(b.depthTexture).__webglTexture=G;let W=St.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){let G=St.get(b);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,G=0){U=b,R=B,I=G;let W=!0,k=null,it=!1,ht=!1;if(b){let xt=St.get(b);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(xt.__hasExternalTextures)A.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let yt=b.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&St.has(yt)&&(b.width!==yt.image.width||b.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);let It=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[B])?k=It[B][G]:k=It[B],it=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?k=St.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[G]:k=It,L.copy(b.viewport),X.copy(b.scissor),w=b.scissorTest}else L.copy(vt).multiplyScalar(V).floor(),X.copy(Ft).multiplyScalar(V).floor(),w=qt;if(wt.bindFramebuffer(O.FRAMEBUFFER,k)&&W&&wt.drawBuffers(b,k),wt.viewport(L),wt.scissor(X),wt.setScissorTest(w),it){let xt=St.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,xt.__webglTexture,G)}else if(ht){let xt=St.get(b.texture),Ct=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,Ct)}S=-1},this.readRenderTargetPixels=function(b,B,G,W,k,it,ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){wt.bindFramebuffer(O.FRAMEBUFFER,_t);try{let xt=b.texture,Ct=xt.format,It=xt.type;if(!Vt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&G>=0&&G<=b.height-k&&O.readPixels(B,G,W,k,Ut.convert(Ct),Ut.convert(It),it)}finally{let xt=U!==null?St.get(U).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(b,B,G,W,k,it,ht){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){let xt=b.texture,Ct=xt.format,It=xt.type;if(!Vt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-W&&G>=0&&G<=b.height-k){wt.bindFramebuffer(O.FRAMEBUFFER,_t);let yt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.bufferData(O.PIXEL_PACK_BUFFER,it.byteLength,O.STREAM_READ),O.readPixels(B,G,W,k,Ut.convert(Ct),Ut.convert(It),0);let Xt=U!==null?St.get(U).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,Xt);let ne=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await df(O,ne,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,it),O.deleteBuffer(yt),O.deleteSync(ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,G=0){b.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);let W=Math.pow(2,-G),k=Math.floor(b.image.width*W),it=Math.floor(b.image.height*W),ht=B!==null?B.x:0,_t=B!==null?B.y:0;A.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,ht,_t,k,it),wt.unbindTexture()},this.copyTextureToTexture=function(b,B,G=null,W=null,k=0){b.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],B=arguments[2],k=arguments[3]||0,G=null);let it,ht,_t,xt,Ct,It,yt,Xt,ne,se=b.isCompressedTexture?b.mipmaps[k]:b.image;G!==null?(it=G.max.x-G.min.x,ht=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,xt=G.min.x,Ct=G.min.y,It=G.isBox3?G.min.z:0):(it=se.width,ht=se.height,_t=se.depth||1,xt=0,Ct=0,It=0),W!==null?(yt=W.x,Xt=W.y,ne=W.z):(yt=0,Xt=0,ne=0);let Ue=Ut.convert(B.format),Yt=Ut.convert(B.type),bt;B.isData3DTexture?(A.setTexture3D(B,0),bt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),bt=O.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let Sn=O.getParameter(O.UNPACK_ROW_LENGTH),$t=O.getParameter(O.UNPACK_IMAGE_HEIGHT),je=O.getParameter(O.UNPACK_SKIP_PIXELS),bi=O.getParameter(O.UNPACK_SKIP_ROWS),Ve=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ct),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);let as=b.isDataArrayTexture||b.isData3DTexture,re=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let un=St.get(b),ls=St.get(B),Ze=St.get(un.__renderTarget),Fn=St.get(ls.__renderTarget);wt.bindFramebuffer(O.READ_FRAMEBUFFER,Ze.__webglFramebuffer),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<_t;On++)as&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.get(b).__webglTexture,k,It+On),b.isDepthTexture?(re&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.get(B).__webglTexture,k,ne+On),O.blitFramebuffer(xt,Ct,it,ht,yt,Xt,it,ht,O.DEPTH_BUFFER_BIT,O.NEAREST)):re?O.copyTexSubImage3D(bt,k,yt,Xt,ne+On,xt,Ct,it,ht):O.copyTexSubImage2D(bt,k,yt,Xt,ne+On,xt,Ct,it,ht);wt.bindFramebuffer(O.READ_FRAMEBUFFER,null),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else re?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(bt,k,yt,Xt,ne,it,ht,_t,Ue,Yt,se.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,k,yt,Xt,ne,it,ht,_t,Ue,se.data):O.texSubImage3D(bt,k,yt,Xt,ne,it,ht,_t,Ue,Yt,se):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,yt,Xt,it,ht,Ue,Yt,se.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,yt,Xt,se.width,se.height,Ue,se.data):O.texSubImage2D(O.TEXTURE_2D,k,yt,Xt,it,ht,Ue,Yt,se);O.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$t),O.pixelStorei(O.UNPACK_SKIP_PIXELS,je),O.pixelStorei(O.UNPACK_SKIP_ROWS,bi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve),k===0&&B.generateMipmaps&&O.generateMipmap(bt),wt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,G=null,W=null,k=0){return b.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,b=arguments[2],B=arguments[3],k=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,G,W,k)},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){R=0,I=0,U=null,wt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Rr=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Re=new P,gn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ka=class extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=We,h=We,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class extends ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Oi=new Dt,rh=new Dt,rr=[],oh=new Fe,a_=new Dt,fs=new oe,ps=new an,Cr=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),oh.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(oh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),ps.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),rh.multiplyMatrices(n,Oi),fs.matrixWorld=rh,fs.raycast(t,rr);for(let a=0,o=rr.length;a<o;a++){let l=rr[a];l.instanceId=r,l.object=this,e.push(l)}rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ka(new Float32Array(s*this.count),s,this.count,bl,fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new Dt;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ja=class extends Pr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var or=new P,Ho=new Rl,Go=new Rl,Wo=new Rl,ja=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),c=or);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ho.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Wo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ho.calc(l),Go.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ah(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function l_(i,t){let e=1-i;return e*e*t}function c_(i,t){return 2*(1-i)*i*t}function h_(i,t){return i*i*t}function vs(i,t,e,n){return l_(i,t)+c_(i,e)+h_(i,n)}function u_(i,t){let e=1-i;return e*e*e*t}function d_(i,t){let e=1-i;return 3*e*e*i*t}function f_(i,t){return 3*(1-i)*i*i*t}function p_(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return u_(i,t)+d_(i,e)+f_(i,n)+p_(i,s)}var Qa=class extends ln{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y),Ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},el=class extends ln{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},As=class extends ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends ln{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y),vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ah(o,l.x,c.x,h.x,u.x),ah(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},m_=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:ja,CubicBezierCurve:Qa,CubicBezierCurve3:tl,EllipseCurve:Pr,LineCurve:el,LineCurve3:As,QuadraticBezierCurve:nl,QuadraticBezierCurve3:Ir,SplineCurve:il});var sl=class i extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let v=new P,_=new P,C=new P;for(let R=0;R<e.length;R+=3)p(e[R+0],v),p(e[R+1],_),p(e[R+2],C),l(v,_,C,E)}function l(E,v,_,C){let R=C+1,I=[];for(let U=0;U<=R;U++){I[U]=[];let S=E.clone().lerp(_,U/R),M=v.clone().lerp(_,U/R),L=R-U;for(let X=0;X<=L;X++)X===0&&U===R?I[U][X]=S:I[U][X]=S.clone().lerp(M,X/L)}for(let U=0;U<R;U++)for(let S=0;S<2*(R-U)-1;S++){let M=Math.floor(S/2);S%2===0?(d(I[U][M+1]),d(I[U+1][M]),d(I[U][M])):(d(I[U][M+1]),d(I[U+1][M+1]),d(I[U+1][M]))}}function c(E){let v=new P;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(E),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let E=new P;for(let v=0;v<r.length;v+=3){E.x=r[v+0],E.y=r[v+1],E.z=r[v+2];let _=m(E)/2/Math.PI+.5,C=f(E)/Math.PI+.5;a.push(_,1-C)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){let v=a[E+0],_=a[E+2],C=a[E+4],R=Math.max(v,_,C),I=Math.min(v,_,C);R>.9&&I<.1&&(v<.2&&(a[E+0]+=1),_<.2&&(a[E+2]+=1),C<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,v){let _=E*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let E=new P,v=new P,_=new P,C=new P,R=new dt,I=new dt,U=new dt;for(let S=0,M=0;S<r.length;S+=9,M+=6){E.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),R.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),U.set(a[M+4],a[M+5]),C.copy(E).add(v).add(_).divideScalar(3);let L=m(C);y(R,M+0,E,L),y(I,M+2,v,L),y(U,M+4,_,L)}}function y(E,v,_,C){C<0&&E.x===1&&(a[v]=E.x-1),_.x===0&&_.z===0&&(a[v]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Lr=class i extends sl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var di=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let E=[],v=f/n,_=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let R=C/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+_,1-v),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let v=h[f][E+1],_=h[f][E],C=h[f+1][E],R=h[f+1][E+1];(f!==0||a>0)&&p.push(v,_,R),(f!==n-1||l<Math.PI)&&p.push(_,C,R)}this.setIndex(p),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dr=class i extends Oe{constructor(t=new Ir(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new dt,h=new P,u=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),E(),f()}function m(v){h=t.getPointAt(v/e,h);let _=a.normals[v],C=a.binormals[v];for(let R=0;R<=s;R++){let I=R/s*Math.PI*2,U=Math.sin(I),S=-Math.cos(I);l.x=S*_.x+U*C.x,l.y=S*_.y+U*C.y,l.z=S*_.z+U*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let C=(s+1)*(v-1)+(_-1),R=(s+1)*v+(_-1),I=(s+1)*v+_,U=(s+1)*(v-1)+_;g.push(C,R,U),g.push(R,I,U)}}function E(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new m_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ur=class extends Oe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new P,r=new P;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,y=d+p;g<y;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),E=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,E),lh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),lh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new fe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function lh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Rs=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ar(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function g_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:r=t,o=2*e-n;break;case uc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:a=t,l=2*n-e;break;case uc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*y+.5*g,_=p*m-p*y;for(let C=0;C!==o;++C)r[C]=f*a[h+C]+E*a[c+C]+v*a[l+C]+_*a[u+C];return r}},ol=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},al=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&g_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Ia;var fi=class extends cn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=pr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends cn{};ll.prototype.ValueTypeName="color";var cl=class extends cn{};cl.prototype.ValueTypeName="number";var hl=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Nr=class extends cn{InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends cn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=pr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends cn{};ul.prototype.ValueTypeName="vector";var dl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},__=new dl,fl=class{constructor(t){this.manager=t!==void 0?t:__,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Or=class extends Fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xo=new Dt,ch=new P,hh=new P,pl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ml=class extends pl{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new ml}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Br=class extends Oe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var kr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function uh(){return performance.now()}var Cl="\\[\\]\\.:\\/",x_=new RegExp("["+Cl+"]","g"),Pl="[^"+Cl+"]",y_="[^"+Cl.replace("\\.","")+"]",v_=/((?:WC+[\/:])*)/.source.replace("WC",Pl),M_=/(WCOD+)?/.source.replace("WCOD",y_),b_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),S_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),E_=new RegExp("^"+v_+M_+b_+S_+"$"),w_=["material","materials","bones","map"],gl=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x_,"")}static parseTrackName(t){let e=E_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=gl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jx=new Float32Array(1);var mi=class extends Za{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var dh=new Dt,zr=class{constructor(t,e,n=0,s=1/0){this.ray=new $i(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(fh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,n,e);return n.sort(fh),n}};function fh(i,t){return i.distance-t.distance}function _l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)_l(r[a],t,e,!0)}}var Ps=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ph=new P,lr=new P,Vr=class{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ph.subVectors(t,this.start),lr.subVectors(this.end,this.start);let n=lr.dot(lr),r=lr.dot(ph)/n;return e&&(r=_e(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Hr=class extends Un{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);var Bh={type:"change"},Ll={type:"start"},zh={type:"end"},$r=new $i,kh=new nn,T_=Math.cos(70*Xr.DEG2RAD),ve=new P,ke=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6,Zr=class extends Hr{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new qe,this._lastTargetPosition=new P,this._quat=new qe().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ps,this._sphericalDelta=new Ps,this._scale=1,this._panOffset=new P,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new P,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R_.bind(this),this._onPointerDown=A_.bind(this),this._onPointerUp=C_.bind(this),this._onContextMenu=F_.bind(this),this._onMouseWheel=L_.bind(this),this._onKeyDown=D_.bind(this),this._onTouchStart=U_.bind(this),this._onTouchMove=N_.bind(this),this._onMouseDown=P_.bind(this),this._onMouseMove=I_.bind(this),this._interceptControlDown=O_.bind(this),this._interceptControlUp=B_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bh),this.update(),this.state=Qt.NONE}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ke:n>Math.PI&&(n-=ke),s<-Math.PI?s+=ke:s>Math.PI&&(s-=ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($r.origin.copy(this.object.position),$r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($r.direction))<T_?this.object.lookAt(this.target):(kh.setFromNormalAndCoplanarPoint(this.object.up,this.target),$r.intersectPlane(kh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(Bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function A_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function R_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function C_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zh),this.state=Qt.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function P_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Ll)}function I_(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function L_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(Ll),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zh))}function D_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function U_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Ll)}function N_(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function F_(i){this.enabled!==!1&&i.preventDefault()}function O_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function B_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ts=(i,t)=>i.map((e,n)=>e+t[n]),Dl=(i,t)=>i.map((e,n)=>e-t[n]),Ls=(i,t)=>i.map(e=>e*t),Kr=i=>Ls(i,1/(Math.hypot(...i)||1));function Vh(i,t,e=.12){return 2*i*Math.tan(t*Math.PI/360)*e}function Hh(i,t,e,n,s,r){let a=ts(Ls(Kr(t),s*n),Ls(Kr(e),r*n));return{target:ts(i.target,a),position:ts(i.position,a)}}function Gh(i,t){let e=Math.hypot(...Dl(i.position,i.target));return{target:i.target.slice(),position:ts(i.target,Ls(Kr(t),e))}}function Ul(i,t){return{target:t.slice(),position:ts(i.position,Dl(t,i.target))}}function Wh(i,t){return Ul(i,[t[0],i.target[1],t[2]])}function Xh(i,t,e,n){let s=Dl(i.position,i.target),r=Math.hypot(s[0],s[2]),a=r<.001?n:[s[0]/r,.05,s[2]/r];return{target:t.slice(),position:ts(t,Ls(Kr(a),e))}}var Jr=new P(0,86,0),qh=300,k_=95,Nl={front:[-.25,.05,1],back:[.25,.05,-1],right:[-1,.05,.05],left:[1,.05,.05]};function Yh(i){let t=new Ar({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(t.domElement);let e=new Rr;e.background=new Bt(921878);let n=new Pe(35,1,1,2e3),s=new Zr(n,t.domElement);s.enableDamping=!0,s.zoomToCursor=!0,s.keyPanSpeed=25,t.domElement.tabIndex=0,s.listenToKeyEvents(t.domElement),e.add(new Or(16777215,2764602,1.4));let r=new Cs(16777215,1.8);r.position.set(-80,220,160),e.add(r);let a=new Cs(16777215,.9);a.position.set(90,160,-160),e.add(a);function o(w,D,F){s.target.copy(w),n.position.copy(w).add(new P(...D).normalize().multiplyScalar(F)),s.update()}o(Jr,Nl.front,qh);let l=null,c=()=>l?.to??{target:s.target.toArray(),position:n.position.toArray()};function h(w,D=.3){l={from:{target:s.target.toArray(),position:n.position.toArray()},to:w,t:0,duration:D}}s.addEventListener("start",()=>l=null);function u(w){if(!l)return;l.t=Math.min(1,l.t+w/l.duration);let D=l.t*l.t*(3-2*l.t),F=(z,$)=>z.map((V,tt)=>V+($[tt]-V)*D);s.target.fromArray(F(l.from.target,l.to.target)),n.position.fromArray(F(l.from.position,l.to.position)),l.t===1&&(l=null)}let d=w=>{l=null,s.target.fromArray(w.target),n.position.fromArray(w.position),s.update()},p=w=>d(Gh(c(),Nl[w])),g=()=>d(Xh(c(),Jr.toArray(),qh,Nl.front));function y(w,D){let F=c(),z=Math.hypot(...F.position.map((tt,ot)=>tt-F.target[ot])),$=new P(1,0,0).applyQuaternion(n.quaternion).toArray(),V=new P(0,1,0).applyQuaternion(n.quaternion).toArray();h(Hh(F,$,V,Vh(z,n.fov),w,D),.2)}let m=w=>h(Ul(c(),w),.35),f=()=>h(Wh(c(),Jr.toArray()),.35);function E(w){let D=new P(...w),F=new P(D.x,0,D.z-Jr.z);F.length()<3&&F.copy(n.position).sub(s.target).setY(0),F.normalize().setY(.15),l=null,o(D,F.toArray(),k_)}let v=[],_=()=>{let w=i.clientWidth,D=i.clientHeight;t.setSize(w,D),n.aspect=w/D,n.updateProjectionMatrix();for(let F of v)F(w,D)};new ResizeObserver(_).observe(i),_();let C=new zr,R=new dt;function I(w,D,F){let z=t.domElement.getBoundingClientRect();return R.set((w-z.left)/z.width*2-1,-((D-z.top)/z.height)*2+1),C.setFromCamera(R,n),C.intersectObjects(F,!1)[0]??null}let U=(w,D,F)=>I(w,D,F)?.object??null,S=(w,D,F)=>I(w,D,F),M=(w,D,F)=>I(w,D,F)?.point.toArray()??null,L=[],X=new kr;return t.setAnimationLoop(()=>{let w=X.getDelta();for(let D of L)D(w);u(w),s.update(),t.render(e,n)}),{scene:e,camera:n,controls:s,renderer:t,pick:U,pickHit:S,pickPoint:M,setView:p,showWholeBody:g,pan:y,recenter:m,center:f,lookAt:E,onFrame:w=>L.push(w),onResize(w){v.push(w),w(i.clientWidth,i.clientHeight)}}}function $h(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Fl(i,t,e){let n=i.byteOffset%4?i.slice():i,s=new Int16Array(n.buffer,n.byteOffset+e.vOffset,e.vCount*3),r=new Float32Array(s.length);for(let c=0;c<s.length;c++){let h=c%3;r[c]=t.min[h]+(s[c]+32768)/65535*(t.max[h]-t.min[h])}let a=e.wide?Uint32Array:Uint16Array,o=new a(n.buffer,n.byteOffset+e.iOffset,e.iCount).slice(),l=e.sOffset===void 0?null:n.slice(e.sOffset,e.sOffset+e.vCount*3);return{positions:r,indices:o,skin:l}}var z_=["pelvis","L5","L4","L3","L2","L1","thoraxLow","thoraxMid","thoraxUp","neckLow","neckUp","head"],jr=["index","middle","ring","little"],V_=["thumbMeta","thumbProx","thumbDist",...jr.flatMap(i=>[`${i}Prox`,`${i}Mid`,`${i}Dist`])],Zh=["clavicle","scapula","arm","ulna","radius","hand",...V_,"femur","shank","talus","foot"],ry=new Set(Zh),Kh=[...z_,...Zh.flatMap(i=>[`${i}.l`,`${i}.r`])],Ol={ulna:"arm",radius:"ulna",hand:"radius",thumbMeta:"hand",thumbProx:"thumbMeta",thumbDist:"thumbProx",...Object.fromEntries(jr.flatMap(i=>[[`${i}Prox`,"hand"],[`${i}Mid`,`${i}Prox`],[`${i}Dist`,`${i}Mid`]])),shank:"femur",talus:"shank",foot:"talus"};function Jh(i){let t=i.lastIndexOf(".");return t<0?[i,null]:[i.slice(0,t),i.slice(t+1)]}function es(i,t){return[i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],i[2]*t[0]+i[6]*t[1]+i[10]*t[2]+i[14]]}function H_(i){return[i.a,...i.vias.map(t=>t.p),i.b]}function Qr(i,t){return[es(t.get(i.segA).elements,i.a),...i.vias.map(e=>es(t.get(e.seg).elements,e.p)),es(t.get(i.segB).elements,i.b)]}function Bl(i){let t=0;for(let e=1;e<i.length;e++)t+=Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1],i[e][2]-i[e-1][2]);return t}function G_(i,t,e){let n=new P(...e).normalize(),s=i.clone().invert().multiply(t),r=new P(1,0,0).cross(n);r.lengthSq()<1e-6&&r.set(0,1,0).cross(n),r.normalize();let a=r.clone().transformDirection(s);return Math.atan2(n.dot(r.clone().cross(a)),r.dot(a))}function W_(i,t){let e=new Map,n=s=>{if(e.has(s))return e.get(s);let[r,a]=Jh(s),o=Ol[r]&&`${Ol[r]}.${a}`,l=i.get(s);if(o){let c=n(o);t.has(s)?l=c:c!==i.get(o)&&(l=c.clone().multiply(i.get(o).clone().invert()).multiply(l))}return e.set(s,l),l};return{get:n}}function Qh(i,t){if(!i.altVias)return jh(i,t);let e=[i.vias,...i.altVias].map(n=>jh({...i,vias:n},t));return e.reduce((n,s)=>n+s,0)/e.length}function jh(i,t){let e=Bl(H_(i));if(e<.5)return 0;if(!i.wraps)return Bl(Qr(i,t))/e-1;let n=Bl(Qr(i,W_(t,new Set(i.wraps.map(s=>s.dist)))));for(let s of i.wraps)n-=s.m*G_(t.get(s.prox),t.get(s.dist),s.axis);return n/e-1}function X_(i,t,e){let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function tu(i,t,e){let n=i.length/3,s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=s[0]**2+s[1]**2+s[2]**2||1,a=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++){let c=((i[l*3]-t[0])*s[0]+(i[l*3+1]-t[1])*s[1]+(i[l*3+2]-t[2])*s[2])/r,h=X_(.1,.9,c);a[l]=h,o[l]=4*h*(1-h)}return{rest:i,a:t,b:e,restLength:Math.sqrt(r),weight:a,belly:o}}function eu(i,t,e,n){let{rest:s,weight:r,belly:a}=i,o=t.elements,l=e.elements,c=es(o,i.a),h=es(l,i.b),u=Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])||1,d=[(h[0]-c[0])/u,(h[1]-c[1])/u,(h[2]-c[2])/u],p=1/Math.sqrt(u/i.restLength);for(let g=0,y=r.length;g<y;g++){let m=s[g*3],f=s[g*3+1],E=s[g*3+2],v=r[g],_=1-v,C=_*(o[0]*m+o[4]*f+o[8]*E+o[12])+v*(l[0]*m+l[4]*f+l[8]*E+l[12]),R=_*(o[1]*m+o[5]*f+o[9]*E+o[13])+v*(l[1]*m+l[5]*f+l[9]*E+l[13]),I=_*(o[2]*m+o[6]*f+o[10]*E+o[14])+v*(l[2]*m+l[6]*f+l[10]*E+l[14]),U=1+(p-1)*a[g];if(U!==1){let S=(C-c[0])*d[0]+(R-c[1])*d[1]+(I-c[2])*d[2],M=c[0]+d[0]*S,L=c[1]+d[1]*S,X=c[2]+d[2]*S;C=M+(C-M)*U,R=L+(R-L)*U,I=X+(I-X)*U}n[g*3]=C,n[g*3+1]=R,n[g*3+2]=I}}function nu(i,t,e,n,s){let r=e.map(a=>n.get(a).elements);for(let a=0,o=i.length/3;a<o;a++){let l=r[t[a*3]],c=r[t[a*3+1]],h=t[a*3+2]/255,u=1-h,d=i[a*3],p=i[a*3+1],g=i[a*3+2];s[a*3]=u*(l[0]*d+l[4]*p+l[8]*g+l[12])+h*(c[0]*d+c[4]*p+c[8]*g+c[12]),s[a*3+1]=u*(l[1]*d+l[5]*p+l[9]*g+l[13])+h*(c[1]*d+c[5]*p+c[9]*g+c[13]),s[a*3+2]=u*(l[2]*d+l[6]*p+l[10]*g+l[14])+h*(c[2]*d+c[6]*p+c[10]*g+c[14])}}var _n={natural:[.62,.25,.22],same:[.7,.68,.66],short:[.86,.16,.12],long:[.14,.4,.88],selected:[.72,.42,1]},kl={short:"\u9396\u77ED",long:"\u9396\u9577",same:"\u4E0D\u8B8A"};function iu(i){return Math.sign(i)*Math.round(Math.abs(i)*100)}function ns(i){let t=iu(i);return t<=-.03*100?"short":t>=.03*100?"long":"same"}function su({selected:i,poseActive:t,measure:e,delta:n}){return i?_n.selected.slice():t?e?zl(n):_n.same.slice():_n.natural.slice()}function zl(i){let t=ns(i);if(t==="same")return _n.same.slice();let e=.35+.65*Math.min(1,Math.max(0,(Math.abs(i)-.03)/(.2-.03)));return _n.same.map((n,s)=>n+(_n[t][s]-n)*e)}function Vl(i){let t=iu(i);return t===0?"0%":`${t>0?"+":"\u2212"}${Math.abs(t)}%`}function ru(i,t){let e=new Oe;return e.setAttribute("position",new ge(i,3)),e.setIndex(new ge(t,1)),e.computeVertexNormals(),e}var q_=new Lr(.8);function ou(i){let{meta:t}=i,e=$h(i.bin),n=new Le,s=new Rs({color:15327436,roughness:.75}),r=t.bones.map(l=>{let{positions:c,indices:h}=Fl(e,t.quant,l),u=new oe(ru(c,h),s);return u.matrixAutoUpdate=!1,n.add(u),{mesh:u,segment:l.segment}}),a=new Le,o=t.parts.map(l=>{let{positions:c,indices:h,skin:u}=Fl(e,t.quant,l),d=ru(c.slice(),h);d.getAttribute("position").setUsage(Ch);let p=new Rs({roughness:.55});p.color.setRGB(..._n.natural,de);let g=new oe(d,p);g.userData.partKey=l.key,g.frustumCulled=!1,n.add(g);let y=l.tps.map((m,f)=>{let E=new oe(q_,new mn);return E.visible=!1,E.renderOrder=5,E.userData.pain={key:l.key,index:f},a.add(E),{marker:E,vertex:m}});return{info:l,mesh:g,rest:c,skin:u,prep:u?null:tu(c,l.a,l.b),segments:l.skinSegs??[l.segA,l.segB,...l.vias.map(m=>m.seg)],tps:y,delta:0,target:[0,0,0]}});return n.add(a),{group:n,bones:r,parts:o,joints:t.joints}}var to=["scapProtraction","scapElevation","shoulderRotation","elbowFlexion","forearmPronation","wristFlexion","fingerFlexion","thumbFlexion","hipFlexion","kneeFlexion","ankleFlexion","footInversion"],Y_=["headForward","thoracicFlexion","pelvicTilt","pelvicObliquity","trunkFlexion","trunkSideBend","trunkRotation"],xn=Object.freeze({...Object.fromEntries(to.flatMap(i=>[[`${i}.l`,0],[`${i}.r`,0]])),...Object.fromEntries(Y_.map(i=>[i,0]))});function hn(i){let t={...xn};for(let[e,n]of Object.entries(i))to.includes(e)?t[`${e}.l`]=t[`${e}.r`]=n:t[e]=n;return t}var eo={neutral:{label:"\u4E2D\u7ACB",params:xn},roundedShoulders:{label:"\u5713\u80A9",params:hn({scapProtraction:.8,shoulderRotation:.6})},forwardHead:{label:"\u982D\u524D\u50BE",params:hn({headForward:1})},kyphosis:{label:"\u80F8\u690E\u99DD\u80CC",params:hn({thoracicFlexion:1})},anteriorTilt:{label:"\u9AA8\u76C6\u524D\u50BE",params:hn({pelvicTilt:1})},posteriorTilt:{label:"\u9AA8\u76C6\u5F8C\u50BE",params:hn({pelvicTilt:-1})},unevenShoulders:{label:"\u9AD8\u4F4E\u80A9",params:hn({"scapElevation.r":.7,"scapElevation.l":-.3})},legLength:{label:"\u9577\u77ED\u8173",params:hn({pelvicObliquity:1})},phone:{label:"\u6ED1\u624B\u6A5F",params:hn({headForward:.8,scapProtraction:.6,shoulderRotation:.4,elbowFlexion:.7,forearmPronation:.8,wristFlexion:.3,fingerFlexion:.4,thumbFlexion:.5})},kneeHyperextension:{label:"\u819D\u904E\u4F38",params:hn({kneeFlexion:-1})},highHeels:{label:"\u7A7F\u9AD8\u8DDF\u978B",params:hn({ankleFlexion:-.67})},flatFoot:{label:"\u6241\u5E73\u8DB3",params:hn({footInversion:-1})}},Ds=[{key:"headForward",group:"sagittal",sided:!1,label:"\u982D\u9838\u524D\u79FB",minLabel:"\u5F8C\u6536",maxLabel:"\u524D\u79FB"},{key:"thoracicFlexion",group:"sagittal",sided:!1,label:"\u80F8\u690E\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u99DD\u80CC"},{key:"pelvicTilt",group:"sagittal",sided:!1,label:"\u9AA8\u76C6\u5F8C\u50BE\uFF0F\u524D\u50BE",minLabel:"\u5F8C\u50BE",maxLabel:"\u524D\u50BE"},{key:"trunkFlexion",group:"sagittal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5F8C\u4EF0\uFF0F\u524D\u5F4E",minLabel:"\u5F8C\u4EF0",maxLabel:"\u524D\u5F4E"},{key:"pelvicObliquity",group:"frontal",sided:!1,label:"\u9AA8\u76C6\u5074\u50BE\uFF08\u9577\u77ED\u8173\uFF09",minLabel:"\u53F3\u5074\u4F4E",maxLabel:"\u5DE6\u5074\u4F4E"},{key:"trunkSideBend",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u5074\u5F4E",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"trunkRotation",group:"frontal",sided:!1,label:"\u5F4E\u8170\uFF1A\u8F49\u5411",minLabel:"\u5F80\u53F3",maxLabel:"\u5F80\u5DE6"},{key:"scapProtraction",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u524D\u4F38\uFF0F\u5F8C\u7E2E",minLabel:"\u5F8C\u7E2E",maxLabel:"\u524D\u4F38"},{key:"scapElevation",group:"upperLimb",sided:!0,label:"\u80A9\u80DB\u4E0A\u63D0\uFF0F\u4E0B\u58D3",minLabel:"\u4E0B\u58D3",maxLabel:"\u4E0A\u63D0"},{key:"shoulderRotation",group:"upperLimb",sided:!0,label:"\u80A9\u95DC\u7BC0\u5167\u65CB\uFF0F\u5916\u65CB",minLabel:"\u5916\u65CB",maxLabel:"\u5167\u65CB"},{key:"elbowFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8098\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"forearmPronation",group:"upperLimb",sided:!0,label:"\u524D\u81C2\u65CB\u5F8C\uFF0F\u65CB\u524D",minLabel:"\u65CB\u5F8C",maxLabel:"\u65CB\u524D"},{key:"wristFlexion",group:"upperLimb",sided:!0,label:"\u624B\u8155\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"fingerFlexion",group:"upperLimb",sided:!0,label:"\u624B\u6307\u4F38\u76F4\uFF0F\u63E1\u62F3",minLabel:"\u904E\u4F38",maxLabel:"\u63E1\u62F3"},{key:"thumbFlexion",group:"upperLimb",sided:!0,label:"\u62C7\u6307\u4F38\u5C55\uFF0F\u5C48\u66F2",minLabel:"\u4F38\u5C55",maxLabel:"\u5C48\u66F2"},{key:"hipFlexion",group:"lowerLimb",sided:!0,label:"\u5927\u817F\u653E\u4E0B\uFF0F\u62AC\u8D77",minLabel:"\u5F80\u5F8C",maxLabel:"\u62AC\u8D77"},{key:"kneeFlexion",group:"lowerLimb",sided:!0,label:"\u819D\u4F38\u76F4\uFF0F\u5F4E\u66F2",minLabel:"\u904E\u4F38",maxLabel:"\u5F4E\u66F2"},{key:"ankleFlexion",group:"lowerLimb",sided:!0,label:"\u8E1D\u8E60\u5C48\uFF0F\u80CC\u5C48",minLabel:"\u8E60\u5C48",maxLabel:"\u80CC\u5C48"},{key:"footInversion",group:"lowerLimb",sided:!0,label:"\u8DB3\u5916\u7FFB\uFF0F\u5167\u7FFB",minLabel:"\u5916\u7FFB",maxLabel:"\u5167\u7FFB"}],au=[["sagittal","\u524D\u5F8C\u65B9\u5411"],["frontal","\u5DE6\u53F3\u65B9\u5411\uFF08\u5074\u5F4E\u3001\u8F49\u5411\uFF09"],["upperLimb","\u4E0A\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"],["lowerLimb","\u4E0B\u80A2\uFF08\u53EF\u5206\u5DE6\u53F3\uFF09"]],lu=[["both","\u5169\u5074\u4E00\u8D77"],["l","\u53EA\u8ABF\u5DE6\u5074"],["r","\u53EA\u8ABF\u53F3\u5074"]];function cu(i,t,e){return to.includes(t)?e==="both"?(i[`${t}.l`]+i[`${t}.r`])/2:i[`${t}.${e}`]:i[t]}function hu(i,t,e,n){let s={...i};return to.includes(t)?n==="both"?s[`${t}.l`]=s[`${t}.r`]=e:s[`${t}.${n}`]=e:s[t]=e,s}function uu(i,t,e){return Object.fromEntries(Object.keys(xn).map(n=>[n,i[n]+(t[n]-i[n])*e]))}function du(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}function fu(i){return Math.abs(i)<.05?0:i}function no(i){return Object.keys(xn).every(t=>Math.abs(i[t]??0)<.001)}var ce={clavProtraction:20,clavElevation:15,scapTilt:12,humeralRotation:40,neckFlexion:25,headExtension:22,thoracicFlexion:30,pelvicTilt:18,pelvicObliquity:8,elbowFlexion:140,elbowExtension:10,pronation:150,supination:10,wristFlexion:70,wristExtension:60,hipFlexion:120,hipExtension:20,kneeFlexion:140,kneeExtension:15,dorsiflexion:20,plantarflexion:45,inversion:30,eversion:25},is={flexion:{hip:50,lumbar:40},extension:{hip:10,lumbar:20},sideBend:{lumbar:18,thoraxLow:6,thoraxMid:6,thoraxUp:0},rotation:{lumbar:10,thoraxLow:12,thoraxMid:13,thoraxUp:10}},pu={fingerFlexion:{flex:[90,100,70],extend:[20,0,0]},thumbFlexion:{flex:[30,50,80],extend:[30,0,20]}},Zn=(i,t,e)=>ze*(i>=0?t*i:e*i),$_={thoraxLow:.3,thoraxMid:.4,thoraxUp:.3},Z_=["L5","L4","L3","L2","L1"],ze=Math.PI/180,ss=new P(1,0,0),mu=new P(0,1,0),io=new P(0,0,1),he=i=>i.isVector3?i.clone():new P(i[0],i[1],i[2]);function pe(i,t,e){let n=he(i);return new Dt().makeTranslation(n.x,n.y,n.z).multiply(new Dt().makeRotationAxis(t.clone().normalize(),e)).multiply(new Dt().makeTranslation(-n.x,-n.y,-n.z))}function K_(i,t){let e=he(i);return new Dt().makeTranslation(e.x,e.y,e.z).multiply(new Dt().makeRotationFromQuaternion(t)).multiply(new Dt().makeTranslation(-e.x,-e.y,-e.z))}function gu(i,t){let e=he(i),[n,s,r]=t.center,[a,o,l]=t.radii;return Math.hypot((e.x-n)/a,(e.y-s)/o,(e.z-r)/l)}function J_(i,t,e){let n=he(t.center);return i.clone().sub(n).multiplyScalar(e/gu(i,t)).add(n)}function j_(i,t,e){let n=he(i.ac[t]).applyMatrix4(e),s=he(i.scapAnchor[t]),r=s.clone().applyMatrix4(e),a=s.distanceTo(he(i.ac[t])),o=gu(s,i.thorax),l=r.clone();for(let h=0;h<8;h++)l=J_(l,i.thorax,o),l=n.clone().add(l.sub(n).setLength(a));let c=new qe().setFromUnitVectors(r.clone().sub(n).normalize(),l.clone().sub(n).normalize());return{glide:K_(n,c),ac:n,anchor:l}}function _u(i,t={}){let e={...xn,...t},n=new Map(Kh.map(C=>[C,new Dt])),s=i.pivots,r=ce.pelvicTilt*ze*e.pelvicTilt,a=ce.pelvicObliquity*ze*e.pelvicObliquity,o=e.trunkFlexion>=0?is.flexion:is.extension,l=o.hip*ze*e.trunkFlexion,c=o.lumbar*ze*e.trunkFlexion,h=ze*e.trunkSideBend,u=ze*e.trunkRotation,d=he(i.hip.l).add(he(i.hip.r)).multiplyScalar(.5),p=e.pelvicObliquity>=0?i.hip.r:i.hip.l,g=pe(d,ss,r+l).multiply(pe(p,io,-a));n.set("pelvis",g);for(let C of["l","r"]){let R=he(i.hip[C]).applyMatrix4(g).sub(he(i.hip[C])),U=new Dt().makeTranslation(R.x,R.y,R.z).clone().multiply(pe(i.hip[C],ss,-Zn(e[`hipFlexion.${C}`],ce.hipFlexion,ce.hipExtension))),{knee:S,ankle:M,subtalar:L}=i,X=U.clone().multiply(pe(S[C].pivot,he(S[C].axis),Zn(e[`kneeFlexion.${C}`],ce.kneeFlexion,ce.kneeExtension))),w=X.clone().multiply(pe(M[C].pivot,he(M[C].axis),Zn(e[`ankleFlexion.${C}`],ce.dorsiflexion,ce.plantarflexion))),D=w.clone().multiply(pe(L[C].pivot,he(L[C].axis),Zn(e[`footInversion.${C}`],ce.inversion,ce.eversion)));n.set(`femur.${C}`,U),n.set(`shank.${C}`,X),n.set(`talus.${C}`,w),n.set(`foot.${C}`,D)}let y=(C,R,I)=>pe(s[C],io,-h*R).multiply(pe(s[C],mu,u*I)),m=g;for(let C of Z_){let R=m.clone().multiply(pe(s[C],ss,(c-r)/5)).multiply(pe(s[C],io,a/5)).multiply(y(C,is.sideBend.lumbar/5,is.rotation.lumbar/5));n.set(C,R),m=R}let f=ce.thoracicFlexion*ze*e.thoracicFlexion;for(let C of["thoraxLow","thoraxMid","thoraxUp"]){let R=m.clone().multiply(pe(s[C],ss,f*$_[C])).multiply(y(C,is.sideBend[C],is.rotation[C]));n.set(C,R),m=R}let E=m,v=E.clone().multiply(pe(s.neckLow,ss,ce.neckFlexion*ze*e.headForward-f/2)),_=v.clone().multiply(pe(s.head,ss,-ce.headExtension*ze*e.headForward-f/2));n.set("neckLow",v),n.set("neckUp",v.clone()),n.set("head",_);for(let C of["l","r"]){let R=C==="r"?1:-1,I=e[`scapProtraction.${C}`],U=pe(i.sc[C],mu,R*ce.clavProtraction*ze*I).multiply(pe(i.sc[C],io,-R*ce.clavElevation*ze*e[`scapElevation.${C}`])),{glide:S,ac:M,anchor:L}=j_(i,C,U),w=pe(M,L.clone().sub(M),R*ce.scapTilt*ze*I).multiply(S).multiply(U),D=he(i.gh[C]).sub(he(i.elbow[C])),F=w.clone().multiply(pe(i.gh[C],D,R*ce.humeralRotation*ze*e[`shoulderRotation.${C}`])),[z,$]=i.elbowAxis[C],V=he($).sub(he(z)),tt=he(z).add(he($)).multiplyScalar(.5),ot=F.clone().multiply(pe(tt,V,R*Zn(e[`elbowFlexion.${C}`],ce.elbowFlexion,ce.elbowExtension))),[vt,Ft]=i.forearmAxis[C],qt=ot.clone().multiply(pe(vt,he(Ft).sub(he(vt)),-R*Zn(e[`forearmPronation.${C}`],ce.pronation,ce.supination))),Z=qt.clone().multiply(pe(i.wrist[C],V,R*Zn(e[`wristFlexion.${C}`],ce.wristFlexion,ce.wristExtension)));n.set(`clavicle.${C}`,E.clone().multiply(U)),n.set(`scapula.${C}`,E.clone().multiply(w)),n.set(`arm.${C}`,E.clone().multiply(F)),n.set(`ulna.${C}`,E.clone().multiply(ot)),n.set(`radius.${C}`,E.clone().multiply(qt)),n.set(`hand.${C}`,E.clone().multiply(Z));let et=i.fingers[C],gt=(rt,Et,Rt,Ot,te)=>{let kt=rt;Et.forEach((ae,O)=>{kt=kt.clone().multiply(pe(ae.pivot,he(ae.axis),Zn(e[`${Ot}.${C}`],te.flex[O],te.extend[O]))),n.set(`${Rt[O]}.${C}`,E.clone().multiply(kt))})};for(let rt of jr)gt(Z,et[rt],[`${rt}Prox`,`${rt}Mid`,`${rt}Dist`],"fingerFlexion",pu.fingerFlexion);gt(Z,et.thumb,["thumbMeta","thumbProx","thumbDist"],"thumbFlexion",pu.thumbFlexion)}return n}var Q_={superficial:1,middle:.6,deep:.3},tx=15,ex=8,nx=.1,ix=.15,sx=.3;function xu(){return{layers:{superficial:!0,middle:!0,deep:!0,bones:!0},hidden:new Set,ghost:new Set,pulled:new Set,explode:0,selectedKey:null,lineParts:null,painMode:"off",selectedPain:null,overlay:!1}}function Hl(i,t){if(!t.layers[i.layer]||t.hidden.has(i.key))return{visible:!1,opacity:0,glow:0,pickable:!1,selected:!1};let e=t.ghost.has(i.key)?nx:1,n=0;return t.lineParts&&(t.lineParts.has(i.id)?n=.25:e=Math.min(e,ix)),{visible:!0,opacity:e,glow:n,pickable:e>=sx,selected:t.selectedKey===i.key}}function yu(i,t,e){let n=i.centroid[0]-e[0],s=i.centroid[2]-e[1],r=Math.hypot(n,s)||1,a=t.explode*tx*Q_[i.layer]+(t.pulled.has(i.key)?ex:0);return[n/r*a,0,s/r*a]}function vu(i){i.hidden.clear(),i.ghost.clear()}function Mu(i){Object.assign(i.layers,{superficial:!0,middle:!0,deep:!0,bones:!0}),i.hidden.clear(),i.ghost.clear(),i.pulled.clear(),i.explode=0,i.selectedKey=null,i.selectedPain=null}function bu(i,t,e,n){if(t.painMode==="off"||!Hl(i,t).visible)return null;let s=e&&i.measure?ns(n):"same";return s!=="same"?s:t.selectedKey===i.key?"focus":t.painMode==="all"?"spot":null}var rs=i=>({ids:i,opp:!0}),rx=i=>Array.isArray(i)?{ids:i,opp:!1}:i,xi=[{id:"sbl",name:"\u6DFA\u80CC\u7DDA",stations:[["plantarAponeurosis"],["calcanealTendon"],["gastrocnemiusMed","gastrocnemiusLat"],["bicepsFemorisLong","semitendinosus","semimembranosus"],["thoracolumbarFascia","iliocostalisLumborum","longissimusThoracis","spinalisThoracis","iliocostalisThoracis"],["rectusCapPostMajor","rectusCapPostMinor","obliquusCapSup","obliquusCapInf"],["epicranialAponeurosis","occipitalis","frontalis"]]},{id:"sfl",name:"\u6DFA\u524D\u7DDA",stations:[["tibialisAnterior","extensorDigitorumLongus","extensorHallucisLongus"],["rectusFemoris","vastusLateralis","vastusMedialis","vastusIntermedius"],["rectusAbdominis"],["sternocleidomastoid"],["epicranialAponeurosis"]]},{id:"ll",name:"\u9AD4\u5074\u7DDA",stations:[["fibularisLongus","fibularisBrevis"],["iliotibialTract","tensorFasciaeLatae","gluteusMaximus"],["externalOblique","internalOblique"],["externalIntercostals","internalIntercostals"],["spleniusCapitis","sternocleidomastoid"]]},{id:"spl",name:"\u87BA\u65CB\u7DDA",stations:[["spleniusCapitis","spleniusColli"],rs(["rhomboidMajor","rhomboidMinor"]),rs(["serratusAnterior"]),rs(["externalOblique"]),["internalOblique"],["tensorFasciaeLatae","iliotibialTract"],["tibialisAnterior"],["fibularisLongus"],["bicepsFemorisLong"],["iliocostalisLumborum","longissimusThoracis"]]},{id:"sfal",name:"\u6DFA\u524D\u81C2\u7DDA",stations:[["pecMajorClav","pecMajorStern","pecMajorAbd","latissimus"],["medialIntermuscularSeptum"],["flexorCarpiRadialis","palmarisLongus","fcuHumeral","fcuUlnar","fdsHumeroUlnar","fdsRadial","flexorDigitorumProfundus"],["flexorRetinaculum"],["palmarAponeurosis"]]},{id:"dfal",name:"\u6DF1\u524D\u81C2\u7DDA",stations:[["pecMinor","clavipectoralFascia"],["bicepsShort","bicepsLong","coracobrachialis"],["abductorPollicisBrevis","flexorPollicisBrevisSup","flexorPollicisBrevisDeep","opponensPollicis"]]},{id:"sbal",name:"\u6DFA\u5F8C\u81C2\u7DDA",stations:[["trapUpper","trapMiddle","trapLower"],["deltoidAnt","deltoidMid","deltoidPost"],["lateralIntermuscularSeptum"],["extensorCarpiRadialisLongus","extensorCarpiRadialisBrevis","extensorDigitorum","extensorDigitiMinimi","ecuHumeral","ecuUlnar"],["extensorRetinaculum"]]},{id:"dbal",name:"\u6DF1\u5F8C\u81C2\u7DDA",stations:[["rhomboidMajor","rhomboidMinor","levatorScapulae"],["supraspinatus","infraspinatus","teresMinor","subscapularis"],["tricepsLong","tricepsLat","tricepsMed"],["abductorDigitiMinimi","flexorDigitiMinimi","opponensDigitiMinimi"]]},{id:"bfl",name:"\u5F8C\u529F\u80FD\u7DDA",stations:[["latissimus"],["thoracolumbarFascia"],rs(["gluteusMaximus"]),rs(["vastusLateralis"])]},{id:"ffl",name:"\u524D\u529F\u80FD\u7DDA",stations:[["pecMajorAbd"],["rectusAbdominis"],rs(["adductorLongus"])]},{id:"ifl",name:"\u540C\u5074\u529F\u80FD\u7DDA",stations:[["latissimus"],["externalOblique"],["sartorius"]]},{id:"dfl",name:"\u6DF1\u524D\u7DDA",stations:[["tibialisPosterior","flexorDigitorumLongus","flexorHallucisLongus"],["popliteus"],["adductorMagnus","adductorMinimus","adductorBrevis","adductorLongus","pectineus"],["pubococcygeus","iliococcygeus","coccygeus"],["psoasMajor","iliacus","quadratusLumborum"],["diaphragm"],["longusColli","longusCapitis","scalenusAnterior","scalenusMedius","scalenusPosterior"],["sternohyoid","omohyoid","thyrohyoid","digastricPost","digastricAnt","mylohyoid","geniohyoid","stylohyoid"]]}].map(i=>({...i,stations:i.stations.map(rx)}));function Su(i){return i.length?new Set(i.flatMap(t=>[...ox(t)??[]])):null}function ox(i){let t=xi.find(e=>e.id===i);return t?new Set(t.stations.flatMap(e=>e.ids)):null}var Gl=[.36,.6,.96],Tu=1.5,ax=.25,lx=.6,cx={l:"r",r:"l"},Eu=i=>i.reduce((t,e)=>[t[0]+e[0]/i.length,t[1]+e[1]/i.length,t[2]+e[2]/i.length],[0,0,0]),Wl=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function hx(i,t,e,n=Tu){let s=new P(e[0]-t[0],e[1]-t[1],e[2]-t[2]);s.lengthSq()<1e-8&&s.set(0,1,0);let r=s.normalize(),a=new P().crossVectors(r,Math.abs(r.y)<.9?new P(0,1,0):new P(1,0,0)).normalize(),o=new P().crossVectors(r,a),l=new Float32Array(i.length),c=new P;for(let h=0;h<i.length;h+=3)c.set(i[h]-t[0],i[h+1]-t[1],i[h+2]-t[2]),l[h]=c.dot(r)/n,l[h+1]=c.dot(a)/n,l[h+2]=c.dot(o)/n;return l}function ux(i,t,e=Tu){let n=new Float32Array(i.length/2*3);for(let s=0;s<i.length/2;s++)n[s*3]=i[s*2]*t/e,n[s*3+1]=i[s*2+1]*4,n[s*3+2]=.5;return n}var dx=`
attribute vec3 netCoord;
uniform float uLift;
varying vec3 vNet;
void main() {
  vNet = netCoord;
  vec3 p = position + normalize(normal) * uLift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,fx=`
uniform vec3 uColor;
varying vec3 vNet;
void main() {
  vec3 w = max(fwidth(vNet), vec3(1e-4));
  vec3 gap = abs(fract(vNet - 0.5) - 0.5) / w;
  vec3 lines = (1.0 - clamp(gap - 0.5, 0.0, 1.0)) * (1.0 - smoothstep(0.25, 0.5, w));
  float line = max(max(lines.x, lines.y), lines.z);
  gl_FragColor = vec4(uColor, mix(0.3, 0.9, line));
}`;function wu(i,t){return new Be({uniforms:{uColor:{value:new P(...t)},uLift:{value:i}},vertexShader:dx,fragmentShader:fx,transparent:!0,depthWrite:!1})}function Au(i,t){let e=[i].flat().map(h=>xi.find(u=>u.id===h)),n=[],s=[];for(let h of e)for(let u of["l","r"]){let d=[];for(let p of h.stations){let g=p.opp?cx[u]:u,y=p.ids.map(m=>t.find(f=>f.info.id===m&&(f.info.side===g||f.info.side==="m")));d.push(y);for(let m of y){if(n.some(_=>_.part===m))continue;let f=m.mesh.geometry;f.getAttribute("netCoord")||f.setAttribute("netCoord",new ge(hx(m.rest,m.info.a,m.info.b),3));let E=wu(ax,Gl),v=new oe(f,E);v.renderOrder=5,m.mesh.add(v),n.push({part:m,mesh:v,material:E})}}s.push(d)}let r=new Le,a=wu(0,Gl);function o(){for(let h of r.children)h.geometry.dispose();r.clear()}function l(h,u,d){for(let{part:p,material:g}of n){let y=d?p.info.measure?zl(p.delta):_n.same:Gl;g.uniforms.uColor.value.set(...y)}o();for(let p of s){let g=null;for(let y of p){let m=[],f=[];for(let v of y){let _=u(v),C=Qr(v.info,h).map(R=>[R[0]+_[0],R[1]+_[1],R[2]+_[2]]);m.push(C[0]),f.push(C[C.length-1])}let E=[Eu(m),Eu(f)];if(g){let v=null;for(let C of g)for(let R of E)(!v||Wl(C,R)<Wl(v[0],v[1]))&&(v=[C,R]);let _=Wl(v[0],v[1]);if(_>.01){let C=new As(new P(...v[0]),new P(...v[1])),R=new Dr(C,8,lx,8,!1);R.setAttribute("netCoord",new ge(ux(R.getAttribute("uv").array,_),3));let I=new oe(R,a);I.renderOrder=5,r.add(I)}}g=E}}}function c(){for(let{part:h,mesh:u,material:d}of n)h.mesh.remove(u),d.dispose();o(),a.dispose()}return{group:r,shells:n,update:l,dispose:c}}var Ru=new Fe,so=new P,os=class extends Br{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new fe(t,3)),this.setAttribute("uv",new fe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new mi(e,6,1);return this.setAttribute("instanceStart",new gn(n,3,0)),this.setAttribute("instanceEnd",new gn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new mi(e,6,1);return this.setAttribute("instanceColorStart",new gn(n,3,0)),this.setAttribute("instanceColorEnd",new gn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ur(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fe);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ru.setFromBufferAttribute(e),this.boundingBox.union(Ru))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)so.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(so)),so.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(so));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};st.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new dt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ie.line={uniforms:qr.merge([st.common,st.fog,st.line]),vertexShader:`
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
		`};var Kn=class extends Be{static get type(){return"LineMaterial"}constructor(t){super({uniforms:qr.clone(Ie.line.uniforms),vertexShader:Ie.line.vertexShader,fragmentShader:Ie.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Xl=new jt,Cu=new P,Pu=new P,be=new jt,Se=new jt,yn=new jt,ql=new P,Yl=new Dt,Ee=new Vr,Iu=new P,ro=new Fe,oo=new an,vn=new jt,Mn,yi;function Lu(i,t,e){return vn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),vn.multiplyScalar(1/vn.w),vn.x=yi/e.width,vn.y=yi/e.height,vn.applyMatrix4(i.projectionMatrixInverse),vn.multiplyScalar(1/vn.w),Math.abs(Math.max(vn.x,vn.y))}function px(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ee.start.fromBufferAttribute(s,o),Ee.end.fromBufferAttribute(r,o),Ee.applyMatrix4(e);let c=new P,h=new P;Mn.distanceSqToSegment(Ee.start,Ee.end,h,c),h.distanceTo(c)<yi*.5&&t.push({point:h,pointOnLine:c,distance:Mn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function mx(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Mn.at(1,yn),yn.w=1,yn.applyMatrix4(t.matrixWorldInverse),yn.applyMatrix4(n),yn.multiplyScalar(1/yn.w),yn.x*=r.x/2,yn.y*=r.y/2,yn.z=0,ql.copy(yn),Yl.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(be.fromBufferAttribute(l,d),Se.fromBufferAttribute(c,d),be.w=1,Se.w=1,be.applyMatrix4(Yl),Se.applyMatrix4(Yl),be.z>u&&Se.z>u)continue;if(be.z>u){let v=be.z-Se.z,_=(be.z-u)/v;be.lerp(Se,_)}else if(Se.z>u){let v=Se.z-be.z,_=(Se.z-u)/v;Se.lerp(be,_)}be.applyMatrix4(n),Se.applyMatrix4(n),be.multiplyScalar(1/be.w),Se.multiplyScalar(1/Se.w),be.x*=r.x/2,be.y*=r.y/2,Se.x*=r.x/2,Se.y*=r.y/2,Ee.start.copy(be),Ee.start.z=0,Ee.end.copy(Se),Ee.end.z=0;let y=Ee.closestPointToPointParameter(ql,!0);Ee.at(y,Iu);let m=Xr.lerp(be.z,Se.z,y),f=m>=-1&&m<=1,E=ql.distanceTo(Iu)<yi*.5;if(f&&E){Ee.start.fromBufferAttribute(l,d),Ee.end.fromBufferAttribute(c,d),Ee.start.applyMatrix4(a),Ee.end.applyMatrix4(a);let v=new P,_=new P;Mn.distanceSqToSegment(Ee.start,Ee.end,_,v),e.push({point:_,pointOnLine:v,distance:Mn.origin.distanceTo(_),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var ao=class extends oe{constructor(t=new os,e=new Kn({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Cu.fromBufferAttribute(e,a),Pu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Cu.distanceTo(Pu);let r=new mi(s,2,1);return t.setAttribute("instanceDistanceStart",new gn(r,1,0)),t.setAttribute("instanceDistanceEnd",new gn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Mn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;yi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),oo.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=yi*.5;else{let u=Math.max(s.near,oo.distanceToPoint(Mn.origin));c=Lu(s,u,l.resolution)}if(oo.radius+=c,Mn.intersectsSphere(oo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ro.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=yi*.5;else{let u=Math.max(s.near,ro.distanceToPoint(Mn.origin));h=Lu(s,u,l.resolution)}ro.expandByScalar(h),Mn.intersectsBox(ro)!==!1&&(n?px(this,e):mx(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Xl),this.material.uniforms.resolution.value.set(Xl.z,Xl.w))}};var vi=class extends os{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var lo=class extends ao{constructor(t=new vi,e=new Kn({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var T=(i,t,e,n,s,r,a,o="")=>({code:i,name:t,seg:e,hub:n,p:[s,r,a],note:o}),gx={head:{point:[0,162,-1.5]},neck:{a:[0,143.5,-3],b:[0,153.5,-2]},chest:{a:[0,119,-4],b:[0,142,-4]},belly:{a:[0,97,-3],b:[0,119,-3]},pelvis:{a:[0,80,-3],b:[0,97,-3]},arm:{a:[16.99,138.34,-2.63],b:[20.6,109.08,-3.21]},forearm:{a:[20.6,109.08,-3.21],b:[26.42,85.08,1.98]},hand:{a:[26.42,85.08,1.98],b:[27.7,77.3,4]},thigh:{a:[8.39,86.03,-.5],b:[7.37,45.79,-3.28]},shank:{a:[7.37,45.79,-3.28],b:[7.43,7.41,-4.55]},foot:{a:[7.43,7.41,-4.55],b:[9.8,2,10.5]},none:null},_x={head:.6,neck:1.6,chest:1.4,belly:1.6,pelvis:1.8,arm:1.6,forearm:1,hand:.5,thigh:2,shank:1.2,foot:.5,none:0},Us=[{id:"lu",code:"LU",name:"\u624B\u592A\u9670\u80BA\u7D93",short:"\u80BA\u7D93",organ:"\u80BA",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u62C7\u6307\uFF09",color:[.88,.92,.92],points:[T("LU1","\u4E2D\u5E9C","thoraxUp","chest",12,135.5,7.2,"\u7B2C\u4E00\u808B\u9593\u3001\u9396\u9AA8\u4E0B\u7AA9\u5916\u4E0B\u65B9"),T("LU2","\u96F2\u9580","clavicle","chest",13.2,139.2,4.6,"\u9396\u9AA8\u4E0B\u7AA9\u51F9\u9677\u8655"),T("LU3","\u5929\u5E9C","arm","arm",17.4,126,2,"\u4E0A\u81C2\u5167\u5074\u3001\u80B1\u4E8C\u982D\u808C\u6A48\u5074\u7DE3"),T("LU4","\u4FE0\u767D","arm","arm",18.4,120,2.4,"\u5929\u5E9C\u4E0B 1 \u5BF8"),T("LU5","\u5C3A\u6FA4","arm","arm",22.6,110.5,2.2,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u6A48\u5074"),T("LU6","\u5B54\u6700","radius","forearm",25,99,2.4,"\u8155\u6A6B\u7D0B\u4E0A 7 \u5BF8\u3001\u6A48\u9AA8\u5167\u7DE3"),T("LU7","\u5217\u7F3A","radius","forearm",27.4,88.2,2.6,"\u6A48\u9AA8\u8396\u7A81\u4E0A\u65B9\u3001\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8"),T("LU8","\u7D93\u6E20","radius","forearm",28,86.6,2.8,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8\u3001\u6A48\u52D5\u8108\u5916\u5074"),T("LU9","\u592A\u6DF5","radius","forearm",28.3,85.3,3,"\u8155\u6A6B\u7D0B\u6A48\u5074\u3001\u6A48\u52D5\u8108\u640F\u52D5\u8655"),T("LU10","\u9B5A\u969B","thumbMeta","hand",30.2,81.4,5,"\u7B2C\u4E00\u638C\u9AA8\u6A48\u5074\u4E2D\u9EDE\u3001\u8D64\u767D\u8089\u969B"),T("LU11","\u5C11\u5546","thumbDist","none",33.3,77.3,6.9,"\u62C7\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"li",code:"LI",name:"\u624B\u967D\u660E\u5927\u8178\u7D93",short:"\u5927\u8178\u7D93",organ:"\u5927\u8178",group:"handYang",flow:"\u624B\uFF08\u98DF\u6307\uFF09\u2192 \u982D\u9762",color:[.97,.52,.12],points:[T("LI1","\u5546\u967D","indexDist","none",32.1,71.3,8.4,"\u98DF\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1"),T("LI2","\u4E8C\u9593","indexProx","none",31.4,74.2,6.2,"\u98DF\u6307\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u524D\u65B9"),T("LI3","\u4E09\u9593","hand","hand",30.4,77.4,4.6,"\u7B2C\u4E8C\u638C\u6307\u95DC\u7BC0\u6A48\u5074\u5F8C\u65B9"),T("LI4","\u5408\u8C37","hand","hand",29.3,80.6,2.4,"\u7B2C\u4E00\u3001\u4E8C\u638C\u9AA8\u4E4B\u9593\uFF08\u864E\u53E3\uFF09"),T("LI5","\u967D\u8C3F","hand","hand",29,84.3,1.4,"\u8155\u80CC\u6A48\u5074\u3001\u9F3B\u7159\u58FA\u51F9\u9677\u4E2D"),T("LI6","\u504F\u6B77","radius","forearm",28,91,.6,"\u967D\u8C3F\u4E0A 3 \u5BF8"),T("LI7","\u6EAB\u6E9C","radius","forearm",27.2,95,.1,"\u967D\u8C3F\u4E0A 5 \u5BF8"),T("LI8","\u4E0B\u5EC9","radius","forearm",26.2,102.5,-.2,"\u66F2\u6C60\u4E0B 4 \u5BF8"),T("LI9","\u4E0A\u5EC9","radius","forearm",26,104.5,-.2,"\u66F2\u6C60\u4E0B 3 \u5BF8"),T("LI10","\u624B\u4E09\u91CC","radius","forearm",25.6,106.5,-.1,"\u66F2\u6C60\u4E0B 2 \u5BF8"),T("LI11","\u66F2\u6C60","arm","arm",24.8,110.5,.5,"\u5C48\u8098\u6642\u8098\u6A6B\u7D0B\u5916\u5074\u7AEF"),T("LI12","\u8098\u9ACE","arm","arm",25,113,-2,"\u80B1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u7DE3"),T("LI13","\u624B\u4E94\u91CC","arm","arm",23,119,-2,"\u66F2\u6C60\u4E0A 3 \u5BF8"),T("LI14","\u81C2\u81D1","arm","arm",21,125,-2,"\u4E09\u89D2\u808C\u6B62\u9EDE\u524D\u7DE3"),T("LI15","\u80A9\u9AC3","scapula","arm",17.8,139.8,.2,"\u80A9\u5CF0\u524D\u4E0B\u65B9\u51F9\u9677"),T("LI16","\u5DE8\u9AA8","scapula","chest",12,142.6,-3.4,"\u9396\u9AA8\u80A9\u5CF0\u7AEF\u8207\u80A9\u80DB\u5CA1\u4E4B\u9593"),T("LI17","\u5929\u9F0E","neckLow","neck",4.6,146.2,.8,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),T("LI18","\u6276\u7A81","neckUp","neck",4.6,150.2,2.4,"\u5589\u7D50\u65C1\u3001\u80F8\u9396\u4E73\u7A81\u808C\u4E2D"),T("LI19","\u53E3\u79BE\u9ACE","head","head",1,155.2,9.2,"\u9F3B\u5B54\u5916\u7DE3\u76F4\u4E0B\u3001\u6C34\u6E9D\u65C1"),T("LI20","\u8FCE\u9999","head","head",1.6,156.4,9.2,"\u9F3B\u7FFC\u5916\u7DE3\u4E2D\u9EDE\u65C1")]},{id:"st",code:"ST",name:"\u8DB3\u967D\u660E\u80C3\u7D93",short:"\u80C3\u7D93",organ:"\u80C3",group:"footYang",flow:"\u982D\u9762 \u2192 \u8DB3\uFF08\u7B2C\u4E8C\u8DBE\uFF09",color:[.88,.82,.22],points:[T("ST1","\u627F\u6CE3","head","head",3,157.4,7.6,"\u77B3\u5B54\u76F4\u4E0B\u3001\u773C\u7736\u4E0B\u7DE3"),T("ST2","\u56DB\u767D","head","head",3,156.4,8,"\u627F\u6CE3\u76F4\u4E0B\u3001\u7736\u4E0B\u5B54\u8655"),T("ST4","\u5730\u5009","head","head",2,153.6,8.4,"\u53E3\u89D2\u65C1"),T("ST5","\u5927\u8FCE","head","head",3.8,151.4,6.4,"\u4E0B\u9837\u89D2\u524D\u65B9\u3001\u54AC\u808C\u524D\u7DE3"),T("ST6","\u9830\u8ECA","head","head",5.2,152.2,3,"\u4E0B\u9837\u89D2\u524D\u4E0A\u65B9\u3001\u54AC\u808C\u9686\u8D77\u8655"),T("ST7","\u4E0B\u95DC","head","head",6,156.4,3.4,"\u9874\u5F13\u4E0B\u7DE3\u51F9\u9677"),T("ST8","\u982D\u7DAD","head","head",5,166.4,4.8,"\u524D\u9AEE\u969B\u984D\u89D2"),T("ST9","\u4EBA\u8FCE","neckUp","neck",2.8,150.4,4.4,"\u5589\u7D50\u65C1\u3001\u9838\u52D5\u8108\u640F\u52D5\u8655"),T("ST10","\u6C34\u7A81","neckLow","neck",3,147.4,4,"\u4EBA\u8FCE\u8207\u6C23\u820D\u4E4B\u9593"),T("ST11","\u6C23\u820D","neckLow","neck",2.6,143.6,4.4,"\u9396\u9AA8\u5167\u5074\u7AEF\u4E0A\u7DE3"),T("ST12","\u7F3A\u76C6","clavicle","chest",8,141.4,2.6,"\u9396\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),T("ST13","\u6C23\u6236","thoraxUp","chest",8,138.4,5.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),T("ST15","\u5C4B\u7FF3","thoraxUp","chest",8.6,133.4,8.4,"\u7B2C\u4E8C\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 4 \u5BF8"),T("ST17","\u4E73\u4E2D","thoraxMid","chest",9.6,130,10.8,"\u4E73\u982D\u4E2D\u592E\uFF08\u53EA\u4F5C\u5B9A\u4F4D\uFF0C\u4E0D\u91DD\u4E0D\u7078\uFF09"),T("ST18","\u4E73\u6839","thoraxMid","chest",9,126.4,10,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E94\u808B\u9593"),T("ST21","\u6881\u9580","L1","belly",4,111,10,"\u81CD\u4E0A 4 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),T("ST25","\u5929\u6A1E","L3","belly",4,103,10.2,"\u81CD\u65C1 2 \u5BF8"),T("ST28","\u6C34\u9053","pelvis","pelvis",4,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u3001\u65C1\u958B 2 \u5BF8"),T("ST30","\u6C23\u885D","pelvis","pelvis",4,92.6,7,"\u8179\u80A1\u6E9D\u3001\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u65C1 2 \u5BF8"),T("ST31","\u9AC0\u95DC","femur","thigh",9.6,86,4,"\u5927\u817F\u524D\u9762\u3001\u9AC2\u524D\u4E0A\u68D8\u8207\u9AD5\u9AA8\u5916\u7DE3\u9023\u7DDA\u4E0A"),T("ST32","\u4F0F\u5154","femur","thigh",9.6,58,3,"\u9AD5\u5E95\u4E0A 6 \u5BF8"),T("ST34","\u6881\u4E18","femur","thigh",9.6,50,2,"\u9AD5\u5E95\u4E0A 2 \u5BF8"),T("ST35","\u72A2\u9F3B","shank","shank",10.4,42.6,1.6,"\u9AD5\u97CC\u5E36\u5916\u5074\u51F9\u9677\uFF08\u5916\u819D\u773C\uFF09"),T("ST36","\u8DB3\u4E09\u91CC","shank","shank",9.6,36.6,1.6,"\u72A2\u9F3B\u4E0B 3 \u5BF8\u3001\u811B\u9AA8\u524D\u5D74\u5916\u4E00\u6A6B\u6307"),T("ST37","\u4E0A\u5DE8\u865B","shank","shank",9.6,30.6,1.2,"\u72A2\u9F3B\u4E0B 6 \u5BF8"),T("ST38","\u689D\u53E3","shank","shank",9.6,26.6,1,"\u72A2\u9F3B\u4E0B 8 \u5BF8"),T("ST39","\u4E0B\u5DE8\u865B","shank","shank",9.6,24.6,1,"\u72A2\u9F3B\u4E0B 9 \u5BF8"),T("ST40","\u8C50\u9686","shank","shank",11,26.6,-.2,"\u5916\u8E1D\u5C16\u4E0A 8 \u5BF8\u3001\u689D\u53E3\u5916\u4E00\u6A6B\u6307"),T("ST41","\u89E3\u8C3F","talus","foot",7.6,8.6,.6,"\u8E1D\u95DC\u7BC0\u524D\u6A6B\u7D0B\u4E2D\u592E\u3001\u5169\u808C\u8171\u4E4B\u9593"),T("ST42","\u885D\u967D","foot","foot",8.6,5.4,4,"\u8DB3\u80CC\u6700\u9AD8\u8655\u3001\u52D5\u8108\u640F\u52D5\u8655"),T("ST43","\u9677\u8C37","foot","foot",9.3,4.2,6.2,"\u7B2C\u4E8C\u3001\u4E09\u8E60\u9AA8\u4E4B\u9593"),T("ST44","\u5167\u5EAD","foot","foot",10,2.4,8.6,"\u7B2C\u4E8C\u3001\u4E09\u8DBE\u7E2B\u7AEF"),T("ST45","\u53B2\u514C","foot","none",10.8,1.4,13.3,"\u7B2C\u4E8C\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"sp",code:"SP",name:"\u8DB3\u592A\u9670\u813E\u7D93",short:"\u813E\u7D93",organ:"\u813E",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u80F8\u8179",color:[.7,.45,.2],points:[T("SP1","\u96B1\u767D","foot","none",6.6,1.8,12.6,"\u8DB3\u5927\u8DBE\u5167\u5074\u8DBE\u7532\u89D2\u65C1"),T("SP2","\u5927\u90FD","foot","foot",5.9,2.4,9.8,"\u8DB3\u5927\u8DBE\u672C\u7BC0\u524D\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),T("SP3","\u592A\u767D","foot","foot",5.6,3,6.4,"\u7B2C\u4E00\u8E60\u9AA8\u5C0F\u982D\u5F8C\u4E0B\u65B9"),T("SP4","\u516C\u5B6B","foot","foot",5.6,3.6,3.4,"\u7B2C\u4E00\u8E60\u9AA8\u57FA\u5E95\u524D\u4E0B\u65B9"),T("SP5","\u5546\u4E18","foot","foot",4.9,6,-.4,"\u5167\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),T("SP6","\u4E09\u9670\u4EA4","shank","shank",3.9,14,-3,"\u5167\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u7DE3\u5F8C\u65B9"),T("SP7","\u6F0F\u8C37","shank","shank",4.2,20,-3,"\u5167\u8E1D\u5C16\u4E0A 6 \u5BF8"),T("SP8","\u5730\u6A5F","shank","shank",4.4,31,-2.4,"\u9670\u9675\u6CC9\u4E0B 3 \u5BF8"),T("SP9","\u9670\u9675\u6CC9","shank","shank",4.4,40.4,-1.4,"\u811B\u9AA8\u5167\u5074\u9AC1\u4E0B\u7DE3\u51F9\u9677"),T("SP10","\u8840\u6D77","femur","thigh",6,50,1.6,"\u9AD5\u5E95\u5167\u5074\u7AEF\u4E0A 2 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u9686\u8D77"),T("SP11","\u7B95\u9580","femur","thigh",5.6,62,1,"\u8840\u6D77\u8207\u885D\u9580\u9023\u7DDA\u4E0A"),T(null,null,"femur","thigh",5.6,77,3.5),T("SP12","\u885D\u9580","pelvis","pelvis",5.6,91.4,6,"\u8179\u80A1\u6E9D\u5916\u5074\u3001\u80A1\u52D5\u8108\u5916\u5074"),T("SP15","\u5927\u6A6B","L3","belly",8,103,8.6,"\u81CD\u65C1 4 \u5BF8"),T("SP17","\u98DF\u7AC7","thoraxMid","chest",11,121,7,"\u7B2C\u4E94\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 6 \u5BF8"),T("SP21","\u5927\u5305","thoraxMid","chest",13,122,0,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u7B2C\u516D\u808B\u9593")]},{id:"ht",code:"HT",name:"\u624B\u5C11\u9670\u5FC3\u7D93",short:"\u5FC3\u7D93",organ:"\u5FC3",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u5C0F\u6307\uFF09",color:[.78,.16,.26],points:[T("HT1","\u6975\u6CC9","arm","arm",14.4,133,-1,"\u814B\u7AA9\u9802\u9EDE\u3001\u814B\u52D5\u8108\u640F\u52D5\u8655"),T("HT2","\u9752\u9748","arm","arm",17,117,0,"\u8098\u6A6B\u7D0B\u4E0A 3 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5167\u5074\u6E9D"),T("HT3","\u5C11\u6D77","arm","arm",18.2,110.5,1.4,"\u8098\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u80B1\u9AA8\u5167\u4E0A\u9AC1\u524D\u65B9"),T("HT4","\u9748\u9053","ulna","forearm",23,88,3.2,"\u8155\u6A6B\u7D0B\u4E0A 1.5 \u5BF8\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),T("HT5","\u901A\u91CC","ulna","forearm",23.3,87,3.3,"\u8155\u6A6B\u7D0B\u4E0A 1 \u5BF8"),T("HT6","\u9670\u90C4","ulna","forearm",23.6,86,3.4,"\u8155\u6A6B\u7D0B\u4E0A 0.5 \u5BF8"),T("HT7","\u795E\u9580","hand","hand",24,85,3.6,"\u8155\u6A6B\u7D0B\u5C3A\u5074\u7AEF\u3001\u5C3A\u5074\u5C48\u8155\u808C\u8171\u6A48\u5074"),T("HT8","\u5C11\u5E9C","hand","hand",25,79,5,"\u638C\u5FC3\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593"),T("HT9","\u5C11\u885D","littleDist","none",23.4,72.5,8.2,"\u5C0F\u6307\u6A48\u5074\u6307\u7532\u89D2\u65C1")]},{id:"si",code:"SI",name:"\u624B\u592A\u967D\u5C0F\u8178\u7D93",short:"\u5C0F\u8178\u7D93",organ:"\u5C0F\u8178",group:"handYang",flow:"\u624B\uFF08\u5C0F\u6307\uFF09\u2192 \u982D\u9762",color:[.95,.52,.45],points:[T("SI1","\u5C11\u6FA4","littleDist","none",22.6,72.6,8,"\u5C0F\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),T("SI2","\u524D\u8C37","littleProx","none",22.4,75.6,5,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u524D\u65B9"),T("SI3","\u5F8C\u8C3F","hand","hand",22.9,78.6,3,"\u7B2C\u4E94\u638C\u6307\u95DC\u7BC0\u5C3A\u5074\u5F8C\u65B9\u3001\u63E1\u62F3\u6642\u6A6B\u7D0B\u982D"),T("SI4","\u8155\u9AA8","hand","hand",23.4,82.4,1.8,"\u7B2C\u4E94\u638C\u9AA8\u57FA\u5E95\u8207\u9264\u9AA8\u4E4B\u9593"),T("SI5","\u967D\u8C37","hand","hand",23.6,84.8,.8,"\u8155\u80CC\u5C3A\u5074\u3001\u5C3A\u9AA8\u8396\u7A81\u8207\u4E09\u89D2\u9AA8\u4E4B\u9593"),T("SI6","\u990A\u8001","ulna","forearm",23,87,-.6,"\u5C3A\u9AA8\u8396\u7A81\u6A48\u5074\u9AA8\u7E2B\u4E2D"),T("SI7","\u652F\u6B63","ulna","forearm",22.6,95,-1.4,"\u8155\u80CC\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5C3A\u9AA8\u80CC\u5074"),T("SI8","\u5C0F\u6D77","ulna","forearm",19.6,110,-5,"\u5C3A\u9AA8\u9DF9\u5634\u8207\u80B1\u9AA8\u5167\u4E0A\u9AC1\u4E4B\u9593"),T("SI9","\u80A9\u8C9E","scapula","arm",15.2,132,-5.6,"\u814B\u5F8C\u7D0B\u982D\u4E0A 1 \u5BF8"),T("SI10","\u81D1\u4FDE","scapula","chest",15,137,-6,"\u80A9\u80DB\u5CA1\u4E0B\u7DE3\u3001\u814B\u5F8C\u7D0B\u982D\u76F4\u4E0A"),T("SI11","\u5929\u5B97","scapula","chest",11,133,-7.2,"\u80A9\u80DB\u5CA1\u4E0B\u7AA9\u4E2D\u592E"),T("SI12","\u79C9\u98A8","scapula","chest",10.5,139.4,-6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u4E2D\u592E"),T("SI13","\u66F2\u57A3","scapula","chest",7.6,139.4,-6.6,"\u80A9\u80DB\u5CA1\u4E0A\u7AA9\u5167\u5074\u7AEF"),T("SI14","\u80A9\u5916\u4FDE","thoraxUp","chest",6,143.6,-7,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 3 \u5BF8"),T("SI15","\u80A9\u4E2D\u4FDE","neckLow","neck",4.2,145.6,-6.4,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 2 \u5BF8"),T("SI16","\u5929\u7A97","neckUp","neck",5,150,.2,"\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3\u3001\u5589\u7D50\u65C1"),T("SI17","\u5929\u5BB9","head","head",5,152.2,1.6,"\u4E0B\u9837\u89D2\u5F8C\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u524D\u7DE3"),T("SI18","\u9874\u9ACE","head","head",5,157,5.4,"\u5916\u773C\u89D2\u76F4\u4E0B\u3001\u9874\u9AA8\u4E0B\u7DE3"),T("SI19","\u807D\u5BAE","head","head",6.6,157.6,2.2,"\u8033\u5C4F\u524D\u3001\u5F35\u53E3\u51F9\u9677\u8655")]},{id:"bl",code:"BL",name:"\u8DB3\u592A\u967D\u8180\u80F1\u7D93",short:"\u8180\u80F1\u7D93",organ:"\u8180\u80F1",group:"footYang",flow:"\u982D\u9762 \u2192 \u80CC \u2192 \u8DB3\uFF08\u5C0F\u8DBE\uFF09",color:[.3,.7,.98],points:[T("BL1","\u775B\u660E","head","head",1.4,158.4,7.4,"\u5167\u773C\u89D2\u7A0D\u4E0A\u65B9\u51F9\u9677"),T("BL2","\u6522\u7AF9","head","head",1.9,160.4,7.9,"\u7709\u982D\u51F9\u9677\u4E2D"),T(null,null,"head","head",2.2,164.5,6.5),T("BL7","\u901A\u5929","head","head",2.2,169.6,.8,"\u524D\u9AEE\u969B\u6B63\u4E2D\u76F4\u4E0A 4 \u5BF8\u3001\u65C1\u958B 1.5 \u5BF8"),T(null,null,"head","head",2.6,166,-6),T(null,null,"head","head",2.6,159.5,-9.3),T("BL10","\u5929\u67F1","neckUp","neck",2.6,153.2,-7.4,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u65C1\u958B 1.3 \u5BF8\u3001\u659C\u65B9\u808C\u5916\u7DE3"),T("BL11","\u5927\u677C","thoraxUp","chest",3,143.4,-8,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL13","\u80BA\u4FDE","thoraxUp","chest",3,139.4,-9.4,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL15","\u5FC3\u4FDE","thoraxMid","chest",3,134.4,-9.4,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL17","\u8188\u4FDE","thoraxMid","chest",3,128,-9.4,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL18","\u809D\u4FDE","thoraxLow","chest",3,122.4,-9.2,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL20","\u813E\u4FDE","thoraxLow","belly",3,116.4,-8.2,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL21","\u80C3\u4FDE","thoraxLow","belly",3,113.4,-7.6,"\u7B2C\u5341\u4E8C\u80F8\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL23","\u814E\u4FDE","L2","belly",3,107,-6.8,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL25","\u5927\u8178\u4FDE","L4","belly",3,100,-6.6,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL27","\u5C0F\u8178\u4FDE","pelvis","pelvis",2.6,95.6,-7.6,"\u7B2C\u4E00\u85A6\u690E\u68D8\u7A81\u4E0B\u65C1\u958B 1.5 \u5BF8"),T("BL32","\u6B21\u9ACE","pelvis","pelvis",2.2,92,-8.2,"\u7B2C\u4E8C\u85A6\u5F8C\u5B54\u4E2D"),T("BL36","\u627F\u6276","femur","thigh",7,80,-7.6,"\u81C0\u6A6B\u7D0B\u4E2D\u9EDE"),T("BL37","\u6BB7\u9580","femur","thigh",7.4,65,-6.6,"\u627F\u6276\u8207\u59D4\u4E2D\u9023\u7DDA\u4E0A\u3001\u627F\u6276\u4E0B 6 \u5BF8"),T("BL40","\u59D4\u4E2D","shank","shank",7.4,44.6,-6.8,"\u8195\u6A6B\u7D0B\u4E2D\u9EDE"),T("BL57","\u627F\u5C71","shank","shank",7.4,26,-7.6,"\u5C0F\u817F\u5F8C\u5074\u3001\u8153\u8178\u808C\u5169\u808C\u8179\u4E4B\u9593\u7684\u4EBA\u5B57\u7D0B"),T("BL58","\u98DB\u63DA","shank","shank",9.4,21,-6.8,"\u5D11\u5D19\u76F4\u4E0A 7 \u5BF8\u3001\u627F\u5C71\u5916\u4E0B\u65B9"),T("BL60","\u5D11\u5D19","shank","shank",11,7.6,-5.8,"\u5916\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),T("BL62","\u7533\u8108","foot","foot",12,4.6,-3.8,"\u5916\u8E1D\u5C16\u76F4\u4E0B\u51F9\u9677"),T("BL64","\u4EAC\u9AA8","foot","foot",13.5,2.8,1.4,"\u7B2C\u4E94\u8E60\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),T("BL65","\u675F\u9AA8","foot","foot",14,2.2,4.4,"\u7B2C\u4E94\u8E60\u8DBE\u95DC\u7BC0\u5F8C\u65B9\u3001\u8D64\u767D\u8089\u969B"),T("BL67","\u81F3\u9670","foot","none",14.6,1.2,9.4,"\u8DB3\u5C0F\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"ki",code:"KI",name:"\u8DB3\u5C11\u9670\u814E\u7D93",short:"\u814E\u7D93",organ:"\u814E",group:"footYin",flow:"\u8DB3\uFF08\u8DB3\u5E95\uFF09\u2192 \u80F8\u8179",color:[.25,.32,.78],points:[T("KI1","\u6E67\u6CC9","foot","foot",7.5,1.1,4.4,"\u8DB3\u5E95\u524D 1/3 \u51F9\u9677\uFF08\u5C48\u8DBE\u6642\u6700\u51F9\u8655\uFF09"),T("KI2","\u7136\u8C37","foot","foot",5.4,3.4,1.4,"\u821F\u9AA8\u7C97\u9686\u4E0B\u65B9\u3001\u8D64\u767D\u8089\u969B"),T("KI3","\u592A\u8C3F","shank","shank",4.8,8,-4.8,"\u5167\u8E1D\u5C16\u8207\u8DDF\u8171\u4E4B\u9593\u51F9\u9677"),T("KI5","\u6C34\u6CC9","foot","foot",5,5.4,-5,"\u592A\u8C3F\u76F4\u4E0B 1 \u5BF8"),T("KI6","\u7167\u6D77","foot","foot",4.5,5.6,-2.4,"\u5167\u8E1D\u5C16\u4E0B\u65B9\u51F9\u9677"),T("KI7","\u5FA9\u6E9C","shank","shank",4.5,12,-4.4,"\u592A\u8C3F\u4E0A 2 \u5BF8\u3001\u8DDF\u8171\u524D\u7DE3"),T("KI9","\u7BC9\u8CD3","shank","shank",5,22,-4.8,"\u592A\u8C3F\u4E0A 5 \u5BF8\u3001\u8153\u8178\u808C\u5167\u5074"),T("KI10","\u9670\u8C37","shank","shank",5,44.6,-6,"\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u3001\u5169\u808C\u8171\u4E4B\u9593"),T(null,null,"femur","thigh",5.5,58,-4),T(null,null,"femur","thigh",5,72,-2),T(null,null,"pelvis","pelvis",3,82,2),T("KI11","\u6A6B\u9AA8","pelvis","pelvis",1.2,82.6,5.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 0.5 \u5BF8"),T("KI13","\u6C23\u7A74","pelvis","pelvis",1.2,97,9.2,"\u81CD\u4E0B 3 \u5BF8\u65C1\u958B 0.5 \u5BF8"),T("KI16","\u8093\u4FDE","L3","belly",1.2,103,10.4,"\u81CD\u65C1 0.5 \u5BF8"),T("KI21","\u5E7D\u9580","thoraxLow","belly",1.3,117,10.8,"\u81CD\u4E0A 6 \u5BF8\u65C1\u958B 0.5 \u5BF8"),T("KI23","\u795E\u5C01","thoraxMid","chest",2,130,10.8,"\u7B2C\u56DB\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8"),T("KI27","\u4FDE\u5E9C","thoraxUp","chest",4,138.2,6.4,"\u9396\u9AA8\u4E0B\u7DE3\u3001\u524D\u6B63\u4E2D\u7DDA\u65C1 2 \u5BF8")]},{id:"pc",code:"PC",name:"\u624B\u53A5\u9670\u5FC3\u5305\u7D93",short:"\u5FC3\u5305\u7D93",organ:"\u5FC3\u5305",group:"handYin",flow:"\u80F8 \u2192 \u624B\uFF08\u4E2D\u6307\uFF09",color:[.48,.34,.92],points:[T("PC1","\u5929\u6C60","thoraxMid","chest",12,130,8.6,"\u7B2C\u56DB\u808B\u9593\u3001\u4E73\u982D\u5916\u5074 1 \u5BF8"),T("PC2","\u5929\u6CC9","arm","arm",17,128,2.6,"\u814B\u524D\u7D0B\u982D\u4E0B 2 \u5BF8\u3001\u80B1\u4E8C\u982D\u808C\u5169\u982D\u4E4B\u9593"),T("PC3","\u66F2\u6FA4","arm","arm",20.4,110.5,2.8,"\u8098\u6A6B\u7D0B\u4E0A\u3001\u80B1\u4E8C\u982D\u808C\u8171\u5C3A\u5074"),T("PC4","\u90C4\u9580","radius","forearm",24,95,3,"\u8155\u6A6B\u7D0B\u4E0A 5 \u5BF8\u3001\u5169\u808C\u8171\u4E4B\u9593"),T("PC5","\u9593\u4F7F","radius","forearm",25,91,3.3,"\u8155\u6A6B\u7D0B\u4E0A 3 \u5BF8"),T("PC6","\u5167\u95DC","radius","forearm",25.4,89,3.5,"\u8155\u6A6B\u7D0B\u4E0A 2 \u5BF8\u3001\u638C\u9577\u808C\u8171\u8207\u6A48\u5074\u5C48\u8155\u808C\u8171\u4E4B\u9593"),T("PC7","\u5927\u9675","hand","hand",26.3,85,4,"\u8155\u6A6B\u7D0B\u4E2D\u9EDE\u3001\u5169\u808C\u8171\u4E4B\u9593"),T("PC8","\u52DE\u5BAE","hand","hand",27.4,79,5.4,"\u638C\u5FC3\u7B2C\u4E8C\u3001\u4E09\u638C\u9AA8\u4E4B\u9593\uFF08\u63E1\u62F3\u6642\u4E2D\u6307\u5C16\u6240\u6307\uFF09"),T("PC9","\u4E2D\u885D","middleDist","none",28.5,70,9.6,"\u4E2D\u6307\u5C16\u7AEF\u4E2D\u592E")]},{id:"te",code:"TE",name:"\u624B\u5C11\u967D\u4E09\u7126\u7D93",short:"\u4E09\u7126\u7D93",organ:"\u4E09\u7126",group:"handYang",flow:"\u624B\uFF08\u7121\u540D\u6307\uFF09\u2192 \u982D\u9762",color:[.62,.86,.25],points:[T("TE1","\u95DC\u885D","ringDist","none",25.2,71.4,9.2,"\u7121\u540D\u6307\u5C3A\u5074\u6307\u7532\u89D2\u65C1"),T("TE2","\u6DB2\u9580","hand","hand",25,77.4,4.4,"\u7B2C\u56DB\u3001\u4E94\u6307\u7E2B\u7AEF"),T("TE3","\u4E2D\u6E1A","hand","hand",25.3,79.6,2.8,"\u7B2C\u56DB\u3001\u4E94\u638C\u9AA8\u4E4B\u9593\u3001\u638C\u6307\u95DC\u7BC0\u5F8C\u65B9"),T("TE4","\u967D\u6C60","hand","hand",25.8,84.5,.8,"\u8155\u80CC\u6A6B\u7D0B\u4E2D\u3001\u4F38\u6307\u808C\u8171\u5C3A\u5074"),T("TE5","\u5916\u95DC","radius","forearm",25,88.6,-1,"\u967D\u6C60\u4E0A 2 \u5BF8\u3001\u6A48\u5C3A\u9AA8\u4E4B\u9593"),T("TE6","\u652F\u6E9D","radius","forearm",24.8,90.6,-1.3,"\u967D\u6C60\u4E0A 3 \u5BF8"),T("TE7","\u6703\u5B97","ulna","forearm",23.5,90.6,-1.5,"\u652F\u6E9D\u5C3A\u5074\u3001\u5C3A\u9AA8\u6A48\u5074\u7DE3"),T("TE8","\u4E09\u967D\u7D61","radius","forearm",24.5,92.6,-1.5,"\u967D\u6C60\u4E0A 4 \u5BF8"),T("TE9","\u56DB\u7006","ulna","forearm",23,99,-3,"\u8098\u5C16\u4E0B 5 \u5BF8"),T("TE10","\u5929\u4E95","arm","arm",21.5,113,-5.4,"\u8098\u5C16\u4E0A 1 \u5BF8\u51F9\u9677"),T("TE11","\u6E05\u51B7\u6DF5","arm","arm",21,116,-5,"\u5929\u4E95\u4E0A 1 \u5BF8"),T("TE12","\u6D88\u6FFC","arm","arm",20,122,-5,"\u6E05\u51B7\u6DF5\u8207\u81D1\u6703\u9023\u7DDA\u4E2D\u9EDE"),T("TE13","\u81D1\u6703","arm","arm",19,128,-5,"\u80A9\u9ACE\u4E0B 3 \u5BF8\u3001\u4E09\u89D2\u808C\u5F8C\u4E0B\u7DE3"),T("TE14","\u80A9\u9ACE","scapula","arm",17.6,139,-5.4,"\u80A9\u5CF0\u5F8C\u4E0B\u65B9\u51F9\u9677"),T("TE15","\u5929\u9ACE","scapula","chest",7.6,143,-6,"\u80A9\u80DB\u9AA8\u4E0A\u89D2\u4E0A\u65B9"),T("TE16","\u5929\u7256","neckUp","neck",5.4,151,-2.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u3001\u80F8\u9396\u4E73\u7A81\u808C\u5F8C\u7DE3"),T("TE17","\u7FF3\u98A8","head","head",6.4,155.4,-.4,"\u8033\u5782\u5F8C\u65B9\u3001\u4E73\u7A81\u8207\u4E0B\u9837\u89D2\u4E4B\u9593"),T("TE19","\u9871\u606F","head","head",7,160.4,-2.4,"\u8033\u5F8C\u9AEE\u969B\u3001\u7FF3\u98A8\u8207\u89D2\u5B6B\u4E4B\u9593"),T("TE20","\u89D2\u5B6B","head","head",7,162.4,-.4,"\u8033\u5C16\u6B63\u4E0A\u65B9\u9AEE\u969B"),T("TE21","\u8033\u9580","head","head",6.6,158.6,2.4,"\u8033\u5C4F\u4E0A\u5207\u8DE1\u524D\u65B9\u51F9\u9677"),T("TE23","\u7D72\u7AF9\u7A7A","head","head",5,160.6,6.4,"\u7709\u68A2\u51F9\u9677\u4E2D")]},{id:"gb",code:"GB",name:"\u8DB3\u5C11\u967D\u81BD\u7D93",short:"\u81BD\u7D93",organ:"\u81BD",group:"footYang",flow:"\u982D\u9762 \u2192 \u9AD4\u5074 \u2192 \u8DB3\uFF08\u7B2C\u56DB\u8DBE\uFF09",color:[.2,.82,.7],points:[T("GB1","\u77B3\u5B50\u9ACE","head","head",5.3,158.4,5.8,"\u5916\u773C\u89D2\u5916\u5074\u51F9\u9677"),T("GB2","\u807D\u6703","head","head",6.6,156.4,2,"\u8033\u5C4F\u9593\u5207\u8DE1\u524D\u65B9\u3001\u5F35\u53E3\u51F9\u9677"),T("GB4","\u9837\u53AD","head","head",6.5,163,4.4,"\u982D\u7DAD\u8207\u66F2\u9B22\u9023\u7DDA\u4E0A 1/4"),T("GB8","\u7387\u8C37","head","head",6.5,165.4,-.4,"\u8033\u5C16\u76F4\u4E0A\u5165\u9AEE\u969B 1.5 \u5BF8"),T("GB12","\u5B8C\u9AA8","head","head",5.5,155.4,-4.4,"\u4E73\u7A81\u5F8C\u4E0B\u65B9\u51F9\u9677"),T(null,null,"head","head",6.5,162,-2),T(null,null,"head","head",5,166,4),T("GB14","\u967D\u767D","head","head",3,162.4,7.4,"\u77B3\u5B54\u76F4\u4E0A\u3001\u7709\u4E0A 1 \u5BF8"),T(null,null,"head","head",3.5,167,5),T(null,null,"head","head",4.5,169,-1),T(null,null,"head","head",5,164,-7),T("GB20","\u98A8\u6C60","head","head",4,155.4,-7.4,"\u6795\u9AA8\u4E0B\u3001\u80F8\u9396\u4E73\u7A81\u808C\u8207\u659C\u65B9\u808C\u4E4B\u9593\u51F9\u9677"),T("GB21","\u80A9\u4E95","clavicle","chest",9,145.8,-3,"\u5927\u690E\u8207\u80A9\u5CF0\u9023\u7DDA\u4E2D\u9EDE\u3001\u659C\u65B9\u808C\u4E0A\u7DE3"),T("GB22","\u6DF5\u814B","thoraxMid","chest",13.5,128.5,.5,"\u814B\u4E2D\u7DDA\u4E0A\u3001\u814B\u4E0B 3 \u5BF8"),T("GB24","\u65E5\u6708","thoraxMid","chest",8.6,119.6,8.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u4E03\u808B\u9593"),T("GB25","\u4EAC\u9580","thoraxLow","belly",7,112,-5,"\u7B2C\u5341\u4E8C\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),T("GB26","\u5E36\u8108","L3","belly",11,105,1,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u76F4\u4E0B\u3001\u8207\u81CD\u540C\u9AD8"),T("GB29","\u5C45\u9ACE","pelvis","pelvis",12.5,90,-2,"\u9AC2\u524D\u4E0A\u68D8\u8207\u5927\u8F49\u5B50\u9023\u7DDA\u4E2D\u9EDE"),T("GB30","\u74B0\u8DF3","pelvis","pelvis",12,85,-6,"\u80A1\u9AA8\u5927\u8F49\u5B50\u8207\u85A6\u9AA8\u88C2\u5B54\u9023\u7DDA\u5916 1/3"),T("GB31","\u98A8\u5E02","femur","thigh",12.6,62,-2,"\u5927\u817F\u5916\u5074\u3001\u76F4\u7ACB\u5782\u624B\u6642\u4E2D\u6307\u5C16\u6240\u6307"),T("GB33","\u819D\u967D\u95DC","femur","thigh",12,47,-2.4,"\u80A1\u9AA8\u5916\u4E0A\u9AC1\u4E0A\u65B9\u51F9\u9677"),T("GB34","\u967D\u9675\u6CC9","shank","shank",11.8,39.4,-1,"\u8153\u9AA8\u5C0F\u982D\u524D\u4E0B\u65B9\u51F9\u9677"),T("GB36","\u5916\u4E18","shank","shank",12,27,-3,"\u5916\u8E1D\u5C16\u4E0A 7 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),T("GB37","\u5149\u660E","shank","shank",12,19,-3,"\u5916\u8E1D\u5C16\u4E0A 5 \u5BF8"),T("GB39","\u61F8\u9418","shank","shank",12,14,-3,"\u5916\u8E1D\u5C16\u4E0A 3 \u5BF8\u3001\u8153\u9AA8\u524D\u7DE3"),T("GB40","\u4E18\u589F","foot","foot",11.8,5.4,-.4,"\u5916\u8E1D\u524D\u4E0B\u65B9\u51F9\u9677"),T("GB41","\u8DB3\u81E8\u6CE3","foot","foot",11.5,4,4,"\u7B2C\u56DB\u3001\u4E94\u8E60\u9AA8\u4E4B\u9593"),T("GB43","\u4FE0\u8C3F","foot","foot",12.8,2,7.4,"\u7B2C\u56DB\u3001\u4E94\u8DBE\u7E2B\u7AEF"),T("GB44","\u8DB3\u7AC5\u9670","foot","none",13.6,1.3,11.3,"\u7B2C\u56DB\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1")]},{id:"lr",code:"LR",name:"\u8DB3\u53A5\u9670\u809D\u7D93",short:"\u809D\u7D93",organ:"\u809D",group:"footYin",flow:"\u8DB3\uFF08\u5927\u8DBE\uFF09\u2192 \u8105\u808B",color:[.2,.6,.3],points:[T("LR1","\u5927\u6566","foot","none",8.9,1.8,12.6,"\u8DB3\u5927\u8DBE\u5916\u5074\u8DBE\u7532\u89D2\u65C1"),T("LR2","\u884C\u9593","foot","foot",8.5,2.4,9,"\u7B2C\u4E00\u3001\u4E8C\u8DBE\u7E2B\u7AEF"),T("LR3","\u592A\u885D","foot","foot",8,4.4,4.4,"\u7B2C\u4E00\u3001\u4E8C\u8E60\u9AA8\u7D50\u5408\u90E8\u524D\u65B9\u51F9\u9677"),T("LR4","\u4E2D\u5C01","foot","foot",5.6,7,.2,"\u5167\u8E1D\u524D\u65B9\u3001\u811B\u9AA8\u524D\u808C\u8171\u5167\u5074"),T("LR5","\u8821\u6E9D","shank","shank",4.2,18,-1.4,"\u5167\u8E1D\u5C16\u4E0A 5 \u5BF8\u3001\u811B\u9AA8\u5167\u5074\u9762\u4E2D\u592E"),T("LR6","\u4E2D\u90FD","shank","shank",4.4,22,-1.4,"\u5167\u8E1D\u5C16\u4E0A 7 \u5BF8"),T("LR7","\u819D\u95DC","shank","shank",5,39,-2,"\u9670\u9675\u6CC9\u5F8C 1 \u5BF8"),T("LR8","\u66F2\u6CC9","shank","shank",4.8,44.6,-4,"\u5C48\u819D\u6642\u8195\u6A6B\u7D0B\u5167\u5074\u7AEF\u4E0A\u65B9"),T("LR9","\u9670\u5305","femur","thigh",5,55,0,"\u9AD5\u5E95\u4E0A 4 \u5BF8\u3001\u80A1\u5167\u5074\u808C\u8207\u7E2B\u5320\u808C\u4E4B\u9593"),T(null,null,"femur","thigh",5.2,70,2),T("LR11","\u9670\u5EC9","femur","thigh",4.6,85,3,"\u6C23\u885D\u76F4\u4E0B 2 \u5BF8\u3001\u9577\u6536\u808C\u5916\u7DE3"),T("LR12","\u6025\u8108","pelvis","pelvis",2.6,83,5,"\u6065\u9AA8\u806F\u5408\u5916\u5074\u3001\u8179\u80A1\u6E9D\u52D5\u8108\u640F\u52D5\u8655"),T(null,null,"pelvis","pelvis",4.5,92,7),T(null,null,"L3","belly",8,101,7),T("LR13","\u7AE0\u9580","thoraxLow","belly",11,110,2,"\u7B2C\u5341\u4E00\u808B\u6E38\u96E2\u7AEF\u4E0B\u65B9"),T("LR14","\u671F\u9580","thoraxMid","chest",9,123.4,9.4,"\u4E73\u982D\u76F4\u4E0B\u3001\u7B2C\u516D\u808B\u9593")]},{id:"cv",code:"CV",name:"\u4EFB\u8108",short:"\u4EFB\u8108",organ:"\u524D\u6B63\u4E2D\u7DDA\uFF08\u9670\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u6703\u9670 \u2192 \u4E0B\u9837\uFF08\u524D\u6B63\u4E2D\u7DDA\uFF09",color:[.96,.87,.6],points:[T("CV1","\u6703\u9670","pelvis","pelvis",0,79,-1,"\u524D\u5F8C\u4E8C\u9670\u4E4B\u9593"),T("CV2","\u66F2\u9AA8","pelvis","pelvis",0,81.4,4.4,"\u6065\u9AA8\u806F\u5408\u4E0A\u7DE3\u4E2D\u9EDE"),T("CV3","\u4E2D\u6975","pelvis","pelvis",0,84.6,6.2,"\u81CD\u4E0B 4 \u5BF8"),T("CV4","\u95DC\u5143","pelvis","pelvis",0,97,9.6,"\u81CD\u4E0B 3 \u5BF8"),T("CV6","\u6C23\u6D77","L5","belly",0,100,10,"\u81CD\u4E0B 1.5 \u5BF8"),T("CV8","\u795E\u95D5","L3","belly",0,103,10.6,"\u81CD\u4E2D\u592E\uFF08\u7981\u91DD\uFF0C\u53EF\u7078\uFF09"),T("CV9","\u6C34\u5206","L3","belly",0,105,10.6,"\u81CD\u4E0A 1 \u5BF8"),T("CV12","\u4E2D\u8118","L1","belly",0,112,11,"\u81CD\u8207\u80F8\u9AA8\u4E0B\u7AEF\u9023\u7DDA\u4E2D\u9EDE"),T("CV14","\u5DE8\u95D5","thoraxLow","belly",0,119,11,"\u81CD\u4E0A 6 \u5BF8"),T("CV15","\u9CE9\u5C3E","thoraxMid","chest",0,122.6,11,"\u80F8\u9AA8\u528D\u7A81\u4E0B"),T("CV17","\u81BB\u4E2D","thoraxMid","chest",0,130,11.2,"\u5169\u4E73\u982D\u9023\u7DDA\u4E2D\u9EDE\u3001\u7B2C\u56DB\u808B\u9593"),T("CV18","\u7389\u5802","thoraxMid","chest",0,132.6,11,"\u7B2C\u4E09\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),T("CV20","\u83EF\u84CB","thoraxUp","chest",0,137,8,"\u7B2C\u4E00\u808B\u9593\u3001\u524D\u6B63\u4E2D\u7DDA\u4E0A"),T("CV21","\u7487\u74A3","thoraxUp","chest",0,139,6.4,"\u5929\u7A81\u4E0B 1 \u5BF8"),T("CV22","\u5929\u7A81","thoraxUp","chest",0,140.8,4.4,"\u80F8\u9AA8\u4E0A\u7AA9\u4E2D\u592E"),T("CV23","\u5EC9\u6CC9","head","neck",0,151,5,"\u820C\u9AA8\u4E0A\u7DE3\u51F9\u9677"),T("CV24","\u627F\u6F3F","head","head",0,152.4,8.6,"\u9826\u5507\u6E9D\u6B63\u4E2D\u51F9\u9677")]},{id:"gv",code:"GV",name:"\u7763\u8108",short:"\u7763\u8108",organ:"\u5F8C\u6B63\u4E2D\u7DDA\uFF08\u967D\u8108\u4E4B\u6D77\uFF09",group:"extra",midline:!0,flow:"\u5C3E\u9AA8 \u2192 \u982D\u9802 \u2192 \u4E0A\u5507\uFF08\u5F8C\u6B63\u4E2D\u7DDA\uFF09",color:[.66,.7,.95],points:[T("GV1","\u9577\u5F37","pelvis","pelvis",0,82.6,-8,"\u5C3E\u9AA8\u7AEF\u8207\u809B\u9580\u9023\u7DDA\u4E2D\u9EDE"),T("GV2","\u8170\u4FDE","pelvis","pelvis",0,88,-8.6,"\u85A6\u7BA1\u88C2\u5B54\u4E2D"),T("GV3","\u8170\u967D\u95DC","L4","belly",0,100,-7,"\u7B2C\u56DB\u8170\u690E\u68D8\u7A81\u4E0B"),T("GV4","\u547D\u9580","L2","belly",0,107,-7,"\u7B2C\u4E8C\u8170\u690E\u68D8\u7A81\u4E0B"),T("GV6","\u810A\u4E2D","thoraxLow","belly",0,117,-8.4,"\u7B2C\u5341\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),T("GV8","\u7B4B\u7E2E","thoraxLow","chest",0,122.4,-9.4,"\u7B2C\u4E5D\u80F8\u690E\u68D8\u7A81\u4E0B"),T("GV9","\u81F3\u967D","thoraxMid","chest",0,128,-9.8,"\u7B2C\u4E03\u80F8\u690E\u68D8\u7A81\u4E0B\u3001\u5169\u80A9\u80DB\u4E0B\u89D2\u9023\u7DDA"),T("GV11","\u795E\u9053","thoraxMid","chest",0,134.4,-9.8,"\u7B2C\u4E94\u80F8\u690E\u68D8\u7A81\u4E0B"),T("GV12","\u8EAB\u67F1","thoraxUp","chest",0,139.4,-9.8,"\u7B2C\u4E09\u80F8\u690E\u68D8\u7A81\u4E0B"),T("GV13","\u9676\u9053","thoraxUp","chest",0,143.4,-8.4,"\u7B2C\u4E00\u80F8\u690E\u68D8\u7A81\u4E0B"),T("GV14","\u5927\u690E","neckLow","neck",0,145,-7.8,"\u7B2C\u4E03\u9838\u690E\u68D8\u7A81\u4E0B\uFF08\u4F4E\u982D\u6642\u6700\u7A81\u51FA\u7684\u9AA8\u982D\u4E0B\u65B9\uFF09"),T("GV15","\u555E\u9580","neckUp","neck",0,152,-6.8,"\u5F8C\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),T("GV16","\u98A8\u5E9C","head","head",0,154.2,-8.4,"\u6795\u5916\u9686\u51F8\u76F4\u4E0B\u51F9\u9677"),T("GV17","\u8166\u6236","head","head",0,157.6,-9.4,"\u6795\u5916\u9686\u51F8\u4E0A\u7DE3\u51F9\u9677"),T("GV19","\u5F8C\u9802","head","head",0,166,-6.4,"\u767E\u6703\u5F8C 1.5 \u5BF8"),T("GV20","\u767E\u6703","head","head",0,170.3,-1.4,"\u982D\u9802\u6B63\u4E2D\u3001\u5169\u8033\u5C16\u9023\u7DDA\u4E2D\u9EDE"),T("GV21","\u524D\u9802","head","head",0,169.4,2,"\u767E\u6703\u524D 1.5 \u5BF8"),T("GV23","\u4E0A\u661F","head","head",0,167,6.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 1 \u5BF8"),T("GV24","\u795E\u5EAD","head","head",0,166,7.4,"\u524D\u9AEE\u969B\u6B63\u4E2D\u4E0A 0.5 \u5BF8"),T("GV26","\u6C34\u6E9D","head","head",0,155,9.2,"\u4EBA\u4E2D\u6E9D\u4E0A 1/3 \u8655"),T("GV28","\u9F66\u4EA4","head","head",0,153.4,8.4,"\u4E0A\u5507\u7E6B\u5E36\u8207\u7259\u9F66\u76F8\u63A5\u8655")]}],Du=[["handYin","\u624B\u4E09\u9670\uFF08\u80F8\u2192\u624B\uFF09"],["handYang","\u624B\u4E09\u967D\uFF08\u624B\u2192\u982D\uFF09"],["footYang","\u8DB3\u4E09\u967D\uFF08\u982D\u2192\u8DB3\uFF09"],["footYin","\u8DB3\u4E09\u9670\uFF08\u8DB3\u2192\u80F8\u8179\uFF09"],["extra","\u4EFB\u7763\u4E8C\u8108"]];function Uu(i){return Us.find(t=>t.id===i)??null}var Nu=i=>i.midline?["m"]:["l","r"];var xx=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","indexMid","indexDist","middleProx","middleMid","middleDist","ringProx","ringMid","ringDist","littleProx","littleMid","littleDist"]);function yx(i,t){return xx.has(i.seg)?`${i.seg}.${t==="r"?"r":"l"}`:i.seg}function vx(i,t){let e=t==="r"?[-i.p[0],i.p[1],i.p[2]]:[...i.p],n=gx[i.hub],s=_x[i.hub]??0;if(!n||!s)return e;let r=n.point?t==="r"?[-n.point[0],n.point[1],n.point[2]]:n.point:Mx(e,n,t),a=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],o=Math.hypot(a[0],a[1],a[2]);return o<1e-6?e:[e[0]+a[0]/o*s,e[1]+a[1]/o*s,e[2]+a[2]/o*s]}function Mx(i,t,e){let n=e==="r"?-1:1,s=[t.a[0]*n,t.a[1],t.a[2]],r=[t.b[0]*n,t.b[1],t.b[2]],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=[i[0]-s[0],i[1]-s[1],i[2]-s[2]],l=a[0]**2+a[1]**2+a[2]**2,c=Math.max(0,Math.min(1,l?(o[0]*a[0]+o[1]*a[1]+o[2]*a[2])/l:0));return[s[0]+a[0]*c,s[1]+a[1]*c,s[2]+a[2]*c]}function Fu(i,t){return i.points.map(e=>({code:e.code,name:e.name,note:e.note,seg:yx(e,t),pos:vx(e,t)}))}var Ou=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function bx(i,t){return Math.max(1,Math.min(10,Math.round(Ou(i,t)/2.5)))}function Sx(i,t,e,n,s){let r=s*s,a=r*s,o=[0,0,0];for(let l=0;l<3;l++)o[l]=.5*(2*t[l]+(-i[l]+e[l])*s+(2*i[l]-5*t[l]+4*e[l]-n[l])*r+(-i[l]+3*t[l]-3*e[l]+n[l])*a);return o}function co(i){if(i.length<2)return i.map(e=>[...e]);let t=[];for(let e=0;e<i.length-1;e++){let n=i[Math.max(0,e-1)],s=i[e],r=i[e+1],a=i[Math.min(i.length-1,e+2)],o=bx(s,r);for(let l=0;l<o;l++)t.push(Sx(n,s,r,a,l/o))}return t.push([...i[i.length-1]]),t}function Bu(i,t){let e=1/0;for(let n=0;n<t.length-1;n++){let s=t[n],r=t[n+1],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=a[0]**2+a[1]**2+a[2]**2,l=o?Math.max(0,Math.min(1,((i[0]-s[0])*a[0]+(i[1]-s[1])*a[1]+(i[2]-s[2])*a[2])/o)):0,c=Ou(i,[s[0]+a[0]*l,s[1]+a[1]*l,s[2]+a[2]*l]);c<e&&(e=c)}return e}var Ex=.5,wx=3.4,Tx=new di(Ex,12,8),Ax=[1,1,1];function ku(){let i=new Le;i.renderOrder=6;let t=[];for(let o of Us)for(let l of Nu(o)){let c=Fu(o,l),h=c.map((g,y)=>({...g,index:y})).filter(g=>g.code),u=new Kn({linewidth:wx,transparent:!0,opacity:.95,depthWrite:!1});u.color.setRGB(...o.color,de);let d=new lo(new vi,u);d.raycast=()=>{},d.renderOrder=6,d.frustumCulled=!1,d.visible=!1;let p=new Cr(Tx,new mn({toneMapped:!1}),h.length);p.instanceColor=new Ki(new Float32Array(h.length*3),3),p.frustumCulled=!1,p.renderOrder=7,p.visible=!1,p.userData.track=t.length,i.add(d,p),t.push({meridian:o,side:l,nodes:c,acu:h,line:d,material:u,dots:p,live:c.map(()=>[0,0,0]),active:!1,stale:!0})}let e=new P,n=new Dt,s=null;function r(o,l){for(let d=0;d<o.nodes.length;d++){let p=o.nodes[d];e.fromArray(p.pos),l&&e.applyMatrix4(l.get(p.seg)??n.identity()),o.live[d]=e.toArray()}let c=co(o.live),h=new Float32Array(c.length*3);for(let d=0;d<c.length;d++)h.set(c[d],d*3);o.line.geometry.dispose(),o.line.geometry=new vi,o.line.geometry.setPositions(h),o.line.computeLineDistances();let u=new Bt;for(let d=0;d<o.acu.length;d++){n.identity().setPosition(...o.live[o.acu[d].index]),o.dots.setMatrixAt(d,n);let p=s&&s.track===o&&s.acuIndex===d;u.setRGB(...p?Ax:o.meridian.color,de),o.dots.setColorAt(d,u)}o.dots.instanceMatrix.needsUpdate=!0,o.dots.instanceColor&&(o.dots.instanceColor.needsUpdate=!0),o.stale=!1}let a=null;return{group:i,tracks:t,setActive(o){let l=new Set(o);for(let c of t)c.active=l.has(c.meridian.id),c.active&&c.stale&&r(c,a),c.line.visible=c.active,c.dots.visible=c.active},update(o){a=o;for(let l of t)l.active?r(l,o):l.stale=!0},setResolution(o,l){for(let c of t)c.material.resolution.set(o,l)},setOverlay(o){for(let l of t)l.material.depthTest=!o,l.material.needsUpdate=!0,l.dots.material.depthTest=!o,l.dots.material.needsUpdate=!0},select(o){s=o;for(let l of t)l.active&&r(l,a)},get selected(){return s},pickTargets(){return t.filter(o=>o.active).map(o=>o.dots)},resolve(o,l){let c=t[o.userData.track];if(!c||l==null)return null;let h=c.acu[l];return h?{meridian:c.meridian,side:c.side,point:h,track:c,acuIndex:l}:null},livePaths(){return t.map(o=>({meridian:o.meridian,side:o.side,path:o.stale?null:o.live}))},allPaths(o){return t.map(l=>{let c=l.nodes.map(h=>(e.fromArray(h.pos),o&&e.applyMatrix4(o.get(h.seg)??n.identity()),e.toArray()));return{meridian:l.meridian,side:l.side,path:c}})}}}var q=(i,t,e,n,s,r,a)=>[i,{id:i,label:t,seg:e,p:[n,s,r],radius:a}],zu=Object.fromEntries([q("forehead","\u524D\u984D","head",2.5,165,7.6,3.6),q("temple","\u592A\u967D\u7A74","head",6.2,161.5,3.4,3.2),q("eyeOrbit","\u773C\u7736","head",3,158.6,7.4,2.6),q("vertex","\u982D\u9802","head",2,169,-1,4.2),q("occiput","\u5F8C\u8166","head",3,158,-9,4),q("behindEar","\u8033\u5F8C","head",6.4,157,-2.6,2.6),q("aboveEar","\u8033\u4E0A","head",6.8,162.5,-.6,2.6),q("mastoid","\u4E73\u7A81","head",6,155.2,-3.2,2.6),q("cheek","\u81C9\u9830","head",4.6,155,6,3),q("jaw","\u4E0B\u9837","head",4.2,151.6,5.4,3),q("chin","\u4E0B\u5DF4","head",0,151.6,8.2,2.6),q("teethLower","\u4E0B\u6392\u7259\u9F52","head",1.6,153.6,8.2,2),q("tongue","\u820C\u982D\u3001\u820C\u6839","head",0,152,4.6,2.2),q("throatFront","\u5589\u56A8\u524D\u9762","neckUp",0,149.5,5,2.8),q("throatDeep","\u5589\u56A8\u6DF1\u8655","neckUp",0,149,1.8,2.8),q("neckFrontUp","\u9838\u90E8\u524D\u4E0A\u65B9","neckUp",0,152,3,2.6),q("neckSide","\u9838\u90E8\u5074\u9762","neckUp",4.6,149,1.2,3),q("neckBack","\u9838\u5F8C","neckUp",0,150,-7,3.4),q("neckShoulderAngle","\u9838\u80A9\u4EA4\u89D2","neckLow",5,145,-5,3.6),q("supraclavicular","\u9396\u9AA8\u4E0A\u65B9","clavicle",6,142.5,1.6,3),q("shoulderFront","\u80A9\u8180\u524D\u5074","scapula",15,137,2,4),q("shoulderLat","\u80A9\u8180\u5916\u5074","arm",18.6,134,-2,4),q("shoulderBack","\u80A9\u8180\u5F8C\u5074","scapula",15,135,-6.4,4),q("shoulderDeep","\u80A9\u95DC\u7BC0\u6DF1\u8655","arm",16,136,-1,3.6),q("deltoid","\u4E09\u89D2\u808C\u5340\u57DF","arm",18,132.5,-1,4.6),q("scapulaMedial","\u80A9\u80DB\u9AA8\u5167\u7DE3","scapula",7.6,134,-8,4),q("scapulaMedialUp","\u80A9\u80DB\u9AA8\u5167\u7DE3\u4E0A\u6BB5","scapula",7.6,139,-7,3),q("scapulaInferior","\u80A9\u80DB\u9AA8\u4E0B\u89D2","scapula",8.6,127,-8.4,3.2),q("scapulaAbove","\u80A9\u80DB\u9AA8\u4E0A\u65B9","scapula",9,142,-5,3.6),q("scapulaDeep","\u80A9\u80DB\u9AA8\u6DF1\u8655","scapula",11,133,-6.4,4),q("interscapular","\u80A9\u80DB\u9AA8\u4E4B\u9593","thoraxMid",3.6,133,-9.4,4),q("upperBackMid","\u4E0A\u80CC\u6B63\u4E2D","thoraxUp",0,138,-9.6,3.6),q("thoracicMid","\u80F8\u690E\u6B63\u4E2D","thoraxMid",0,129,-10,3.6),q("thoracicSide","\u80F8\u690E\u65C1","thoraxMid",3,128,-9.4,3.2),q("backRibs","\u80CC\u90E8\u808B\u9AA8\u65C1","thoraxLow",6,117,-7.6,3.6),q("lowerBack","\u4E0B\u80CC","L3",4,104,-7,4.4),q("lowerBackMid","\u4E0B\u80CC\u6B63\u4E2D","L4",0,101,-7,3),q("lowerBackSide","\u4E0B\u80CC\u5074\u9762","L2",7,108,-5,3.4),q("lumbarParaspinal","\u8170\u690E\u65C1","L3",3.2,104,-6.4,3.4),q("sacrum","\u85A6\u9AA8","pelvis",0,92,-8.4,3.6),q("si","\u85A6\u9AC2\u95DC\u7BC0","pelvis",3.2,94,-8.4,3),q("coccyx","\u5C3E\u9AA8","pelvis",0,84,-8,2.6),q("anus","\u809B\u9580","pelvis",0,80,-4,2.6),q("perineum","\u6703\u9670","pelvis",0,79,-1,2.6),q("chestFront","\u524D\u80F8","thoraxMid",6,130,10,4.4),q("chestSide","\u80F8\u5ED3\u5074\u9762","thoraxMid",12.5,124,1.5,4.2),q("breast","\u4E73\u623F\u5340","thoraxMid",9.6,129,10.6,4),q("breastLower","\u4E0B\u80F8\u3001\u4E73\u623F\u4E0B\u7DE3","thoraxMid",9,122.5,9.4,3.6),q("sternum","\u80F8\u9AA8\u65C1","thoraxMid",2.6,129,10.6,3),q("intercostal","\u808B\u9593","thoraxMid",10,122,5.5,3.6),q("subcostal","\u808B\u5F13\u4E0B","thoraxLow",7,113,8.4,3.6),q("upperAbdomen","\u4E0A\u8179","L1",2.6,110,10.4,4),q("abdomen","\u8179\u90E8","L3",4,104,10,4.4),q("lowerAbdomen","\u4E0B\u8179","pelvis",2.6,97,9.4,4),q("pubic","\u6065\u9AA8\u4E0A\u65B9","pelvis",0,83.5,5.6,3),q("groin","\u8179\u80A1\u6E9D","pelvis",5,90,6,3.6),q("pelvisDeep","\u9AA8\u76C6\u5167\u6DF1\u8655","pelvis",3,88,-1,4),q("buttock","\u81C0\u90E8","pelvis",8,88,-8,5),q("buttockUpLat","\u81C0\u90E8\u4E0A\u5916\u5074","pelvis",10,93,-6,4),q("buttockDeep","\u81C0\u90E8\u6DF1\u8655","pelvis",8,87,-6,4),q("buttockLower","\u81C0\u90E8\u4E0B\u7DE3","femur",7,80,-7.4,3.6),q("greaterTroch","\u9AD6\u90E8\u5916\u5074\uFF08\u5927\u8F49\u5B50\uFF09","femur",12.5,85,-3,3.6),q("hipFrontLat","\u9AD6\u90E8\u524D\u5916\u5074","femur",10.5,84,3,3.6),q("thighFront","\u5927\u817F\u524D\u9762","femur",8.5,62,4,4.6),q("thighFrontUp","\u5927\u817F\u524D\u4E0A\u65B9","femur",9,78,4,4.2),q("thighLat","\u5927\u817F\u5916\u5074","femur",12.5,62,-1,4.6),q("thighMed","\u5927\u817F\u5167\u5074","femur",4.5,62,1,4.6),q("thighMedUp","\u5927\u817F\u5167\u5074\u4E0A\u6BB5","femur",4.5,78,2,4.2),q("thighBack","\u5927\u817F\u5F8C\u5074","femur",7.5,62,-6,4.6),q("thighBackUp","\u5927\u817F\u5F8C\u5074\u4E0A\u6BB5","femur",7.5,76,-7,4.2),q("thighLatBack","\u5927\u817F\u5916\u5F8C\u5074","femur",11,62,-4,4.2),q("kneeFront","\u819D\u84CB\u524D\u9762","shank",8.5,44,2.4,3.6),q("kneeMed","\u819D\u84CB\u5167\u5074","shank",4.5,44,0,3),q("kneeLat","\u819D\u84CB\u5916\u5074","shank",11.5,44,0,3),q("kneeBack","\u819D\u84CB\u5F8C\u9762\uFF08\u8195\u7AA9\uFF09","shank",7.5,44.5,-7,3.6),q("kneeBackLat","\u819D\u84CB\u5F8C\u5916\u5074","shank",10.5,44,-6,3),q("kneeBackMed","\u819D\u84CB\u5F8C\u5167\u5074","shank",4.8,44,-6,3),q("kneeAbove","\u819D\u84CB\u4E0A\u65B9","femur",8.5,50,2,3.6),q("calfBack","\u5C0F\u817F\u5F8C\u9762","shank",7.5,26,-7,4),q("calfUpper","\u5C0F\u817F\u4E0A\u6BB5","shank",7.5,36,-6,3.6),q("calfLat","\u5C0F\u817F\u5916\u5074","shank",11.5,26,-3,3.6),q("shinMed","\u811B\u9AA8\u5167\u5074","shank",4.5,28,-1,3.6),q("achilles","\u8DDF\u8171","shank",7.5,12,-6,2.6),q("heel","\u8173\u8DDF","foot",7.9,3,-6.5,3),q("heelLat","\u8173\u8DDF\u5916\u5074","foot",10.5,2.8,-5.5,2.6),q("ankleFrontMed","\u8E1D\u95DC\u7BC0\u524D\u5167\u5074","talus",5,8,0,2.6),q("ankleFrontLat","\u8E1D\u524D\u5916\u5074","foot",11,6,-1,2.6),q("ankleLat","\u5916\u8E1D\u5468\u570D","shank",11.8,7,-3,3),q("footLatBorder","\u8173\u7684\u5916\u5074\u7DE3","foot",13.5,2.5,2.5,3),q("footDorsum","\u8173\u80CC","foot",9.5,5.2,4.5,3.4),q("footDorsumMed","\u8173\u80CC\u5167\u5074","foot",7,5.2,5.5,3),q("arch","\u8173\u5E95\u5167\u5074\u8DB3\u5F13","foot",6.2,1.5,1.5,3),q("soleFront","\u8173\u5E95\u524D\u534A","foot",8.5,1,6,3.4),q("toesPlantar","\u8173\u8DBE\u5E95\u9762","foot",11,1.1,10.5,3),q("toesDorsal","\u8173\u8DBE\u80CC\u9762","foot",11,2.2,10.5,3),q("halluxPlantar","\u62C7\u8DBE\u5E95\u9762","foot",8,1.1,11.8,2.2),q("halluxDorsal","\u62C7\u8DBE\u80CC\u9762","foot",8,2.4,11.5,2.2),q("mt1Head","\u7B2C\u4E00\u8E60\u9AA8\u982D","foot",7,3.2,7.5,2.4),q("upperArmFront","\u4E0A\u81C2\u524D\u9762","arm",17.5,124,1.5,4),q("upperArmBack","\u4E0A\u81C2\u5F8C\u9762","arm",19.5,122,-6,4),q("upperArmLat","\u4E0A\u81C2\u5916\u5074","arm",21,124,-3,4),q("armInner","\u624B\u81C2\u5167\u5074","arm",15.5,122,-2,4.4),q("elbowFront","\u624B\u8098\u524D\u9762","arm",20.5,110,1.5,3),q("elbowLat","\u80B1\u9AA8\u5916\u4E0A\u9AC1\uFF08\u624B\u8098\u5916\u5074\uFF09","arm",24.5,110.5,-1.5,2.8),q("forearmFlexor","\u524D\u81C2\u638C\u5074","radius",24.5,96,3,3.8),q("forearmFlexorLow","\u524D\u81C2\u638C\u5074\u4E0B\u6BB5","radius",25.5,90,3.4,3.2),q("forearmExt","\u524D\u81C2\u80CC\u5074","radius",25,97,-1.5,3.8),q("forearmUlnar","\u524D\u81C2\u5C3A\u5074\uFF08\u5C0F\u6307\u5074\uFF09","ulna",22,96,.5,3.6),q("forearmRadial","\u524D\u81C2\u6A48\u5074\uFF08\u62C7\u6307\u5074\uFF09","radius",26.5,96,1,3.6),q("wristPalmar","\u624B\u8155\u638C\u5074","hand",26,85,4,2.6),q("wristPalmarRadial","\u624B\u8155\u638C\u5074\u62C7\u6307\u5074","hand",27.8,85,3.6,2.2),q("wristPalmarUlnar","\u624B\u8155\u638C\u5074\u5C0F\u6307\u5074","hand",24.2,85,3.8,2.2),q("wristDorsal","\u624B\u8155\u80CC\u5074","hand",26,84.5,.8,2.6),q("wristDorsalRadial","\u624B\u8155\u80CC\u5074\u62C7\u6307\u5074","hand",28.3,84.3,1.2,2.2),q("wristDorsalUlnar","\u624B\u8155\u80CC\u5074\u5C0F\u6307\u5074","hand",23.8,84.6,.9,2.2),q("handDorsum","\u624B\u80CC","hand",27,80,1.4,3),q("webSpace","\u864E\u53E3","hand",29.3,80.5,2.6,2.2),q("palm","\u638C\u5FC3","hand",27,80,4.8,3),q("thenar","\u5927\u9B5A\u969B","thumbMeta",29.8,82,4.8,2.4),q("thumbBase","\u62C7\u6307\u6839\u90E8","thumbMeta",30.4,81,4.2,2.2),q("thumb","\u62C7\u6307","thumbProx",31.9,80,5.4,2),q("thumbTip","\u62C7\u6307\u638C\u9762\u5230\u6307\u5C16","thumbDist",32.8,77.9,6.6,1.8),q("indexFinger","\u98DF\u6307","indexProx",30.1,75.2,4.5,1.8),q("middleFinger","\u4E2D\u6307","middleProx",27.7,75.2,5,1.8),q("ringFinger","\u7121\u540D\u6307","ringProx",25.5,75.7,4.9,1.8),q("littleFinger","\u5C0F\u6307","littleProx",23.7,76.7,4.9,1.8),q("fingersPalmar","\u624B\u6307\u638C\u9762","hand",27,74,6.4,3.4),q("fingerTips","\u6307\u5C16","middleDist",28.5,70.6,8.8,2.4)]),Rx={pecMajorClav:["shoulderFront","deltoid"],pecMajorStern:["chestFront","breast","armInner","forearmUlnar"],pecMajorAbd:["breastLower"],pecMinor:["shoulderFront","chestFront","armInner","littleFinger"],subclavius:["shoulderFront","upperArmFront","forearmRadial","thumb","indexFinger"],serratusAnterior:["chestSide","scapulaInferior"],trapUpper:["neckSide","behindEar","temple","eyeOrbit"],trapMiddle:["interscapular"],trapLower:["neckBack","mastoid","scapulaAbove"],rhomboidMajor:["scapulaMedial","interscapular"],rhomboidMinor:["scapulaMedialUp"],levatorScapulae:["neckShoulderAngle","scapulaMedial"],deltoidAnt:["shoulderFront","deltoid"],deltoidMid:["shoulderLat"],deltoidPost:["shoulderBack","upperArmBack"],bicepsLong:["shoulderFront","elbowFront"],bicepsShort:["shoulderFront","elbowFront"],coracobrachialis:["shoulderFront","upperArmBack","forearmExt","handDorsum"],tricepsLong:["shoulderBack","upperArmBack","neckShoulderAngle"],tricepsLat:["upperArmBack","forearmExt"],tricepsMed:["elbowLat","forearmUlnar"],latissimus:["scapulaInferior","armInner","ringFinger","littleFinger"],teresMajor:["shoulderBack","upperArmBack"],supraspinatus:["shoulderLat","elbowLat"],infraspinatus:["shoulderDeep","upperArmFront"],teresMinor:["shoulderBack","deltoid"],subscapularis:["shoulderBack","scapulaDeep","wristDorsal"],rectusCapPostMajor:["occiput","temple","eyeOrbit"],rectusCapPostMinor:["occiput","vertex","eyeOrbit"],obliquusCapSup:["occiput","temple"],obliquusCapInf:["occiput","behindEar"],rectusCapAnt:["neckFrontUp"],rectusCapLat:["occiput"],longusColli:["throatFront","throatDeep"],longusCapitis:["throatFront","throatDeep"],scalenusAnterior:["chestFront","scapulaMedial","upperArmFront","upperArmBack","thumb","indexFinger"],scalenusMedius:["shoulderLat","upperArmLat","scapulaMedial","handDorsum"],scalenusPosterior:["scapulaMedialUp"],sternocleidomastoid:["forehead","eyeOrbit","cheek","vertex","behindEar"],platysma:["jaw","cheek"],digastricPost:["mastoid","behindEar","throatFront"],digastricAnt:["teethLower","chin"],stylohyoid:["throatFront","mastoid"],geniohyoid:["chin","tongue"],mylohyoid:["tongue","teethLower"],sternohyoid:["throatFront"],sternothyroid:["throatFront"],thyrohyoid:["throatFront"],omohyoid:["neckSide","supraclavicular"],occipitalis:["occiput","eyeOrbit"],frontalis:["forehead"],temporoparietalis:["temple","aboveEar"],spleniusCapitis:["vertex"],spleniusColli:["eyeOrbit","occiput","neckShoulderAngle"],iliocostalisLumborum:["lowerBack","buttockUpLat","lowerAbdomen"],iliocostalisThoracis:["scapulaMedial","chestSide","abdomen"],iliocostalisColli:["neckShoulderAngle","scapulaAbove"],longissimusThoracis:["lowerBack","buttock"],longissimusColli:["neckBack","scapulaAbove"],longissimusCapitis:["behindEar","eyeOrbit"],spinalisThoracis:["thoracicMid"],spinalisColli:["neckBack"],spinalisCapitis:["occiput"],semispinalisThoracis:["upperBackMid"],semispinalisColli:["occiput","neckBack"],multifidusLumborum:["lowerBackMid","sacrum","abdomen"],multifidusThoracis:["thoracicSide","chestFront","abdomen"],multifidusColli:["occiput","neckBack","scapulaMedialUp"],rotatores:["thoracicMid"],interspinalesColli:["neckBack"],interspinalesThoracis:["thoracicMid"],interspinalesLumborum:["lowerBackMid"],intertransversariiVentral:["lowerBackSide"],intertransversariiDorsal:["lowerBackSide"],serratusPostSup:["scapulaDeep","upperArmBack","littleFinger","chestFront"],serratusPostInf:["backRibs"],levatoresCostarumLongi:["backRibs"],levatoresCostarumBreves:["backRibs"],externalIntercostals:["intercostal"],internalIntercostals:["intercostal"],innermostIntercostals:["intercostal"],transversusThoracis:["sternum"],diaphragm:["subcostal","chestSide","shoulderLat"],rectusAbdominis:["upperAbdomen","thoracicMid","lowerAbdomen","lowerBack"],externalOblique:["upperAbdomen","lowerAbdomen","groin"],internalOblique:["lowerAbdomen","groin","pubic"],transversusAbdominis:["subcostal","upperAbdomen"],pyramidalis:["pubic","lowerAbdomen"],quadratusLumborum:["si","buttockUpLat","greaterTroch","lowerBack"],externalAnalSphincter:["anus","coccyx"],puboanalis:["anus","perineum"],pubococcygeus:["coccyx","sacrum","perineum","lowerAbdomen"],iliococcygeus:["coccyx","sacrum"],coccygeus:["coccyx","sacrum","buttock"],gluteusMaximus:["buttock","sacrum","coccyx"],gluteusMedius:["lowerBack","si","buttockUpLat","thighLatBack"],gluteusMinimus:["buttock","thighLat","thighBack","calfLat","ankleLat"],tensorFasciaeLatae:["hipFrontLat","thighLat","kneeLat"],piriformis:["si","buttock","thighBack"],gemellusSup:["buttockDeep"],gemellusInf:["buttockDeep"],obturatorInternus:["coccyx","anus","thighBackUp","pelvisDeep"],obturatorExternus:["groin","thighMedUp"],quadratusFemoris:["buttockLower","thighBackUp"],psoasMajor:["lumbarParaspinal","thighFrontUp"],iliacus:["lowerBack","si","thighFrontUp"],sartorius:["thighMed","thighFront"],rectusFemoris:["kneeFront"],vastusLateralis:["thighLat","kneeLat"],vastusMedialis:["kneeMed","kneeFront"],vastusIntermedius:["thighFront","kneeAbove"],adductorLongus:["groin","thighMed","kneeMed","shinMed"],adductorBrevis:["groin","thighMed"],adductorMagnus:["groin","thighMed","pelvisDeep"],adductorMinimus:["thighMedUp"],gracilis:["thighMed"],pectineus:["groin","thighMedUp"],bicepsFemorisLong:["kneeBack","thighBack"],bicepsFemorisShort:["kneeBackLat"],semitendinosus:["buttockLower","thighBack","kneeBackMed","calfUpper"],semimembranosus:["buttockLower","thighBack","kneeBack"],gastrocnemiusMed:["arch","calfBack"],gastrocnemiusLat:["kneeBack","calfBack","calfLat"],soleus:["heel","si"],plantaris:["kneeBack","calfUpper"],popliteus:["kneeBack"],tibialisPosterior:["achilles","heel","soleFront"],flexorDigitorumLongus:["soleFront","toesPlantar"],flexorHallucisLongus:["halluxPlantar","mt1Head"],tibialisAnterior:["ankleFrontMed","halluxDorsal"],extensorDigitorumLongus:["footDorsum","toesDorsal"],extensorHallucisLongus:["footDorsumMed","halluxDorsal"],fibularisTertius:["ankleFrontLat","heelLat"],fibularisLongus:["ankleLat","footLatBorder"],fibularisBrevis:["ankleLat","footLatBorder"],brachialis:["thumbBase","elbowFront","shoulderFront"],pronatorTeresHum:["wristPalmarRadial","forearmFlexor"],flexorCarpiRadialis:["wristPalmar","palm"],palmarisLongus:["palm","forearmFlexorLow"],fcuHumeral:["wristPalmarUlnar"],fdsHumeroUlnar:["middleFinger","ringFinger","littleFinger"],flexorDigitorumProfundus:["fingersPalmar","fingerTips"],flexorPollicisLongus:["thumbTip"],pronatorQuadratus:["wristPalmar"],anconeus:["elbowLat"],brachioradialis:["elbowLat","wristDorsalRadial","webSpace"],extensorCarpiRadialisLongus:["elbowLat","webSpace"],extensorCarpiRadialisBrevis:["wristDorsal","handDorsum"],extensorDigitorum:["forearmExt","handDorsum","middleFinger","ringFinger"],extensorDigitiMinimi:["littleFinger"],ecuHumeral:["wristDorsalUlnar"],supinator:["elbowLat","webSpace"],abductorPollicisLongus:["wristDorsalRadial","thumbBase"],abductorPollicisBrevis:["thumb","wristPalmarRadial"],opponensPollicis:["thumbTip","wristPalmarRadial"],adductorPollicisObl:["thumbBase","thenar"],abductorDigitiMinimi:["littleFinger"],dorsalInterosseiHand:["handDorsum","fingerTips"]},Cx=new Set(["clavicle","scapula","arm","ulna","radius","hand","femur","shank","talus","foot","thumbMeta","thumbProx","thumbDist","indexProx","middleProx","ringProx","littleProx","middleDist"]),Px=i=>zu[i].p[0]===0;function ho(i,t){let e=zu[i],n=t==="r";return{id:e.id,label:e.label,seg:Cx.has(e.seg)?`${e.seg}.${n?"r":"l"}`:e.seg,pos:[n?-e.p[0]:e.p[0],e.p[1],e.p[2]],radius:e.radius}}function $l(i,t){let e=Rx[i]??[],n=[];for(let s of e)Px(s)?n.push(ho(s,"l")):t==="m"?n.push(ho(s,"l"),ho(s,"r")):n.push(ho(s,t));return n}var Ix=[1,.38,.62],Lx=.22,Dx=.55,Ux=new di(1,20,14),Nx=new di(1,12,8);function Vu(i,t){let e=new mn({transparent:!0,opacity:i,wireframe:t,depthTest:!1,depthWrite:!1,side:sn,toneMapped:!1});return e.color.setRGB(...Ix,de),e}function Hu(){let i=new Le;i.renderOrder=8;let t=[],e=[];function n(l){if(!t[l]){let c=new oe(Ux,Vu(Lx,!1)),h=new oe(Nx,Vu(Dx,!0));for(let u of[c,h])u.renderOrder=8,u.frustumCulled=!1,u.raycast=()=>{},i.add(u);t[l]=[c,h]}return t[l]}let s=new P,r=new Dt,a=null;function o(l){for(let c=0;c<e.length;c++){let h=e[c];s.fromArray(h.pos),l&&s.applyMatrix4(l.get(h.seg)??r);for(let u of n(c))u.position.copy(s),u.scale.setScalar(h.radius),u.visible=!0}for(let c=e.length;c<t.length;c++)for(let h of t[c])h.visible=!1}return{group:i,show(l,c=a){e=l??[],a=c,o(c)},update(l){a=l,e.length&&o(l)},get count(){return e.length}}}var Gu={focus:[1,.55,.78],short:[1,.23,.13],long:[.12,.42,1],spot:[1,.12,.48]},Zl=.5,Fx=[.12,.05,.2],Ox=7;function Wu(i,t){let e=xu(),n=[t.joints.thorax.center[0],t.joints.thorax.center[2]],s=new Map(t.parts.map(w=>[w.info.key,w])),r=[],a={...xn},o=null,l=[],c=null,h=[],u=ku();i.scene.add(u.group);let d=Hu();i.scene.add(d.group),i.onResize((w,D)=>u.setResolution(w,D));let p=()=>!no(a),g=()=>r.forEach(w=>w()),y=0;function m(){for(let w of t.parts)w.stale&&(w.mesh.geometry.computeVertexNormals(),w.mesh.geometry.computeBoundingSphere(),w.stale=!1)}function f(){let w=_u(t.joints,a),D=new Set([...w].filter(([F,z])=>!o||!z.equals(o.get(F))).map(([F])=>F));o=w;for(let F of t.bones)F.mesh.matrix.copy(o.get(F.segment));for(let F of t.parts){if(!F.segments.some($=>D.has($)))continue;let z=F.mesh.geometry.getAttribute("position");F.skin?nu(F.rest,F.skin,F.info.skinSegs,o,z.array):eu(F.prep,o.get(F.info.segA),o.get(F.info.segB),z.array),z.needsUpdate=!0,F.stale=!0,F.delta=Qh(F.info,o)}S=null,clearTimeout(y),y=setTimeout(m,120),E(),_(),R(),u.update(o),d.update(o)}function E(){for(let w of t.parts){let D=su({selected:e.selectedKey===w.info.key,poseActive:p(),measure:w.info.measure,delta:w.delta});w.mesh.material.color.setRGB(D[0],D[1],D[2],de)}}function v(){for(let w of t.bones)w.mesh.visible=e.layers.bones;for(let w of t.parts){let D=Hl(w.info,e),F=w.mesh.material;w.mesh.visible=D.visible,F.opacity=D.opacity;let z=D.opacity<1;F.transparent!==z&&(F.transparent=z,F.needsUpdate=!0),F.depthWrite=!z,D.selected?F.emissive.setRGB(...Fx):F.emissive.setRGB(D.glow,D.glow*.85,D.glow*.5),w.pickable=D.pickable,w.target=yu(w.info,e,n)}E(),_(),R()}function _(){for(let w of t.parts){let D=bu(w.info,e,p(),w.delta);for(let F=0;F<w.tps.length;F++){let{marker:z}=w.tps[F];z.visible=!!D,z.material.depthTest=!e.overlay;let $=e.selectedPain&&e.selectedPain.key===w.info.key&&e.selectedPain.index===F;D&&z.material.color.setRGB(...$?Gu.focus:Gu[D],de),z.scale.setScalar($?1.6:1)}}}function C(){for(let w of t.parts){if(!w.tps.length||!w.tps[0].marker.visible)continue;let D=w.mesh.geometry.getAttribute("position").array,F=w.mesh.geometry.getAttribute("normal").array,z=w.mesh.position;for(let{marker:$,vertex:V}of w.tps)$.position.set(D[V*3]+F[V*3]*Zl+z.x,D[V*3+1]+F[V*3+1]*Zl+z.y,D[V*3+2]+F[V*3+2]*Zl+z.z)}}function R(){c?.update(o,w=>w.target,p())}function I(w){c&&(i.scene.remove(c.group),c.dispose(),c=null),w.length&&(c=Au(w,t.parts),i.scene.add(c.group))}function U(w){l=w,e.lineParts=Su(w),I(w),v(),g()}let S=null;function M(w,D=3){S??(S=u.allPaths(o).map($=>({...$,path:co($.path)})));let F=[];for(let{meridian:$,side:V,path:tt}of S){let ot=Bu(w,tt);ot<=Ox&&F.push({meridian:$,side:V,distance:ot})}F.sort(($,V)=>$.distance-V.distance);let z=new Set;return F.filter($=>!z.has($.meridian.id)&&z.add($.meridian.id)).slice(0,D)}function L(){let w=e.selectedPain,D=w&&s.get(w.key);d.show(D?$l(D.info.id,D.info.side):[],o)}function X(w,D){let F=s.get(w),z=F?.tps[D];if(!z)return null;let $=F.mesh.geometry.getAttribute("position").array,V=F.mesh.position;return[$[z.vertex*3]+V.x,$[z.vertex*3+1]+V.y,$[z.vertex*3+2]+V.z]}return i.onFrame(w=>{let D=1-Math.exp(-w*10);for(let F of t.parts){let z=F.mesh.position;z.set(z.x+(F.target[0]-z.x)*D,z.y+(F.target[1]-z.y)*D,z.z+(F.target[2]-z.z)*D)}C()}),f(),m(),v(),{state:e,meridians:u,get params(){return{...a}},get poseActive(){return p()},get activeLines(){return[...l]},get activeMeridians(){return[...h]},parts:t.parts,referred:d,partByKey:w=>s.get(w),referredZonesOfSelection(){let w=e.selectedPain,D=w&&s.get(w.key);return D?$l(D.info.id,D.info.side):[]},nearbyMeridians:M,painPosition:X,setParams(w){a={...a,...w},f(),g()},setLayer(w,D){e.layers[w]=D,v(),g()},setExplode(w){e.explode=w,v(),g()},setPainMode(w){e.painMode=w,w==="off"&&(e.selectedPain=null),L(),_(),g()},setOverlay(w){e.overlay=w,u.setOverlay(w),_(),g()},toggle(w,D){let F=e[w];F.has(D)?F.delete(D):F.add(D),w==="hidden"&&e.selectedKey===D&&(e.selectedKey=null),w==="hidden"&&e.selectedPain?.key===D&&(e.selectedPain=null),L(),v(),g()},select(w){e.selectedKey=w,w&&(e.selectedPain=null),L(),v(),g()},selectPain(w){let D=w&&e.selectedPain?.key===w.key&&e.selectedPain?.index===w.index;e.selectedPain=D?null:w,e.selectedPain&&(e.selectedKey=null,u.select(null)),L(),v(),g()},selectAcupoint(w){let D=u.selected,F=w&&D&&D.track===w.track&&D.acuIndex===w.acuIndex;u.select(F?null:w),!F&&w&&(e.selectedKey=null,e.selectedPain=null),L(),v(),g()},get selectedAcupoint(){return u.selected},focus(w){let D=s.get(w);D&&(e.selectedKey=w,e.selectedPain=null,L(),i.lookAt(D.info.centroid),v(),g())},toggleLine(w){U(l.includes(w)?l.filter(D=>D!==w):[...l,w])},clearLines(){U([])},toggleMeridian(w){h=h.includes(w)?h.filter(D=>D!==w):[...h,w],u.setActive(h),u.update(o),h.length||u.select(null),g()},setMeridians(w){h=[...new Set(w)],u.setActive(h),u.update(o),h.length||u.select(null),g()},clearMeridians(){this.setMeridians([])},reset(){Mu(e),u.select(null),L(),v(),g()},restoreParts(){vu(e),v(),g()},pickAt(w,D){m();let F=u.pickTargets(),z=e.painMode==="off"?[]:t.parts.flatMap(tt=>tt.tps.filter(ot=>ot.marker.visible).map(ot=>ot.marker)),$=t.parts.filter(tt=>tt.pickable).map(tt=>tt.mesh),V=i.pickHit(w,D,[...F,...z,...$]);if(!V)return{kind:null};if(V.object.isInstancedMesh){let tt=u.resolve(V.object,V.instanceId);return tt?{kind:"acupoint",hit:tt}:{kind:null}}return V.object.userData.pain?{kind:"pain",pain:V.object.userData.pain}:V.object.userData.partKey?{kind:"muscle",key:V.object.userData.partKey}:{kind:null}},pointAt(w,D){m();let F=t.parts.filter($=>$.pickable).map($=>$.mesh),z=e.layers.bones?t.bones.map($=>$.mesh):[];return i.pickPoint(w,D,[...F,...z])},onChange(w){r.push(w)}}}var Bx={l:"\u5DE6",r:"\u53F3",m:"\u4E2D\u7DDA"},Xu=[["superficial","\u6DFA\u5C64"],["middle","\u4E2D\u5C64"],["deep","\u6DF1\u5C64"],["bones","\u9AA8\u9ABC"]],kx=[["off","\u4E0D\u986F\u793A"],["posture","\u53EA\u6A19\u9396\u77ED\uFF0F\u9396\u9577"],["all","\u5168\u8EAB\u75E0\u75DB\u9EDE"]];function qu(i,t,e){i.innerHTML=`
    <h2>\u62C6\u89E3</h2>
    ${Xu.map(([o,l])=>`<label class="toggle"><input type="checkbox" data-layer="${o}" checked>${l}</label>`).join("")}
    <div class="pain-modes">
      <span class="label">\u75E0\u75DB\u9EDE</span>
      ${kx.map(([o,l])=>`<button type="button" data-pain="${o}">${l}</button>`).join("")}
    </div>
    <label class="toggle"><input type="checkbox" data-overlay>\u7A7F\u900F\u986F\u793A\uFF08\u7D93\u8108\u3001\u75E0\u75DB\u9EDE\u4E0D\u88AB\u808C\u8089\u64CB\u4F4F\uFF09</label>
    <label class="slider">\u7206\u70B8\u5716<input type="range" min="0" max="1" step="0.01" value="0" data-explode></label>
    <button type="button" data-reset>\u5FA9\u539F</button>
    <div class="hidden-list"></div>
    <p class="hint">\u95DC\u6389\u6DFA\u5C64\u5C31\u80FD\u770B\u5230\u4E2D\u5C64\uFF1B\u9EDE\u9078\u808C\u8089\u5F8C\u53EF\u55AE\u7368\u96B1\u85CF\u3001\u534A\u900F\u660E\u6216\u62C9\u51FA\u3002\u9078\u300C\u5168\u8EAB\u75E0\u75DB\u9EDE\u300D\u5F8C\uFF0C\u9EDE\u6D0B\u7D05\u8272\u7684\u83F1\u5F62\u9EDE\uFF0C\u770B\u90A3\u88E1\u53EF\u80FD\u662F\u4EC0\u9EBC\u554F\u984C\uFF0C\u6A21\u578B\u4E0A\u4E5F\u6703\u7F69\u51FA\u8F49\u79FB\u75DB\u7684\u7BC4\u570D\u3002</p>`;let n=i.querySelector(".hidden-list");i.addEventListener("change",o=>{let l=o.target.dataset.layer;l&&t.setLayer(l,o.target.checked),"overlay"in o.target.dataset&&t.setOverlay(o.target.checked)}),i.addEventListener("input",o=>{"explode"in o.target.dataset&&t.setExplode(Number(o.target.value))}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.pain?t.setPainMode(l.dataset.pain):"reset"in l.dataset?t.reset():"restoreAll"in l.dataset?t.restoreParts():l.dataset.unset&&t.toggle(l.dataset.unset,l.dataset.key))});let s=o=>{let l=t.partByKey(o);return`${e.muscles[l.info.id].name}\uFF08${Bx[l.info.side]}\uFF09`},r=(o,l,c)=>`<li><span>${s(o)}</span><button type="button" data-unset="${l}" data-key="${o}">${c}</button></li>`,a=()=>{for(let[c]of Xu)i.querySelector(`[data-layer="${c}"]`).checked=t.state.layers[c];i.querySelector("[data-explode]").value=t.state.explode,i.querySelector("[data-overlay]").checked=t.state.overlay;for(let c of i.querySelectorAll("[data-pain]"))c.classList.toggle("active",c.dataset.pain===t.state.painMode);let{hidden:o,ghost:l}=t.state;n.innerHTML=o.size+l.size===0?"":`<h3>\u5DF2\u96B1\u85CF\uFF0F\u534A\u900F\u660E</h3>
           <ul>${[...o].map(c=>r(c,"hidden","\u986F\u793A")).join("")}${[...l].map(c=>r(c,"ghost","\u53D6\u6D88\u534A\u900F\u660E")).join("")}</ul>
           <button type="button" data-restore-all>\u5168\u90E8\u6062\u5FA9</button>`};t.onChange(a),a()}var zx=[["all","\u5168\u90E8"],["headNeck","\u982D\u9838"],["trunk","\u8EC0\u5E79"],["upperLimb","\u4E0A\u80A2"],["lowerLimb","\u4E0B\u80A2"]];function Vx(i,t,e,n){let s=e.trim().toLowerCase(),r=new Map;for(let a of i){let o=t.muscles[a.info.id];n!=="all"&&a.info.region!==n||s&&!`${o.name} ${o.en}`.toLowerCase().includes(s)||(r.has(a.info.id)||r.set(a.info.id,{id:a.info.id,name:o.name,en:o.en,sides:[]}),r.get(a.info.id).sides.push(a.info.side))}return[...r.values()]}var Hx={l:"\u5DE6",r:"\u53F3",m:"\u9078\u53D6"};function Yu(i,t,e){let n="",s="all";i.innerHTML=`
    <h2>\u808C\u8089\u6E05\u55AE</h2>
    <input type="search" placeholder="\u641C\u5C0B\uFF1A\u80F8\u5C0F\u808C\u3001trapezius\u2026" data-search>
    <div class="regions">${zx.map(([o,l])=>`<button type="button" data-region="${o}">${l}</button>`).join("")}</div>
    <ul class="muscle-rows"></ul>`;let r=i.querySelector(".muscle-rows");i.addEventListener("input",o=>{"search"in o.target.dataset&&(n=o.target.value,a())}),i.addEventListener("click",o=>{let l=o.target.closest("button");l&&(l.dataset.region?(s=l.dataset.region,a()):l.dataset.key&&t.focus(l.dataset.key))});function a(){for(let l of i.querySelectorAll("[data-region]"))l.classList.toggle("active",l.dataset.region===s);let o=Vx(t.parts,e,n,s);r.innerHTML=o.length?o.map(l=>`<li title="${l.en}"><span>${l.name}</span>${l.sides.map(c=>`<button type="button" data-key="${l.id}.${c}" class="${t.state.selectedKey===`${l.id}.${c}`?"active":""}">${Hx[c]}</button>`).join("")}</li>`).join(""):'<li class="hint">\u627E\u4E0D\u5230\u7B26\u5408\u7684\u808C\u8089</li>'}t.onChange(a),a()}var Zu={l:"\u5DE6\u5074",r:"\u53F3\u5074",m:"\u4E2D\u7DDA"},$u={l:"\u5DE6",r:"\u53F3",m:""};function Ku(i,t,e){function n(){let s=t.selectedAcupoint;if(s)return void(i.innerHTML=Gx(s,e));if(t.state.selectedPain)return void(i.innerHTML=Wx(t,e));if(t.state.selectedKey)return void(i.innerHTML=Xx(t,e));i.innerHTML=qx(t,e)}i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.act&&t.state.selectedKey?t.toggle(r.dataset.act,t.state.selectedKey):r.dataset.muscle?t.focus(r.dataset.muscle):r.dataset.meridian&&t.toggleMeridian(r.dataset.meridian))}),t.onChange(n),n()}function Gx({meridian:i,side:t,point:e},n){return`
    <h2>${e.name}<span class="side">${e.code}${$u[t]?`\u3000${$u[t]}\u5074`:""}</span></h2>
    <p class="en">${i.name}\uFF08${i.short}\uFF09</p>
    <dl>
      <dt>\u5B9A\u4F4D</dt><dd>${e.note||"\u2014"}</dd>
      <dt>\u6240\u5C6C</dt><dd>${i.organ}</dd>
      <dt>\u8D70\u5411</dt><dd>${i.flow}</dd>
    </dl>
    <p class="notes">${n.meridians[i.id]??""}</p>
    <p class="hint">\u7A74\u4F4D\u5EA7\u6A19\u662F\u4F9D\u6A21\u578B\u9AA8\u67B6\u4F30\u7B97\u7684\u6559\u5B78\u793A\u610F\uFF0C\u5BE6\u969B\u53D6\u7A74\u8ACB\u4F9D\u6A19\u6E96\u5B9A\u4F4D\u8207\u9AD4\u8868\u6A19\u8A8C\u3002</p>`}function Wx(i,t){let{key:e,index:n}=i.state.selectedPain,s=i.partByKey(e);if(!s)return'<p class="hint">\u627E\u4E0D\u5230\u9019\u500B\u75E0\u75DB\u9EDE\u3002</p>';let r=t.muscles[s.info.id],a=ns(s.delta),o=i.poseActive&&s.info.measure?`<p class="delta ${a}">\u76EE\u524D\u59FF\u52E2\u4E0B\u9019\u689D\u808C\u8089 ${Vl(s.delta)}\u3000${kl[a]}</p>${a==="same"?"":`<p class="pain-hint ${a}">${t.painHints[a]}</p>`}`:"",l=i.painPosition(e,n),c=l?i.nearbyMeridians(l):[],h=c.length?c.map(p=>`<button type="button" class="link" data-meridian="${p.meridian.id}">${p.meridian.short}</button>`).join("\u3001"):"\u9644\u8FD1\u6C92\u6709\u7D93\u904E\u7684\u7D93\u8108",u=[...new Set(i.referredZonesOfSelection().map(p=>p.label))],d=s.tps.length;return`
    <h2>\u75E0\u75DB\u9EDE<span class="side">${r.name}\u3000${Zu[s.info.side]}${d>1?`\u3000\u7B2C ${n+1} \u9EDE`:""}</span></h2>
    <p class="en">${r.en}</p>
    ${o}
    <dl>
      <dt>\u53EF\u80FD\u7684\u554F\u984C</dt><dd>${t.problems[s.info.id]??"\u2014"}</dd>
      <dt>\u75E0\u75DB\u4F4D\u7F6E</dt><dd>${r.painPoints}</dd>
      <dt>\u8F49\u79FB\u75DB</dt><dd>${r.referredPain}</dd>
      <dt>\u6A19\u793A\u7BC4\u570D</dt><dd>${u.length?`${u.join("\u3001")}<span class="zone-note">\uFF08\u6A21\u578B\u4E0A\u7528\u7C89\u7D05\u8272\u534A\u900F\u660E\u7684\u7403\u7F69\u51FA\u4F86\uFF09</span>`:"\u6C92\u6709\u5178\u578B\u7684\u8F49\u79FB\u75DB\u7BC4\u570D"}</dd>
      <dt>\u5E38\u898B\u9396\u77ED</dt><dd>${r.lockedShort}</dd>
      <dt>\u5E38\u898B\u9396\u9577</dt><dd>${r.lockedLong}</dd>
      <dt>\u5217\u8ECA\u7DDA</dt><dd>${r.lines.length?r.lines.join("\u3001"):"\u2014"}</dd>
      <dt>\u9130\u8FD1\u7D93\u8108</dt><dd>${h}</dd>
    </dl>
    <div class="actions"><button type="button" data-muscle="${e}">\u770B\u9019\u689D\u808C\u8089\u7684\u5B8C\u6574\u8AAA\u660E</button></div>
    <p class="hint">\u75E0\u75DB\u9EDE\u8207\u8F49\u79FB\u75DB\u662F\u5E38\u898B\u4F4D\u7F6E\u7684\u6574\u7406\uFF0C\u4E0D\u80FD\u53D6\u4EE3\u5C08\u696D\u8A55\u4F30\uFF1B\u75DB\u7684\u5730\u65B9\u4E0D\u4E00\u5B9A\u662F\u554F\u984C\u7684\u6839\u6E90\u3002</p>`}function Xx(i,t){let e=i.state.selectedKey,n=i.partByKey(e),s=t.muscles[n.info.id],r=i.state,a=ns(n.delta),o="";i.poseActive&&(o=n.info.measure?`<p class="delta ${a}">\u76EE\u524D ${Vl(n.delta)}\u3000${kl[a]}</p>`:'<p class="delta same">\u7B4B\u819C\u3001\u808C\u8171\uFF1A\u4E0D\u8A08\u7B97\u9577\u5EA6\u8B8A\u5316</p>');let l=i.poseActive&&n.info.measure&&a!=="same"?`<p class="pain-hint ${a}">${t.painHints[a]}</p>`:"";return`
    <h2>${s.name}<span class="side">${Zu[n.info.side]}</span></h2>
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
    </div>`}function qx(i,t){let e=i.activeLines.map(s=>xi.find(r=>r.id===s)),n=i.activeMeridians.map(Uu).filter(Boolean);return!e.length&&!n.length?'<p class="hint">\u9EDE\u9078\u808C\u8089\u3001\u75E0\u75DB\u9EDE\u6216\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u4E5F\u53EF\u4EE5\u5F9E\u5DE6\u5074\u6E05\u55AE\u9078\u53D6\u3002</p>':`
    ${e.map(s=>`<h2>${s.name}</h2><p>${t.lines[s.name]}</p>`).join("")}
    ${n.map(s=>`<h2>${s.name}<span class="side">${s.code}</span></h2><p>${t.meridians[s.id]}</p>`).join("")}
    <p class="hint">\u9EDE\u9078\u7DDA\u4E0A\u7684\u808C\u8089\u6216\u7D93\u8108\u4E0A\u7684\u7A74\u4F4D\u67E5\u770B\u8AAA\u660E\uFF1B\u518D\u9EDE\u4E00\u6B21\u53EF\u53D6\u6D88\u3002</p>`}var Yx=1500,Ju="anatomyTrains3d.jointsOpen";function $x(){try{return localStorage.getItem(Ju)==="1"}catch{return!1}}function Zx(i){try{localStorage.setItem(Ju,i?"1":"0")}catch{}}function ju(i,t,e){let n="neutral",s="both",r=0,a=u=>`<label><span>${u.label}</span><small>${u.minLabel}</small><input type="range" min="-1" max="1" step="0.01" value="0" data-param="${u.key}"><small>${u.maxLabel}</small></label>`;i.innerHTML=`
    <div class="presets">
      <span class="label">\u59FF\u52E2</span>
      ${Object.entries(eo).map(([u,d])=>`<button type="button" data-preset="${u}">${d.label}</button>`).join("")}
      <button type="button" data-play>\u25B6 \u64AD\u653E</button>
      <button type="button" class="joints-toggle" data-joints aria-expanded="false"></button>
    </div>
    <p class="posture-note"></p>
    <div class="slider-groups">
      ${au.map(([u,d])=>`
        <fieldset class="slider-group${Ds.filter(p=>p.group===u).length>5?" wide":""}">
          <legend>${d}</legend>
          ${Ds.some(p=>p.group===u&&p.sided)?`<div class="side-modes">${lu.map(([p,g])=>`<button type="button" data-mode="${p}">${g}</button>`).join("")}</div>`:""}
          ${Ds.filter(p=>p.group===u).map(a).join("")}
        </fieldset>`).join("")}
    </div>`;let o=i.querySelector("[data-joints]");function l(u){i.classList.toggle("open",u),o.setAttribute("aria-expanded",String(u)),o.textContent=u?"\u6536\u8D77\u95DC\u7BC0 \u25B4":"\u8ABF\u6574\u95DC\u7BC0 \u25BE"}l($x());function c(u,d){cancelAnimationFrame(r);let p=performance.now(),g=y=>{let m=Math.min(1,(y-p)/Yx);t.setParams(uu(u,d,du(m))),m<1&&(r=requestAnimationFrame(g))};r=requestAnimationFrame(g)}i.addEventListener("click",u=>{let d=u.target.closest("button");d&&(d.dataset.preset?(n=d.dataset.preset,c(t.params,eo[n].params)):"play"in d.dataset?((!n||n==="neutral")&&(n="roundedShoulders"),c(xn,eo[n].params)):d.dataset.mode?s=d.dataset.mode:"joints"in d.dataset&&(l(!i.classList.contains("open")),Zx(i.classList.contains("open"))),h())}),i.addEventListener("input",u=>{let d=u.target.dataset.param;if(!d)return;cancelAnimationFrame(r);let p=hu(t.params,d,fu(Number(u.target.value)),s);n=no(p)?"neutral":null,t.setParams(p)});function h(){let u=t.params;for(let d of Ds)i.querySelector(`[data-param="${d.key}"]`).value=cu(u,d.key,s);for(let d of i.querySelectorAll("[data-preset]"))d.classList.toggle("active",d.dataset.preset===n);for(let d of i.querySelectorAll("[data-mode]"))d.classList.toggle("active",d.dataset.mode===s);i.querySelector(".posture-note").textContent=n?e.postures[n]:"\u81EA\u8A02\u59FF\u52E2\uFF1A\u62D6\u52D5\u6ED1\u687F\u8ABF\u6574\u5404\u95DC\u7BC0\uFF1B\u4E0A\u80A2\u3001\u4E0B\u80A2\u53EF\u5207\u63DB\u300C\u5169\u5074\u4E00\u8D77\u300D\u6216\u53EA\u8ABF\u5DE6\u5074\u3001\u53F3\u5074\u3002"}t.onChange(h),h()}function Qu(i,t){i.innerHTML=`<span class="label">\u5217\u8ECA\u7DDA</span><button type="button" data-line="">\u5168\u90E8</button>${xi.map(n=>`<button type="button" data-line="${n.id}">${n.name}</button>`).join("")}`,i.addEventListener("click",n=>{let s=n.target.closest("button");s&&(s.dataset.line?t.toggleLine(s.dataset.line):t.clearLines())});let e=()=>{let n=t.activeLines;for(let s of i.querySelectorAll("button"))s.classList.toggle("active",s.dataset.line?n.includes(s.dataset.line):!n.length)};t.onChange(e),e()}function td(i,t){let e=s=>`<button type="button" data-meridian="${s.id}" title="${s.name}\uFF1A${s.flow}"><i style="background:rgb(${s.color.map(r=>Math.round(r*255)).join(",")})"></i>${s.short}</button>`;i.innerHTML=`
    <h2>\u7D93\u8108\uFF08\u9EC3\u5E1D\u5167\u7D93\u5341\u4E8C\u7D93\u8108\uFF0B\u4EFB\u7763\uFF09</h2>
    <div class="meridian-groups">
      ${Du.map(([s,r])=>`<div class="meridian-group"><h3>${r}</h3><div class="row">${Us.filter(a=>a.group===s).map(e).join("")}</div></div>`).join("")}
    </div>
    <button type="button" data-clear-meridians>\u5168\u90E8\u6E05\u9664</button>
    <p class="hint">\u9EDE\u7D93\u8108\u540D\u7A31\u986F\u793A\u8D70\u5411\uFF1B\u518D\u9EDE\u4E00\u6B21\u53D6\u6D88\uFF0C\u53EF\u540C\u6642\u986F\u793A\u591A\u689D\u3002\u9EDE\u7DDA\u4E0A\u7684\u5C0F\u7403\u770B\u7A74\u4F4D\u8AAA\u660E\u3002</p>`,i.addEventListener("click",s=>{let r=s.target.closest("button");r&&(r.dataset.meridian?t.toggleMeridian(r.dataset.meridian):"clearMeridians"in r.dataset&&t.clearMeridians())});let n=()=>{let s=t.activeMeridians;for(let r of i.querySelectorAll("[data-meridian]"))r.classList.toggle("active",s.includes(r.dataset.meridian))};t.onChange(n),n()}var Kx=[["front","\u524D"],["back","\u5F8C"],["right","\u53F3\u5074"],["left","\u5DE6\u5074"],["whole","\u5168\u8EAB"]];function ed(i,t){i.innerHTML=`<span class="label">\u8996\u89D2</span>${Kx.map(([e,n])=>`<button type="button" data-view="${e}">${n}</button>`).join("")}`,i.addEventListener("click",e=>{let n=e.target.closest("button")?.dataset.view;n==="whole"?t.showWholeBody():n&&t.setView(n)})}var nd=[["up","\u25B2","\u756B\u9762\u4E0A\u79FB",0,1],["left","\u25C0","\u756B\u9762\u5DE6\u79FB",-1,0],["center","\u25CF","\u7F6E\u4E2D\uFF08\u56DE\u5230\u8EAB\u9AD4\u4E2D\u7DDA\uFF09"],["right","\u25B6","\u756B\u9762\u53F3\u79FB",1,0],["down","\u25BC","\u756B\u9762\u4E0B\u79FB",0,-1]];function id(i,t){i.innerHTML=nd.map(([e,n,s])=>`<button type="button" class="pan-${e}" data-pan="${e}" title="${s}" aria-label="${s}">${n}</button>`).join("")+"<small>\u96D9\u64CA\u6A21\u578B\uFF1A\u8A2D\u70BA\u65CB\u8F49\u4E2D\u5FC3</small>",i.addEventListener("click",e=>{let n=nd.find(s=>s[0]===e.target.closest("button")?.dataset.pan);n&&(n[0]==="center"?t.center():t.pan(n[3],n[4]))})}var Mi=Yh(document.getElementById("viewport")),Kl=ou(window.MODEL_DATA);Mi.scene.add(Kl.group);var Ye=Wu(Mi,Kl);qu(document.getElementById("dissect"),Ye,window.CONTENT);Yu(document.getElementById("muscleList"),Ye,window.CONTENT);Ku(document.getElementById("info"),Ye,window.CONTENT);ju(document.getElementById("postureBar"),Ye,window.CONTENT);Qu(document.getElementById("lineBar"),Ye);td(document.getElementById("meridianBar"),Ye,window.CONTENT);ed(document.getElementById("viewBar"),Mi);id(document.getElementById("panPad"),Mi);var uo=Mi.renderer.domElement,Ns=null;uo.addEventListener("pointerdown",i=>{Ns=[i.clientX,i.clientY],uo.focus({preventScroll:!0})});uo.addEventListener("pointerup",i=>{if(Ns&&Math.hypot(i.clientX-Ns[0],i.clientY-Ns[1])<5){let t=Ye.pickAt(i.clientX,i.clientY);t.kind==="acupoint"?Ye.selectAcupoint(t.hit):t.kind==="pain"?Ye.selectPain(t.pain):Ye.select(t.key&&t.key===Ye.state.selectedKey?null:t.key??null)}Ns=null});uo.addEventListener("dblclick",i=>{let t=Ye.pointAt(i.clientX,i.clientY);t&&Mi.recenter(t)});document.getElementById("loading").remove();window.app={viewer:Mi,model:Kl,ctrl:Ye};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
