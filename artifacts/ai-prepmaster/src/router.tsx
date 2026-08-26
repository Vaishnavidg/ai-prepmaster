import { Route, Switch, useLocation } from "wouter";
import { ErrorBoundary } from "@/components/error-boundary";
import NotFound from "@/pages/not-found";
import { Landing } from "@/pages/landing";
import { AuthPage } from "@/pages/auth";
import { Dashboard } from "@/pages/dashboard";
import { Subjects } from "@/pages/subjects";
import { SubjectDetail } from "@/pages/subject-detail";
import { TopicDetail } from "@/pages/topic-detail";
import { Resources } from "@/pages/resources";
import { UploadPage } from "@/pages/upload";
import { Training } from "@/pages/training";
import { TrainingDetail } from "@/pages/training-detail";
import { Assessment } from "@/pages/assessment";
import { Interview } from "@/pages/interview";
import { Results } from "@/pages/results";
import { ProgressPage } from "@/pages/progress";
import { Profile } from "@/pages/profile";
import { SettingsPage } from "@/pages/settings";

export function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch><Route path="/" component={Landing} /><Route path="/login"><AuthPage mode="login" /></Route><Route path="/register"><AuthPage mode="register" /></Route><Route path="/dashboard" component={Dashboard} /><Route path="/subjects" component={Subjects} /><Route path="/subjects/:subjectId" component={SubjectDetail} /><Route path="/topics/:topicId" component={TopicDetail} /><Route path="/resources" component={Resources} /><Route path="/resources/upload" component={UploadPage} /><Route path="/training" component={Training} /><Route path="/training/:trainingId" component={TrainingDetail} /><Route path="/assessment/:assessmentId" component={Assessment} /><Route path="/interview/:interviewId" component={Interview} /><Route path="/results/:resultId" component={Results} /><Route path="/progress" component={ProgressPage} /><Route path="/profile" component={Profile} /><Route path="/settings" component={SettingsPage} /><Route component={NotFound} /></Switch></ErrorBoundary>;
}
