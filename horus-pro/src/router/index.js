import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Viewallproject from "@/components/Viewallproject";
import StartProject from "@/components/StartProject";
import Setting from "@/components/Setting";
import ProjectProgress from "@/components/ProjectProgress";
import TotalProject from "@/components/TotalProject";
import Login from "@/components/Login";
import Project from "@/components/Project";
import Lead from "@/components/Lead";
import LeadPage from "@/components/LeadPage";
import Talent from "@/components/Talent";
import AvaliableTalent from "@/components/AvaliableTalent";
import Milestone from "@/components/Milestone";
import Transaction from "@/components/Transaction";
import Inbox from "@/components/Inbox";
import NotFound from "@/components/NotFound";
import Questions from "@/components/Questions";
import TestPage from "@/components/TestPage";
import testtest from "@/components/testtest";
import upload from "@/components/upload";
import category from "@/components/CategorySelection";
import DevAssessment from "@/components/DeveloperAssessment";
import AssessmentCompletion from "@/components/AssessmentCompletion";
import DesAssessment from "@/components/designerassessment";
import presentation from "@/components/presentation";
import proBody from "@/components/proBody";
import slider from "@/components/slider";
import career from "@/components/career";
import bootstrap from "@/components/bootstrap";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "career",
      component: career
    },
    {
      path: '/boot',
      name: 'bootstrap',
      component: bootstrap
    },
    {
      path: "/horus.findworka.com",
      name: 'career',
      component: career
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Home
    },
    {
      path: "/viewallproject",
      name: "Viewallproject",
      component: Viewallproject
    },

    {
      path: "/project",
      name: "Project",
      component: Project
    },

    {
      path: "/lead",
      name: "Lead",
      component: Lead
    },

    {
      path: "/lead/:id",
      name: "LeadPage",
      component: LeadPage,
      props: true
    },

    {
      path: "/talent",
      name: "Talent",
      component: Talent
    },

    {
      path: "/availabletalent",
      name: "AvailableTalent",
      component: AvaliableTalent
    },

    {
      path: "/milestone",
      name: "Milestone",
      component: Milestone
    },

    {
      path: "/transactions",
      name: "Transaction",
      component: Transaction
    },

    {
      path: "/inbox",
      name: "Inbox",
      component: Inbox
    },
    {
      path: "/tests",
      name: testtest,
      component: testtest
    },

    {
      path: "/start/:leadId",
      name: "StartProject",
      component: StartProject,
      props: true
    },
    {
      path: "/presentation",
      name: "presentation",
      component: presentation
    },
    {
      path: "/assessmentcompletion",
      name: "AssessmentCompletion",
      component: AssessmentCompletion
    },

    {
      path: "/settings",
      name: "Setting",
      component: Setting
    },

    {
      path: "/projects/in-progress",
      name: "ProjectProgress",
      component: ProjectProgress
    },

    {
      path: "/totalproject",
      name: "totalproject",
      component: TotalProject
    },
    {
      path: "/test",
      name: "testPage",
      component: TestPage
    },
    {
      path: "/questions",
      name: "questions",
      component: Questions
    },
    {
      path: "/upload",
      name: "uplaod",
      component: upload
    },
    {
      path: "/category",
      name: "category",
      component: category
    },
    {
      path: "/devassessment",
      name: "DevAssessment",
      component: DevAssessment
    },
    {
      path: "/desassessment",
      name: "desassessment",
      component: DesAssessment
    },
    {
      path: "/probody",
      name: "proBody",
      component: proBody
    },
    {
      path: "/slider",
      name: "slider",
      component: slider
    },

    {
      path: "/*",
      name: "Not Found",
      component: NotFound
    }
  ]
});
