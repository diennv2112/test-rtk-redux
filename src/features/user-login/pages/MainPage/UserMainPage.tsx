import { useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

export default function UserMainPage() {
    const user = useAppSelector(state => state.userLogin);
    const navigate = useNavigate();

    const goToEdit = () => {
        navigate('/edit');
    }

    return (
        <div>
            <Card className="text-end"
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {`${user.userName} - ${user.email} - ${user.phone}`}
                    </CardTitle>
                    <button className="btn btn-sm btn-success" onClick={goToEdit}>
                        Edit
                    </button>
                </CardBody>
            </Card>
        </div>
    );
}