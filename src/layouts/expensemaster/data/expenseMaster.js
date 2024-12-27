/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// @mui material components
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";


// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Form() {
  return (
    <Card>
    <MDBox pt={4} pb={3} px={3}>
      <MDBox component="form" role="form">
        <Grid container spacing={3}>
          {/* First Column */}
          <Grid item xs={12} md={6}>
          <MDBox mb={2}>
                <MDInput
                  type="date"
                  label="Date"
                  variant="standard"
                  fullWidth
                  InputLabelProps={{
                    shrink: true, // Ensures that the label is always above the input
                  }}
                />
              </MDBox>
            <MDBox mb={2}>
              <MDInput select label="From" variant="standard" fullWidth>
                <MenuItem value="nonvendor1">Nonvendor 1</MenuItem>
                <MenuItem value="nonvendor2">Nonvendor 2</MenuItem>
              </MDInput>
            </MDBox>
            <MDBox mb={2}>
              <MDInput select label="Category" variant="standard" fullWidth>
                <MenuItem value="category1">Category 1</MenuItem>
                <MenuItem value="category2">Category 2</MenuItem>
              </MDInput>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Paid To" variant="standard" fullWidth />
            </MDBox>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} md={6}>
            <MDBox mb={2}>
              <MDInput type="text" label="Paid For" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput select label="To" variant="standard" fullWidth>
                <MenuItem value="vendor1">Vendor 1</MenuItem>
                <MenuItem value="vendor2">Vendor 2</MenuItem>
              </MDInput>
            </MDBox>
            <MDBox mb={2}>
              <MDInput select label="Sub Category" variant="standard" fullWidth>
                <MenuItem value="subcategory1">Sub Category 1</MenuItem>
                <MenuItem value="subcategory2">Sub Category 2</MenuItem>
              </MDInput>
            </MDBox>
            <MDBox mb={2}>
                {/* File Upload Input with Restrictions */}
                <MDInput
                  type="file"
                  label="Upload File"
                  variant="standard"
                  fullWidth
                  accept=".jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .pdf" // Restrict file types
                />
                <MDTypography variant="caption" color="text" sx={{ mt: 1, display: 'block' }}>
                  Please upload an image (jpg, jpeg, png), Word document (doc, docx), Excel file (xls, xlsx), or PDF only.
                </MDTypography>
              </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={4} mb={1} display="flex" justifyContent="center">
          <MDButton variant="gradient" color="info" sx={{ px: 4 }}>
            Save
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
  </Card>
);
}

export default Form;
