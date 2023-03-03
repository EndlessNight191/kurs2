import fs from "fs";

class Actions {

    public static async read(path: string){
        try {
            const data = await fs.promises.readFile(path, 'utf8');
            return JSON.parse(data);
          } catch (error) {
            console.error(`Error reading file: ${error.message}`);
        }
    }

    public static async write(path: string, data: {[key: string]: any}){
        try {
            await fs.promises.writeFile(path, JSON.stringify(data));
          } catch (error) {
            console.error(`Error wtire file: ${error.message}`);
        }
    }

}

export default Actions