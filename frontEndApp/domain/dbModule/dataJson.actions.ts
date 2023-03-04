import fs from "fs";

class Actions {

    public static async read(file: string){
        try {
            const data = await fs.promises.readFile(`../../${file}`, 'utf8');
            return JSON.parse(data);
          } catch (error) {
            console.error(`Error reading file: ${error.message}`);
        }
    }

    public static async write(file: string, data: {[key: string]: any}){
        try {
            await fs.promises.writeFile(`../../${file}`, JSON.stringify(data));
          } catch (error) {
            console.error(`Error wtire file: ${error.message}`);
        }
    }

}

export default Actions