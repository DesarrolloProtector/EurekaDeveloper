using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ModalHelp.DBContent;

/*
    Modelo de datos que se pasa al guardar un IconInfo en el EditModalController 
*/

namespace ModalHelp.Models.EditModal
{
    public class IconInfo_Model
    {
        public InfoIcons IconInfo;
        public Icons Icon;

        public IconInfo_Model()
        {}

        public IconInfo_Model(InfoIcons info, Icons icon)
        {
            IconInfo = info;
            Icon = icon;
        }
    }
}