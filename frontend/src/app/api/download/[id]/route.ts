type GetParams = {
    params: {
        id: string;
    };
};

export async function GET(req: Request, { params }: GetParams) {
    const id = params.id;

    return await fetch("http://eavesdrop-backend-1:5000/api/files/download/" + id, {cache: 'no-store'});
}