/* eslint-disable react/prop-types */
import { Modal, Form, Input, Select, Rate, Checkbox } from 'antd';

function SurveyModal({ title, showModal, onClose, handleUpdateSurvey }) {
    const [form] = Form.useForm();
    const { Option } = Select;
  
    const handleOk = () => {
      form
        .validateFields()
        .then((values) => {
            handleUpdateSurvey(values);
            form.resetFields();
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
    };
  
    const handleCancel = () => {
      onClose(); // Close modal by calling parent's callback
    };

  return (
    <Modal title={title} open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
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
            <Input />
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
}

export default SurveyModal;
