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
        public int IdView { get; set; }

        public string Title { get; set; }

        public string ViewInfo { get; set; }

        public string Notes { get; set; }

        public HelpModals()
        { }

        public HelpModals(int iV, string t, string v, string n)
        {
            IdView = iV;
            Title = t;
            ViewInfo = v;
            Notes = n;
        }
    }
}