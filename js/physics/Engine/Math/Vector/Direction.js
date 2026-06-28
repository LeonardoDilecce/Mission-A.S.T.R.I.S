Object.defineProperty(Vector.prototype, "Direction", 
    {
        get: function() 
        {
            return Math.atan2(
                this.y, 
                this.x
            );
        }
    }
);
