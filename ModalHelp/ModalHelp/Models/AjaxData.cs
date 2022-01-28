using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ModalHelp.Models
{
    public class AjaxData
    {
        public bool Successful { get; set; }
        public string CustomError { get; set; }
        public string Text { get; set; }
        public object Data { get; set; }
    }
}