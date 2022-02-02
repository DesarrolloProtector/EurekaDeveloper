using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ModalHelp.DBContent;

namespace ModalHelp.Models.EditModal
{
    public class Edit_Model
    {
        public Views View;

        public Edit_Model()
        {}

        public Edit_Model(Views v)
        {
            View = v;
        }
    }
}