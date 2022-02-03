using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ModalHelp.DBContent;
using ModalHelp.Models;
using ModalHelp.Models.EditModal;
using Newtonsoft.Json;

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

            HelpModals modal = db.HelpModals.FirstOrDefault(x => x.IdView == idView);
            if (modal == null)
            {
                modal = new HelpModals();
                modal.IdView = idView;
                db.HelpModals.Add(modal);
                db.SaveChanges();

                modal = db.HelpModals.FirstOrDefault(x => x.IdView == idView);
            }

            List<Icons> icons = new List<Icons>();
            icons = db.Icons.ToList();

            Edit_Model model = new Edit_Model(view, modal, icons);
            return View(model);
        }

        public string SaveInfo(int idView, string title, string viewInfo, string notes)
        {
            AjaxData aj;
            try
            {
                HelpModals existente = new HelpModals();
                existente = db.HelpModals.FirstOrDefault(x => x.IdView == idView);
                if (existente != null)
                {
                    existente.Title = title;
                    existente.ViewInfo = viewInfo;
                    existente.Notes = notes;
                }
                else
                {
                    HelpModals modal = new HelpModals(idView, title, viewInfo, notes);
                    db.HelpModals.Add(modal);
                }
                db.SaveChanges();

                aj = new AjaxData()
                {
                    Successful = true,
                    CustomError = "",
                    Text = "Correct"
                };
            }
            catch (Exception e)
            {
                aj = new AjaxData()
                {
                    Successful = false,
                    CustomError = "Ha habido un error al guardar la información de un modal de ayuda",
                    Text = "Excepción: " + e.ToString()
                };
                throw;
            }
            return JsonConvert.SerializeObject(aj);
        }

        public string SaveIcon(string code, string name)
        {
            AjaxData aj;
            try
            {
                Icons icon = new Icons(code, name);
                db.Icons.Add(icon);
                db.SaveChanges();

                aj = new AjaxData()
                {
                    Successful = true,
                    CustomError = "",
                    Text = "Correct"
                };
            }
            catch (Exception e)
            {
                aj = new AjaxData()
                {
                    Successful = false,
                    CustomError = "Ha habido un error al guardar un icono",
                    Text = "Excepción: " + e.ToString()
                };
                throw;
            }
            return JsonConvert.SerializeObject(aj);
        }
    }
}
