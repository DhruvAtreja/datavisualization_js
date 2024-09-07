import { WorkflowManager } from "./WorkflowManager";
import { EnvironmentManager } from "./EnvironmentManager";

export const graph = new WorkflowManager().returnGraph();

// For running the langgraph script locally

// const env_manager = new EnvironmentManager();

// const workflow_manager = new WorkflowManager();
// const question = "Spending of men and women across different categories";
// const result = await workflow_manager.run_sql_agent(
//   question,
//   "921c838c-541d-4361-8c96-70cb23abd9f5"
// );
// console.log(result);
