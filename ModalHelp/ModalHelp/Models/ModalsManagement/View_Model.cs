using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ModalHelp.DBContent;

namespace ModalHelp.Models.ModalsManagement
{
    public class View_Model
    {
        public HelpModals HelpModal;
        public Views View;

        public View_Model()
        {

        }
        public View_Model(HelpModals h, Views v)
        {
            HelpModal = h;
            View = v;
        }
    }
}