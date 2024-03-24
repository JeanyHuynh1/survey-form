/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Modal, Form, Input, Select, Rate, Checkbox, message } from 'antd';

function SurveyModal({ title, showModal, onClose, isUpdateMode, initialValues, onDelete, handleUpdateSurvey }) {
    const [form] = Form.useForm();
    const { Option } = Select;

    useEffect(() => {
        // Reset form fields whenever the modal is closed
        if (!showModal) {
            form.resetFields();
        }
    }, [showModal, form]);
    
    useEffect(() => {
        // When opening in update mode with initialValues, set those values
        if (showModal && isUpdateMode && initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [showModal, isUpdateMode, initialValues, form]);

    const handleOk = () => {
        form.validateFields().then((values) => {
            handleCreateOrUpdateSurvey(values);
        }).catch((info) => {
            console.log('Validate Failed:', info);
        });
    };

    const handleDelete = () => {
        // Confirm deletion with the user, then call onDelete
        onDelete(); // Assuming onDelete handles the deletion
        form.resetFields();
        message.error('Survey deleted successfully');
    };
  
    const handleCancel = () => {
        onClose(); // Always close the modal with the onClose callback
        form.resetFields();
    };


  return (
      <Modal
          title={title}
          open={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={isUpdateMode ? "Update" : "Create"}
          cancelText={isUpdateMode ? "Delete" : "Cancel"}
          cancelButtonProps={isUpdateMode ? { onClick: handleDelete } : undefined}
      >
        <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select your gender!' }]}>
                    <Select>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
                    <Input disabled={isUpdateMode} />
                </Form.Item>
          <Form.Item label="Preferred Learning Platform" name="platform" rules={[{ required: true, message: 'Please select a platform!' }]}>
            <Select>
              <Option value="zoom">Zoom</Option>
              <Option value="microsoftTeams">Microsoft Teams</Option>
              <Option value="googleClassroom">Google Classroom</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ease of Access to Materials" name="access" rules={[{ required: true, message: 'Please rate the ease of access!' }]}>
            <Rate />
          </Form.Item>
          <Form.Item label="Interaction with Instructors" name="interaction" rules={[{ required: true, message: 'Please rate your interaction!' }]}>
            <Rate />
          </Form.Item>
          <Form.Item label="Recommendations for Online Tools and Resources" name="recommendations">
            <Checkbox.Group options={['Video lectures', 'Interactive quizzes', 'Discussion forums', 'etc.']} />
          </Form.Item>
        </Form>
      </Modal>
  );
    
  async function handleCreateOrUpdateSurvey(values) {
      handleUpdateSurvey(values);
      onClose(); // Close modal
      form.resetFields(); // Reset form fields
      message.success(isUpdateMode ? 'Survey updated successfully!' : 'Survey created successfully!');
}
}

export default SurveyModal;
