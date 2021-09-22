package convert

import (
	"strings"
)

type Converted struct {
	Result string `json:"result"`
}

type TabularSettings struct {
	Type string `json:"type"`
}

func genTexTabular(length int) string {
	str := "\\begin{tabular}{"

	if length == 0 {
		return str
	}

	str += "|"

	for i := 1; i < length; i += 1 {
		str += "c|"
	}

	return (str + "}\n")
}

func genTexTableHeader(values []string) string {
	str := ""
	len := len(values)

	for i := 0; i < len; i += 1 {
		if i != 0 {
			str += "& "
		}
		str += ("\\textbf{" + values[i] + "}")
	}

	return (str + "\\\\\n")
}

func genTexTableRow(values []string) string {
	str := ""
	len := len(values)

	for i := 0; i < len; i += 1 {
		if i != 0 {
			str += "& "
		}
		str += values[i]
	}

	return (str + "\\\\\n")
}

func ExPasteToTex(input string) *Converted {

	resp := &Converted{
		Result: "",
	}

	if input == "" {
		return resp
	}

	lines := strings.Split(input, "\n")

	data := [][]string{}

	for i := 0; i < len(lines); i += 1 {
		data = append(data, strings.Split(lines[i], "\t"))
	}

	output := genTexTabular(len(lines)) + "\\hline\n" + genTexTableHeader(data[0]) + "\\hline\n"

	for i := 1; i < len(lines); i += 1 {
		output += genTexTableRow(data[i])
	}

	output += "\\hline\n\\end{tabular}\n"
	resp.Result = output

	return resp
}
