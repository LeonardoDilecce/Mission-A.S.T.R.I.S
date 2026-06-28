Object.defineProperty(Vector.prototype, "Destination", 
    {
        get: function() 
        {
            return(
            {
                x: this.origine.x + this.x,
                y: this.origine.y + this.y
            });
        }
    }
);
