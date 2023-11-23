using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Transaction
{
    public int TransactionId { get; set; }

    public int Subtotal { get; set; }

    public int Discount { get; set; }

    public int ShippingCost { get; set; }

    public int TaxPercent { get; set; }

    public int Total { get; set; }

    public int Paid { get; set; }

    public int Change { get; set; }

    public string OrderList { get; set; } = null!;

    public string? PaymentType { get; set; }

    public string? PaymentDetail { get; set; }

    public string EmployeeId { get; set; } = null!;

    public string? SellerId { get; set; }

    public string? BuyerId { get; set; }

    public string? Comment { get; set; }

    public DateTime Timestamp { get; set; }
}
