import { v4 as uuidv4 } from "uuid";

type IssueItem = {
  id: string;
  title: string;
  userName: string;
  userAvatar?: string;
  status: string;
  category: string;
  priority: string;
  team: string;
  tag: string[];
};

const generateDummyData = (): IssueItem[] => {
  const dummyData: IssueItem[] = [];

  const categories = ["Bug", "Feature", "Enhancement", "Question"];
  const priorities = ["Low", "Medium", "High", "Critical"];
  const teams = ["Frontend", "Backend", "Design", "QA"];
  const tags = ["UI", "UX", "Authentication", "Security", "Performance"];

  for (let i = 1; i <= 100; i++) {
    const issue: IssueItem = {
      id: uuidv4(),
      title: `Issue ${i}`,
      userName: `User ${i}`,
      status: ["To Do", "In Progress", "Review", "Completed"][
        Math.floor(Math.random() * 4)
      ],
      category: categories[Math.floor(Math.random() * categories.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      team: teams[Math.floor(Math.random() * teams.length)],
      tag: [tags[Math.floor(Math.random() * tags.length)]],
    };

    // Add userAvatar to 70 entries
    if (i <= 70) {
      issue.userAvatar = `https://randomuser.me/api/portraits/men/${i}.jpg`; // Example URL from randomuser.me
    }

    dummyData.push(issue);
  }

  return dummyData;
};

export default generateDummyData;
