Vector.prototype.toJSON = function() 
{
    return (
    {
        __type: this.__type,
        x: this.x,
        y: this.y,
        origine: this.origine
    });
};
