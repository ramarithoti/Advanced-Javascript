function array(){
    const a = Object.create(array.prototype);
    Object.defineProperty(a,'length',{
        writable:true,
        enumerable:false,
        configurable:false,
        value:0
    });
    for(let index=0;index<arguments.length;index++){
        a[index] = arguments[index];
        a.length = index+1;
    }
    return a;
}
array.prototype.push=function(ele){
    if(!ele) throw new Error('Provide element to add at end of array...');
    this[this.length] = ele;
    this.length+=1;
}
array.prototype.pop=function(){
    delete this[this.length-1];
    this.length-=1;
}
array.prototype.shift=function(){
    delete this[0];
    this.length-=1;
    const obj ={};
    for(let index=0;index<this.length;index++){
        obj[index]= this[index+1];
    };
}
array.prototype.unshift=function(ele){
    if(!ele) throw new Error('Provide element to add at start of array...');
    this[0] 
}

const x = array('Ram','Sam');
x.push('Bheem');
x.shift();
console.log(x);
console.log(x.length)