using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ModalHelp.DBContent
{
    public class Icons
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Code { get; set; }

        public string Name { get; set; }

        public Icons() { }
        public Icons(string c, string n)
        {
            Code = c;
            Name = n;
        }
    }
}