
interface UserInfoSelectors {
  nameSelector: string;
  jobSelector: string;
}

export default class UserInfo {
  private _nameElement: HTMLElement;
  private _jobElement: HTMLElement;

  constructor({ nameSelector, jobSelector }: UserInfoSelectors) {
    const nameElement = document.querySelector<HTMLElement>(nameSelector);
    const jobElement = document.querySelector<HTMLElement>(jobSelector);

    if (!nameElement || !jobElement) {
      throw new Error("No se encontraron los elementos del perfil");
    }

    this._nameElement = nameElement;
    this._jobElement = jobElement;
  }

  getUserInfo(): { name: string; job: string } {
    return {
      name: this._nameElement.textContent || "",
      job: this._jobElement.textContent || "",
    };
  }

  setUserInfo({ name, job }: { name: string; job: string }): void {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}
