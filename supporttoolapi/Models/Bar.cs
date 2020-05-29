using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace supporttoolapi.Models
{
    public class Bar
    {
        public string BarType { get; set; }
        public long? BarId { get; set; }
        public string BarName { get; set; }
        public string Street { get; set; }
        public string WebSite { get; set; }
        public int Employees { get; set; }
        public int MaxCustomers { get; set; }
        public int Djs { get; set; }
        public int Security { get; set; }
        public int Management { get; set; }
        public bool Food { get; set; }
        public bool Beer { get; set; }
        public bool Liquor { get; set; }
        public int? Seating { get; set; }

        public static List<Bar> Bars(long? supplierId)
        {
            var id = supplierId;
            var bars = new List<Bar>();
            Random r = new Random();

            for (int i = 1; i <= 1500; i++)
            {
                bars.Add(new Bar
                {
                    BarType = "Type_" + r.Next(3),
                    BarId = i,
                    BarName = "Name of the bar",
                    Street = "Street " + i,
                    WebSite = "https://Bar" + i + ".dk",
                    Employees = r.Next(30),
                    MaxCustomers = 300,
                    Djs = r.Next(3),
                    Security = r.Next(3),
                    Management = r.Next(2),
                    Food = r.Next(2) == 1,
                    Beer = r.Next(2) == 1,
                    Liquor = r.Next(2) == 1,
                    Seating = r.Next(300)

                });
            }

            return bars;
        }
    }
}
