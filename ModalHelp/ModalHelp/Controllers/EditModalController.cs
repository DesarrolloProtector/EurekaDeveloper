using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ModalHelp.Models.EditModal;
using ModalHelp.DBContent;

namespace ModalHelp.Controllers
{
    public class EditModalController : Controller
    {

        EurekaDeveloperDB db = new EurekaDeveloperDB();

        // GET: EditModal
        public ActionResult Edit()
        {
            int idView = int.Parse(Request.Form["IdView"]);
            Views view = db.Views.FirstOrDefault(x => x.Id == idView);

            Edit_Model model = new Edit_Model(view);
            return View(model);
        }
    }
}
