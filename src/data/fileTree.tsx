import { IFile } from "../interfaces";
import uuid from "react-uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Alert.tsx",
              isFolder: false,
              content: `interface IProps {}
              
              const Alert = ({}: IProps) => {
                return (
                  <button>Alert</button>
                )
              }
              export default Alert`,
            },
          ],
        },
      ],
    },

    {
      name: "public",
      id: uuid(),
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <link rel="icon" type="image/svg+xml" href="/vite.svg" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Vite + React + TS</title>
            </head>
            <body>
              <div id="root"></div>
              <script type="module" src="/src/main.tsx"></script>
            </body>
          </html>
          `,
        },
      ],
    },
    {
      name: "src",
      id: uuid(),
      isFolder: true,
      children: [
        {
          name: "components",
          id: uuid(),
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              id: uuid(),
              isFolder: false,
              content: `interface IProps {}
              
              const Button = ({}: IProps) => {
                return (
                  <button>Click me!</button>
                )
              }
              
              export default Button`,
            },
            {
              name: "data.txt",
              id: uuid(),
              isFolder: false,
              content: `vs-code-project`,
            },
          ],
        },
      ],
    },
  ],
};
