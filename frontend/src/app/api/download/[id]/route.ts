type GetParams = {
    params: {
        id: string;
    };
};

export async function GET(req: Request, { params }: GetParams) {
    const id = params.id;

    return await fetch(process.env.BACKEND_API_BASE + "/files/download/" + id, {cache: 'no-store'});
}