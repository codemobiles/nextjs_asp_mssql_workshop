using System;
using System.Collections.Generic;

namespace backend;

public partial class Product
{
    public int ProductId { get; set; }

    public string? Name { get; set; }

    public string? Image { get; set; }

    public int Stock { get; set; }

    public int Price { get; set; }

    public DateTime Created { get; set; }
}
