using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MakeupDirectory.Models
{
    public class UsersProducts
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string brand { get; set; }
        public string image_Link { get; set; }
        public DateTime CreateDateTime { get; set; }
        public DateTime ExperationDate { get; set; }
        public int PeriodAfterOpening { get; set; }
        public int CategoryId { get; set; }
        public int NotesId { get; set; }
        public int UserId { get; set; }
    }
}
