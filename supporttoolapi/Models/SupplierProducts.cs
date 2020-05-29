using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace supporttoolapi.Models
{
    public class SupplierProducts
    {
        public long? SupplierId { get; set; }

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

        public static SupplierProducts GetProduct(long? id)
        {
            var supplierProducts_1 = new List<SupplierProducts>();
            Random r = new Random();

            for (int i = 1; i <= 15000; i++)
            {
                supplierProducts_1.Add(new SupplierProducts
                {
                    SupplierId = i,
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
            var oneSupplier = supplierProducts_1.Find(Supplier => Supplier.SupplierId == id);
            return oneSupplier;
        }

       

        public static List<SupplierProducts> GetProducts()
        {
            var supplierProductsList = new List<SupplierProducts>();
            Random r = new Random();

            for (int i = 1; i <= 15000; i++)
            {
                supplierProductsList.Add(new SupplierProducts
                {
                    SupplierId = i,
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
            return supplierProductsList;
        }
    }
}
