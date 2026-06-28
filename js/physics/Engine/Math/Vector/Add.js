Vector.prototype.Add = function(
    v
) 
{
    this.x += v.x;
    this.y += v.y;
    return this;
}