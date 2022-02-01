using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ModalHelp.DBContent
{
    public class HelpModals
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Body { get; set; }

        [Required]
        public int IdView { get; set; }

        public HelpModals()
        { }

        public HelpModals(string b, int i)
        {
            Body = b;
            IdView = i;
        }
    }
}