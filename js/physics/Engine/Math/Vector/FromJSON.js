Vector.prototype.FromJSON = function(
    data
) 
{
    return new Vector(
        data.x,
        data.y,
        data.origine
    )
};
