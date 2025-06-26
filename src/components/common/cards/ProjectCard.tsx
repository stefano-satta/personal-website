"use client"

import { HTMLAttributes, PropsWithChildren, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Icon from '../icons/Icon';
import CustomTooltip from "@/components/common/custom-tooltip/CustomTooltip";
import {Badge, CloseButton} from "react-bootstrap";
import icon from "@/utility/icon";
import { Link } from '@/i18n/routing';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    infoProject: SideProject;
}

const ProjectCard = (props: PropsWithChildren<ProjectCardProps>) => {
    const {children, className, infoProject} = props;
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Card className={`card-side-projects cursor-pointer ${className ? className : ''}`} onClick={handleShow}>
                {children}
            </Card>
             <Modal show={showModal} 
                    onHide={handleClose} 
                    centered 
                    aria-labelledby="contained-modal-title-vcenter"
                    size="lg">
                <Modal.Body>
                    <CloseButton onClick={handleClose}/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="fs-2">
                                <Icon icon={icon.projectFolder}/>
                                <span className="ps-3">{infoProject?.name}</span>
                            </h4>
                        </div>
                        {
                            !infoProject?.isCompleted &&
                            <Badge pill bg="transparent" className="badge-outline-warning rounded-pill">
                                In Progress
                            </Badge>
                        }
                    </div>

                    <p className="mt-3">{infoProject?.description}</p>
                    <div className="mt-5 d-flex justify-content-between">
                    <div>
                        <Icon icon={icon.langCircle}
                            className={`${infoProject?.bgIconColor} me-2`}/>
                        { infoProject?.language }
                    </div>
                    <div className="d-flex">
                        { 
                            infoProject?.github &&
                            <CustomTooltip text={'GitHub project'}>
                                <Link href={infoProject?.github} passHref target={'_blank'} className="link-icon me-3">
                                    <Icon icon={icon.github} />
                                </Link>
                            </CustomTooltip>
                            
                        }
                        {
                            infoProject?.siteUrl &&
                                <CustomTooltip text={'Visit the site!'}>
                                    <Link href={infoProject?.siteUrl} passHref target={'_blank'} className="link-icon">
                                        <Icon icon={icon.link} />
                                    </Link>
                                </CustomTooltip>
                        }   
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard;