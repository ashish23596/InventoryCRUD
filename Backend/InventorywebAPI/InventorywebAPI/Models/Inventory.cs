using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InventorywebAPI.Models
{
    public class Inventory
    {
        public long ItemID { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
    }
}