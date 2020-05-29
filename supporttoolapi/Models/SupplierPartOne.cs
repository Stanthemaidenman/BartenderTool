using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace supporttoolapi.Models
{
    public class SupplierPartOne
    {
        public long? SupplierId { get; set; }
        public string SupplierName { get; set; }
        public string Country { get; set; }

        public static List<SupplierPartOne> FirstPart()
        {
            var suppliers = new List<SupplierPartOne>();

            for (int i = 1; i <= 15000; i++)
            {
                suppliers.Add(new SupplierPartOne
                {
                    SupplierId = i,
                    SupplierName = "Supplier_" + i,
                    Country = "CountryName",
                });
            }
            return suppliers;
        }

        public static List<SupplierPartOne> NextAmount(long? start, long? end)
        {
            var fullList = new List<SupplierPartOne>();
            var filteredList = new List<SupplierPartOne>();
            
            
            for (int i = 1; i <= 15000; i++)
            {
                fullList.Add(new SupplierPartOne
                {
                    SupplierId = i,
                    SupplierName = "Supplier_" + i,
                    Country = "CountryName",
                });
            }
            if(end > Convert.ToInt64(fullList.Count()))
            {
                end = Convert.ToInt64(fullList.Count());
            }

            filteredList = fullList.Where(Supplier => Supplier.SupplierId >= start && Supplier.SupplierId <= end).ToList();
            
            if(start > Convert.ToInt64(fullList.Count()))
            {
                filteredList = new List<SupplierPartOne>();
            }
            return filteredList;
        }
    }
}
