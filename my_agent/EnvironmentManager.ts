export class EnvironmentManager {
  constructor() {
    this.setupEnvironment();
  }

  setupEnvironment(): void {
    process.env.OPENAI_API_KEY = "";
    process.env.LANGSMITH_API_KEY = "";
    process.env.DB_ENDPOINT_URL = "";
    process.env.LANGCHAIN_TRACING_V2 = "true";
    process.env.LANGCHAIN_PROJECT = "GenUI Data Visualization JS";
  }
}
