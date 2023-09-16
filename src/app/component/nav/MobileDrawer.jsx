import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    Typography
} from "@material-tailwind/react";

const MobileDrawer = ({ setOpen, open, title, data, setElement }) => {
    const closeDrawer = () => setOpen(false);
    const selectSubItemHandler = (key) => {
        setElement(key)
        setOpen(false)
    }

    return (
        <>
            <Drawer open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        {title}
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <List>
                    {Object.keys(data)?.map((key, index) => {
                        return (
                            <ListItem key={index} onClick={() => selectSubItemHandler(key)}>
                                {data[key]}
                            </ListItem>
                        )
                    })}

                </List>
            </Drawer>
        </>

    )

}

export default MobileDrawer