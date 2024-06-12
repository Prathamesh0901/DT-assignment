import Card from "./Card";
import JourneyBoard from "./JourneyBoard";
import NoticeBoard from "./NoticeBoard";

export default function Tasks({ task }) {

    console.log(task);

    return (
        <>
        
        <JourneyBoard task={task}></JourneyBoard>
        
        <NoticeBoard></NoticeBoard>
        
            <div className="middle">

                <h3>{task.task_title}</h3>
                <p>{task.task_description}</p>

            </div>

            <div className="bottom">

                {
                    task.assets.map(asset => (
                        <Card key={asset.asset_id} asset={asset}></Card>
                    ))
                }

            </div>

        </>
    )
}