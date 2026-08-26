import { Brain, Code2, LayoutDashboard, MessageSquare } from "lucide-react";

export type Topic = {
  id: string; subjectId: string; name: string; description: string; progress: number;
  status: "Mastered" | "In progress" | "Not started"; basicScore?: number;
  intermediateScore?: number; advancedScore?: number; interviewScore?: number;
};
export type User = { name: string; email: string; targetRole: string; experience: string; preferredTopics: string[] };
export type Assessment = { id: string; topicId: string; level: string; totalQuestions: number; score?: number; status: "ready" | "complete" };
export type Progress = { readiness: number; subjectProgress: Record<string, number>; weakAreas: string[]; strongAreas: string[] };
export type Subject = { id: string; name: string; description: string; icon: typeof Code2; topicCount: number; progress: number; tone: string };
export type Resource = { id: string; name: string; type: string; size: string; status: "Ready" | "Processing" };
export type Activity = { id: string; title: string; subtitle: string; score: string; time: string };

export const subjects: Subject[] = [
  { id: "data-structures", name: "Data Structures", description: "Build reliable mental models for the building blocks of every technical screen.", icon: Code2, topicCount: 12, progress: 67, tone: "coral" },
  { id: "algorithms", name: "Algorithms", description: "Recognize patterns, communicate trade-offs, and solve with intent.", icon: Brain, topicCount: 14, progress: 42, tone: "teal" },
  { id: "system-design", name: "System Design", description: "Move from a blank canvas to a clear, scalable architecture.", icon: LayoutDashboard, topicCount: 9, progress: 24, tone: "gold" },
  { id: "behavioral", name: "Behavioral", description: "Tell concise stories that show ownership, judgment, and impact.", icon: MessageSquare, topicCount: 8, progress: 12, tone: "violet" }
];

export const topics: Topic[] = [
  { id: "oops", subjectId: "data-structures", name: "Object-Oriented Programming", description: "Model change with classes, contracts, and composition without creating a maze of inheritance.", progress: 74, status: "In progress", basicScore: 86, intermediateScore: 78 },
  { id: "arrays", subjectId: "data-structures", name: "Arrays & Strings", description: "Use contiguous memory, two pointers, and sliding windows to make fast decisions.", progress: 100, status: "Mastered", basicScore: 92, intermediateScore: 88, advancedScore: 84, interviewScore: 91 },
  { id: "hash-maps", subjectId: "data-structures", name: "Hash Maps", description: "Turn lookup problems into crisp O(1) reasoning and explain collision trade-offs.", progress: 55, status: "In progress", basicScore: 74 },
  { id: "linked-lists", subjectId: "data-structures", name: "Linked Lists", description: "Practice pointer movement, invariants, and the edge cases interviewers probe.", progress: 18, status: "In progress", basicScore: 62 },
  { id: "trees", subjectId: "data-structures", name: "Trees & Graphs", description: "Traverse relationships confidently with BFS, DFS, and recursive thinking.", progress: 0, status: "Not started" },
  { id: "sorting", subjectId: "algorithms", name: "Sorting & Searching", description: "Compare the approaches that make complexity legible under pressure.", progress: 49, status: "In progress", basicScore: 71 },
  { id: "recursion", subjectId: "algorithms", name: "Recursion & Backtracking", description: "See the state space, define the base case, and make the call stack work for you.", progress: 35, status: "In progress", basicScore: 68 },
  { id: "complexity", subjectId: "algorithms", name: "Complexity Analysis", description: "Explain runtime and memory in plain language, not just symbols.", progress: 88, status: "In progress", basicScore: 83 }
];

export const resourcesSeed: Resource[] = [
  { id: "r1", name: "swe-interview-notes.pdf", type: "PDF", size: "2.4 MB", status: "Ready" },
  { id: "r2", name: "OOP design patterns — personal notes", type: "NOTE", size: "18 KB", status: "Ready" },
  { id: "r3", name: "neetcode.io roadmap", type: "URL", size: "Link", status: "Ready" }
];

export const activities: Activity[] = [
  { id: "a1", title: "Object-Oriented Programming", subtitle: "Intermediate assessment", score: "78 / 100", time: "Today, 10:42 AM" },
  { id: "a2", title: "Arrays & Strings", subtitle: "AI interview", score: "91 / 100", time: "Yesterday, 4:18 PM" },
  { id: "a3", title: "Complexity Analysis", subtitle: "Basic assessment", score: "83 / 100", time: "Mon, 9:05 AM" }
];

export const currentUser: User = { name: "Alex Rivera", email: "alex@rivera.dev", targetRole: "Software Engineer", experience: "Mid-level", preferredTopics: ["Data structures", "System design", "OOP", "Behavioral"] };

export const progressSnapshot: Progress = { readiness: 74, subjectProgress: Object.fromEntries(subjects.map((subject) => [subject.id, subject.progress])), weakAreas: ["Trade-off explanations", "Graph traversal"], strongAreas: ["Arrays & strings", "Complexity analysis"] };

export const mockService = {
  authenticate: () => new Promise<void>((resolve) => window.setTimeout(resolve, 450)),
  processResource: () => new Promise<void>((resolve) => window.setTimeout(resolve, 1100))
};
