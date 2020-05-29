using System;
using System.Collections.Generic;
using System.Linq;

namespace supporttoolapi.Models
{
    public class Supplier
    {
        public long? SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string Country { get; set; }
        public bool Product1 { get; set; }
        public bool Product2 { get; set; }
        public bool Product3 { get; set; }
        public bool Product4 { get; set; }
        public bool Product5 { get; set; }
        public bool Product6 { get; set; }
        public bool Product7 { get; set; }
        public bool Product8 { get; set; }
        public bool Product9 { get; set; }
        public bool Product10 { get; set; }
        public bool Product11 { get; set; }


        public static List<Supplier> Suppliers()
        {
            var suppliers = new List<Supplier>();
            Random r = new Random();

            for (int i = 1; i <= 15000; i++)
            {
                suppliers.Add(new Supplier
                {
                    SupplierId = i,
                    SupplierName = "Supplier_" + i,
                    Country = "CountryName",
                    Product1 = r.Next(2) == 1,
                    Product2 = r.Next(2) == 1,
                    Product3 = r.Next(2) == 1,
                    Product4 = r.Next(2) == 1,
                    Product5 = r.Next(2) == 1,
                    Product6 = r.Next(2) == 1,
                    Product7 = r.Next(2) == 1,
                    Product8 = r.Next(2) == 1,
                    Product9 = r.Next(2) == 1,
                    Product10 = r.Next(2) == 1,
                    Product11 = r.Next(2) == 1,
                });
            }
            return suppliers;
        }

        public static List<Supplier> NextAmount(long? start, long? end, long? max)
        {
            var fullList = new List<Supplier>();
            var filteredList = new List<Supplier>();
            Random r = new Random();

            for (int i = 1; i <= 15000; i++)
            {
                fullList.Add(new Supplier
                {
                    SupplierId = i,
                    SupplierName = "Supplier_" + i,
                    Country = "CountryName",
                    Product1 = r.Next(2) == 1,
                    Product2 = r.Next(2) == 1,
                    Product3 = r.Next(2) == 1,
                    Product4 = r.Next(2) == 1,
                    Product5 = r.Next(2) == 1,
                    Product6 = r.Next(2) == 1,
                    Product7 = r.Next(2) == 1,
                    Product8 = r.Next(2) == 1,
                    Product9 = r.Next(2) == 1,
                    Product10 = r.Next(2) == 1,
                    Product11 = r.Next(2) == 1,
                });
            }
            if (end > max)
            {
                end = max;
            }

            filteredList = fullList.Where(Supplier => Supplier.SupplierId >= start && Supplier.SupplierId <= end).ToList();

            if (start > Convert.ToInt64(fullList.Count()))
            {
                filteredList = new List<Supplier>();
            }
            return filteredList;
        }

    }
}
