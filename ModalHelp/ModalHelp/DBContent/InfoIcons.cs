using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ModalHelp.DBContent
{
    public class InfoIcons
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int IdHelpModal { get; set; }

        [Required]
        public int IdIcon { get; set; }

        [Required]
        public string Info { get; set; }
    }
}