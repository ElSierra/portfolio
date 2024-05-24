import { prisma } from "../../../lib/prisma";

prisma.personalProjects.findMany({}).then((data) => {
    console.log(data);
    }).catch((error) => {
    console.error(error);
    });